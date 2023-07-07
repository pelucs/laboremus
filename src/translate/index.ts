import i18n from "i18next";
import { initReactI18next } from 'react-i18next';

import en from './translations/en.json';
import es from './translations/es.json';
import ptBR from './translations/ptbr.json';

i18n.use(initReactI18next).init({
  fallbackLng: 'ptBR',
  interpolation: {
    escapeValue: false
  },
  resources: {
    en,
    es,
    ptBR,
  }
})

export default i18n;