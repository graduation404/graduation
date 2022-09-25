import {StatusBar} from 'react-native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {COLORS} from './source/config';
import Navigation from './source/navigation';
import AddQuiz from './source/screens/Add Quiz';
import {NavigationContainer} from '@react-navigation/native';
import {DeleteSpecifiecUser} from './source/config/utils';

const App = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1500);
  }, []);

  return (
    <>
      {/* <NavigationContainer> */}
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.blue} />

      <Navigation />
      {/* </NavigationContainer> */}
    </>
  );
};

export default App;
