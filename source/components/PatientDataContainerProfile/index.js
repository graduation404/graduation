import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
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
            height: RFPercentage(7.5),
            borderRadius: SIZES.height,
            width: SIZES.width*.9,
            backgroundColor: COLORS.white,
            elevation: 3,
            flexDirection: 'row',
            alignItems: 'center',
        },
        Image_View: [
            {
                height: '100%',
                width: SIZES.height * .075,
                borderRadius: SIZES.Lradius,
                backgroundColor: COLORS.blue,
                alignItems: 'center',
                justifyContent: 'center'
            },
            SHADOW.dark
        ],
        Image_Style: {
            height: RFPercentage(4.5),
            width: SIZES.height * .045,
        },
        Second_View: {
            marginLeft: RFPercentage(1.5),
            width: '75%',
            height: '80%',
            justifyContent:'space-around',
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
            marginBottom: RFPercentage(1)
        }


    }
)

export default PatientsDataContainer
