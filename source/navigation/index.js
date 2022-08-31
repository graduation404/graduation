import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {
  AddPatientInfo,
  AdminProfile,
  Home,
  Login,
  PatientProfile,
  Report,
  Test,
} from '../screens';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const [data, setdata] = useState(true);
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={data ? 'Login' : 'Home'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="PatientProfile" component={PatientProfile} />
     
        <Stack.Screen name="AddPatientInfo" component={AddPatientInfo} />
        <Stack.Screen name="AdminProfile" component={AdminProfile} />
        <Stack.Screen name="Report" component={Report} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
