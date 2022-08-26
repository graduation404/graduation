import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {MainColors, shadow, sizes} from '../../config/theme';

const Card = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Card</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: sizes.height * 0.3,
    backgroundColor: MainColors.light,
    elevation: 4,
    alignItems: 'center',
    alignSelf: 'center',
    //   marginTop:-sizes.height*.15,
    borderRadius: sizes.Sradius,
  },
  title: {
    color: MainColors.light,
    marginTop: sizes.height * 0.1,
  },
});
