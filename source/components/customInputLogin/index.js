import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {COLORS, SHADOW, SIZES} from '../../config';

const CustomInputLogIn = props => {
  return (
    <>
      <View style={[styles.email_Container, SHADOW.light]}>
        <View
          style={[
            styles.email_image_container,
            {
              borderTopLeftRadius: SIZES.height * 0.03,
              borderBottomLeftRadius: SIZES.height * 0.03,
            },
          ]}>
          <Image
            source={props.icon}
            style={styles.email_image}
            resizeMode="contain"
          />
        </View>
        <TextInput
          style={[
            styles.text_input,
            {
              width: props.label == 'Password...' ? '70%' : '85%',
              borderTopRightRadius: SIZES.height * 0.03,
              borderBottomRightRadius: SIZES.height * 0.03,
              color: COLORS.darkGray,
            },
          ]}
          keyboardType={props.keyboardType}
          placeholder={props.label}
          placeholderTextColor={COLORS.darkGray}
          value={props.email}
          secureTextEntry={
            props.label == 'Password...' ? props.secureTextEntry : false
          }
          onChangeText={props.onChangeText}
        />
        {props.label == 'Password...' ? (
          <TouchableOpacity
            style={[
              styles.email_image_container,
              {
                borderTopRightRadius: SIZES.height * 0.03,
                borderBottomRightRadius: SIZES.height * 0.03,
              },
            ]}
            onPress={props.onPress}>
            <Image
              source={props.iconEye}
              style={[styles.email_image, {tintColor: COLORS.darkGray}]}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : null}
      </View>
      {props.error ? (
        <View style={{width: '85%', alignSelf: 'center'}}>
          <Text style={styles.textError}>{props.error}</Text>
        </View>
      ) : null}
    </>
  );
};

export default CustomInputLogIn;

const styles = StyleSheet.create({
  text_signin: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
  },
  text_input: {
    height: '100%',
    color: COLORS.black,
  },
  email_Container: {
    width: '90%',
    height: SIZES.inputHeight + 5,
    overflow: 'hidden',
    alignSelf: 'center',
    marginTop: SIZES.height * 0.02,
    borderRadius: SIZES.height * 0.03,
    borderColor: COLORS.gray,
    borderWidth: 1,
    flexDirection: 'row',
    elevation: 3,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  email_image_container: {
    height: '100%',
    width: '15%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  email_image: {
    width: '100%',
    height: '60%',
    tintColor: COLORS.black,
  },
  textError: {
    color: '#a00',
    fontSize: SIZES.h4,
  },
});
