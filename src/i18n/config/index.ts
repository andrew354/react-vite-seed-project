import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import es from '@/i18n/translations/es.json'
import en from '@/i18n/translations/en.json'

i18n.use(initReactI18next).init({
  fallbackLng: 'en',
  resources: {
    es: {
      translation: es,
    },
    en: {
      translation: en,
    },
  },
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
