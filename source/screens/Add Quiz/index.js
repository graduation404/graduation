import {
    StatusBar,
    StyleSheet,
    Text,
    View,
    ScrollView,
    TouchableOpacity,
    Image,
    FlatList,
    TextInput,
    Dimensions,
} from 'react-native';
import {
    Icons,
    Line,
    COLORS,
    sizes,
    SIZES,
    SPACING,
    SHADOW,
} from '../../config';
import { LevelContainer, ProgressQuiz, SmallButton, StaticHeader } from '../../components';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { BookletContainer } from '../../components';
import React, { useEffect, useState } from 'react';

const AddQuiz = () => {
    const [isFocused, setisFocused] = useState(false);
    const [QuestionText, setQuestionText] = useState('');
    const [clickedIndex, setclickedIndex] = useState(null);
    const [YearsValue, setYearsValue] = useState('6-10');
    const [LevelIndex, setLevelIndex] = useState(1);
    const [BookletIndex, setBookletIndex] = useState(1);
    const [selectedAswer, setSelectedAswer] = useState(null);
    const [Questions, setQuestions] = useState([])
    const [QuestionInd, setQuestionInd] = useState(1)
    const [ColorsArray, setColorsArray] = useState(['#7aa', '#455', '#125', '#f88', '#dd7']);

    const AddQuestion = () => {

        if (QuestionText == '' || clickedIndex == null) {
            alert('Please fill All Data')
        } else {
            let Questionss = Questions
            let new_item = {
                question: QuestionText,
                correctAnswer: clickedIndex,
            }
            Questionss.push(new_item)
            setQuestions(Questionss)
            setQuestionInd(QuestionInd + 1)
            setQuestionText('')
            setclickedIndex(null)

        }
    }

    useEffect(() => {
        console.log(Questions)
    },)

    return (
        <>
            <View style={styles.Container}>

                <StaticHeader
                    Header_name={'Add Question'}
                    style={{ backgroundColor: '#A3DEFF' }}
                />
                <View style={styles.Top_Container}>

                    <BookletContainer Text={'(' + YearsValue + ')' + ' Years'} Image={Icons.Age} />
                    <LevelContainer Persentage={50} Text={'Level ' + LevelIndex} Image={Icons.Signal} />
                    <BookletContainer Text={'Booklet ' + BookletIndex} Image={Icons.Books} />

                </View>
                <ScrollView>

                    <Text style={{ alignSelf: 'center', fontSize: RFPercentage(3.5), fontWeight: 'bold', marginTop: RFPercentage(1) }}>Question {QuestionInd} </Text>

                    <View style={{ padding: RFPercentage(2) }}>
                        <Text style={{ fontSize: RFPercentage(3), color: COLORS.blue, fontWeight: 'bold', marginTop: RFPercentage(1) }}>Add Question</Text>
                        <TextInput
                            value={QuestionText}
                            onFocus={() => { setisFocused(true) }}
                            onBlur={() => { setisFocused(false) }}
                            multiline={true}
                            placeholder='Enter Question Here'
                            onChangeText={(value) => {
                                setQuestionText(value)
                            }}

                            style={{
                                borderColor: isFocused ? COLORS.blue : COLORS.white, borderWidth: 1.5, padding: RFPercentage(2), width: '95%', backgroundColor: COLORS.white, elevation: 5, fontSize: RFPercentage(2.1), color: COLORS.black,
                                alignSelf: 'center', marginTop: RFPercentage(2), borderRadius: 15
                            }} />
                    </View>

                    <View style={{ padding: RFPercentage(2) }}>
                        <Text style={{ fontSize: RFPercentage(3), color: COLORS.blue, fontWeight: 'bold', marginTop: RFPercentage(1) }}>Answer</Text>
                        <View
                            style={[
                                styles.subRowContainer,
                                {
                                    marginTop: '5%',
                                },
                            ]}>
                            <TouchableOpacity style={[styles.answerBtn, { backgroundColor: clickedIndex == null ? COLORS.white : (clickedIndex == 0 ? COLORS.white : COLORS.gray) }]}
                                onPress={() => {
                                    setSelectedAswer(1)
                                    setclickedIndex(1)
                                }} >
                                <Image source={Icons.Check} style={styles.checkAswerStyle} />
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.answerBtn, { backgroundColor: clickedIndex == null ? COLORS.white : (clickedIndex == 0 ? COLORS.gray : COLORS.white) }]}
                                onPress={() => {
                                    setSelectedAswer(0)
                                    setclickedIndex(0)
                                }} >
                                <Image source={Icons.Cancel} style={[styles.checkAswerStyle, { height: SPACING.l, },]} />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style={{ padding: RFPercentage(2) }}>
                        <Text style={{ fontSize: RFPercentage(3), color: COLORS.blue, fontWeight: 'bold', marginTop: RFPercentage(1) }}>Choose Two Colors</Text>
                        <FlatList
                            data={ColorsArray}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity activeOpacity={.8} style={{ paddingVertical: RFPercentage(3), width: '95%', borderRadius: 10, alignSelf: 'center', marginTop: RFPercentage(2), backgroundColor: item }} />

                            )}
                        />

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                        <SmallButton onPress={() => {
                            AddQuestion()
                        }} Text={'Another Question'} style={{ alignSelf: 'center', marginTop: RFPercentage(3) }} />
                        <SmallButton Text={'Done'} style={{ alignSelf: 'center', marginTop: RFPercentage(3) }} />
                    </View>

                </ScrollView>
            </View>

        </>
    );
};

