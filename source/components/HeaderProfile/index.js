import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainColors, shadow, sizes} from '../../config/theme';
import LinearGradient from 'react-native-linear-gradient';

const HeaderProfile = () => {
  return (
    <>
    <LinearGradient colors={[MainColors.blue,MainColors.blue,MainColors.gray]} 
    // start={{ x: 0, y: 0 }} end={{ x: 1, y: 2 }}
    style={styles.container}>
      <Text style={{color: MainColors.light, marginTop: sizes.height * 0.1}}>
        HeaderProfile
      </Text>
   
    </LinearGradient>
    <View style={{width:"100%",height:1,marginTop:-sizes.height*.15}}></View>
    </>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: [
    {
      width: '100%',
      height: sizes.height * 0.3,
      backgroundColor: MainColors.blue,
      elevation: 4,
      alignItems: 'center',
    },
    shadow.light,
  ],
});
