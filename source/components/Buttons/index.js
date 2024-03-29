import React from 'react';
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { COLORS, SIZES, SPACING } from '../../config';
import { RFPercentage } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

const LargeButton = props => {
  return (
    <>
      <TouchableOpacity
        activeOpacity={0.85}
        onPress={props.onPress}
        disabled={props.Loading}
      >
        <LinearGradient
          colors={props.colors}
          style={styles.LargeButtonView}>
          {props.Loading
            ?
            (<ActivityIndicator size={RFPercentage(4)} color={COLORS.white} />)
            :
            (<Text style={styles.BookletText_Style}>{props.Text}</Text>)
          }

        </LinearGradient>
      </TouchableOpacity>
    </>
  );
};

const SmallButton = props => {
  return (
    <>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.85}
        disabled={props.Loading}
        style={[styles.SmallButtonView, props.style]}>
        {props.Icon ? (
          <Image source={props.Icon} style={styles.Image_Style} />
        ) : null}
        {props.Loading
          ?
          (<ActivityIndicator size={RFPercentage(4)} color={COLORS.white} />)
          :
          (<Text style={styles.LevelText_Style}>{props.Text}</Text>)
        }
        {props.Icon ? (
          <Image source={props.s} style={styles.Image_Style} />
        ) : null}
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  SmallButtonView: {
    height: SIZES.height * 0.065,
    width: '42.5%',
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.Lradius,
    margin: SIZES.height * 0.025,
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingHorizontal: SPACING.s,
    flexDirection: 'row',
  },
  LargeButtonView: {
    height: SIZES.height * 0.055,
    width: '55%',
    alignSelf: 'center',
    backgroundColor: COLORS.blue,
    borderRadius: 15,
    margin: SIZES.height * 0.025,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Image_Style: {
    height: SIZES.height * 0.03,
    width: SIZES.height * 0.03,
  },
  LevelText_Style: {
    fontSize: RFPercentage(2),
    fontWeight: 'bold',
    color: COLORS.white,
  },
  BookletText_Style: {
    fontSize: RFPercentage(2.6),
    fontWeight: 'bold',
    color: COLORS.white,
  },
});

export { LargeButton, SmallButton };
