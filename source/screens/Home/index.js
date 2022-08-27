import React, {useEffect, useState} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {CardHome, HeaderHome} from '../../components';

import {COLORS, SIZES, SPACING} from '../../config';
const data = [1, 2, 3, 4, 5];
const Home = () => {
  const [searchInput, setSearchInput] = useState('');
  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);

  const TitleSection = () => {
    return (
      <View style={styles.TitleContainer}>
        <Text style={styles.textStyle}>Patients</Text>
        <Text style={styles.subTextStyle}>find your patients quick</Text>
      </View>
    );
  };
  return (
    <View style={styles.Container}>
      <HeaderHome
        onChangeText={value => {
          setSearchInput(value);
        }}
        value={searchInput}
      />
      <TitleSection />
      <View style={{width: '95%', alignItems: 'center'}}>
        <FlatList
        showsVerticalScrollIndicator={false}
          style={{width: '100%', backgroundColor: COLORS.white}}
          data={data}
          renderItem={(item, index) => <CardHome />}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  TitleContainer: {
    alignSelf: 'flex-start',
    marginVertical: SPACING.m,
    paddingHorizontal: SPACING.m - 3,
  },
  textStyle: {
    color: COLORS.blue,
    alignSelf: 'flex-start',
    fontSize: SIZES.h2 + 5,
    fontWeight: '700',
  },
  subTextStyle: {
    color: COLORS.lightGray,
    fontSize: SIZES.subTitle,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
});
