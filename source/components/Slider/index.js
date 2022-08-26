import React from "react"
import { StyleSheet, View } from "react-native"
import { MainColors, shadow, sizes } from "../../config/theme"

const Slider = (props) => {
    return (
        <>
            <View style={[styles.MainView, shadow.dark]}>
                <View style={[styles.SliderView, { width: props.Value + '%' }]}></View>
            </View>
        </>
    )
}
const styles = StyleSheet.create(
    {
        MainView: {
            alignSelf: 'center',
            width: sizes.width * .9,
            borderRadius: sizes.radius,
            backgroundColor: MainColors.white,
            height: sizes.height * .015
        }
        ,
        SliderView: {
            height: '100%',
            backgroundColor: MainColors.blue,
            borderRadius: sizes.radius
        }

    }
)

export default Slider