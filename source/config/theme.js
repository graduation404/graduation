import {Dimensions} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  blue: '#0089BA',
  gray: '#E0E0E0',
  darkGray: '#B8B8B4',
  white: '#fff',
  black: '#000',
};

export const SIZES = {
  width,
  height,
  title: RFPercentage(3.1),
  h1: RFPercentage(2.3),
  h2: RFPercentage(2.12),
  h3: RFPercentage(2),
  h4: RFPercentage(1.3),
  h5: RFPercentage(1.3),
  body: 12,
  Lradius: 50,
  Sradius: 12,
  avatar: RFValue(60),
  subTitle: RFValue(11),
  inputHeight: RFValue(50),
};

export const SHADOW = {
  light: {
    shadowColor: COLORS.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: COLORS.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const SPACING = {
  vS: RFValue(3),
  s: RFValue(8),
  m: RFValue(18),
  l: RFValue(24),
  xl: RFValue(40),
};
