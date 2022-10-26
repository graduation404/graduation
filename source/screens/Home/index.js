import React, {useCallback, useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
  RefreshControl,
  Alert,
  ToastAndroid,
  ActivityIndicator,
  BackHandler,
  I18nManager,
} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CardHome, HeaderHome} from '../../components';
import NoInternet from '../../components/noInternet';
import {COLORS, SIZES, SPACING} from '../../config';
import {subDate, subtime, welcomeMessage} from '../../config/helperFunctions';
import {DeleteSpecifiecUser, GetAllUsers} from '../../config/utils';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
const Home = props => {
  const {t, i18n} = useTranslation();
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const DeleteUserFun = id => {
    return Alert.alert('Warning', 'Are U Sure to Delete User', [
      {
        text: 'Cancel',
      },
      {
        text: 'Delete',
        onPress: () => {
          DeleteSpecifiecUser(id);
          GetAllUsers(setData, setError);
        },
      },
    ]);
    // DeleteSpecifiecUser(id)
  };

  useEffect(() => {
    I18nManager.allowRTL(i18next.language === 'ar');
    I18nManager.forceRTL(i18next.language === 'ar');
  }, []);

  // console.log(data)
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
  }, [setData, GetAllUsers, DeleteSpecifiecUser]);

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
  }, [data, DeleteSpecifiecUser]);
  const TitleSection = () => {
    return (
      <View style={styles.TitleContainer}>
        <Text style={styles.textStyle}>{t('common:Patients')}</Text>
        <Text style={styles.subTextStyle}>
          {t('common:findyourpatientsquick')}
        </Text>
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
          ListEmptyComponent={() => {
            return (
              <View style={styles.indicatorContainer}>
                <Image
                  resizeMode="contain"
                  source={require('../../assets/imgs/nodata.png')}
                  style={styles.image}
                />
                <Text style={[styles.textStyle, {alignSelf: 'center'}]}>
                  {t('common:NoData')}
                </Text>
              </View>
            );
          }}
          renderItem={({item, index}) => (
            <>
              {item.name.toLowerCase().includes(searchInput.toLowerCase()) ? (
                <CardHome
                  hours={subtime(item)}
                  date={subDate(item)}
                  item={item}
                  index={index}
                  nav={props}
                  onPressDelete={() => DeleteUserFun(item.id)}
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
