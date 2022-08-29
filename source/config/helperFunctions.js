import React from "react"
import { StyleSheet, View } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import { COLORS, SHADOW, SIZES } from "./theme"


const Range_Function = (age) => {
    let range = ''
    age >= 5 ? (age > 6 ? (age > 10 ? (age > 18 ? (range = '< 18') : (range = '10-18')) : (range = '6-10')) : (range = '5-6')) : (null)
    console.log(range)

    return range

}



const Line = () => {
    return (
        <View style={styles.lineStyle}></View>
    )
}

export {
    Line,
    Range_Function
}






const styles = StyleSheet.create(
    {
        lineStyle:
            [{
                height: SIZES.height * .002,
                width: '90%',
                backgroundColor: COLORS.white,
                elevation: 10,
                marginVertical:RFPercentage(2)
            },
            ]
    }
)

