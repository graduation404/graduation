import {StyleSheet, Text, View,StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import {Home} from './source/screens';
import SplashScreen from 'react-native-splash-screen';
import { MainColors } from './source/config/theme';
const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
    
  }, []);

  return(
    <>
    {/* <StatusBar barStyle={"light-content"} backgroundColor={MainColors.blue} /> */}
    <Home />
    </>
    );
};

export default App;

const styles = StyleSheet.create({});
