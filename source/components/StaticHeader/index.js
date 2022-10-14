import {useNavigation} from '@react-navigation/native';
import React from 'react';
import { useTranslation } from 'react-i18next';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {COLORS, Icons, SHADOW, SIZES, SPACING} from '../../config';

const StaticHeader = props => {
  const {t, i18n} = useTranslation();

  const navigation = useNavigation();
  return (
    <>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={
          props.style ? props.style.backgroundColor : COLORS.white
        }
      />

      <View style={[styles.container, props.style]}>
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={() => {
            navigation.goBack();
          }}>
          <Image source={i18n.language=="ar"?Icons.Right:Icons.Back} style={[styles.Image_Style]} />
        </TouchableOpacity>

        <Text style={styles.textStyle}>{props.Header_name}</Text>

        <Image style={styles.Image_Style} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: RFPercentage(2),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFPercentage(2.5),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    width: '100%',
  },
  Image_Style: {
    height: SIZES.height * 0.0325,
    width: SIZES.height * 0.0325,
    tintColor: COLORS.blue,
  },
  textStyle: {
    color: COLORS.blue,
    fontSize: SIZES.title,
    fontWeight: 'bold',
  },
});

export default StaticHeader;
