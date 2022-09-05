import {StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {
  AddPatientInfo,
  AdminProfile,
  Home,
  Login,
  PatientProfile,
  Quiz,
  Report,
  ReportResult,
  Test,
} from '../screens';
import {GetAsyncStorage} from '../config/helperFunctions';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  const getAdmin = async () => {
    let admin = await GetAsyncStorage('admin');
    console.log(admin);
    if (admin) {
      setInitialRouteName('HomeStack');
    } else {
      setInitialRouteName('Login');
    }
  };
  useEffect(() => {
    getAdmin();
  }, []);
  const [initialRouteName, setInitialRouteName] = useState('');




  const HomeStack=()=>{
    return(
      <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="PatientProfile" component={PatientProfile} />
          <Stack.Screen name="AddPatientInfo" component={AddPatientInfo} />
          <Stack.Screen name="AdminProfile" component={AdminProfile} />
          <Stack.Screen name="Report" component={Report} />
          <Stack.Screen name="Test" component={Test} />
          <Stack.Screen name="ReportResult" component={ReportResult} />
          <Stack.Screen name="Quiz" component={Quiz} />
        </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      {initialRouteName ? (
        <Stack.Navigator
          initialRouteName={initialRouteName}
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="HomeStack" component={HomeStack} />
          <Stack.Screen name="Login" component={Login} />
          
        </Stack.Navigator>
      ) : null}
    </NavigationContainer>
  );
};

export default Navigation;

const styles = StyleSheet.create({});
