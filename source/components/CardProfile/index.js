import { StyleSheet, } from 'react-native';
import React from 'react';
import { COLORS, SIZES, SPACING } from '../../config';
import { RFPercentage } from 'react-native-responsive-fontsize';
import LinearGradient from 'react-native-linear-gradient';

const Card = (props) => {
  return (
    <LinearGradient colors={props.colors} style={styles.container}>
      {props.RenderItems}
    </LinearGradient>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '87.5%',
    paddingVertical: RFPercentage(3),
    paddingHorizontal: RFPercentage(2),
    backgroundColor: COLORS.white,
    elevation: 4,
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: SPACING.l,
    borderRadius: SIZES.Sradius,
  },

});
