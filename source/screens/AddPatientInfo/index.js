import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ToastAndroid,
} from 'react-native';
import {useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';
import {COLORS, Icons, SIZES, SPACING} from '../../config';
import {
  CustomDropDown,
  CustomInputAddPatient,
  LargeButton,
  StaticHeader,
} from '../../components';
import {CreateUser} from '../../config/utils';
import {t} from 'i18next';

const GroupAges = [
  {
    label: t('common:label1'),
    value: 1,
  },
  {
    label: t('common:label2'),
    value: 2,
  },
  {
    label: t('common:label3'),
    value: 3,
  },
  {
    label: t('common:label4'),
    value: 4,
  },
];
const AddPatientInfo = props => {
  const {t, i18n} = useTranslation();
  const genders = [
    {
      label: t('common:Male'),
      value: 1,
      icon: () => <Image source={Icons.Male} style={{width: 30, height: 30}} />,
    },
    {
      label: t('common:Female'),
      value: 2,
      icon: () => (
        <Image source={Icons.Woman} style={{width: 30, height: 30}} />
      ),
    },
  ];
  const [PatientInfo, setPatientInfo] = useState({
    name: '',
    gender: null,
    age: null,
    ageGroup: '',
    snrDual: null,
    snrBaseLine: null,
    hearingLevelLeft: null,
    hearingLevelRight: null,
  });
  const [OpenGenderList, setOpenGenderList] = useState(false);
  const [OpenageGroupList, setOpenageGroupList] = useState(false);
  const [ageGroupValue, setAgeGroupValue] = useState();
  const [genderValue, setGenderValue] = useState();
  const [Loading, setLoading] = useState(false);
  const handleChange = (value, text) => {
    setPatientInfo(prevState => ({...prevState, [text]: value}));
  };

  const AddUser = async () => {
    if (
      PatientInfo.age &&
      PatientInfo.ageGroup &&
      PatientInfo.name &&
      PatientInfo.gender &&
      PatientInfo.hearingLevelLeft &&
      PatientInfo.hearingLevelRight &&
      PatientInfo.snrBaseLine &&
      PatientInfo.snrDual
    ) {
      if (PatientInfo.age < 1 || PatientInfo.age > 150) {
        ToastAndroid.showWithGravity(
          t('common:ToastAndroidAge'),
          ToastAndroid.LONG,
          ToastAndroid.BOTTOM,
        );
      } else {
        setLoading(true);
        try {
          await CreateUser({
            name: PatientInfo.name,
            gender: PatientInfo.gender, // 1 for male || 2 for female
            ageGroup: PatientInfo.ageGroup, // 1 ( 5=>6 ) , 2 ( 6=>10 ) , 3 ( 10=>18 ) , 4 (18 => above)
            age: PatientInfo.age,
            dual: PatientInfo.snrDual,
            baseLine: PatientInfo.snrBaseLine,
            hearingLevelRight: PatientInfo.hearingLevelRight,
            hearingLevelLeft: PatientInfo.hearingLevelLeft,
          });
          ToastAndroid.showWithGravity(
            t('common:ToastAndroidCreated'),
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
          );
          props.navigation.replace('Home');
        } catch (error) {
          ToastAndroid.showWithGravity(
            t('common:ToastAndroidTryAgain'),
            ToastAndroid.LONG,
            ToastAndroid.BOTTOM,
          );
          setLoading(false);
        }
      }
    } else {
      ToastAndroid.showWithGravity(
        t('common:ToastAndroidFillData'),
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM,
      );
    }
  };

  useEffect(() => {
    handleChange(genderValue, 'gender');
    handleChange(ageGroupValue, 'ageGroup');
  }, [genderValue, ageGroupValue]);

  const TitleSection = () => {
    return (
      <View style={styles.TitleContainer}>
        <Text style={styles.textStyle}>
          {t('common:AddPatientInformation')}
        </Text>
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <StaticHeader Header_name="" nav={props} />
      <Image style={styles.ImageHeader} source={Icons.patientInfo} />
      <ScrollView style={{width: '93%'}} showsVerticalScrollIndicator={false}>
        <TitleSection />

        <View style={{width: '100%', paddingVertical: SPACING.s}}>
          <CustomInputAddPatient
            placeholder={t('common:EnterName')}
            icon={Icons.User1}
            colorIcon={COLORS.white}
            value={PatientInfo.name}
            onChangeText={text => handleChange(text.trim(), 'name')}
            keyboardType="name-phone-pad"
          />
          <CustomDropDown
            data={genders}
            setOpen={() => {
              setOpenGenderList(!OpenGenderList);
              // console.log(OpenGenderList);
            }}
            badgeDotColors={['#00b4d8', '#e76f51']}
            open={OpenGenderList}
            placeholder={t('common:EnterGender')}
            icon={Icons.Bigender}
            colorIcon={COLORS.blue}
            value={genderValue}
            setValue={setGenderValue}
          />
          <CustomInputAddPatient
            placeholder={t('common:EnterAge')}
            icon={Icons.Age}
            colorIcon={COLORS.blue}
            value={PatientInfo.age}
            onChangeText={text => handleChange(text.trim(), 'age')}
            keyboardType="decimal-pad"
          />

          <CustomDropDown
            data={GroupAges}
            value={ageGroupValue}
            setValue={setAgeGroupValue}
            setOpen={() => {
              setOpenageGroupList(!OpenageGroupList);
            }}
            badgeDotColors={['#00b4d8', '#e76f51']}
            open={OpenageGroupList}
            placeholder={t('common:EnterAgeGroup')}
            icon={Icons.Bigender}
            colorIcon={COLORS.blue}
          />
          <CustomInputAddPatient
            placeholder="Enter SNR Loss (Dual)"
            icon={Icons.PointHand}
            colorIcon={COLORS.blue}
            value={PatientInfo.snrDual}
            onChangeText={text => handleChange(text.trim(), 'snrDual')}
            keyboardType="decimal-pad"
          />
          <CustomInputAddPatient
            placeholder="Enter SNR Loss (Base Line)"
            icon={Icons.PointHand}
            colorIcon={COLORS.blue}
            value={PatientInfo.snrBaseLine}
            onChangeText={text => handleChange(text.trim(), 'snrBaseLine')}
            keyboardType="decimal-pad"
          />
          <CustomInputAddPatient
            placeholder={t('common:EnterHearingLevelLeft')}
            icon={Icons.PointHand}
            colorIcon={COLORS.blue}
            value={PatientInfo.hearingLevelLeft}
            onChangeText={text => handleChange(text.trim(), 'hearingLevelLeft')}
            keyboardType="decimal-pad"
          />

          <CustomInputAddPatient
            placeholder={t('common:EnterHearingLevelRight')}
            icon={Icons.PointHand}
            colorIcon={COLORS.blue}
            value={PatientInfo.hearingLevelRight}
            onChangeText={text =>
              handleChange(text.trim(), 'hearingLevelRight')
            }
            keyboardType="decimal-pad"
          />
        </View>
        <LargeButton
          colors={[COLORS.blue, COLORS.blue]}
          Text={t('common:CreatePatient')}
          Loading={Loading}
          onPress={() => {
            // props.navigation.navigate("")
            AddUser();
          }}
        />
        {/* <TouchableOpacity
          style={styles.btn}
          disabled={loading}
          onPress={() => {
              alert(JSON.stringify(PatientInfo));

            // props.navigation.navigate("")
            if (
              PatientInfo.age &&
              PatientInfo.ageGroup &&
              PatientInfo.name &&
              PatientInfo.gender &&
              PatientInfo.hearingLevelLeft &&
              PatientInfo.hearingLevelRight &&
              PatientInfo.snrBaseLine &&
              PatientInfo.snrDual
            ) {
              // alert(JSON.stringify(PatientInfo));
              setLoading(true);
              CreateUser({
                name: PatientInfo.name,
                gender: PatientInfo.gender, // 1 for male || 2 for female
                ageGroup: PatientInfo.ageGroup, // 1 ( 5=>6 ) , 2 ( 6=>10 ) , 3 ( 10=>18 ) , 4 (18 => above)
                age: PatientInfo.age,
                dual: PatientInfo.snrDual,
                baseLine: PatientInfo.snrBaseLine,
                hearingLevelRight: PatientInfo.hearingLevelRight,
                hearingLevelLeft: PatientInfo.hearingLevelLeft,
              });
              setLoading(false);
            } else {
              alert('Please Fill All Data');
            }
          }}>
          {loading ? (
            <ActivityIndicator size="large" color={COLORS.white} />
          ) : (
            <Text style={styles.subTitleBtn}>Create Patient</Text>
          )}
        </TouchableOpacity> */}
      </ScrollView>
    </View>
  );
};

export default AddPatientInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  ImageHeader: {
    width: '90%',
    height: SIZES.height * 0.22,
    resizeMode: 'contain',
    marginVertical: SPACING.s,
    alignSelf: 'center',
  },
  TitleContainer: {
    alignSelf: 'flex-start',
    marginVertical: SPACING.m,
    // paddingHorizontal: SPACING.m - 3,
  },
  textStyle: {
    color: COLORS.blue,
    alignSelf: 'flex-start',
    fontSize: SIZES.h2 + 4,
    fontWeight: '700',
  },
  subTitleBtn: {
    color: COLORS.white,
    fontSize: SIZES.h3,
  },
  btn: {
    backgroundColor: COLORS.blue,
    marginVertical: SPACING.m,
    paddingVertical: SPACING.s,
    paddingHorizontal: SPACING.s,
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
    borderRadius: SPACING.m,
  },
  img: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
  },
});
