import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, SPACING } from "../../config";
import { RFPercentage } from "react-native-responsive-fontsize";

const LargeButton = (props) => {
    return (
        <>
            <TouchableOpacity></TouchableOpacity>
        </>
    )
}

const SmallButton = (props) => {
    return (
        <>
            <TouchableOpacity
                activeOpacity={.85}
                style={styles.SmallButtonView}>
                <Image source={props.Icon} style={styles.Image_Style} />
                <Text style={styles.Text_Style}>{props.Text}</Text>
                <Image source={props.s} style={styles.Image_Style} />

            </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create(
    {
        SmallButtonView: {
            height: SIZES.height * .055,
            width: '42.5%',
            backgroundColor: COLORS.blue,
            borderRadius: SIZES.Lradius,
            margin: SIZES.height * .025,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingHorizontal: SPACING.s,
            flexDirection: 'row',
        },
        Image_Style: {
            height: SIZES.height * .03,
            width: SIZES.height * .03,
        },
        Text_Style:{
            fontSize: RFPercentage(2),
             fontWeight: 'bold', 
             color: COLORS.white
        }
    }
)

export {
    LargeButton,
    SmallButton
}