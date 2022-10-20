import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';
import {COLORS, Icons, SIZES, SPACING} from '../../config';
import DropDownPicker from 'react-native-dropdown-picker';
const CustomDropDown = props => {
  return (
    <View style={styles.container}>
      <View style={[styles.containerImage, {backgroundColor: props.colorIcon}]}>
        <Image style={[styles.img,props.iconStyle]} source={props.icon} resizeMode="contain" />
      </View>
      
      <DropDownPicker
            items={props.data}
            zIndex={5000}
            zIndexInverse={6000}
            open={props.open}
            setOpen={props.setOpen}
            value={props.value}
            setValue={props.setValue}
            containerStyle={styles.inp}
            style={styles.dropDown}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
            dropDownContainerStyle={styles.dropDownContainerStyle}
            placeholder={props.placeholder}
            placeholderStyle={{color:COLORS.darkGray}}
          />
    </View>
  );
};

export default CustomDropDown;

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
    // paddingHorizontal:1
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
    tintColor:COLORS.white
  },
  inp: {
    width: '83%',
    height: '100%',
    borderRadius: SPACING.l,
    // paddingHorizontal: '2%',
    color: COLORS.black,
    zIndex: 1100
  },
  dropDown: {
    backgroundColor: COLORS.white,
    // elevation: 4,
    width: '100%',
    height: '100%',
    shadowColor: '#000',
    borderRadius: SPACING.l,
    zIndex: 100,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    borderWidth: 0,
  },
  dropDownContainerStyle: {
    backgroundColor: '#fefefe',
    borderWidth: 0.2,
    zIndex: 100

    // borderRadius: SPACING.l,
  },
 
});
