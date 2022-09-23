import {
  ActivityIndicator,
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
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

const Quiz = props => {
  const navigation = useNavigation();
  const {quizz, PatientInfo} = props.route.params;
  const [quiz, setQuiz] = useState([]);

  const [selectedAswer, setSelectedAswer] = useState(null);
  const [numberQuestion, setnumberQuestion] = useState(0);
  const [QuestionLength, setQuestionLength] = useState(quiz.length);
  const [CorrectQuestion, setCorrectQuestion] = useState(0);
  const [WrongQuestion, setWrongQuestion] = useState(0);
  const [clickedIndex, setclickedIndex] = useState(null);
  const [stopwatch, setStopwatch] = useState(0);

  const [loading, setLoading] = useState(true);
  const dataQuiz = {
    id: null,
    userId: PatientInfo.id,
    quizId: 'c15ae79d-4f64-4205-8514-29719087cff7',
    quiz: null,
    listeningEffort: 0,
    reactionTime: 0,
    userQuestionResults: [],
  };
  const [totalQuizAnswers, setTotalQuizAnswers] = useState({
    userId: PatientInfo.id,
    quizId: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
    quiz: null,
    listeningEffort: 0,
    reactionTime: 0,
    userQuestionResults: [],
  });
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
    console.log('q : ' + JSON.stringify(quizz));
    setLoading(false);
  }, []);

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
                Question {numberQuestion + 1}{' '}
                <Text style={{fontSize: SIZES.h2}}>/{quiz.length}</Text>
              </Text>
            </View>
            <Text
              style={[
                styles.textStyleBtn,
                {color: COLORS.black, fontSize: SIZES.h2 + 4, marginTop: '8%'},
              ]}>
              {quiz[numberQuestion].question.title}
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
                  quiz[numberQuestion].question.colors
                    ? quiz[numberQuestion].question.colors
                    : quiz[numberQuestion].question.images
                }
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                renderItem={({item, index}) =>
                  quiz[numberQuestion].question.colors ? (
                    <View
                      style={[
                        styles.shapeQuestion,
                        {
                          backgroundColor: item.colorCode,
                        },
                      ]}
                    />
                  ) : (
                    <Image
                      source={item.imageBase64}
                      style={styles.shapeQuestion}
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
                <Text style={{fontSize: SIZES.h5}}>millieSecond</Text>
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
            Text={quiz.length == numberQuestion + 1 ? 'Done' : 'Next'}
            onPress={() => {
              selectedAswer == quiz[numberQuestion].question.isExist
                ? setCorrectQuestion(CorrectQuestion + 1)
                : setWrongQuestion(WrongQuestion + 1);

              if (quiz.length > numberQuestion + 1) {
                let answerObject = {
                  userId: PatientInfo.id,
                  questionId: quizz[numberQuestion].questionId,
                  question: null,
                  takenTime: stopwatch,
                  answer: selectedAswer,
                };
                let totalAns = totalQuizAnswers;
                totalAns.userQuestionResults.push(answerObject);
                setTotalQuizAnswers(totalAns);
                setTimeout(() => {
                  console.log(JSON.stringify(totalQuizAnswers));
                }, 2000);
                let newQuiz = quiz;
                newQuiz[numberQuestion].stopwatch = stopwatch;
                newQuiz[numberQuestion].userAnswer = selectedAswer;

                console.log(JSON.stringify(stopwatch + '  ' + selectedAswer));
                setQuiz(newQuiz);

                setStopwatch(0);
                setSelectedAswer(null);
                setclickedIndex(null);
                setnumberQuestion(prev => prev + 1);
              } else {
                let newQuiz = quiz;
                newQuiz = quiz;
                newQuiz[numberQuestion].stopwatch = stopwatch;
                newQuiz[numberQuestion].userAnswer = selectedAswer;
                console.log(JSON.stringify(newQuiz));
                let answerObject = {
                  userId: PatientInfo.id,
                  questionId: quizz[numberQuestion].questionId,
                  question: null,
                  takenTime: stopwatch,
                  answer: selectedAswer,
                };
                let totalAns = totalQuizAnswers;
                totalAns.userQuestionResults.push(answerObject);
                setTotalQuizAnswers(totalAns);
                CreateUserquizs(totalAns);
                console.log(JSON.stringify(totalAns));
                setQuiz(newQuiz);
                setclickedIndex(null);

                setSelectedAswer(null);
                // navigation.navigate('ReportResult');
              }
            }}
          />
        )}
      </View>
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
});
