import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {COLORS, SIZES} from '../../config';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
import PercentageCircle from 'react-native-latest-percentage-circle';
const LevelContainer = props => {
  return (
    <>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.8}
        style={[styles.container, props.style]}>
        <Image source={props.Image} style={styles.LevelImage} />
        <PercentageCircle
          radius={35}
          percent={Math.trunc(props.Persentage)}
          
          color={'#3498db'}></PercentageCircle>
        {/* <Progress.Circle
          style={styles.ProgressStyle}
          size={RFPercentage(8.5)}
          borderWidth={RFPercentage(0)}
          unfilledColor={COLORS.darkGray}
          animated={true}
          color={COLORS.blue}
          progress={props.Persentage / 100}
        /> */}
        {!props?.hidePer && <Text style={styles.Text}>{props.Persentage}</Text>}
        {props?.level && <Text style={styles.Text}>Level {props.level}</Text>}
      </TouchableOpacity>
    </>
  );
};

const ProgressQuiz = props => {
  return (
    <>
      {/* <Progress.Circle
        style={styles.ProgressQuizStyle}
        size={RFPercentage(13)}
        fill={COLORS.white}
        unfilledColor={COLORS.darkGray}
        animated={true}
        allowFontScaling
        color={COLORS.blue}
        progress={parseFloat(props.Persentage).toFixed(2) / 100}
        showsText={true}
        textStyle={{
          color: COLORS.blue,
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: RFPercentage(1.8),
          textAlign: 'center',
        }}
        formatText={() => props.Persentage + '% \nTotal Score'}
      /> */}
      <PercentageCircle
        radius={35}
        percent={Math.trunc(props.Persentage)}
        color={'#3498db'}>
        <Text style={styles.Text}>Total Score</Text>
      </PercentageCircle>
    </>
  );
};
const BookletContainer = props => {
  return (
    <>
      <Animatable.View animation="zoomIn">
        <TouchableOpacity
          onPress={props.onPress}
          activeOpacity={0.8}
          style={[styles.container, props.style]}>
          <Image source={props.Image} style={styles.BookletImage} />
          <Text style={styles.Text}>{props.Text}</Text>
        </TouchableOpacity>
      </Animatable.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: SIZES.width * 0.275,
    height: RFPercentage(17.5),
    borderRadius: SIZES.Sradius,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: RFPercentage(2.5),
    marginVertical: RFPercentage(2.5),
    marginLeft: RFPercentage(2.25),
    elevation: 10,
    backgroundColor: COLORS.white,
  },
  LevelImage: {
    height: RFPercentage(4),
    width: RFPercentage(4),
    marginBottom: RFPercentage(-6),
    tintColor: COLORS.blue,
  },
  BookletImage: {
    height: RFPercentage(6.5),
    width: RFPercentage(6.5),
    tintColor: COLORS.blue,
  },
  ProgressStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    marginTop: RFPercentage(1.3),
    fontWeight: 'bold',
    fontSize: SIZES.h2,
    color: COLORS.blue,
  },
  ProgressQuizStyle: {
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});
export {LevelContainer, BookletContainer, ProgressQuiz};
