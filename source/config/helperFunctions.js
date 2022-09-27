import AsyncStorage from '@react-native-async-storage/async-storage';
import React from 'react';
import {
  Image,
  ProgressViewIOSComponent,
  StyleSheet,
  Text,
  ToastAndroid,
  View,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import Icons from './Icons';
import {COLORS, SHADOW, SIZES} from './theme';

const Range_Function = age => {
  let range = '';
  age >= 5
    ? age > 6
      ? age > 10
        ? age > 18
          ? (range = '+18')
          : (range = '10-18')
        : (range = '6-10')
      : (range = '1-5')
    : null;
  // console.log(range)

  return range;
};

const Line = () => {
  return <View style={styles.lineStyle}></View>;
};

const GuideLineSubText = props => {
  return (
    <View style={styles.GuideContainer}>
      <View style={styles.GuideView} />
      <Text style={styles.GuideText}>
        {props.Text}
        {props.Image ? (
          <Image
            source={props.Image}
            style={{height: RFPercentage(2), width: RFPercentage(2)}}
          />
        ) : null}
      </Text>
    </View>
  );
};

const SetAsyncStorage = async (key, data) => {
  await AsyncStorage.setItem(key, JSON.stringify(data), (err, res) => {
    // console.log(res);
  });
};
const GetAsyncStorage = async key => {
  let data = await AsyncStorage.getItem(key);
  // console.log('data' + data);
  return data;
};
const welcomeMessage = () => {
  return ToastAndroid.show(
    'Welcome DR.Mostafa',
    ToastAndroid.SHORT,
    ToastAndroid.BOTTOM,
  );
};

const subDate = data => {
  let fulldate = data.creationtime;
  let date = fulldate.slice(0, 10).split('-');
  date = date[2] + ' / ' + date[1] + ' / ' + date[0] ;

  return date;
};

const subtime = data => {
  let fulldate = data.creationtime;

  let M = '';
  let hours = fulldate.slice(11, 13);
  hours > 12 ? (M = 'AM') : (M = 'PM');
  hours > 12 ? (hours = hours - 12) : (hours = hours);

  let minuts = fulldate.slice(14, 16);

  let date = hours + ' : ' + minuts + ' ' + M;
  // console.log(minuts);

  return date;
};

const handleAgeGroup = ageGroup => {
  let agevalue = '';
  if (ageGroup == 1) {
    agevalue = '1-5';
  } else if (ageGroup == 2) {
    agevalue = '5-10';
  } else if (ageGroup == 3) {
    agevalue = '10-18';
  } else if (ageGroup == 4) {
    agevalue = '+18';
  }

  return agevalue;
};
const handleAgeGroup2 = ageGroup => {
  let agevalue = '';
  if (ageGroup == '1-5') {
    agevalue = 1;
  } else if (ageGroup =='5-10' ) {
    agevalue =2 ;
  } else if (ageGroup =='10-18') {
    agevalue =  3;
  } else if (ageGroup == '+18') {
    agevalue = 4;
  }

  return agevalue;
};


const TimeAvarage = (questionData) => {
  let Avarage = 0
  for (let i = 0; i < questionData.length; i++) {
    Avarage += questionData[i].takenTime
  }
  return Avarage
}



export {
  Line,
  Range_Function,
  GuideLineSubText,
  SetAsyncStorage,
  GetAsyncStorage,
  welcomeMessage,
  subDate,
  subtime,
  handleAgeGroup,
  handleAgeGroup2,
  TimeAvarage
};

const styles = StyleSheet.create({
  lineStyle: [
    {
      height: SIZES.height * 0.002,
      width: '100%',
      backgroundColor: COLORS.white,
      elevation: 10,
      marginVertical: RFPercentage(2),
      marginLeft: RFPercentage(2),
    },
  ],
  GuideContainer: {
    flexDirection: 'row',
    marginBottom: RFPercentage(2),
    width: '97.5%',
  },
  GuideView: {
    height: 12.5,
    width: 12.5,
    backgroundColor: COLORS.blue,
    marginTop: RFPercentage(1),
    borderRadius: 15,
  },
  GuideText: {
    fontSize: RFPercentage(3),
    color: COLORS.blue,
    marginLeft: RFPercentage(1),
    flexWrap: 'wrap',
  },
});
