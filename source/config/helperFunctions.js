import React from "react"
import { StyleSheet, View } from "react-native"
import { COLORS, SHADOW, SIZES } from "./theme"


const Range_Function = (age) => {
    let range = ''
    age >= 5 ? (age > 6 ? (age > 10 ? (age > 18 ? (range = '< 18') : (range = '10-18')) : (range = '6-10')) : (range = '5-6')) : (null)

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
                width: SIZES.width * .9,
                backgroundColor: COLORS.lightGray,
                elevation: 10, marginTop: -100
            },
            SHADOW.dark
            ]
    }
)

