import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Home, PatientProfile,AdminProfile} from './source/screens';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './source/config';
import Navigation from './source/navigation';
import Report from './source/screens/Report';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.blue} />
      <Report />
    </>
  );
};

export default App;
