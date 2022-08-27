import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {COLORS, SIZES, SPACING, SHADOW, Icons} from '../../config';
const CardHome = () => {
  return (
    <View style={styles.Container}>
      <View style={styles.topContainer}>
        <View style={styles.leftTopSubContainer}>
          <View style={styles.IconContainer}>
            <Image style={styles.IconStyle} source={Icons.Male} />
          </View>
        </View>
        <View style={styles.rightTopSubContainer}>
          <View style={styles.subContainerTitleAge}>
            <View>
              <Text style={[styles.subTextStyle, {color: COLORS.blue}]}>
                Ahmed Mohamed
              </Text>
            </View>

            <View style={styles.subContainerAge}>
              <Text style={[styles.subTextStyle, {color: COLORS.blue}]}>
                6-10
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.subTextStyle,
              {
                fontSize: SIZES.subTitle - 2,
                marginTop: SPACING.vS,
                marginHorizontal: SPACING.vS,
              },
            ]}>
            1234
          </Text>
          <Text
            style={[
              styles.subTextStyle,
              {
                fontSize: SIZES.subTitle - 2,
                marginHorizontal: SPACING.vS,
              },
            ]}>
            9 years
          </Text>
        </View>
      </View>
      <View style={styles.ButtomContainer}>
        <View style={styles.leftBottomSubContainer}>
          <View style={styles.IconTitleBottomContainer}>
            <View>
              <Image
                source={Icons.Calendar}
                style={styles.iconBottomContainer}
              />
            </View>
            <View>
              <Text
                style={[
                  styles.subTextStyle,
                  {
                    color: COLORS.blue,
                    fontSize: SIZES.subTitle - 2,
                    marginHorizontal: SPACING.s,
                  },
                ]}>
                22 Jun
              </Text>
            </View>
          </View>
          <View style={styles.IconTitleBottomContainer}>
            <View>
              <Image source={Icons.Clock} style={styles.iconBottomContainer} />
            </View>
            <View>
              <Text
                style={[
                  styles.subTextStyle,
                  {
                    color: COLORS.blue,
                    fontSize: SIZES.subTitle - 2,
                    marginHorizontal: SPACING.s,
                  },
                ]}>
                9:00 Am
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.subContainerAge}>
          <Text style={[styles.subTextStyle, {color: COLORS.blue}]}>Visit</Text>
        </View>
      </View>
    </View>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  Container: [
    {
      width: '100%',
      elevation: 3,
      height: SIZES.height * 0.2,
      backgroundColor: COLORS.white,
      borderRadius: SPACING.s,
      overflow: 'hidden',
      padding: 0,
      marginVertical: SPACING.s,
    },
    SHADOW.light,
  ],
  leftTopSubContainer: {
    width: '20%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rightTopSubContainer: {
    width: '80%',
    height: '100%',
    padding: SPACING.s,
    paddingTop: SPACING.s + 3,
  },
  topContainer: {
    width: '100%',
    height: '75%',
    flexDirection: 'row',
  },
  subContainerTitleAge: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    // backgroundColor:"#d00"
  },
  subContainerAge: {
    paddingVertical: SPACING.vS,
    elevation: 5,
    paddingHorizontal: SPACING.m,
    backgroundColor: COLORS.white,
    borderRadius: SPACING.m,
  },
  ButtomContainer: {
    width: '100%',
    height: '26%',
    paddingBottom: '1%',
    backgroundColor: COLORS.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.s,
  },
  leftBottomSubContainer: {
    width: '60%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  IconTitleBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBottomContainer: {
    width: SIZES.width * 0.08,
    height: SIZES.height * 0.045,
    resizeMode: 'contain',
  },
  card_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  TitleContainer: {
    alignSelf: 'flex-start',
    marginVertical: SPACING.m,
    paddingHorizontal: SPACING.m - 3,
  },
  textStyle: {
    color: COLORS.blue,
    alignSelf: 'flex-start',
    fontSize: SIZES.h2 + 5,
    fontWeight: '700',
  },
  subTextStyle: {
    color: COLORS.lightGray,
    fontSize: SIZES.subTitle,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  IconContainer: {
    width: SIZES.avatar * 0.88,
    height: SIZES.avatar * 0.88,
    borderRadius: SIZES.avatar,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
  IconStyle: {
    width: SIZES.avatar * 0.55,
    height: SIZES.avatar * 0.55,
  },
});
