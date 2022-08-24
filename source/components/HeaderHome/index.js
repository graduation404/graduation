import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainColors, shadow, sizes} from '../../config/theme';

const HeaderHome = () => {
  return (
    <View style={styles.container}>
      {/* <Text style={{color: MainColors.white}}>HeaderHome</Text> */}
    </View>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: [
    {
      width: '100%',
      height: sizes.height * 0.3,
      backgroundColor: MainColors.blue,
      borderBottomEndRadius: sizes.radius,
      borderBottomStartRadius: sizes.radius,
      elevation: 4,
    },
    shadow.light,
  ],
});
