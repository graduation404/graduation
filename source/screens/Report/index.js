import React, { useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import { BookletContainer, Card, LargeButton, LevelContainer, StaticHeader } from "../../components";
import { COLORS, Icons, Line, SHADOW, SIZES, } from "../../config";
import * as Animatable from 'react-native-animatable';

const Report = (props) => {
    const [name, setName] = useState('Ahmed Khalifa')
    const [id, setid] = useState(582222)
    const [age, setage] = useState(12)
    const [LevelIndex, setLevelIndex] = useState(null)
    const [BookletIndex, setBookletIndex] = useState(null)

    const [LevelsArray, setLevelsArray] = useState([
        {
            Text: 'Level 1',
            Image: Icons.Signal,
            Persentage: 40
        },
        {
            Text: 'Level 2',
            Image: Icons.Signal,
            Persentage: 80
        },
        {
            Text: 'Level 3',
            Image: Icons.Signal,
            Persentage: 5
        },
        {
            Text: 'Level 4',
            Image: Icons.Signal,
            Persentage: 10
        },
    ])

    const [BookletArray, setBookletArray] = useState(
        [
            {
                id: 1,
                Array: [
                    {
                        Text: 'Booklet 1',
                        Image: Icons.Books,
                    },
                    {
                        Text: 'Booklet 2',
                        Image: Icons.Books,
                    },
                    {
                        Text: 'Booklet 3',
                        Image: Icons.Books,
                    },
                    {
                        Text: 'Booklet 4',
                        Image: Icons.Books,
                    },
                ]
            },
            {
                id: 2,
                Array: [
                    {
                        Text: 'Booklet 1',
                        Image: Icons.Books,
                    },

                    {
                        Text: 'Booklet 3',
                        Image: Icons.Books,
                    },

                ]
            },
            {
                id: 3,
                Array: [
                    {
                        Text: 'Booklet 1',
                        Image: Icons.Books,
                    },
                    {
                        Text: 'Booklet 2',
                        Image: Icons.Books,
                    },
                    {
                        Text: 'Booklet 3',
                        Image: Icons.Books,
                    },

                ]
            },
            {
                id: 4,
                Array: [
                    {
                        Text: 'Booklet 1',
                        Image: Icons.Books,
                    },

                ]
            },

        ]
    )

    const LevelsArrayList = () => {
        return (
            <>
                <View style={{ height: RFPercentage(23.5), paddingRight: RFPercentage(1.5) }}>
                    <FlatList
                        data={LevelsArray}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item, index }) => (
                            <>
                                <LevelContainer
                                    onPress={() => { setLevelIndex(index), setBookletIndex(null) }}
                                    style={{ backgroundColor: COLORS.gray, borderWidth: LevelIndex == index ? RFPercentage(0.3) : RFPercentage(0), borderColor: LevelIndex == index ? COLORS.blue : null, }}
                                    Text={item.Text} Image={item.Image} Persentage={item.Persentage} />
                            </>
                        )
                        }
                    />
                </View>
            </>
        )
    }

    const BookletArrayList = () => {
        return (
            <>
                <View style={{ height: RFPercentage(23.5), paddingRight: RFPercentage(1.5) }}>
                    <FlatList
                        data={BookletArray[LevelIndex].Array}
                        showsHorizontalScrollIndicator={false}
                        horizontal={true}
                        renderItem={({ item, index }) => (
                            <>
                                <BookletContainer
                                    onPress={() => { setBookletIndex(index) }}
                                    style={{backgroundColor: COLORS.gray, borderWidth: BookletIndex == index ? RFPercentage(0.3) : RFPercentage(0), borderColor: BookletIndex == index ? COLORS.blue : null, }}
                                    Text={item.Text} Image={item.Image} Persentage={item.Persentage} />
                            </>
                        )
                        }
                    />
                </View>
            </>
        )
    }


    const CardView = () => {
        return (
            <Card colors={[COLORS.blue, COLORS.lightGray]} RenderItems={
                (<>
                    <View style={styles.card_Container}>

                        <View style={styles.BigContainer}>
                            <View style={styles.Image_Container}>
                                <Image source={Icons.Male} style={styles.GenderImage_Style} />
                            </View>

                            <View style={styles.DataContainer}>
                                <Text style={styles.name_Style}>{name}</Text>
                                <Text style={styles.id_Style}>id: {id}</Text>
                                <Text style={styles.Age_Text}>{age} Years</Text>
                            </View>
                        </View>
                        <View style={styles.backIconStyle}>
                            <Image source={Icons.Next} style={styles.Image_Style} />
                        </View>

                    </View>

                    <Line />

                    <View style={styles.MainOnline_View}>
                        <View style={styles.online_View} />
                        <Text style={styles.online_Text}>Report is Active</Text>
                    </View>

                </>)
            }
            />
        )
    }

    return (
        <>
            <View style={styles.container}>
                <StaticHeader Header_name="Report" />

                <CardView />


                <Text style={styles.LargeText}>All Tests For Patient</Text>
                <Text style={styles.ChooseText}>Choose Level</Text>

                <LevelsArrayList />

                {LevelIndex === null ? (null) : (
                    <>

                        <Text style={styles.ChooseText}>Choose Booklet</Text>

                        <BookletArrayList />
                    </>
                )}

                {BookletIndex === null ? (null) : (
                    <>
                        <Animatable.View animation={'zoomInUp'}>
                            <LargeButton onPress={()=>{alert('See Result')}} Text="See Result" />
                        </Animatable.View>
                    </>
                )}
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
    BigContainer:
    {
        flexDirection: 'row',
        alignItems: 'center',
    },
    DataContainer:
    {
        marginLeft: RFPercentage(2)
    },
    backIconStyle:
    {
        height: RFPercentage(5),
        width: RFPercentage(5),
        borderWidth: RFPercentage(.075),
        borderColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: SIZES.height
    },
    ChooseText:
    {
        paddingHorizontal: RFPercentage(2.5),
        fontSize: SIZES.h2,
        color: COLORS.black,
        fontWeight: 'bold',
        marginTop: RFPercentage(2)
    },
    LargeText:
    {
        paddingHorizontal: RFPercentage(2.5),
        fontSize: SIZES.h1,
        color: COLORS.blue,
        fontWeight: 'bold',
        marginTop: RFPercentage(2)
    },
    MainOnline_View:
    {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'flex-start',
        marginLeft: RFPercentage(1.5)
    },
    online_View:
    {
        height: 12.5,
        width: 12.5,
        backgroundColor: '#82ff73',
        borderRadius: 15
    },
    online_Text:
    {
        fontSize: SIZES.h4,
        fontWeight: 'bold',
        color: COLORS.white,
        marginLeft: RFPercentage(1)
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

});

export default Report