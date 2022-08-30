import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {COLORS, Icons, SIZES, SPACING} from '../../config';
import {
  CustomDropDown,
  CustomInputAddPatient,
  StaticHeader,
} from '../../components';
import {RFValue} from 'react-native-responsive-fontsize';
import DropDownPicker from 'react-native-dropdown-picker';
const GroupAges = [
  {
    label: '1-5',
    value: '1-5',
  },
  {
    label: '6-10',
    value: '6-10',
  },
];
const AddPatientInfo = props => {
  const genders = [
    {
      label: 'Male',
      value: 1,
      icon: () => <Image source={Icons.Male} style={{width: 30, height: 30}} />,
    },
    {
      label: 'Female',
      value: 2,
      icon: () => (
        <Image source={Icons.Woman} style={{width: 30, height: 30}} />
      ),
    },
  ];
  const [PatientInfo, setPatientInfo] = useState({
    id: null,
    name: '',
    gender: genderValue,
    age: null,
    ageGroup: ageGroupValue,
    snrDual: null,
    snrBaseLine: null,
    hearingLevelLeft: null,
    hearingLevelRight: null,
  });
  const [OpenGenderList, setOpenGenderList] = useState(false);
  const [OpenageGroupList, setOpenageGroupList] = useState(false);
  const [ageGroupValue, setAgeGroupValue] = useState();
  const [genderValue, setGenderValue] = useState();

  const handleChange = (value, text) => {
    setPatientInfo(prevState => ({...prevState, [text]: value}));
  };

  const TitleSection = () => {
    return (
      <View style={styles.TitleContainer}>
        <Text style={styles.textStyle}>Add Patient Information</Text>
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
            placeholder="Enter ID"
            icon={Icons.driver_license}
            colorIcon={COLORS.blue}
            value={PatientInfo.id}
            onChangeText={text => handleChange(text.trim(), 'id')}
          />
          <CustomInputAddPatient
            placeholder="Enter Name"
            icon={Icons.User}
            colorIcon={COLORS.white}
            value={PatientInfo.name}
            onChangeText={text => handleChange(text.trim(), 'name')}
          />
          <CustomDropDown
            data={genders}
            setOpen={() => {
              setOpenGenderList(!OpenGenderList);
              console.log(OpenGenderList);
            }}
            badgeDotColors={['#00b4d8', '#e76f51']}
            open={OpenGenderList}
            placeholder="Enter Gender"
            icon={Icons.Bigender}
            colorIcon={COLORS.blue}
            value={genderValue}
            setValue={setGenderValue}
          />
          <CustomInputAddPatient
            placeholder="Enter Age"
            icon={Icons.Age}
            colorIcon={COLORS.blue}
            value={PatientInfo.age}
            onChangeText={text => handleChange(text.trim(), 'age')}
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
            placeholder="Enter Age Group"
            icon={Icons.Bigender}
            colorIcon={COLORS.blue}
          />
          <CustomInputAddPatient
            placeholder="Enter SNR Loss (Dual)"
            icon={Icons.PointHand}
            colorIcon={COLORS.blue}
            value={PatientInfo.snrDual}
            onChangeText={text => handleChange(text.trim(), 'snrDual')}
          />
          <CustomInputAddPatient
            placeholder="Enter SNR Loss (Base Line)"
            icon={Icons.PointHand}
            colorIcon={COLORS.blue}
            value={PatientInfo.snrBaseLine}
            onChangeText={text => handleChange(text.trim(), 'snrBaseLine')}
          />
          <CustomInputAddPatient
            placeholder="Enter Hearing Level (left)"
            icon={Icons.PointHand}
            colorIcon={COLORS.blue}
            value={PatientInfo.hearingLevelLeft}
            onChangeText={text => handleChange(text.trim(), 'hearingLevelLeft')}
          />

          <CustomInputAddPatient
            placeholder="Enter Hearing Level (right)"
            icon={Icons.PointHand}
            colorIcon={COLORS.blue}
            value={PatientInfo.hearingLevelRight}
            onChangeText={text =>
              handleChange(text.trim(), 'hearingLevelRight')
            }
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            // props.navigation.navigate("")
            if (
              PatientInfo.id &&
              PatientInfo.age &&
              PatientInfo.ageGroup &&
              PatientInfo.name &&
              PatientInfo.gender &&
              PatientInfo.hearingLevelLeft &&
              PatientInfo.hearingLevelRight &&
              PatientInfo.snrBaseLine &&
              PatientInfo.snrDual
            ) {
              alert(JSON.stringify(PatientInfo));
            }else{
              alert("Please Fill All Data");
            }

          }}>
          <Text style={styles.subTitleBtn}>Create Patient</Text>
        </TouchableOpacity>
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
