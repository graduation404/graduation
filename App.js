import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Home, PatientProfile,AdminProfile, AddPatientInfo, Login} from './source/screens';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './source/config';
import Navigation from './source/navigation';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.blue} />
      <Navigation />
    </>
  );
};

export default App;
