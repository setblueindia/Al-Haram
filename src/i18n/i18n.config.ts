import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import { en,  ar } from "./translations";

const resources = {
  en: {
    translation: en,
  },
 ar: {
    translation: ar,
  },
  
}

i18next.use(initReactI18next).init({
  debug: false,
  lng: 'en',
  compatibilityJSON: 'v3',
<<<<<<< HEAD
=======
  //language to use if translation in user language is not available
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  fallbackLng: 'en',
  resources,
})

export default i18next;