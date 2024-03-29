import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {Icons, COLORS, SHADOW, SIZES, SPACING} from '../../config';
import Slider from '../Slider';

const PatientsDataContainer = props => {
  return (
    <>
      {props.button ? (
        <TouchableOpacity
          activeOpacity={0.85}
          onPress={props.onPress}
          style={styles.Main_view}>
          <View style={styles.Image_View}>
            <Image source={props.Image} style={styles.Image_Style} />
          </View>

          <View style={styles.Second_View}>
            <Text style={styles.name_Style}>{props.name}</Text>
            {props.Percentage ? (
              <>
                <Text style={styles.Percentage_Style}>{props.Percentage}%</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                  }}>
                  <Slider
                    elevation={4}
                    width={SIZES.width / 1.5}
                    backgroundColor={COLORS.blue}
                    Value={props.Percentage ? props.Percentage : 0}
                  />
                </View>
              </>
            ) : null}
          </View>
        </TouchableOpacity>
      ) : (
        <View style={styles.Main_view}>
          <View style={styles.Image_View}>
            <Image source={props.Image} style={styles.Image_Style} />
          </View>

          <View style={styles.Second_View}>
            <Text style={styles.name_Style}>{props.name}</Text>
            {props.Percentage ? (
              <>
                <Text style={styles.Percentage_Style}>{props.Percentage}%</Text>
                <View
                  style={{
                    flexDirection: 'row-reverse',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Slider
                    elevation={4}
                    width={SIZES.width / 1.5}
                    backgroundColor={COLORS.blue}
                    Value={props?.Percentage}
                  />
                </View>
              </>
            ) : null}
          </View>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  Main_view: {
    height: RFPercentage(7.5),
    borderRadius: SIZES.height,
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: RFPercentage(3),
    marginBottom: 2,
  },
  Image_View: [
    {
      height: '100%',
      width: SIZES.height * 0.075,
      borderRadius: SIZES.Lradius,
      backgroundColor: COLORS.blue,
      alignItems: 'center',
      justifyContent: 'center',
    },
    SHADOW.dark,
  ],
  Image_Style: {
    height: RFPercentage(4.5),
    width: SIZES.height * 0.045,
    tintColor: '#fff',
  },
  Second_View: {
    marginLeft: RFPercentage(1.5),
    width: '75%',
    height: '80%',
    justifyContent: 'space-around',
    paddingBottom: RFPercentage(1),
  },
  name_Style: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.blue,
  },
  Percentage_Style: {
    fontSize: SIZES.h5,
    alignSelf: 'flex-end',
    color: COLORS.darkGray,
    marginBottom: RFPercentage(1),
    position: 'absolute',
    top: 5,
  },
});

export default PatientsDataContainer;
