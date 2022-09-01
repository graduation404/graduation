import React from "react"
import { Image, ProgressViewIOSComponent, StyleSheet, Text, View } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import Icons from "./Icons"
import { COLORS, SHADOW, SIZES } from "./theme"


const Range_Function = (age) => {
    let range = ''
    age >= 5 ? (age > 6 ? (age > 10 ? (age > 18 ? (range = '< 18') : (range = '10-18')) : (range = '6-10')) : (range = '5-6')) : (null)
    // console.log(range)

    return range

}



const Line = () => {
    return (
        <View style={styles.lineStyle}></View>
    )
}

const GuideLineSubText = (props) => {
    return (
        <View style={styles.GuideContainer}>
            <View style={styles.GuideView} />
            <Text style={styles.GuideText}>{props.Text}{props.Image? <Image
              source={props.Image}
              style={{ height: RFPercentage(2), width: RFPercentage(2) }}
            />:null}</Text>
           
        </View>
    )
}


export {
    Line,
    Range_Function,
    GuideLineSubText
}






const styles = StyleSheet.create(
    {
        lineStyle:
            [{
                height: SIZES.height * .002,
                width: '100%',
                backgroundColor: COLORS.white,
                elevation: 10,
                marginVertical: RFPercentage(2),
                marginLeft: RFPercentage(2),
            },
            ],
        GuideContainer: {
            flexDirection: 'row',
            marginBottom:RFPercentage(2),
            width:'97.5%'
        },
        GuideView:
        {
            height: 12.5,
            width: 12.5,
            backgroundColor: COLORS.blue,
            marginTop: RFPercentage(1),
            borderRadius: 15,
        },
        GuideText:
        {
            fontSize: RFPercentage(3),
            color: COLORS.blue,
            marginLeft: RFPercentage(1),
            flexWrap:'wrap'
        }

    }
)

