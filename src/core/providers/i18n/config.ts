import i18next from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const { languages } = require('@config/languages');

const spanish = require('./locales/es.json');
const english = require('./locales/en.json');

i18next.init({
  lng: process.env.REACT_APP_DEFAULT_LANG || languages[0],
  fallbackLng: process.env.REACT_APP_DEFAULT_LANG || languages[0],
  resources: {
    es: {
      translations: spanish,
    },
    en: {
      translations: english,
    },
  },
  ns: ['translations'],
  defaultNS: 'translations',
  returnObjects: true,
  debug: process.env.NODE_ENV === 'development',
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: true,
  },
});

i18next.languages = languages;
i18next.use(LanguageDetector);

export default i18next;
