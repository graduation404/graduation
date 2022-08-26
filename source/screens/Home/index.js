import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {CardComponent, HeaderProfile, Slider} from '../../components';
import {MainColors, sizes} from '../../config/theme';

const Home = () => {
  const [SnrValue, setSnrValue] = useState(100);
  return (
    <View style={{flex: 1, backgroundColor: MainColors.white}}>
      <HeaderProfile />
      <CardComponent />
      {/* <Slider Value={SnrValue} /> */}

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
