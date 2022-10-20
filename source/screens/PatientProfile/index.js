import {useNavigation} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {
  Card,
  HeaderProfile,
  PatientsDataContainer,
  SmallButton,
} from '../../components';
import {
  Icons,
  Line,
  COLORS,
  sizes,
  SIZES,
  SPACING,
  SHADOW,
  Range_Function,
} from '../../config';
import {subDate, subtime} from '../../config/helperFunctions';

const PatientProfile = props => {
  const navigation = useNavigation();
  const { t , i18n} = useTranslation();
  const {PatientInfo, hours, date} = props.route.params;
  const [name, setName] = useState(PatientInfo.name);
  // const [id, setid] = useState(582222);
  console.log(JSON.stringify(PatientInfo))
  const [age, setage] = useState(PatientInfo.age);
  const [Time, setTime] = useState(subtime(PatientInfo));
  const [Date, setDate] = useState(subDate(PatientInfo));
  const [Range, setRange] = useState(Range_Function(age));
  const [PatientsDataValue, setPatientsDataValue] = useState([
    {
      name: 'Dual Average',
      Percentage: PatientInfo.dualAverage== 0 ? 1 : PatientInfo.dualAverage,
      image: Icons.PointHand,
    },
    {
      name: 'Base Line',
      Percentage: PatientInfo.baseLine== 0 ? 1 : PatientInfo.baseLine,
      image: Icons.PointHand,
    },
    {
      name: t('common:EnterHearingLevelRight'),
      Percentage: PatientInfo.hearingLevelRight== 0 ? 1 : PatientInfo.hearingLevelRight,
      image: Icons.PointHand,
    },
    {
      name: t('common:EnterHearingLevelLeft'),
      Percentage: PatientInfo.hearingLevelLeft== 0 ? 1 : PatientInfo.hearingLevelLeft,
      image: Icons.PointHand,
    },
    {
      name:t('common:DualAverage'),
      Percentage: PatientInfo.reactionTimeAverage== 0 ? 1 : PatientInfo.reactionTimeAverage,
      image: Icons.PointHand,
    },
  ]);
  // console.log(hours, date);

  const DataList = () => {
    return (
      <View
        style={{height: SIZES.height * 0.425, justifyContent: 'space-between'}}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={PatientsDataValue}
          renderItem={({item, index}) => (
            <>
              <PatientsDataContainer
                Percentage={item.Percentage}
                name={item.name}
                Image={item.image}
              />
            </>
          )}
        />
      </View>
    );
  };

  const CardList = () => {
    return (
      <Card
        colors={[COLORS.white, COLORS.white]}
        RenderItems={
          <>
            <View style={styles.card_Container}>
              <View style={styles.ageRange_View}>
                <Text style={styles.ageRange_Text}>{Range}</Text>
              </View>

              <View style={styles.Image_Container}>
                <Image
                  source={PatientInfo.gender == '1' ? Icons.Male : Icons.Woman}
                  style={[
                    styles.GenderImage_Style,
                    {tintColor: PatientInfo.gender == '1' ? COLORS.blue : null},
                  ]}
                />
              </View>
              <View style={{alignItems: 'flex-end'}}>
                <Text style={styles.Age_Text}>{age} {t('common:Years')} </Text>
              </View>
            </View>

            <Text style={styles.name_Style}>{PatientInfo.name}</Text>
            <View style={styles.last_Container_View}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={Icons.Calendar}
                  style={{height: RFPercentage(3), width: RFPercentage(3)}}
                />
                <Text
                  style={[
                    {
                      fontSize: SIZES.h4,
                      fontWeight: 'bold',
                      color: COLORS.blue,
                    },
                  ]}>
                  {' '}
                  {Date}
                </Text>
              </View>

              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={Icons.Clock}
                  style={{height: RFPercentage(3), width: RFPercentage(3)}}
                />
                <Text
                  style={[
                    {
                      fontSize: SIZES.h4,
                      fontWeight: 'bold',
                      color: COLORS.blue,
                    },
                  ]}>
                  {' '}
                  {Time}
                </Text>
              </View>
            </View>
          </>
        }
      />
    );
  };



  return (
    <View style={styles.Container}>
      <HeaderProfile
      
        Header_name={t('common:PatientProfile')}
      />

      <CardList />

      <DataList />

      {/* <Line /> */}

      <View style={styles.Buttons_Container}>
        <SmallButton
          onPress={() => {
            navigation.navigate('Test', {PatientInfo});
          }}
          Text={t('common:Test')}
          Icon={Icons.Test}
        />
        <SmallButton
          onPress={() => {
            navigation.navigate('Report', {PatientInfo});
          }}
          Text={t('common:Report')}
          Icon={Icons.Report}
        />
      </View>
    </View>
  );
};

export default PatientProfile;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  card_Container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  Image_Style: {
    height: RFPercentage(2.5),
    width: RFPercentage(2.5),
    marginHorizontal: RFPercentage(2),
    tintColor: COLORS.blue,
  },
  GenderImage_Style: {
    height: RFPercentage(7.5),
    width: RFPercentage(7.5),
  },
  ageRange_Text: {
    fontWeight: 'bold',
    color: COLORS.blue,
    fontSize: SIZES.h4,
  },
  ageRange_View: [
    {
      width: '20%',
      height: RFPercentage(2.5),
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 15,
      backgroundColor: COLORS.white,
      borderRadius: SIZES.height,
    },
    SHADOW.light,
  ],
  Age_Text: {
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    textAlign: 'center',
  },
  last_Container_View: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
  },
  id_Style: {
    fontSize: SIZES.h4,
    fontWeight: 'bold',
    color: COLORS.darkGray,
    marginTop: RFPercentage(1),
  },
  name_Style: {
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
    color: COLORS.blue,
    marginTop: RFPercentage(2),
  },
  Image_Container: {
    height: RFPercentage(15),
    width: RFPercentage(15),
    borderRadius: SIZES.height,
    backgroundColor: COLORS.white,
    elevation: 5,
    alignItems: 'center',
    marginTop: SIZES.height * 0.01,
    justifyContent: 'center',
  },
  Buttons_Container: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 2,
  },
});
