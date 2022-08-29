import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity } from "react-native";
import { COLORS, SIZES, SPACING } from "../../config";
import { RFPercentage } from "react-native-responsive-fontsize";
import LinearGradient from "react-native-linear-gradient";

const LargeButton = (props) => {
    return (
        <>
            <TouchableOpacity activeOpacity={.85} >
                    <LinearGradient colors={[COLORS.blue,COLORS.lightGray]} style={styles.LargeButtonView}>
                    <Text style={styles.BookletText_Style}>{props.Text}</Text>
                    </LinearGradient>
            </TouchableOpacity>
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
                <Text style={styles.LevelText_Style}>{props.Text}</Text>
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
        LargeButtonView: {
            height: SIZES.height * .055,
            width: '52.5%',
            alignSelf:'center',
            backgroundColor: COLORS.blue,
            borderRadius: 15,
            margin: SIZES.height * .025,
            alignItems: 'center',
            justifyContent: 'center',
        },
        Image_Style: {
            height: SIZES.height * .03,
            width: SIZES.height * .03,
        },
        LevelText_Style: {
            fontSize: RFPercentage(2),
            fontWeight: 'bold',
            color: COLORS.white
        },
        BookletText_Style: {
            fontSize: RFPercentage(3),
            fontWeight: 'bold',
            color: COLORS.white
        }
    }
)

export {
    LargeButton,
    SmallButton
}