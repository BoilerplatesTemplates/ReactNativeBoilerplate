import {ApiManager, ApiEndPoints} from '@network';

export const testAPI = () => {
  const _config = {
    method: 'POST',
    url: `${ApiEndPoints.TEST_API}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: {},
  };
  return ApiManager(_config);
};
