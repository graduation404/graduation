import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS, SIZES, SPACING } from '../../config';

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
    height: SIZES.height * 0.278,
    backgroundColor: COLORS.white,
    elevation: 4,
    alignItems: 'center',
    alignSelf: 'center',
    paddingRight: SPACING.l,
    paddingVertical: SPACING.m,
    borderRadius: SIZES.Sradius,
  },
  title: {
    color: COLORS.blue,
    marginTop: SIZES.height * 0.1,
  },
});
