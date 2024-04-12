import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'

import en_US from './lang/index.en_US'
import zh_CN from './lang/index.zh_CN'

const defaultLng = 'zh_CN'
console.log('en_US', en_US)
console.log('zh_CN', zh_CN)

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en_US },
      zh: { translation: zh_CN }
    },
    lng: defaultLng,
    fallbackLng: 'zh',

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  })

export default i18n
