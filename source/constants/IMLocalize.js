// import i18n from 'i18next';
import i18next from "i18next";
import {initReactI18next} from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';
import en from './translations/en';
import ar from './translations/ar';

const LANGUAGES = {
  en,
  ar,
};

const LANG_CODES = Object.keys(LANGUAGES);
const LOCALE_PERSISTENCE_KEY = "language";
const LANGUAGE_DETECTOR = {
  type: 'languageDetector',
  async: true,
  // detect: callback => {
  //   AsyncStorage.getItem('user-language', async (err, language) => {
  //     // if error fetching stored data or no language was stored
  //     // display errors when in DEV mode as console statements
  //     if (err || !language) {
  //       if (err) {
  //         console.log('Error fetching Languages from asyncstorage ', err);
  //       } else {
  //         console.log('No language is set, choosing English as fallback');
  //       }
  //       const findBestAvailableLanguage =
  //         RNLocalize.findBestAvailableLanguage(LANG_CODES);

  //       callback(findBestAvailableLanguage.languageTag || 'en');
  //       return;
  //     }
  //     const isLangRTL=language==='en'
  //     if(isLangRTL !==I18nManager.isRTL){
  //       await I18nManager.allowRTL(isLangRTL)
  //       await I18nManager.forceRTL(isLangRTL)
  //     }
  //     callback(language);
  //   });
  // },
  // init: () => {},
  // cacheUserLanguage: language => {
  //   console.log(language)
  //   AsyncStorage.setItem('user-language', language);
  // },
  detect: async (language) => {

    const persistedLocale = await AsyncStorage.getItem(LOCALE_PERSISTENCE_KEY);
    
    if (!persistedLocale) {
    
    // Find best available language from the resource ones
    
    // Return detected locale or default language
    
    return language("en");
    
    }
    
    language(persistedLocale);
    
    },
    
    init: () => {},
    
    cacheUserLanguage: (locale) => {
    
    AsyncStorage.setItem(LOCALE_PERSISTENCE_KEY, locale);
    
    }
};

// i18n
//   // detect language
//   .use(LANGUAGE_DETECTOR)
//   // pass the i18n instance to react-i18next.
//   .use(initReactI18next)
//   // set options
//   .init({
//     compatibilityJSON: 'v3',
//     resources:LANGUAGES,
//     // lng: I18nManager.isRTL ? 'ar' : 'en',
//     react: {
//       useSuspense: false,
//     },
//     interpolation: {
//       escapeValue: false,
//     },
//     defaultNS: 'translation',
//   });
  i18next

  .use(LANGUAGE_DETECTOR)
  
  .use(initReactI18next)
  
  .init({
  
  // lng: "en",
  
  resources: LANGUAGES,
      react: {
      useSuspense: false,
    },
    interpolation: {
      escapeValue: false,
    },
    defaultNS: 'translation',
  
  
  });

//   import i18n from 'i18next';
// import {initReactI18next} from 'react-i18next';
// import {I18nManager} from 'react-native';
// import en from './translations/en';
// import ar from './translations/ar';
// // the translations
// // (tip move them in a JSON file and import them)
// const resources = {
//   ar,
//   en
//   }


// i18n
//   .use(initReactI18next) // passes i18n down to react-i18next
//   .init({
//     resources,
//     lng: I18nManager.isRTL ? 'ar' : 'en',

//     keySeparator: false, // we do not use keys in form messages.welcome

//     interpolation: {
//       escapeValue: false, // react already safes from xss
//     },
//   });

export default i18next;

  