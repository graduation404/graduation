import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Icons, COLORS, SHADOW, SIZES, SPACING} from '../../config';
import LinearGradient from 'react-native-linear-gradient';

const HeaderHome = ({value, onChangeText, nav}) => {
  return (
    <>
      <LinearGradient
        colors={[COLORS.blue, COLORS.lightGray]}
        style={styles.container}>
        <View style={styles.subContainerImgs}>
          <View style={styles.IconContainer}>
            <Image style={styles.IconStyle} source={Icons.AddUser} />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={styles.IconContainer}>
              <Image style={styles.IconStyle} source={Icons.Question} />
            </View>
            <TouchableOpacity
              onPress={() => {
                nav.navigation.navigate('AdminProfile');
              }}>
              <Image style={styles.Image_Style} source={Icons.Avatar} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.TitleContainer}>
          <Text style={styles.textStyle}>Welcome,</Text>
          <Text style={styles.textStyle}>Dr. Mostafa</Text>
        </View>
        <View style={styles.containerSearch}>
          <TextInput
            style={styles.inputSearch}
            placeholderTextColor={COLORS.white}
            placeholder="Search for patient"
            value={value}
            onChangeText={onChangeText}
          />
          <View style={[styles.IconContainer, {width: '14%', height: '100%'}]}>
            <Image style={styles.IconStyle} source={Icons.Search} />
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
    borderColor: COLORS.lightGray,
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
    backgroundColor: COLORS.lightGray,
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
