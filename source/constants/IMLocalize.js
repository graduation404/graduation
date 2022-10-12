import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';
import en from './translations/en';
import ar from './translations/ar';

const LANGUAGES = {
  en,
  ar
};

const LANG_CODES = Object.keys(LANGUAGES);

const LANGUAGE_DETECTOR = {
    type: 'languageDetector',
    async: true,
    detect: callback => {
      AsyncStorage.getItem('user-language', async (err, language) => {
        // if error fetching stored data or no language was stored
        // display errors when in DEV mode as console statements
        if (err || !language) {
          if (err) {
            console.log('Error fetching Languages from asyncstorage ', err);
          } else {
            console.log('No language is set, choosing English as fallback');
          }
          const findBestAvailableLanguage =
            RNLocalize.findBestAvailableLanguage(LANG_CODES);
  
          callback(findBestAvailableLanguage.languageTag || 'en');
          return;
        }
        const isLangRTL = language === 'ar';
        if (isLangRTL !== I18nManager.isRTL) {
          await I18nManager.allowRTL(isLangRTL);
          await  I18nManager.forceRTL(isLangRTL);
        }
        callback(language);
      });
    },
    init: () => {},
    cacheUserLanguage: language => {
      AsyncStorage.setItem('user-language', language);
    }
  };

  i18n
  // detect language
  .use(LANGUAGE_DETECTOR)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // set options
  .init({
    compatibilityJSON :'v3',
    resources: LANGUAGES,
    react: {
      useSuspense: false
    },
    interpolation: {
      escapeValue: false
    },
    defaultNS: 'translation'
  });