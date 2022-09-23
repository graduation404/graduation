import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CardHome, HeaderHome} from '../../components';
import NoInternet from '../../components/noInternet';
import {COLORS, SIZES, SPACING} from '../../config';
import {subDate, subtime, welcomeMessage} from '../../config/helperFunctions';
import {GetAllUsers} from '../../config/utils';

const Home = props => {
  const [data, setData] = useState([
    // { name: 'ahmed', gender: 1, age: 25 },
    // { name: 'hesham', gender: 1, age: 25 },
    // { name: 'abdo', gender: 1, age: 25 },
    // { name: 'rahaf', gender: 2, age: 25 },
    // { name: 'shaimaa', gender: 2, age: 25 },
  ]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    GetAllUsers(setData, setError);
    // subtime(0)
  }, [setData]);

  const TitleSection = () => {
    return (
      <View style={styles.TitleContainer}>
        <Text style={styles.textStyle}>Patients</Text>
        <Text style={styles.subTextStyle}>find your patients quick</Text>
      </View>
    );
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
      );
    }
    if (error) {
      return <NoInternet buttonHandler={() => {}} />;
    }

    if (data && data.length == 0) {
      return (
        <>
          <View style={styles.indicatorContainer}>
            <Image
              resizeMode="contain"
              source={require('../../assets/imgs/nodata.png')}
              style={styles.image}
            />
            <Text style={[styles.textStyle, {alignSelf: 'center'}]}>
              No Data
            </Text>
          </View>
        </>
      );
    }

    return (
      <View style={{width: '100%', alignItems: 'center'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          style={{
            width: '100%',
            backgroundColor: COLORS.white,
          }}
          data={data}
          renderItem={({item, index}) => (
            <>
              {item.name.toLowerCase().includes(searchInput.toLowerCase()) ? (
                <CardHome
                  hours={subtime(item)}
                  date={subDate(item)}
                  item={item}
                  index={index}
                  nav={props}
                />
              ) : null}
            </>
          )}
        />
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
      <ScrollView
        style={{width: '95%', alignSelf: 'center'}}
        showsVerticalScrollIndicator={false}>
        <TitleSection />
        {renderContent()}
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
    color: COLORS.darkGray,
    fontSize: SIZES.subTitle,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  indicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    width: RFValue(190),
    height: RFValue(250),
  },
});
