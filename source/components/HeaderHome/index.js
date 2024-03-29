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
import {Icons, COLORS, SHADOW, SIZES, SPACING} from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import {useTranslation} from 'react-i18next'

const HeaderHome = ({value, onChangeText, nav}) => {
  const { t , i18n} = useTranslation();
  return (
    <>
      <LinearGradient
        colors={[COLORS.blue, COLORS.darkGray]}
        style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={COLORS.blue} />

        <View style={styles.subContainerImgs}>
          <TouchableOpacity
            style={styles.IconContainer}
            onPress={() => {
              nav.navigation.navigate('AddPatientInfo');
            }}>
            <Image style={styles.IconStyle} source={Icons.AddUser} />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <TouchableOpacity
              activeOpacity={0.85}
              style={styles.IconContainer}
              onPress={() => {
                nav.navigation.navigate('ChooseDataQuiz');
              }}>
              <Image style={[styles.IconStyle]} source={Icons.AddFile} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                nav.navigation.navigate('AdminProfile');
              }}>
              <Image
                style={[
                  styles.Image_Style,
                  {backgroundColor: '#FFFF', resizeMode: 'contain'},
                ]}
                source={Icons.Hearing}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.TitleContainer}>
          <Text style={styles.textStyle}>{t('common:Welcome')}</Text>
          <Text style={styles.textStyle}>{t('common:DrMostafa')}</Text>
        </View>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.inputSearch}
            placeholderTextColor={COLORS.white}
            placeholder={t('common:Searchforpatient')}
            value={value}
            onChangeText={onChangeText}
          />
          <View style={[styles.IconContainer, {width: '14%', height: '100%'}]}>
            <Image
              style={[styles.IconStyle, {tintColor: COLORS.blue}]}
              source={Icons.loupe}
            />
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default HeaderHome;

const styles = StyleSheet.create({
  container: [
    {
      width: '100%',
      height: SIZES.height * 0.3,
      backgroundColor: COLORS.blue,
      elevation: 4,
      paddingHorizontal: SPACING.m - 3,
      paddingVertical: SPACING.s + 5,
      borderBottomRightRadius: SPACING.l,
      borderBottomLeftRadius: SPACING.l,
    },
    SHADOW.light,
  ],

  subContainerImgs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  Image_Style: {
    width: SIZES.avatar,
    height: SIZES.avatar,
    borderRadius: SIZES.avatar,
    marginHorizontal: SPACING.s,
    elevation: 3,
    borderWidth: 1,
    borderColor: COLORS.darkGray,
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
    fontSize: SIZES.h4,
    fontWeight: '700',
    overflow: 'hidden',
  },
});
