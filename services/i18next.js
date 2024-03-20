import i18next from 'i18next';
import {initReactI18next} from 'react-i18next';
import en from '../src/Locals/en.json';
import sv from '../src/Locals/ar.json';

export const languageResources = {
  en: {translation: en},
  sv: {translation: sv},
};

i18next.use(initReactI18next).init({
  compatibilityJSON: 'v3',
  lng: 'en',
  fallbackLng: 'en',
  resources: languageResources,
});

export default i18next;