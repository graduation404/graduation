import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { Icons, COLORS, SHADOW, SIZES, SPACING } from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const HeaderQuiz = () => {
  const navigation = useNavigation()
  return (
    <>
      <StatusBar barStyle={'light-content'} backgroundColor={COLORS.blue} />

      <LinearGradient
        colors={[COLORS.blue, COLORS.darkGray]}
        style={styles.container}>
        <View style={styles.subHeader}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <Image source={Icons.Back} style={styles.Image_Style} />
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </>
  );
};

export default HeaderQuiz;

const styles = StyleSheet.create({
  container: [
    {
      width: '100%',
      height: SIZES.height * 0.4,
      backgroundColor: COLORS.blue,
      elevation: 4,
      paddingHorizontal: SPACING.m - 3,
      paddingVertical: SPACING.s + 5,
      borderBottomRightRadius: SPACING.l,
      borderBottomLeftRadius: SPACING.l,
    },
    SHADOW.light,
  ],
  subHeader: {
    width: '100%',
    alignItems: "flex-start"
  },

  subContainerImgs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  Image_Style: {
    width: SPACING.l + 5,
    height: SPACING.l + 5,
    marginHorizontal: SPACING.s,
    tintColor: COLORS.white,
  },
  IconContainer: {
    width: SIZES.avatar * 0.75,
    height: SIZES.avatar * 0.75,
    borderRadius: SIZES.avatar,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconStyle: {
    width: SIZES.avatar * 0.5,
    height: SIZES.avatar * 0.5,
    resizeMode: 'contain',
  },
  TitleContainer: {
    alignSelf: 'flex-start',
    marginTop: SIZES.height * 0.03,
  },
  textStyle: {
    color: COLORS.white,
    alignSelf: 'flex-start',
    fontSize: SIZES.h2 + 2,
    fontWeight: '800',
  },
  containerSearch: {
    width: '100%',
    height: SIZES.height * 0.055,
    backgroundColor: COLORS.darkGray,
    borderRadius: SIZES.Lradius,
    elevation: 4,
    alignSelf: 'center',
    marginTop: SPACING.s,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  inputSearch: {
    width: '85%',
    height: '100%',
    paddingHorizontal: '4%',
    alignItems: 'center',
    color: COLORS.white,
    fontSize: SIZES.h3,
    fontWeight: '700',
    overflow: 'hidden',
  },
});
