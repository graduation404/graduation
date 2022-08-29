import React, { useState } from "react";
import { Image, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { Card, StaticHeader } from "../../components";
import { COLORS, Icons, Line, Range_Function, SHADOW, SIZES, SPACING } from "../../config";

const Report = (props) => {
    const [name, setName] = useState('Ahmed Khalifa')
    const [id, setid] = useState(582222)
    const [age, setage] = useState(12)
    const [Time, setTime] = useState('11:00 Am')
    const [Date, setDate] = useState('22 Aug')
    const [Range, setRange] = useState(Range_Function(age))


    return (
        <>
            <View style={styles.container}>
                <StaticHeader Header_name="Report" />


                <Card colors={[COLORS.blue, COLORS.lightGray]} RenderItems={
                    (<>
                        <View style={styles.card_Container}>

                            <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                                <View style={styles.Image_Container}>
                                    <Image source={Icons.Male} style={styles.GenderImage_Style} />
                                </View>

                                <View style={{ marginLeft: RFPercentage(2) }}>
                                    <Text style={styles.name_Style}>{name}</Text>
                                    <Text style={styles.id_Style}>id: {id}</Text>
                                    <Text style={styles.Age_Text}>{age} Years</Text>
                                </View>
                            </View>
                            <View style={{ height: RFPercentage(5), width: RFPercentage(5), borderWidth: RFPercentage(.075), borderColor: COLORS.white, alignItems: 'center', justifyContent: 'center', borderRadius: SIZES.height }}>
                                <Image source={Icons.Next} style={styles.Image_Style} />
                            </View>

                        </View>

                        <Line />

                        <View style={{ flexDirection: 'row', alignItems: 'center', alignSelf: 'flex-start', marginLeft: RFPercentage(1.5) }}>
                            <View style={{ height: 12.5, width: 12.5, backgroundColor: '#82ff73', borderRadius: 15 }} />
                            <Text style={{ fontSize: SIZES.h4, fontWeight: 'bold', color: COLORS.white, marginLeft: RFPercentage(1) }}>Report is Active</Text>
                        </View>

                    </>)
                }
                />

                <Text style={{ paddingHorizontal: RFPercentage(2.5), fontSize: SIZES.h1, color: COLORS.blue, fontWeight: 'bold', marginTop: RFPercentage(2) }}>All Tests For Patient</Text>
                <Text style={{ paddingHorizontal: RFPercentage(2.5), fontSize: SIZES.h2, color: COLORS.black, fontWeight: 'bold', marginTop: RFPercentage(2) }}>Choose Level</Text>

            </View>
        </>
    )
}


const styles = StyleSheet.create({
    container:
    {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    Image_Style: {
        height: SIZES.height * 0.0325,
        width: SIZES.height * 0.0325,
        tintColor: COLORS.blue,
    },
    card_Container:
    {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    Image_Style:
    {
        height: RFPercentage(2.5),
        width: RFPercentage(2.5),
        tintColor: COLORS.white,
    },
    GenderImage_Style:
    {
        height: RFPercentage(5),
        width: RFPercentage(5),
        tintColor: COLORS.blue,
    },
    ageRange_Text:
    {
        fontWeight: 'bold',
        color: COLORS.blue,
        fontSize: SIZES.h4
    },
    ageRange_View:
        [{
            borderRadius: SIZES.height,
            height: RFPercentage(3),
            width: '15%',
            alignItems: 'center',
            elevation: 10,
            backgroundColor: COLORS.white,
        }
            , SHADOW.light
        ],
    Age_Text:
    {
        fontSize: SIZES.h5,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    last_Container_View:
    {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between'
    },
    id_Style:
    {
        fontSize: SIZES.h5,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    name_Style:
    {
        fontSize: SIZES.h3,
        fontWeight: 'bold',
        color: COLORS.white,
    },
    Image_Container:
    {
        height: RFPercentage(7.5),
        width: RFPercentage(7.5),
        borderRadius: SIZES.height,
        backgroundColor: COLORS.white,
        elevation: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    Buttons_Container:
    {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 2
    },
});

export default Report