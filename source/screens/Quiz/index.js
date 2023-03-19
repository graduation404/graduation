import {
  ActivityIndicator,
  FlatList,
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
// import Tts from 'react-native-tts';
import {
  HeaderQuiz,
  LevelContainer,
  ProgressQuiz,
  Slider,
  SmallButton,
} from '../../components';
import {COLORS, Icons, SIZES, SPACING} from '../../config';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {CreateUserquizs, GetQuizsInLevelAndBooklet} from '../../config/utils';
import {useTranslation} from 'react-i18next';
import ModalQuiz from '../../components/ModalQuiz';
// import SpeechAndroid from 'react-native-android-voice';
const Quiz = props => {
  const {t, i18n} = useTranslation();
  const {navigation} = props;
  const {quizz, PatientInfo} = props.route.params;
  const [quiz, setQuiz] = useState([]);
  const [LoadingSendResult, setLoadingSendResult] = useState(false);
  const [selectedAswer, setSelectedAswer] = useState(null);
  const [numberQuestion, setnumberQuestion] = useState(0);
  const [QuestionLength, setQuestionLength] = useState(
    quizz[0]?.quizQuestions?.length,
  );
  const [CorrectQuestion, setCorrectQuestion] = useState(0);
  const [WrongQuestion, setWrongQuestion] = useState(0);
  const [clickedIndex, setclickedIndex] = useState(null);
  const [stopwatch, setStopwatch] = useState(0);

  const [loading, setLoading] = useState(true);
  const [valInput, setValInput] = useState(0);

  const [modal, setModal] = React.useState(false);

  const [totalQuizAnswers, setTotalQuizAnswers] = useState({
    userId: PatientInfo.id,
    quizId: quizz[0].quizQuestions[0].quizId,
    quiz: null,
    listeningEffort: 0,
    reactionTime: 0,
    userQuestionResults: [],
    QuizEffortDual: null,
  });
  const handleChangeTotalQuizAns = (text, value) => {
    setTotalQuizAnswers(prev => ({...prev, [text]: value}));
  };
  // useEffect(() => {
  //   handleChangeTotalQuizAns('QuizEffortDual',QuizEffortDual);
  // }, [valInput]);
  useEffect(() => {
    timer();
  }, [stopwatch]);
  const timer = useCallback(() => {
    if (selectedAswer == null) {
      setTimeout(() => {
        setStopwatch(stopwatch + 1);
      }, 1);
    } else {
    }
  }, [stopwatch, selectedAswer]);

  const clickAnswer = answer => {
    setSelectedAswer(answer);
  };

  useEffect(() => {
    setLoading(true);
    setQuiz(quizz);
    // console.log('q : ' + JSON.stringify(quizz));
    setLoading(false);
  }, []);

  const sendQuiz = async () => {
    let newQuiz = quiz;
    newQuiz = quiz;
    newQuiz[0].quizQuestions[numberQuestion].stopwatch = stopwatch;
    newQuiz[0].quizQuestions[numberQuestion].userAnswer = selectedAswer;
    // console.log(JSON.stringify(newQuiz));
    let answerObject = {
      userId: PatientInfo.id,
      questionId: quizz[0].quizQuestions[numberQuestion].questionId,
      question: null,
      takenTime: stopwatch,
      answer: selectedAswer ? true : false,
    };
    let totalAns = totalQuizAnswers;
    totalAns.userQuestionResults.push(answerObject);
    setTotalQuizAnswers(totalAns);
    if (totalQuizAnswers.QuizEffortDual != null) {
      setLoadingSendResult(true);
      try {
        await CreateUserquizs(totalAns);
        console.log(JSON.stringify(totalAns));
        setQuiz(newQuiz);
        setclickedIndex(null);
        setSelectedAswer(null);
        setLoadingSendResult(false);

        navigation.replace('Home');
      } catch (error) {
        ToastAndroid.show(
          'Server Error',
          ToastAndroid.SHORT,
          ToastAndroid.BOTTOM,
        );
      }
    } else {
      ToastAndroid.show(
        'Please , Write Dual Effort ',
        ToastAndroid.SHORT,
        ToastAndroid.BOTTOM,
      );
    }
  };
  // const speech = async textt => {
  //   Tts.speak(textt)
  // };
  return (
    <ScrollView style={{flexGrow: 1, backgroundColor: COLORS.white}}>
      <View style={styles.Container}>
        <HeaderQuiz />
        {loading ? (
          <View
            style={{
              flex: 0.75,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <ActivityIndicator size="large" color={COLORS.blue} />
          </View>
        ) : (
          <View style={styles.ContainerQuestion}>
            <View
              style={{
                marginTop: -SIZES.height * 0.08,
                backgroundColor: COLORS.white,
                borderRadius: SIZES.height * 0.3,
              }}>
              <ProgressQuiz
                // Text="Total Score"
                Persentage={((CorrectQuestion / QuestionLength) * 100) | 0}
              />
            </View>

            <View
              style={[
                styles.subRowContainer,
                {marginTop: -SIZES.height * 0.03},
              ]}>
              <View style={styles.persentageContaier}>
                <Text style={{color: '#457567', marginHorizontal: 3}}>
                  {CorrectQuestion}
                </Text>
                <Slider
                  width="90%"
                  backgroundColor={'green'}
                  Value={(CorrectQuestion / QuestionLength) * 100}
                />
              </View>

              <View style={styles.persentageContaier}>
                <Slider
                  width="90%"
                  backgroundColor={'red'}
                  Value={(WrongQuestion / QuestionLength) * 100}
                />
                <Text style={{color: '#f33', marginHorizontal: 3}}>
                  {WrongQuestion}
                </Text>
              </View>
            </View>

            <View>
              <Text
                style={[
                  styles.textStyleBtn,
                  {color: COLORS.blue, marginTop: '8%'},
                ]}>
                {t('common:Question')} {numberQuestion + 1}{' '}
                <Text style={{fontSize: SIZES.h2}}>/{QuestionLength}</Text>
              </Text>
            </View>
            <Text
              style={[
                styles.textStyleBtn,
                {color: COLORS.black, fontSize: SIZES.h2 + 4, marginTop: '8%'},
              ]}
              // onPress={() => {
              //   speech(quizz[0].quizQuestions[numberQuestion].question.title);
              // }}
              >
              {quizz[0].quizQuestions[numberQuestion].question.title}
            </Text>
            <View
              style={[
                styles.subRowContainer,
                {
                  marginTop: '5%',
                },
              ]}>
              <FlatList
                data={
                  quizz[0].quizQuestions[numberQuestion].question.colors.length
                    ? quizz[0].quizQuestions[numberQuestion].question.colors
                    : quizz[0].quizQuestions[numberQuestion].question.images
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) =>
                  quizz[0].quizQuestions[numberQuestion].question.colors
                    .length ? (
                    <View
                      style={[
                        styles.shapeQuestion,
                        {
                          backgroundColor: item.colorCode,
                          width:
                            (SIZES.width - SIZES.width / 5) /
                            quizz[0].quizQuestions[numberQuestion].question
                              .colors.length,
                        },
                      ]}
                    />
                  ) : (
                    <Image
                      source={{
                        uri: `data:${item.mime};base64,${item.bindingFile}`,
                      }}
                      style={[
                        styles.shapeQuestion,
                        {
                          width:
                            (SIZES.width - SIZES.width / 5) /
                            quizz[0].quizQuestions[numberQuestion].question
                              .images.length,
                        },
                      ]}
                      resizeMode="contain"
                    />
                  )
                }
              />
            </View>
            <View style={styles.timerContainer}>
              <Image source={Icons.stopwatch} style={styles.stopwatchStyle} />
              <Text style={{textAlign: 'center', color: COLORS.blue}}>
                {stopwatch + '\n'}
                <Text style={{fontSize: SIZES.h5}}>
                  {t('common:millieSecond')}
                </Text>
              </Text>
            </View>
            <View
              style={[
                styles.subRowContainer,
                {
                  marginTop: '5%',
                },
              ]}>
              <TouchableOpacity
                style={[
                  styles.answerBtn,
                  {
                    backgroundColor:
                      clickedIndex == null
                        ? COLORS.white
                        : clickedIndex == false
                        ? COLORS.white
                        : COLORS.gray,
                  },
                ]}
                onPress={() => {
                  clickAnswer(1);
                  setclickedIndex(1);
                }}>
                <Image source={Icons.Check} style={styles.checkAswerStyle} />
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.answerBtn,
                  {
                    backgroundColor:
                      clickedIndex == null
                        ? COLORS.white
                        : clickedIndex == false
                        ? COLORS.gray
                        : COLORS.white,
                  },
                ]}
                onPress={() => {
                  clickAnswer(0);
                  setclickedIndex(false);
                }}>
                <Image
                  source={Icons.Cancel}
                  style={[
                    styles.checkAswerStyle,
                    {
                      height: SPACING.l,
                    },
                  ]}
                />
              </TouchableOpacity>
            </View>
          </View>
        )}

        {clickedIndex == null ? null : (
          <SmallButton
            Text={
              quiz[0].quizQuestions.length == numberQuestion + 1
                ? 'Done'
                : 'Next'
            }
            onPress={() => {
              selectedAswer ==
              quizz[0].quizQuestions[numberQuestion].question.isExist
                ? setCorrectQuestion(CorrectQuestion + 1)
                : setWrongQuestion(WrongQuestion + 1);

              if (quizz[0].quizQuestions.length > numberQuestion + 1) {
                let answerObject = {
                  userId: PatientInfo.id,
                  questionId: quizz[0].quizQuestions[numberQuestion].questionId,
                  question: null,
                  takenTime: stopwatch,
                  answer: selectedAswer ? true : false,
                };
                let totalAns = totalQuizAnswers;
                totalAns.userQuestionResults.push(answerObject);
                setTotalQuizAnswers(totalAns);
                setTimeout(() => {
                  // console.log(JSON.stringify(totalQuizAnswers));
                }, 2000);
                let newQuiz = quiz;
                newQuiz[0].quizQuestions[numberQuestion].stopwatch = stopwatch;
                newQuiz[0].quizQuestions[numberQuestion].userAnswer =
                  selectedAswer;

                // console.log(JSON.stringify(stopwatch + '  ' + selectedAswer));
                setQuiz(newQuiz);

                setStopwatch(0);
                setSelectedAswer(null);
                setclickedIndex(null);
                setnumberQuestion(prev => prev + 1);
              } else {
                // setLoadingSendResult
                setModal(true);
              }
            }}
            Loading={LoadingSendResult}
          />
        )}
        <Modal style={styles.modalStyle} visible={LoadingSendResult}>
          <ActivityIndicator color={COLORS.blue} size="large" />
        </Modal>
      </View>
      <ModalQuiz
        Loading={LoadingSendResult}
        setModal={setModal}
        modal={modal}
        sendQuiz={sendQuiz}
        valInput={totalQuizAnswers.QuizEffortDual}
        setValInput={handleChangeTotalQuizAns}
      />
    </ScrollView>
  );
};

export default Quiz;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
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
    width: RFValue(140),
    height: SIZES.height * 0.2,
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.Sradius,
    // elevation: 1,
    borderWidth: 0.8,
    borderColor: COLORS.gray,
    marginHorizontal: SPACING.vS,
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
  modalStyle: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 10000,
  },
});
