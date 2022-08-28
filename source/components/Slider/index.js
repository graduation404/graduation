import React from "react"
import { StyleSheet, View } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import { COLORS, SHADOW, SIZES } from "../../config"

const Slider = (props) => {
    return (
        <>
            <View style={styles.MainView}>
                <View style={[styles.SliderView, { width: props.Value + '%' }]}></View>
            </View>
        </>
    )
}
const styles = StyleSheet.create(
    {
        MainView: [{
            width: '97.5%',
            borderRadius: SIZES.Lradius,
            backgroundColor: COLORS.white,
            height: RFPercentage(1.2),
            elevation:4,

        },
        SHADOW.light,
        ]
        ,
        SliderView: {
            height: '100%',
            backgroundColor: COLORS.blue,
            borderRadius: SIZES.Lradius
        }

    }
)

export default Slider
