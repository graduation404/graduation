import React from "react";
import { Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { COLORS, SIZES } from "../../config";

const SmallContainer = () => {
    return (
        <>
            <View style={{ width: '27.5%', height: RFPercentage(17.5), backgroundColor: COLORS.gray, borderRadius:SIZES.Sradius}}></View>
        </>
    )
}
export default SmallContainer