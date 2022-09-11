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

const AddQuiz = ({ route, navigation }) => {
    const { ageGroup, ChooseBooklet, ChooseLevel, LevelLength } = route.params

    const [isFocused, setisFocused] = useState(false);
    const [QuestionText, setQuestionText] = useState('');
    const [clickedIndex, setclickedIndex] = useState(null);
    const [YearsValue, setYearsValue] = useState(ageGroup + '');
    const [LevelIndex, setLevelIndex] = useState(ChooseLevel);
    const [BookletIndex, setBookletIndex] = useState(ChooseBooklet);
    const [Persentage, setPersentager] = useState((100 / LevelLength) * ChooseLevel);
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
        // console.log(Persentage)
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
                    <LevelContainer Persentage={Persentage} Text={'Level ' + LevelIndex} Image={Icons.Signal} />
                    <BookletContainer Text={'Booklet ' + BookletIndex} Image={Icons.Books} />

                </View>
                <ScrollView>

                    <Text style={styles.WordQuestion}>Question {QuestionInd} </Text>

                    <View style={{ padding: RFPercentage(2) }}>
                        <Text style={styles.HeadText}>Add Question</Text>
                        <TextInput
                            value={QuestionText}
                            onFocus={() => { setisFocused(true) }}
                            onBlur={() => { setisFocused(false) }}
                            multiline={true}
                            placeholder='Enter Question Here'
                            onChangeText={(value) => {
                                setQuestionText(value)
                            }}

                            style={[styles.TextInputStyle, { borderColor: isFocused ? COLORS.blue : COLORS.white, }]} />
                    </View>

                    <View style={{ padding: RFPercentage(2) }}>
                        <Text style={styles.HeadText}>Answer</Text>
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
                        <Text style={styles.HeadText}>Choose Two Colors</Text>
                        <FlatList
                            data={ColorsArray}
                            renderItem={({ item, index }) => (
                                <TouchableOpacity activeOpacity={.8} style={[styles.ColorView, { backgroundColor: item }]} />

                            )}
                        />

                    </View>
                    <View style={styles.ButtonsContainer}>
                        <SmallButton onPress={() => {
                            AddQuestion()
                        }} Text={'Another Question'} style={styles.SmallButton} />
                        <SmallButton Text={'Done'} style={styles.SmallButton} />
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
    WordQuestion:
    {
        alignSelf: 'center',
        fontSize: RFPercentage(3.5),
        fontWeight: 'bold',
        marginTop: RFPercentage(1)
    },
    HeadText:
    {
        fontSize: RFPercentage(3),
        color: COLORS.blue,
        fontWeight: 'bold',
        marginTop: RFPercentage(1)
    },
    TextInputStyle:
    {
        borderWidth: 1.5,
        padding: RFPercentage(2),
        width: '95%',
        backgroundColor: COLORS.white,
        elevation: 5,
        fontSize: RFPercentage(2.1),
        color: COLORS.black,
        alignSelf: 'center',
        marginTop: RFPercentage(2),
        borderRadius: 15
    },
    subRowContainer: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: '2%',
        paddingHorizontal: '2%',
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
    ColorView:
    {
        paddingVertical: RFPercentage(3),
        width: '95%',
        borderRadius: 10,
        alignSelf: 'center',
        marginTop: RFPercentage(2),
    },
    ButtonsContainer:
    {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    SmallButton:
    {
        alignSelf: 'center',
        marginTop: RFPercentage(3)
    }
});

