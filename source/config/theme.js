import {Dimensions} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  blue: '#0089BA',
  gray: '#E0E0E0',
  lightGray: '#B8B8B8',
  white: '#fff',
  black: '#000',
};

export const SIZES = {
  width,
  height,
  title: RFPercentage(3.3),
  h2: RFPercentage(2.4),
  h3: RFPercentage(2.3),
  h4: RFPercentage(1.8),
  body: 14,
  Lradius: 50,
  Sradius: 12,
  avatar: RFValue(60),
  subTitle:RFValue(13)
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
  vS:3,
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};
