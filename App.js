import { StyleSheet, Text, View, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { Home, PatientProfile } from './source/screens';
import SplashScreen from 'react-native-splash-screen';
import { COLORS } from './source/config';
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);

  return (
    <>
      <StatusBar barStyle={"light-content"} backgroundColor={COLORS.blue} />
      < PatientProfile />
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
