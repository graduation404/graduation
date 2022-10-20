import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
  TextInput,
  Alert,
  ToastAndroid
} from 'react-native';
import { Icons, Line, COLORS, sizes, SIZES, SPACING, SHADOW } from '../../config';
import {
  LevelContainer,
  ModalColors,
  ModalImgs,
  SmallButton,
  StaticHeader,
} from '../../components';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { BookletContainer } from '../../components';
import React, { useEffect, useState } from 'react';
import { CreateQuiz } from '../../config/utils';
import { handleAgeGroup } from '../../config/helperFunctions';
import {useTranslation} from 'react-i18next'


const AddQuiz = ({ route, navigation }) => {
  const { ageGroup, ChooseBooklet, ChooseLevel, LevelLength } = route.params;

  const { t , i18n} = useTranslation();
  const [modalColorVisible, setModalColorVisible] = useState(false);
  const [modalImgVisible, setModalImgVisible] = useState(false);
  const [listColors, setlistColors] = useState([]);
  const [listImgs, setlistImgs] = useState([]);
  const [loadingBtn, setloadingBtn] = useState(false);

  const [isFocused, setisFocused] = useState(false);
  const [QuestionText, setQuestionText] = useState('');
  const [clickedIndex, setclickedIndex] = useState(null);
  const [YearsValue, setYearsValue] = useState(handleAgeGroup(ageGroup));
  const [LevelIndex, setLevelIndex] = useState(ChooseLevel);
  const [BookletIndex, setBookletIndex] = useState(ChooseBooklet);
  const [Persentage, setPersentager] = useState(
    (100 / LevelLength) * ChooseLevel,
  );
  const [selectedAswer, setSelectedAswer] = useState(null);
  const [Questions, setQuestions] = useState([]);
  const [QuestionInd, setQuestionInd] = useState(1);

  const AddQuestion = () => {
    if (QuestionText == '' || clickedIndex == null && (listColors != [] || listImgs != [])) {

      ToastAndroid.showWithGravity(t('common:ToastAndroidFillData'), 
      ToastAndroid.LONG, ToastAndroid.BOTTOM)
    } else {
      let new_item = {
        question:
        {
          title: QuestionText,
          colors: listColors.length == 0 ? null : listColors,
          images: listImgs.length == 0 ? null : listImgs,
          isExist: selectedAswer ? true : false
        }
      };
      Questions.push(new_item);

      setQuestionInd(QuestionInd + 1);
      setQuestionText('');
      setlistColors([])
      setlistImgs([])
      setclickedIndex(null);


    }
  };


  useEffect(() => {
    // ageGroup
    // console.log(ageGroup)
  }, [])

  const SendQuestions = () => {

    if (QuestionText == '' || clickedIndex == null && (listColors != [] || listImgs != [])) {
      if (Questions.length == 0) {
        Alert.alert("Warning",
          t("common:AlertDeleteUser"),
          [
            {
              text: t("common:CancleAlert"),
            },
            {
              text:t("common:SubmitAlert"),
              onPress: () => navigation.navigate('Home')
            },
          ],
        );
      }
      else {
        setloadingBtn(true)
        try {
          CreateQuiz(
            {
              level: ChooseLevel,
              booklet: ChooseBooklet,
              ageGroup: ageGroup,
              quizQuestions: Questions
  
            }
          )
        } catch (error) {
          ToastAndroid.showWithGravity(
              t("common:ToastAndroidTryAgain"),
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
          );
        }
        
        setloadingBtn(false)
        navigation.navigate('Home')
      }

    } else {
      if (QuestionText == '' || clickedIndex == null && (listColors != [] || listImgs != [])) {
              navigation.navigate('Home')
      } else {
        let new_item = {
          question:
          {
            title: QuestionText,
            colors: listColors.length == 0 ? null : listColors,
            images: listImgs.length == 0 ? null : listImgs,
            isExist: selectedAswer ? true : false
          }
        };
        Questions.push(new_item);
  
        setQuestionInd(QuestionInd + 1);
        setQuestionText('');
        setlistColors([])
        setlistImgs([])
        setclickedIndex(null);
  
  
        CreateQuiz(
          {
            level: ChooseLevel,
            booklet: ChooseBooklet,
            ageGroup: ageGroup,
            quizQuestions: Questions

          }
        )
        navigation.navigate('Home')
      
      }
    }



  }


  useEffect(() => {
    // console.log(Questions)
  });


  const RowContainerTypeData = () => (
    <View style={styles.rowContainerTypeData}>
      <TouchableOpacity
        style={styles.btnContainerData}
        disabled={listImgs.length ? true : false}
        onPress={() => {
          setModalColorVisible(true);
        }}>
        <Image
          style={styles.iconBtn}
          source={Icons.Colors}
          resizeMode="contain"
        />
        <Text style={styles.HeadText}>{t('common:Colors')}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.btnContainerData}
        disabled={listColors.length ? true : false}
        onPress={() => {
          setModalImgVisible(true);
        }}>
        <Image
          style={styles.iconBtn}
          source={Icons.Camera}
          resizeMode="contain"
        />
        <Text style={styles.HeadText}>{t('common:Images')}</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <>
      <View style={styles.Container}>
        <StaticHeader
          Header_name={t('common:AddQuizPageTitle')}
          style={{ backgroundColor: '#A3DEFF' }}
        />
        <View style={styles.Top_Container}>
          <BookletContainer
            Text={'(' + YearsValue + ')' + t('common:Years')}
            Image={Icons.Age}
          />
          <LevelContainer
            Persentage={Persentage}
            Text={t('common:Level') + LevelIndex}
            Image={Icons.Signal}
          />
          <BookletContainer
            Text={t('common:Booklet')+ BookletIndex}
            Image={Icons.Books}
          />
        </View>
        <ScrollView>
          <Text style={styles.WordQuestion}>{t('common:Question')} {QuestionInd} </Text>

          <View style={{ padding: RFPercentage(2) }}>
            <Text style={styles.HeadText}>{t('common:AddQuestion')}</Text>
            <TextInput
              value={QuestionText}
              onFocus={() => {
                setisFocused(true);
              }}
              onBlur={() => {
                setisFocused(false);
              }}
              multiline={true}
              placeholder="Enter Question Here"
              placeholderTextColor={COLORS.darkGray}
              onChangeText={value => {
                setQuestionText(value);
              }}
              style={[
                styles.TextInputStyle,
                { borderColor: isFocused ? COLORS.blue : COLORS.white },
              ]}
            />
          </View>

          <View style={{ padding: RFPercentage(2) }}>
            <Text style={styles.HeadText}>{t('common:Answer')}</Text>
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
                        : clickedIndex == 0
                          ? COLORS.white
                          : COLORS.gray,
                  },
                ]}
                onPress={() => {
                  setSelectedAswer(1);
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
                        : clickedIndex == 0
                          ? COLORS.gray
                          : COLORS.white,
                  },
                ]}
                onPress={() => {
                  setSelectedAswer(0);
                  setclickedIndex(0);
                }}>
                <Image
                  source={Icons.Cancel}
                  style={[styles.checkAswerStyle, { height: SPACING.l }]}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{ padding: RFPercentage(2) }}>
            <Text style={styles.HeadText}>{t('common:ChooseColorsOrImages')}</Text>
            <RowContainerTypeData />
          </View>
          <View style={styles.ButtonsContainer}>
            <SmallButton
              onPress={() => {
                AddQuestion();
              }}
              Text={t('common:AnotherQuestion')}
              style={styles.SmallButton}
            />
            <SmallButton
              onPress={() => {
                SendQuestions()
              }}
              Loading={loadingBtn}
              Text={t('common:Done')}
              style={styles.SmallButton} />
          </View>


          <ModalColors
            modalColorVisible={modalColorVisible}
            setModalColorVisible={setModalColorVisible}
            listColors={listColors}
            setlistColors={setlistColors}
          />
          <ModalImgs
            modalImgVisible={modalImgVisible}
            setModalImgVisible={setModalImgVisible}
            listImgs={listImgs}
            setlistImgs={setlistImgs}
          />
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
    paddingRight: RFPercentage(2),
  },
  WordQuestion: {
    alignSelf: 'center',
    fontSize: RFPercentage(3.5),
    fontWeight: 'bold',
    marginTop: RFPercentage(1),
    color:COLORS.darkGray
  },
  HeadText: {
    fontSize: RFPercentage(3),
    color: COLORS.blue,
    fontWeight: 'bold',
    marginTop: RFPercentage(1),
  },
  TextInputStyle: {
    borderWidth: 1.5,
    padding: RFPercentage(2),
    width: '95%',
    backgroundColor: COLORS.white,
    elevation: 5,
    fontSize: RFPercentage(2.1),
    color: COLORS.black,
    alignSelf: 'center',
    marginTop: RFPercentage(2),
    borderRadius: 15,
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
  ColorView: {
    paddingVertical: RFPercentage(3),
    width: '95%',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: RFPercentage(2),
  },
  ButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  SmallButton: {
    alignSelf: 'center',
    marginTop: RFPercentage(3),
  },
  rowContainerTypeData: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    width: '100%',
    marginTop: SPACING.s,
  },
  btnContainerData: {
    width: '40%',
    height: SIZES.height * 0.2,
    backgroundColor: COLORS.gray,
    borderRadius: SIZES.Sradius,
    elevation: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconBtn: {
    width: '70%',
    height: SIZES.avatar,
  },
});
