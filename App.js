import {I18nManager, StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './source/config';
import Navigation from './source/navigation';
import AddQuiz from './source/screens/Add Quiz';
import './source/constants/IMLocalize';
import {useTranslation} from 'react-i18next';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';
import i18next from 'i18next';

const App = () => {
  const {t, i18n} = useTranslation();
  console.log(i18next.language);
  // useEffect(() => {
  //   console.log(I18nManager.isRTL);
  //   I18nManager.allowRTL(i18n.language == 'ar');
  //   I18nManager.forceRTL(i18n.language == 'ar');
  //   // return()=>{
  //   //   alert("by")
  //   //   I18nManager.allowRTL(i18n.language=="ar");
  //   //   I18nManager.forceRTL(i18n.language=="ar");
  //   // }
  // }, [i18n.language]);
  useEffect(() => {
    // rtlApp();
    console.log(I18nManager.isRTL);
    I18nManager.allowRTL(i18next.language === 'ar');
    I18nManager.forceRTL(i18next.language === 'ar');
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