export default AddQuiz;

const styles = StyleSheet.create({
    Container: {
        flex: 1,
        backgroundColor: COLORS.white,
    },
    Top_Container: {
        width: '100%',
        height: SIZES.height * 0.2,
        backgroundColor: '#A3DEFF',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingRight: RFPercentage(2)
    },
    progressContainer: {
        width: '40%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bottom_Container: {
        width: '100%',
        alignItems: 'center',
    },
    Main_view: {
        height: RFPercentage(7.7),
        borderRadius: SIZES.height,
        width: SIZES.width * 0.9,
        backgroundColor: COLORS.white,
        elevation: 3,
        flexDirection: 'row',
        marginTop: RFPercentage(2),
        marginBottom: 2,
    },
    Trial_View: [
        {
            height: '100%',
            width: '17%',
            borderRadius: SIZES.Lradius,
            backgroundColor: COLORS.blue,
            alignItems: 'center',
            justifyContent: 'center',
        },
        SHADOW.dark,
    ],
    trialText: {
        color: COLORS.blue,
        // alignSelf: 'center',
        fontSize: SIZES.h2,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    Time_View: [
        {
            height: '100%',
            alignSelf: 'center',
            width: '65%',
            justifyContent: 'center',
            alignItems: 'center',
        },
    ],
    Image_View: [
        {
            height: '100%',
            width: '16%',

            alignItems: 'center',
            justifyContent: 'center',
        },
        SHADOW.dark,
    ],
    Image_Style: {
        height: RFPercentage(4.2),
        width: SIZES.height * 0.04,
    },
    container: {
        width: SIZES.width * 0.275,
        height: RFPercentage(17.5),
        borderRadius: SIZES.Sradius,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: RFPercentage(2.5),
        marginVertical: RFPercentage(2.5),
        marginLeft: RFPercentage(2.25),
        elevation: 10,
    },
    LevelImage: {
        height: RFPercentage(4),
        width: RFPercentage(4),
        marginBottom: RFPercentage(-6),
        tintColor: COLORS.blue,
    },
    BookletImage: {
        height: RFPercentage(6.5),
        width: RFPercentage(6.5),
        tintColor: COLORS.blue,
    },
    ProgressStyle: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    Text: {
        marginTop: RFPercentage(1.5),
        fontWeight: 'bold',
        fontSize: SIZES.h2,
        color: COLORS.blue,
    },
    blue_contianer: {
        width: '100%',
        height: SIZES.height * 0.19,
        alignItems: 'center',
        justifyContent: 'center',
    },
    blue_view: {
        width: SIZES.width * 0.9,
        height: '90%',
        backgroundColor: '#A3DEFF',
        borderRadius: 13,
        marginTop: 15,
    },

    Reaction_Time_Title: {
        color: COLORS.blue,
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 5,
        marginLeft: 10,
    },
    Reaction_Time_Contianer: {
        backgroundColor: COLORS.blue,
        height: '15%',
        borderRadius: 15,
        alignSelf: 'center',
        marginTop: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
    Reaction_Time_Text: {
        color: COLORS.white,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },

    touchableopacity_style: {
        backgroundColor: COLORS.blue,
        width: '35%',
        height: '5%',
        borderRadius: 15,
        alignSelf: 'center',
        marginBottom: 35,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    done_style: {
        color: COLORS.white,
        fontWeight: 'bold',
        fontSize: 15,
    },
    ContainerQuestion: {
        width: '90%',
        height: SIZES.height * 0.65,
        backgroundColor: COLORS.white,
        elevation: 4,
        borderRadius: SIZES.Sradius,
        marginTop: -SIZES.height * 0.23,
        marginBottom: SPACING.xl,
        alignItems: 'center',
    },
    btnNext: {
        width: '50%',
        height: SIZES.inputHeight,
        backgroundColor: COLORS.blue,
        marginBottom: SPACING.s,
        borderRadius: SIZES.Sradius,
        elevation: 4,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyleBtn: {
        color: COLORS.white,
        fontSize: SIZES.h2 + 5,
        fontWeight: '700',
    },
    subRowContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '2%',
        paddingHorizontal: '2%',
    },
    persentageContaier: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '37%',
    },
    persentageView: {
        width: '90%',
        height: SIZES.height * 0.02,
        borderRadius: SIZES.Sradius,
        backgroundColor: '#00ff44',
    },
    timerContainer: {
        alignSelf: 'flex-end',
        marginTop: '5%',
        height: SIZES.inputHeight,
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        elevation: 3,
        backgroundColor: COLORS.white,
        paddingVertical: SPACING.s,
        paddingHorizontal: SPACING.m,
        borderTopLeftRadius: SIZES.Sradius,
        borderBottomLeftRadius: SIZES.Sradius,
    },
    stopwatchStyle: {
        width: SIZES.h1 * 2,
        height: SIZES.h1 * 2,
        resizeMode: 'contain',
    },
    shapeQuestion: {
        width: '47%',
        height: SIZES.height * 0.2,
        backgroundColor: '#639fff',
        borderRadius: SIZES.Sradius,
        // elevation: 1,
        borderWidth: 0.8,
        borderColor: COLORS.gray,
    },
    answerBtn: {
        width: '47%',
        height: SIZES.inputHeight,
        borderRadius: SIZES.Sradius,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    checkAswerStyle: {
        width: SIZES.avatar - 5,
        height: SPACING.xl - SPACING.vS,
        resizeMode: 'contain',
        paddingVertical: SPACING.s,
    },
});

