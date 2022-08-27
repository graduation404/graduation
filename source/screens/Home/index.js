import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Card, HeaderProfile, PatientsDataContainer, SmallButton } from '../../components';
import { Icons, Line, COLORS, sizes, SIZES, SPACING, SHADOW, Range_Function } from '../../config';

const Home = () => {
  



  useEffect(() => {
  }, [])

  return (
    <View style={styles.Container}>
      <HeaderProfile Header_name={'Home'} />

      <Card/>

    
    </View >
  );
};

export default Home;

const styles = StyleSheet.create(
  {
    Container:
    {
      flex: 1,
      backgroundColor: COLORS.white,
      alignItems: 'center'
    },
    card_Container:
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
   
  });
