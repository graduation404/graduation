import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES, SPACING } from '../../config';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Card = (props) => {
  return (
    <View style={styles.container}>
      {props.RenderItems}
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '85%',
    paddingVertical:RFPercentage(2.5),
    backgroundColor: COLORS.white,
    elevation: 4,
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: SPACING.l,
    paddingVertical: SPACING.m,
    borderRadius: SIZES.Sradius,
  },
 
});
