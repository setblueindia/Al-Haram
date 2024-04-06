import i18n from 'i18next'; 
import {initReactI18next} from 'react-i18next'; 
import en from './i18n/translations/en.json'; 
import ar from './i18n/translations/ar.json'; 

i18n.use(initReactI18next).init({ 
lng: 'en', 
fallbackLng: 'en', 
resources: { 
	en: en, 
	ar: ar, 
}, 
interpolation: { 
	escapeValue: false 
} 
}); 

export default i18n; 












