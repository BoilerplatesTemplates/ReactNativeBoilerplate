## Usage - Comment internationaliser l'application

1.  Il faut définir l'ensemble des traductions que l'on va utiliser dans les fichier `i18n/fr.json` ou `i18n/ar.json` sinon tu peux d'ajouter un nouveau et importer dans le fichier `i18n/index.js` mais n'oubliez pas de **déclarer à l'intérieur** de l'objet `I18n.translations` .

2. Un exemple d'utilisation
```javascript
{I18n.t('login.welcome')}
```

3.  Voici un exemple complet d'un composant utilisant la traduction :

```javascript
import {I18n} from '@i18n';

const Demo = () => {
  render() {
    return <Title title={I18n.t('login.welcome')} />;
  }
}
```