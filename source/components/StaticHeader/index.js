import React from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, Icons, SHADOW, SIZES, SPACING } from "../../config";

const StaticHeader = (props) => {
    return (
        <>
              <StatusBar barStyle={'dark-content'} backgroundColor={COLORS.white} />

            <View style={styles.container}>
                <TouchableOpacity activeOpacity={0.85}>
                    <Image source={Icons.Back} style={styles.Image_Style} />
                </TouchableOpacity>

                <Text style={styles.textStyle}>{props.Header_name}</Text>

                <Image style={styles.Image_Style} />
            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container:
    {
        paddingVertical: RFPercentage(3),
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: RFPercentage(2.5),
        backgroundColor:COLORS.white,
        alignItems:'center'
    },
    Image_Style: {
        height: SIZES.height * 0.0325,
        width: SIZES.height * 0.0325,
        tintColor: COLORS.blue,
    },
    textStyle: {
        color: COLORS.blue,
        fontSize: SIZES.title,
        fontWeight:'bold'
    }
});

export default StaticHeader