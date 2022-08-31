import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {COLORS, Icons, SIZES, SPACING} from '../../config';

const CustomInputAddPatient = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerImage, {backgroundColor: props.colorIcon}]}>
        <Image style={styles.img} source={props.icon} />
      </View>
      <TextInput
        style={styles.inp}
        placeholder={props.placeholder}
        placeholderTextColor={COLORS.lightGray}
        onChangeText={props.onChangeText}
        value={props.value}
        keyboardType={props.keyboardType}
      />
    </View>
  );
};

export default CustomInputAddPatient;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: SIZES.inputHeight,
    backgroundColor: COLORS.white,
    borderRadius: SPACING.l,
    elevation: 4,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: SPACING.m-4,
    paddingHorizontal:1,
    zIndex:-1
  },
  containerImage: {
    width: SIZES.inputHeight+3,
    height: '100%',
    backgroundColor: COLORS.blue,
    borderRadius: SPACING.l,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
  img: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
  inp: {
    width: '83%',
    height: '100%',
    borderRadius: SPACING.l,
    paddingHorizontal: '2%',
    color: COLORS.black,
  },
});
