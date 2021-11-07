import axios from 'axios';
import {NavigationService} from '@navigations';
import {DataStorage, Constants, AlertNotifier} from '@helpers';
import {ApiEndPoints, Config} from '@network';
import {I18n} from '@i18n';
import qs from 'qs';

const MESSAGE_ERROR_GENERAL = 'message.error.general'; // add this on messages on I18n
const MESSAGE_ERROR_SESSION = 'message.error.sessionExpire'; // add this on messages on I18n

const ApiManager = axios.create();

const globalConfig = {
  method: 'POST',
  url: '',
  headers: {
    'Content-Type': 'application/json',
  },
  data: {},
};

ApiManager.interceptors.request.use(
  async config => {
    const token = await DataStorage.getData(Constants.accessToken);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

// const refreshToken = async () => {
//   const rToken = await DataStorage.getData(Constants.refreshToken);
//   const params = qs.stringify({
//     grant_type: 'refresh_token',
//     refresh_token: rToken,
//   });
//   const _config = {
//     ...globalConfig,
//     url: `${ApiEndPoints.AUTH_TOKEN}`,
//     headers: {
//       'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     data: params,
//   };
//   return ApiManager(_config);
// };

const handleStatus = (status, message, error) => {
  try {
    switch (status) {
      case 401:
        AlertNotifier('error', '', MESSAGE_ERROR_SESSION);
        NavigationService.resetStack('login');
        return Promise.reject(error);
      case 400:
        DataStorage.multiRemoveData([
          Constants.accessToken,
          Constants.refreshToken,
        ]);
        AlertNotifier('error', '', message);
        NavigationService.resetStack('login');
        return Promise.reject(error);
      case 403:
      case 404:
      case 500:
        AlertNotifier('error', '', MESSAGE_ERROR_GENERAL);
        return Promise.reject(error);
      case undefined:
        AlertNotifier('error', '', MESSAGE_ERROR_GENERAL);
        return Promise.reject(error);
      default:
        return Promise.reject(error);
    }
  } catch (e) {
    console.log(`CATCH handleStatus() ${e}`);
  }
};

const handleErrorType = (err, message, error) => {
  try {
    switch (err) {
      case 'unauthorized_client':
      case 'Invalid user credentials':
        AlertNotifier(
          'error',
          '',
          `${I18n.t('message.error.identificationInValid')}`,
        );
        return Promise.reject(error);
      case 'invalid_request':
      case 'Token not provided':
      case 'Invalid refresh token':
      case 'Session not active':
        AlertNotifier('error', '', MESSAGE_ERROR_SESSION);
        NavigationService.resetStack('login');
        return Promise.reject(error);
      default:
        AlertNotifier('error', '', MESSAGE_ERROR_GENERAL);
        return Promise.reject(error);
    }
  } catch (e) {
    console.log(`CATCH handleErrorType() ${e}`);
  }
};

// const ApiRefreshToken = async originalConfig => {
//   try {
//     const res = await refreshToken();
//     const {access_token, refresh_token} = res;

//     if (access_token !== undefined && refresh_token !== undefined) {
//       DataStorage.setData(Constants.accessToken, access_token);
//       DataStorage.setData(Constants.refreshToken, refresh_token);
//     }

//     return axios(originalConfig);
//   } catch (_error) {
//     const {response, message, status} = _error;

//     if (response && response.data) {
//       return Promise.reject({
//         success: false,
//         data: message,
//         status: status,
//         error: _error,
//       });
//     }

//     return Promise.reject(_error);
//   }
// };

ApiManager.interceptors.response.use(
  res => {
    const response = {
      success: true,
      data: res?.data,
      status: res?.status,
      error: null,
    };
    return response;
  },
  async err => {
    const originalConfig = err.config;
    const {message, response} = err;
    const error = {
      success: false,
      data: response?.data,
      status: response?.status,
      error: message,
    };

    if (response) {
      const {status, data} = response;

      // ERROR — Invalid user credentials
      if (
        status === 401 &&
        data?.error_description === 'Invalid user credentials'
      ) {
        return handleErrorType(
          data?.error_description,
          data?.error_description || message,
          error,
        );
      }

      // ERROR — Access Token was expired
      if (status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        // ApiRefreshToken(originalConfig); // call API refreshToken here
        // return;
      }

      return handleStatus(status, data?.error || message, error);
    }

    return handleStatus(
      response?.status,
      response?.data?.error || message,
      error,
    );
  },
);

export default ApiManager;
