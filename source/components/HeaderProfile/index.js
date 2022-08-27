import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Icons, COLORS, SHADOW, SIZES, SPACING} from '../../config';
import LinearGradient from 'react-native-linear-gradient';

const HeaderProfile = props => {
  return (
    <>
      <LinearGradient
        colors={[COLORS.blue, COLORS.lightGray]}
        style={styles.container}>
        <TouchableOpacity activeOpacity={0.85}>
          <Image source={Icons.Back} style={styles.Image_Style} />
        </TouchableOpacity>

        <Text
          style={styles.textStyle}>
          {props.Header_name}
        </Text>
      </LinearGradient>
      <View
        style={{
          width: '100%',
          height: 1,
          marginTop: -SIZES.height * 0.15,
        }}></View>
    </>
  );
};

export default HeaderProfile;

const styles = StyleSheet.create({
  container: [
    {
      width: '100%',
      height: SIZES.height * 0.3,
      backgroundColor: COLORS.blue,
      elevation: 4,
      paddingHorizontal: 16,
      paddingVertical: SPACING.s + 5,
    },
    SHADOW.light,
  ],
  Image_Style: {
    height: SIZES.height * 0.0325,
    width: SIZES.height * 0.0325,
    tintColor: COLORS.white,
  },
  textStyle:{
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: SIZES.title,
    marginTop: SIZES.height * 0.03,
  }
});
