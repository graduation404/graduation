import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  ToastAndroid,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  BookletContainer,
  Card,
  LargeButton,
  LevelContainer,
  SmallButton,
  StaticHeader,
} from '../../components';
import {
  COLORS,
  GuideLineSubText,
  Icons,
  Line,
  Range_Function,
  SHADOW,
  SIZES,
} from '../../config';
import * as Animatable from 'react-native-animatable';
import {useNavigation} from '@react-navigation/native';
import {GetQuizsInLevelAndBooklet} from '../../config/utils';
import {handleAgeGroup2} from '../../config/helperFunctions';
import {useTranslation} from 'react-i18next';

const Test = props => {
  const navigation = useNavigation();
  const { t , i18n} = useTranslation();
  const {PatientInfo} = props.route.params;
  const [name, setName] = useState(PatientInfo.name);
  const [id, setid] = useState(582222);
  const [age, setage] = useState(PatientInfo.age);
  const [LevelIndex, setLevelIndex] = useState(null);
  const [BookletIndex, setBookletIndex] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [loadingBtn, setloadingBtn] = useState(false);
  const [Array, setArray] = useState([]);

  const [Texts, setTexts] = useState([
    {
      text: t('common:Guidance1'),
    },
    {
      text: t('common:Guidance2'),
      Image: Icons.Check,
    },
    {
      text: t('common:Guidance3'),
      Image: Icons.Cancel,
    },
    {
      text: t('common:Guidance4'),
    },
  ]);

  const [LevelsArray, setLevelsArray] = useState([
    {
      Text: t('common:Level1'),
      Image: Icons.Signal,
      Persentage: 25,
    },
    {
      Text:  t('common:Level2'),
      Image: Icons.Signal,
      Persentage: 50,
    },
    {
      Text:  t('common:Level3'),
      Image: Icons.Signal,
      Persentage: 75,
    },
    {
      Text: t('common:Level4'),
      Image: Icons.Signal,
      Persentage: 100,
    },
  ]);

  const [BookletArray, setBookletArray] = useState([
    {
      id: 1,
      Array: [
        {
          Text: t('common:Booklet1'),
          Image: Icons.Books,
        },
        {
          Text: t('common:Booklet2'),
          Image: Icons.Books,
        },
        {
          Text: t('common:Booklet3'),
          Image: Icons.Books,
        },
        {
          Text:t('common:Booklet4'),
          Image: Icons.Books,
        },
      ],
    },
    {
      id: 2,
      Array: [
        {
          Text: t('common:Booklet1'),
          Image: Icons.Books,
        },
        {
          Text: t('common:Booklet2'),
          Image: Icons.Books,
        },
        {
          Text: t('common:Booklet3'),
          Image: Icons.Books,
        },
      ],
    },
    {
      id: 3,
      Array: [
        {
          Text: t('common:Booklet1'),
          Image: Icons.Books,
        },
        {
          Text: t('common:Booklet2'),
          Image: Icons.Books,
        },
        {
          Text:t('common:Booklet3'),
          Image: Icons.Books,
        },
      ],
    },
    {
      id: 4,
      Array: [
        {
          Text: t('common:Booklet1'),
          Image: Icons.Books,
        },
      ],
    },
  ]);

  useEffect(() => {}, [GetQuizsInLevelAndBooklet]);

  const LevelsArrayList = () => {
    return (
      <>
        <View
          style={{height: RFPercentage(23.5), paddingRight: RFPercentage(1.5)}}>
          <FlatList
            data={LevelsArray}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => (
              <>
                <LevelContainer
                  onPress={() => {
                    setLevelIndex(index), setBookletIndex(null);
                  }}
                  style={{
                    backgroundColor: COLORS.white,
                    borderWidth:
                      LevelIndex == index ? RFPercentage(0.3) : RFPercentage(0),
                    borderColor: LevelIndex == index ? COLORS.blue : null,
                  }}
                  Text={item.Text}
                  Image={item.Image}
                  Persentage={item.Persentage}
                />
              </>
            )}
          />
        </View>
      </>
    );
  };

  const BookletArrayList = () => {
    return (
      <>
        <View
          style={{height: RFPercentage(23.5), paddingRight: RFPercentage(1.5)}}>
          <FlatList
            data={BookletArray[LevelIndex].Array}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({item, index}) => (
              <>
                <BookletContainer
                  onPress={() => {
                    setBookletIndex(index);
                  }}
                  style={{
                    backgroundColor: COLORS.white,
                    borderWidth:
                      BookletIndex == index
                        ? RFPercentage(0.3)
                        : RFPercentage(0),
                    borderColor: BookletIndex == index ? COLORS.blue : null,
                  }}
                  Text={item.Text}
                  Image={item.Image}
                  Persentage={item.Persentage}
                />
              </>
            )}
          />
        </View>
      </>
    );
  };

  const CardView = () => {
    return (
      <Card
        colors={[COLORS.blue, COLORS.darkGray]}
        RenderItems={
          <>
            <View style={styles.card_Container}>
              <View style={styles.BigContainer}>
                <View style={styles.Image_Container}>
                  <Image source={Icons.Male} style={styles.GenderImage_Style} />
                </View>

                <View style={styles.DataContainer}>
                  <Text style={styles.name_Style}>{name}</Text>
                  <Text style={styles.id_Style}>id: {id}</Text>
                  <Text style={styles.Age_Text}>{age} {t('common:Years')}</Text>
                </View>
              </View>
              <TouchableOpacity
                style={styles.backIconStyle}
                onPress={() => {
                  props.navigation.navigate('PatientProfile', {PatientInfo});
                }}>
                <Image source={Icons.Next} style={styles.Image_Style} />
              </TouchableOpacity>
            </View>

            <Line />

            <View style={styles.MainOnline_View}>
              <View style={styles.online_View} />
              <Text style={styles.online_Text}>{t('common:TestisActive')}</Text>
            </View>
          </>
        }
      />
    );
  };

  const sub = () => {
    let myStr = name;
    let firstWord = myStr.split(' ')[0];
    return firstWord;
  };

  const ModalView = () => {
    return (
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            paddingHorizontal: RFPercentage(4),
            elevation: 20,
            backgroundColor: COLORS.white,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            width: SIZES.width,
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: RFPercentage(2),
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Image
              source={Icons.Test}
              style={{height: RFPercentage(5), width: RFPercentage(5)}}
            />
            <Text
              style={{
                color: COLORS.blue,
                fontSize: RFPercentage(3),
                fontWeight: 'bold',
              }}>
              {' '}
              {t('common:GuideLine')}
            </Text>
          </View>

          <FlatList
            data={Texts}
            style={{marginTop: RFPercentage(5)}}
            renderItem={({item, index}) => (
              <GuideLineSubText Text={item.text} Image={item.Image} />
            )}
          />

          <SmallButton
            Text="Start"
            onPress={async () => {
              setloadingBtn(true);
              let range = await Range_Function(age);
              let ageeee = await handleAgeGroup2(range);
              let dataaa = await GetQuizsInLevelAndBooklet(
                LevelIndex + 1,
                BookletIndex + 1,
                ageeee,
              ).then(res => {
                if (res.length) {
                  setModalVisible(false);
                  props.navigation.navigate('Quiz', {
                    quizz: res,
                    PatientInfo,
                  }),
                    setloadingBtn(false);
                } else {
                  ToastAndroid.showWithGravity(
                    t('common:ThereIsNoTestInthisBooklet'),
                    ToastAndroid.LONG,
                    ToastAndroid.BOTTOM,
                  );
                  setModalVisible(false);
                }
              });
              setloadingBtn(false);
            }}
            Loading={loadingBtn}
          />
        </View>
      </Modal>
    );
  };
  return (
    <>
      <View style={styles.container}>
        <StaticHeader Header_name={t('common:Test')} />
        <Text
          style={{
            fontSize: SIZES.title,
            paddingHorizontal: RFPercentage(2.5),
            paddingBottom: RFPercentage(1),
            fontWeight: 'bold',
            color: COLORS.darkGray,
          }}>
          {t('common:Hi')}{sub()}
        </Text>
        <CardView />

        <Text style={styles.ChooseText}>{t('common:ChooseLevel')}</Text>

        <LevelsArrayList />

        {LevelIndex === null ? null : (
          <>
            <Text style={styles.ChooseText}>{t('common:ChooseBooklet')}</Text>

            <BookletArrayList />
          </>
        )}

        {BookletIndex === null ? null : (
          <>
            <Animatable.View animation={'zoomInUp'}>
              <LargeButton
                colors={[COLORS.blue, COLORS.darkGray]}
                onPress={() => {
                  setModalVisible(true);
                }}
                Text={t('common:letGo')}
              />
            </Animatable.View>
          </>
        )}
      </View>
      <ModalView />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  Image_Style: {
    height: SIZES.height * 0.0325,
    width: SIZES.height * 0.0325,
    tintColor: COLORS.blue,
  },
  card_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
  },
  Image_Style: {
    height: RFPercentage(2.5),
    width: RFPercentage(2.5),
    tintColor: COLORS.white,
  },
  GenderImage_Style: {
    height: RFPercentage(5),
    width: RFPercentage(5),
    tintColor: COLORS.blue,
  },
  Age_Text: {
    fontSize: SIZES.h5,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  BigContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  DataContainer: {
    marginLeft: RFPercentage(2),
  },
  backIconStyle: {
    height: RFPercentage(5),
    width: RFPercentage(5),
    borderWidth: RFPercentage(0.075),
    borderColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: SIZES.height,
  },
  ChooseText: {
    paddingHorizontal: RFPercentage(2.5),
    fontSize: SIZES.h2,
    color: COLORS.black,
    fontWeight: 'bold',
    marginTop: RFPercentage(1),
  },
  MainOnline_View: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    marginLeft: RFPercentage(1.5),
  },
  online_View: {
    height: 12.5,
    width: 12.5,
    backgroundColor: '#82ff73',
    borderRadius: 15,
  },
  online_Text: {
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    color: COLORS.white,
    marginLeft: RFPercentage(1),
  },

  id_Style: {
    fontSize: SIZES.h5,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  name_Style: {
    fontSize: SIZES.h3,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  Image_Container: {
    height: RFPercentage(7.5),
    width: RFPercentage(7.5),
    borderRadius: SIZES.height,
    backgroundColor: COLORS.white,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Test;
