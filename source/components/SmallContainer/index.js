import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {COLORS, SIZES} from '../../config';
import * as Progress from 'react-native-progress';
import * as Animatable from 'react-native-animatable';
const LevelContainer = props => {
  return (
    <>
      <TouchableOpacity
        onPress={props.onPress}
        activeOpacity={0.8}
        style={[styles.container, props.style]}>
        <Image source={props.Image} style={styles.LevelImage} />
        <Progress.Circle
          style={styles.ProgressStyle}
          size={RFPercentage(8.5)}
          borderWidth={RFPercentage(0)}
          unfilledColor={COLORS.lightGray}
          animated={true}
          color={COLORS.blue}
          progress={props.Persentage / 100}
        />
        <Text style={styles.Text}>{props.Text}</Text>
      </TouchableOpacity>
    </>
  );
};

const ProgressQuiz = props => {
  return (
    <>
      <Progress.Circle
        style={styles.ProgressQuizStyle}
        size={RFPercentage(13)}
        fill={COLORS.white}
        unfilledColor={COLORS.lightGray}
        animated={true}
        allowFontScaling
        color={COLORS.blue}
        progress={props.Persentage / 100}
        showsText={true}
        textStyle={{
          color: COLORS.blue,
          alignSelf: 'center',
          fontWeight: 'bold',
          fontSize: RFPercentage(1.8),
          textAlign: 'center',
        }}
        formatText={() => props.Persentage + '% \nTotal Score'}
      />
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
    marginTop: RFPercentage(1.5),
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
