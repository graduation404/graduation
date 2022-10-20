import {I18nManager, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './source/config';
import Navigation from './source/navigation';
import AddQuiz from './source/screens/Add Quiz';
import './source/constants/IMLocalize';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';

const App = () => {
  const {t, i18n} = useTranslation();

  
  useEffect(() => {
    setTimeout(() => {
      if (i18n.language === 'en') {
        I18nManager.forceRTL(false);
        if (I18nManager.isRTL !== false) {
          RNRestart.Restart();
        }
      } else if (i18n.language == 'ar') {
        if (I18nManager.isRTL ==false) {
          I18nManager.forceRTL(true);
          RNRestart.Restart();
        }
      } else {
        // dispatch(changeLanguage('en'));
        I18nManager.forceRTL(false);
        if (I18nManager.isRTL !== false) {
          RNRestart.Restart();
        }
      } 
    }, 500);
    
  }, [i18n.language]);
  useEffect(() => {
    // rtlApp();
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.blue} />
<Navigation />
    </>
  );
};

export default App;
