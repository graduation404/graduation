import React from "react"
import { StyleSheet, View } from "react-native"
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
            alignSelf: 'center',
            width: '100%',
            borderRadius: SIZES.Lradius,
            backgroundColor: COLORS.white,
            height: SIZES.height * .0125,
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