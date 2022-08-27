import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import { Card, HeaderProfile, PatientsDataContainer, SmallButton } from '../../components';
import { Icons, Line, COLORS, sizes, SIZES, SPACING, SHADOW, Range_Function } from '../../config';

const PatientProfile = () => {
  const [name, setName] = useState('Ahmed Khalifa')
  const [id, setid] = useState(582222)
  const [age, setage] = useState(22)
  const [Range, setRange] = useState(Range_Function(age))
  const [PatientsDataValue, setPatientsDataValue] = useState([
    {
      name: 'Dual',
      Percentage: 40
    },
    {
      name: 'Base Line',
      Percentage: 20
    },
    {
      name: 'Hearing Level (Right)',
      Percentage: 80
    },
    {
      name: 'Hearing Level (Left)',
      Percentage: 87.5
    }
  ])



  const DataList = () => {
    return (
      <View style={{height:SIZES.height*.46}}>
      <FlatList
        data={PatientsDataValue}
        renderItem={({ item, index }) =>
        (
          <>
            <PatientsDataContainer Percentage={item.Percentage} name={item.name} />
          </>
        )}
      />
      </View>
    )
  }


  useEffect(() => {
  }, [])

  return (
    <View style={styles.Container}>
      <HeaderProfile Header_name={'Patient Profile'} />

      <Card RenderItems={
        (<>
          <View style={styles.card_Container}>
            <Image source={Icons.Pen} style={[styles.Image_Style, { tintColor: COLORS.white }]} />

            <View style={styles.Image_Container}>
              <Image source={Icons.Male} style={styles.GenderImage_Style} />
            </View>

            <Image source={Icons.Pen} style={styles.Image_Style} />
          </View>

          <Text style={styles.name_Style}>{name}</Text>
          <Text style={styles.id_Style}>id: {id}</Text>



          <View style={styles.last_Container_View}>

            <View style={[{ width: '20%', }]}></View>
            <Text style={styles.Age_Text}>{age} Years</Text>

            <View style={styles.ageRange_View}>
              <Text style={styles.ageRange_Text}>{Range}</Text>
            </View>
          </View>

        </>)
      }
      />

      < DataList />

      {/* <Line /> */}

      <View style={styles.Buttons_Container}>
        <SmallButton Text={'Test'} Icon={Icons.Test} />
        <SmallButton Text={'Report'} Icon={Icons.Report} />
      </View>

    </View >
  );
};

export default PatientProfile;

const styles = StyleSheet.create(
  {
    Container:
    {
      flex: 1,
      backgroundColor: COLORS.white,
      alignItems: 'center'
    },
    card_Container:
    {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%'
    },
    Image_Style:
    {
      height: SIZES.height * .025,
      width: SIZES.height * .025,
      tintColor: COLORS.blue,
    },
    GenderImage_Style:
    {
      height: SIZES.height * .075,
      width: SIZES.height * .075,
      tintColor: COLORS.blue,
    },
    ageRange_Text:
    {
      fontWeight: 'bold',
      color: COLORS.blue,
      fontSize:SIZES.h4
    },
    ageRange_View:
      [{
        // padding: 1,
        borderRadius: SIZES.height,
        height: SIZES.height * .02,
        width: '20%',
        alignItems: 'center',
        elevation: 10,
        backgroundColor: COLORS.white,
        marginTop: -SIZES.height*0.005
      }
        , SHADOW.light
      ],
    Age_Text:
    {
      fontSize: SIZES.h4,
      fontWeight: 'bold',
      color: COLORS.gray,
    },
    last_Container_View:
    {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    },
    id_Style:
    {
      fontSize: SIZES.h4,
      fontWeight: 'bold',
      color: COLORS.gray,
    },
    name_Style:
    {
      fontSize: SIZES.title,
      fontWeight: 'bold',
      color: COLORS.blue,
      marginTop: SPACING.vS
    },
    Image_Container:
    {
      height: SIZES.height * .15,
      width: SIZES.height * .15,
      borderRadius: SIZES.height,
      backgroundColor: COLORS.white,
      elevation: 5,
      alignItems: 'center',
      marginTop: SIZES.height * .01,
      justifyContent: 'center'
    },
    Buttons_Container:
    {
      width: '90%',
      flexDirection: 'row',
      // alignItems:'center',
      justifyContent: 'space-around',
      height:SIZES.height*.1,
      paddingVertical:2
    },
  });
