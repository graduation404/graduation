import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { Icons, COLORS, SHADOW, SIZES, SPACING } from "../../config";
import Slider from "../Slider";

const PatientsDataContainer = (props) => {
    return (
        <>
            <View style={styles.Main_view}>


                <View style={styles.Image_View}>
                    <Image source={Icons.PointHand} style={styles.Image_Style} />
                </View>

                <View style={styles.Second_View}>
                    <Text style={styles.name_Style}>{props.name}</Text>
                    <Text style={styles.Percentage_Style}>{props.Percentage}%</Text>
                    <Slider Value={props.Percentage} />
                </View>


            </View>
        </>
    )
}



const styles = StyleSheet.create(
    {
        Main_view: {
            height: SIZES.height * .07,
            borderRadius: SIZES.height,
            width: SIZES.width * .9,
            backgroundColor: COLORS.white,
            elevation:3,
            flexDirection: 'row',
            marginTop: SIZES.height * .03,
            marginBottom:SIZES.height*0.015
        },
        Image_View: [
            {
                height: SIZES.height * .07,
                width: SIZES.height * .07,
                borderRadius: SIZES.Lradius,
                backgroundColor: COLORS.blue,
                alignItems: 'center',
                justifyContent: 'center'
            },
            SHADOW.dark
        ],
        Image_Style: {
            height: SIZES.height * .045,
            width: SIZES.height * .045,
        },
        Second_View: {
            marginLeft: SPACING.s,
            width: SIZES.width * .675,
            height: '100%',
            paddingVertical: 3
        },
        name_Style: {
            fontSize: SIZES.h3,
            fontWeight: 'bold',
            color: COLORS.blue,
        },
        Percentage_Style: {
            fontSize: SIZES.h4,
            alignSelf: 'flex-end',
            color: COLORS.lightGray,
            marginBottom: SPACING.vS
        }


    }
)

export default PatientsDataContainer