import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CardHome, HeaderHome} from '../../components';
import NoInternet from '../../components/noInternet';
import {COLORS, SIZES, SPACING} from '../../config';
import {subDate, subtime, welcomeMessage} from '../../config/helperFunctions';
import {GetAllUsers} from '../../config/utils';

const Home = props => {
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    let getData = async () => {
      GetAllUsers(setData, setError);
    };
    try {
      getData();
      setError(false);
    } catch (error) {
      setError(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [setData, GetAllUsers]);

  const onRefresh = useCallback(async () => {
    setLoading(true);

    try {
      GetAllUsers(setData, setError);
      setError(false);
    } catch (error) {
      setError(true);
    }
    setTimeout(() => {
      setLoading(false);
    }, 400);
  }, [data]);
  const TitleSection = () => {
    return (
      <View style={styles.TitleContainer}>
        <Text style={styles.textStyle}>Patients</Text>
        <Text style={styles.subTextStyle}>find your patients quick</Text>
      </View>
    );
  };

  const renderContent = () => {
    if (loading == false && data.length === 0 && error == true) {
      return (
        <>
          <NoInternet
            buttonHandler={() => {
              onRefresh();
            }}
          />
        </>
      );
    }

    if (loading == false && data.length === 0 && error == false) {
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
    if (loading == true) {
      return (
        <View style={styles.indicatorContainer}>
          <ActivityIndicator size="large" color={COLORS.blue} />
        </View>
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
          // refreshControl={
          //   <RefreshControl
          //     refreshing={loading}
          //     onRefresh={onRefresh}
          //     enabled={true}
          //   />
          // }
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
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={onRefresh}
            enabled={true}
          />
        }
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
    // backgroundColor:"#a00"
  },
  image: {
    width: RFValue(190),
    height: RFValue(250),
  },
});
