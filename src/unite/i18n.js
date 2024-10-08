import i18n from "i18next";
import { initReactI18next } from 'react-i18next';
import translationEN from '../locales/en/translation.json';
import translationNL from '../locales/nl/translation.json';
import translationFR from '../locales/fr/translation.json';
import translationAR from '../locales/ar/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  nl: {
    translation: translationNL,
  },
  fr: {
    translation: translationFR,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(initReactI18next) // Correct the module usage
  .init({
    resources,
    lng: 'en', // default language
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;