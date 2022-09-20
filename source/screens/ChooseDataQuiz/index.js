import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { COLORS, Icons, SIZES, SPACING } from '../../config';
import {
  CustomDropDown,
  LargeButton,
  SmallButton,
  StaticHeader,
} from '../../components';
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
const GroupLevel = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
]
const GroupBooklet = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '5',
    value: '5',
  },
]
const ChooseDataQuiz = (props) => {
  const [Loading, setLoading] = useState(false);
  const [OpenageGroupList, setOpenageGroupList] = useState(false);
  const [ageGroupValue, setAgeGroupValue] = useState('');
  const [OpenChooseLevel, setOpenChooseLevel] = useState(false);
  const [ChooseLevelValue, setChooseLevelValue] = useState('');
  const [OpenChooseBooklet, setOpenChooseBooklet] = useState(false);
  const [ChooseBookletValue, setChooseBookletValue] = useState('');

  const ClickedFun = () => {
    if (ageGroupValue == '' || ChooseBookletValue == '' || ChooseLevelValue == '') {
      alert('Please Fill All Data')
    }
    else {
      props.navigation.navigate("AddQuiz", {
        ageGroup: ageGroupValue,
        ChooseBooklet: ChooseBookletValue,
        ChooseLevel: ChooseLevelValue,
        LevelLength: GroupLevel.length
      })
    }
  }
  return (
    <View style={styles.Container}>
      <StaticHeader />
      <Image
        source={Icons.patientInfo}
        style={styles.pannerStyle}
        resizeMode="contain"
      />

      <View style={{ width: '95%', zIndex: 10 }}>
        <CustomDropDown
          data={GroupAges}
          value={ageGroupValue}
          setValue={setAgeGroupValue}
          setOpen={() => {
            setOpenageGroupList(prev => !prev);
          }}
          open={OpenageGroupList}
          placeholder="Choose Age Group"
          icon={Icons.Age}
          colorIcon={COLORS.blue}
        />
      </View>
      <View style={{ width: '95%', zIndex: 9 }}>
        <CustomDropDown
          iconStyle={{
            width: '57.5%',
            height: '57.5%',
          }}
          data={GroupLevel}
          value={ChooseLevelValue}
          setValue={setChooseLevelValue}
          setOpen={() => {
            setOpenChooseLevel(prev => !prev);
          }}
          open={OpenChooseLevel}
          placeholder="Choose Level"
          icon={Icons.Signal}
          colorIcon={COLORS.blue}
        />
      </View>
      <View style={{ width: '95%', zIndex: 8 }}>
        <CustomDropDown
          data={GroupBooklet}
          value={ChooseBookletValue}
          setValue={setChooseBookletValue}
          setOpen={() => {
            setOpenChooseBooklet(prev => !prev);
          }}
          open={OpenChooseBooklet}
          placeholder="Choose Booklet"
          icon={Icons.Books}
          colorIcon={COLORS.blue}
        />
      </View>
      <SmallButton
        Loading={Loading}
        Text="let's go"
        style={{ marginTop: SPACING.xl }}
        onPress={() => {
          ClickedFun()
        }}
      />
    </View>
  );
};

export default ChooseDataQuiz;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
  },
  textStyle: {
    color: COLORS.blue,
    alignSelf: 'flex-start',
    fontSize: SIZES.h2 + 5,
    fontWeight: '700',
  },
  subTextStyle: {
    color: COLORS.darkGray,
    fontSize: SIZES.subTitle,
    fontWeight: '600',
    alignSelf: 'flex-start',
  },
  pannerStyle: {
    width: '95%',
    height: SIZES.height * 0.3,
    marginVertical: SPACING.m,
  },
});
