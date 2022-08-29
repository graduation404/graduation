import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {CardHome, HeaderHome} from '../../components';
import {COLORS, SIZES, SPACING} from '../../config';
const data = [
  {name: 'ahmed'},
  {name: 'hesham'},
  {name: 'taha'},
  {name: 'ahmed'},
  {name: 'hesham'},
  {name: 'taha'},
];
const Home = (props) => {
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
        nav={props}
        value={searchInput}
      />

      <ScrollView style={{width: '95%', alignSelf: 'center'}}
      showsVerticalScrollIndicator={false}
      >
        <TitleSection />
        <View style={{width: '100%', alignItems: 'center'}}>
          <FlatList
            showsVerticalScrollIndicator={false}
            style={{
              width: '100%',
              backgroundColor: COLORS.white,
            }}
            data={data}
            renderItem={({item, index}) => (
              <CardHome item={item} index={index} nav={props} />
            )}
          />
          
        </View>
      </ScrollView>
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
