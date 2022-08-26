import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {CardComponent, HeaderProfile} from '../../components';

const Home = () => {
  return (
    <View>
      <HeaderProfile />
      <CardComponent/>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
