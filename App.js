import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './source/config';
import Navigation from './source/navigation';
import { AdminProfile } from './source/screens';
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.blue} />
      <Navigation />
    </>
  );
};

export default App;
