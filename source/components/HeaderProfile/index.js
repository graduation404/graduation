import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icons, COLORS, SHADOW, SIZES, SPACING} from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';

const HeaderProfile = props => {
  const {t, i18n} = useTranslation();
  const navigation = useNavigation();
  return (
    <>
      <LinearGradient
        colors={[COLORS.blue, COLORS.darkGray]}
        style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={COLORS.blue} />

        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
          activeOpacity={0.85}>
          <Image
            source={i18n.language == 'ar' ? Icons.Right : Icons.Back}
            style={styles.Image_Style}
          />
        </TouchableOpacity>

        <Text style={styles.textStyle}>{props.Header_name}</Text>
      </LinearGradient>
      <View
        style={{
          width: '100%',
          height: 1,
          marginTop: -SIZES.height * 0.18,
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
      // backgroundColor: COLORS.blue,
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
  textStyle: {
    color: COLORS.white,
    alignSelf: 'center',
    fontSize: SIZES.title,
    marginTop: SIZES.height * 0.01,
  },
});
