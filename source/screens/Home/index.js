import { StyleSheet, Text, View, } from 'react-native';
import React, { useState } from 'react';
import { HeaderHome, Slider } from '../../components';
import { MainColors, sizes } from '../../config/theme';

const Home = () => {
  const [SnrValue, setSnrValue] = useState(50)
  return (
    <View style={{flex:1,backgroundColor:MainColors.white}}>
      <HeaderHome />
     <Slider Value={SnrValue}/>
     

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
