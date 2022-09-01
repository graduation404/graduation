import {
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
  SmallButton,
} from '../../components';
import {COLORS, Icons, SIZES, SPACING} from '../../config';

const Quiz = props => {
  const [quiz, setQuiz] = useState([
    {
      question: 'IS There Red Color ?',
      correctAnswer: 1,
      color1: '#000',
      color2: '#9867',
      userAnswer: null,
      stopwatch: 0,

    },
    {
      question: 'IS There black Color ?',
      correctAnswer: 0,
      color1: '#000',
      color2: '#fff',
      userAnswer: null,
      stopwatch: 0,
    },
  ]);

  const [selectedAswer, setSelectedAswer] = useState(null);
  const [numberQuestion, setnumberQuestion] = useState(0);
  const [stopwatch, setStopwatch] = useState(0);
  useEffect(() => {
    timer();
  }, [stopwatch]);
  const timer = useCallback(() => {
    if (selectedAswer == null) {
      setTimeout(() => {
        setStopwatch(stopwatch + 1);
        // console.log(JSON.stringify(quiz))
      }, 1);
    } else {
      // setStopwatch(0)
    }
  }, [stopwatch, selectedAswer]);
  const clickAnswer = answer => {
    setSelectedAswer(answer);
  };
  return (
    <ScrollView style={{flexGrow: 1, backgroundColor: COLORS.white}}>
      <View style={styles.Container}>
        <HeaderQuiz />
        <View style={styles.ContainerQuestion}>
          <View
            style={{
              marginTop: -SIZES.height * 0.08,
              backgroundColor: COLORS.white,
              borderRadius: SIZES.height * 0.3,
            }}>
            <ProgressQuiz Text="Total Score" Persentage={50} />
          </View>

          <View
            style={[styles.subRowContainer, {marginTop: -SIZES.height * 0.03}]}>
            <View style={styles.persentageContaier}>
              <Text style={{color: '#457567', marginHorizontal: 3}}>4</Text>
              <View style={styles.persentageView}></View>
            </View>
            <View style={styles.persentageContaier}>
              <View
                style={[
                  styles.persentageView,
                  {
                    backgroundColor: '#f33',
                  },
                ]}></View>
              <Text style={{color: '#f33', marginHorizontal: 3}}>3</Text>
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
            {quiz[numberQuestion].question}
          </Text>
          <View
            style={[
              styles.subRowContainer,
              {
                marginTop: '5%',
              },
            ]}>
            <View
              style={[
                styles.shapeQuestion,
                {
                  backgroundColor: quiz[numberQuestion].color1,
                },
              ]}
            />
            <View
              style={[
                styles.shapeQuestion,
                {
                  backgroundColor: quiz[numberQuestion].color2,
                },
              ]}
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
              style={styles.answerBtn}
              onPress={() => clickAnswer(1)}>
              <Image source={Icons.Check} style={styles.checkAswerStyle} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.answerBtn, {backgroundColor: COLORS.gray}]}
              onPress={() => clickAnswer(0)}>
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
        <SmallButton
          Text={quiz.length == numberQuestion + 1 ? 'Done' : 'Next'}
          onPress={() => {
            if (quiz.length > numberQuestion + 1) {
              let newQuiz = quiz;
              newQuiz[numberQuestion].stopwatch = stopwatch;
              newQuiz[numberQuestion].userAnswer = selectedAswer;
              console.log(JSON.stringify(newQuiz));
              setQuiz(newQuiz);
              setStopwatch(0);
              setSelectedAswer(null);
              setnumberQuestion(numberQuestion + 1);
            } else {
              let newQuiz = quiz;
              newQuiz = quiz;
              newQuiz[numberQuestion].stopwatch = stopwatch;
              newQuiz[numberQuestion].userAnswer = selectedAswer;
              console.log(JSON.stringify(newQuiz));
              setQuiz(newQuiz);
              setSelectedAswer(null);
              alert(JSON.stringify(quiz));
            }
          }}
        />
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
    backgroundColor: COLORS.white,
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