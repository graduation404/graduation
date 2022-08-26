import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const MainColors = {
  primary: '#070d41',
  gray: '#8b8989',
  lightGray: '#b2b2b2',
  light: '#fbfbfb',
  white: '#fff',
  black: '#000',
  blue: '#069',
};

export const shadow = {
  light: {
    shadowColor: MainColors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: MainColors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 32,
  h2: 24,
  h3: 18,
  h4: 16,
  body: 14,
  Lradius: 30,
  Sradius: 12,
};

export const spacing = {
  s: 8,
  m: 18,
  l: 24,
  xl: 40,
};
