import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { COLORS, SIZES, SPACING, SHADOW, Icons, Range_Function } from '../../config';
const CardHome = ({ item, index, nav, hours, date }) => {
  const [Range, setRange] = useState(Range_Function(item.age))
  return (
    <View style={styles.Container}>
      <View style={styles.topContainer}>
        <View style={styles.leftTopSubContainer}>
          <View style={styles.IconContainer}>
            <Image style={styles.IconStyle} source={item.gender == 1 ? Icons.Male : Icons.Woman} />
          </View>
        </View>
        <View style={styles.rightTopSubContainer}>
          <View style={styles.subContainerTitleAge}>
            <View>
              <Text style={[styles.subTextStyle, { color: COLORS.blue }]}>
                {item.name}
              </Text>
            </View>

            <View style={styles.subContainerAge}>
              <Text style={[styles.subTextStyle, { color: COLORS.blue }]}>
                {Range}
              </Text>
            </View>
          </View>
          <Text
            style={[
              styles.subTextStyle,
              {
                fontSize: SIZES.subTitle - 2,
                marginHorizontal: SPACING.vS,
              },
            ]}>
            {item.age} years
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
                {date}
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
                {hours}
              </Text>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.subContainerAge}
          onPress={() => {
            nav.navigation.navigate('PatientProfile', { PatientInfo: item });
          }}>
          <Text style={[styles.subTextStyle, { color: COLORS.blue }]}>Visit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardHome;

const styles = StyleSheet.create({
  Container: [
    {
      width: '98%',
      elevation: 5,
      height: SIZES.height * 0.2,
      backgroundColor: COLORS.white,
      borderRadius: SPACING.s,
      overflow: 'hidden',
      padding: 0,
      marginVertical: SPACING.s,
      marginLeft: "1%"

    },
    SHADOW.dark,
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
    height: '70%',
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
    height: '30%',
    paddingBottom: '1%',
    backgroundColor: COLORS.gray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: SPACING.s,
  },
  leftBottomSubContainer: {
    width: '75%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    overflow:'visible',
    // backgroundColor:"#f00"
  },
  IconTitleBottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBottomContainer: {
    width: SIZES.width * 0.06,
    height: SIZES.height * 0.04,
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
    color: COLORS.darkGray,
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
