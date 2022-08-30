import React from 'react';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {COLORS, Icons, SHADOW, SIZES, SPACING} from '../../config';

const StaticHeader = ({nav},props) => {
  return (
    <>
      <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />

      <View style={styles.container}>
        <TouchableOpacity activeOpacity={0.85}
        onPress={()=>{
          nav?.navigation.goBack()
        }}
        >
          <Image source={Icons.Back} style={styles.Image_Style} />
        </TouchableOpacity>

        <View>
          <Text style={styles.textStyle}>{props.Header_name}</Text>
        </View>

        <View style={styles.Image_Style} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: RFPercentage(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFPercentage(2.5),
    backgroundColor: COLORS.white,
    alignItems: 'center',
    width:"100%"
  },
  Image_Style: {
    height: SIZES.height * 0.0325,
    width: SIZES.height * 0.0325,
    tintColor: COLORS.blue,
  },
  textStyle: {
    color: COLORS.blue,
    fontSize: SIZES.title - 5,
    fontWeight: 'bold',
  },
});

export default StaticHeader;
