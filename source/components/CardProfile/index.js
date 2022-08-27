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
    height: SIZES.height * 0.275,
    backgroundColor: COLORS.white,
    elevation: 4,
    alignItems: 'center',
    alignSelf: 'center',
    padding: SPACING.l,
    borderRadius: SIZES.Sradius,
    // marginTop:-SIZES.height*.15
  },
  title: {
    color: COLORS.blue,
    marginTop: SIZES.height * 0.1,
  },
});
