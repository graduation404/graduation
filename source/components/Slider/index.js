import React from "react"
import { StyleSheet, View } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import { COLORS, SHADOW, SIZES } from "../../config"

const Slider = (props) => {
    return (
        <>
            <View style={[styles.MainView, { width: props.width,            elevation: props.elevation}]}>
                <View style={[styles.SliderView, { width: props.Value + '%', backgroundColor: props.backgroundColor }]}></View>
            </View>
        </>
    )
}
const styles = StyleSheet.create(
    {
        MainView: [{
            borderRadius: SIZES.Lradius,
            backgroundColor: COLORS.white,
            height: RFPercentage(1.2),

        },
        SHADOW.light,
        ]
        ,
        SliderView: {
            height: '100%',
            borderRadius: SIZES.Lradius
        }

    }
)

export default Slider
