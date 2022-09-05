import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Icons, COLORS, SIZES} from '../../config';
import LinearGradient from 'react-native-linear-gradient';
import {CustomInputLogIn} from '../../components';
import {SetAsyncStorage, welcomeMessage} from '../../config/helperFunctions';

const Login = props => {
  const [email, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [Icon_name, setIconName] = useState(Icons.eyeSlash);
  const [visible, setVisible] = useState(true);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPassError] = useState('');
  function Visible() {
    if (visible == false) {
      setVisible(true);
      setIconName(Icons.eyeSlash);
    } else {
      setVisible(false);
      setIconName(Icons.eye);
    }
  }

  const logInPress = () => {
    if (email.length > 0 || password.length > 0) {
      if (email.toLowerCase() != 'admin') {
        setEmailError('Please Enter Valid Email');
        setPassError('');
      } else if (password.toLowerCase() != '12345') {
        setEmailError('');
        setPassError('Please Enter Valid Password');
      } else {
        SetAsyncStorage('admin', {email, password});
        props.navigation.replace('HomeStack');
        welcomeMessage();
      }
    } else {
      setPassError('Please Enter Valid Password');
      setEmailError('Please Enter Valid Email');
    }
  };

  return (
    <>
      <ScrollView style={{flexGrow: 1}}>
        <View style={styles.Container}>
          <LinearGradient
            colors={[COLORS.blue, COLORS.darkGray]}
            style={styles.linearGradient}>
            <View style={styles.Image_Container}>
              <Image source={Icons.Auditory} style={styles.auditoryStyle} />
            </View>
          </LinearGradient>

          <View style={styles.sec_Container}>
            <View style={styles.signin_Container}>
              <View style={styles.inner_signin_view}></View>
              <View
                style={{
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '25%',
                }}>
                <Text style={[styles.text_signin, {color: COLORS.blue}]}>
                  SIGN IN
                </Text>
              </View>
              <View style={styles.inner_signin_view}></View>
            </View>

            <CustomInputLogIn
              label="Email..."
              keyboardType="email-address"
              icon={Icons.User}
              value={email}
              onChangeText={val => {
                setEmail(val.trim());
              }}
              error={emailError ? emailError : false}
            />
            <CustomInputLogIn
              label="Password..."
              keyboardType="default"
              icon={Icons.Lock}
              iconEye={Icon_name}
              secureTextEntry={visible}
              onPress={() => {
                Visible();
              }}
              value={password}
              onChangeText={val => {
                setPass(val.trim());
              }}
              error={passwordError ? passwordError : false}
            />

            <TouchableOpacity
              style={styles.signin_touchable}
              onPress={logInPress}>
              <Text style={[styles.text_signin, {color: COLORS.white}]}>
                SIGN IN
              </Text>
            </TouchableOpacity>

            {/* <TouchableOpacity style={styles.forgetPass_Container}>
              <Text
                style={[
                  styles.text_signin,
                  {color: COLORS.darkGray, fontSize: SIZES.h4},
                ]}>
                Forget Password ?
              </Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height * 0.48,
    width: SIZES.width,
  },
  Image_Container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: SIZES.height * 0.2,
    width: SIZES.height * 0.2,
    borderRadius: SIZES.height * 0.1,
    backgroundColor: COLORS.white,
  },
  auditoryStyle: {
    height: SIZES.height * 0.15,
    width: SIZES.height * 0.15,
  },
  sec_Container: {
    backgroundColor: COLORS.white,
    height: SIZES.height * 0.55,
    width: '100%',
    marginTop: -SIZES.height * 0.03,
    borderTopLeftRadius: SIZES.height * 0.027,
    borderTopRightRadius: SIZES.height * 0.027,
  },
  signin_Container: {
    width: '100%',
    height: SIZES.height * 0.08,
    flexDirection: 'row',
    marginTop: SIZES.height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inner_signin_view: {
    width: '25%',
    borderColor: COLORS.darkGray,
    borderTopWidth: 1,
  },
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
    flexDirection: 'row',
    elevation: 5,
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
    width: '69%',
    height: '50%',
  },
  signin_touchable: {
    width: '55%',
    height: SIZES.height * 0.06,
    backgroundColor: COLORS.blue,
    borderRadius: SIZES.height * 0.05,
    alignSelf: 'center',
    marginTop: SIZES.height * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  forgetPass_Container: {
    width: '35%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: SIZES.height * 0.01,
  },
});
