
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Card, HeaderProfile, PatientsDataContainer, SmallButton } from '../../components';
import { Icons, Line, COLORS, sizes, SIZES, SPACING, SHADOW, Range_Function } from '../../config';

const AdminProfile = () => {
  const [AdminName, setAdminName] = useState('Dr Khalifa')
  const [AdminEmail, setAdminEmail] = useState('admin@gmail.com')
  const [age, setage] = useState(22)
  const [Range, setRange] = useState(Range_Function(age))
  const [PatientsDataValue, setPatientsDataValue] = useState([
    {
      name: 'Change Password',
      image: Icons.Lock
    },
    {
      name: 'Change Language',
      image: Icons.Language
    },
    {
      name: 'Log Out',
      image: Icons.Logout
    },

  ])



  const DataList = () => {
    return (
        <View style={{ height: SIZES.height * .7, justifyContent: 'center' }}>
          <View style={{ height: RFPercentage(8) }} />
          <FlatList
            data={PatientsDataValue}
            renderItem={({ item, index }) =>
            (
              <>
                <PatientsDataContainer name={item.name} Image={item.image} />
              </>
            )}
          />
          <View style={{ height: RFPercentage(2) }} />

        </View>

    )
  }


  useEffect(() => {
  }, [])

  return (
    <View style={styles.Container}>
      <HeaderProfile Header_name={'My Profile'} />

      <Card RenderItems={
        (<>
          <View style={styles.card_Container}>
            <Image source={Icons.Pen} style={[styles.Image_Style, { tintColor: COLORS.white }]} />

            <View style={styles.Image_Container}>
              <Image source={Icons.Avatar} style={styles.GenderImage_Style} />
            </View>

            <Image source={Icons.Pen} style={styles.Image_Style} />
          </View>

          <Text style={styles.AdminName_Style}>{AdminName}</Text>
          <Text style={styles.AdminEmail_Style}>{AdminEmail}</Text>
        </>)
      }
      />

      < DataList />

    </View >
  );
};


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
      height: RFPercentage(2.5),
      width: RFPercentage(2.5),
      tintColor: COLORS.blue,
    },
    GenderImage_Style:
    {
      height: RFPercentage(15),
      width: RFPercentage(15),
      borderRadius: SIZES.height
    },
    ageRange_Text:
    {
      fontWeight: 'bold',
      color: COLORS.blue,
      fontSize: SIZES.h4
    },
    ageRange_View:
      [{
        borderRadius: SIZES.height,
        width: '20%',
        alignItems: 'center',
        elevation: 10,
        backgroundColor: COLORS.white,
      }
        , SHADOW.light
      ],
    Age_Text:
    {
      fontSize: SIZES.h4,
      fontWeight: 'bold',
      color: COLORS.lightGray,
      marginTop: RFPercentage(.5)
    },
    last_Container_View:
    {
      flexDirection: 'row',
      width: '100%',
      justifyContent: 'space-between'
    },
    AdminEmail_Style:
    {
      fontSize: SIZES.h4,
      fontWeight: 'bold',
      color: COLORS.lightGray,
      marginTop: RFPercentage(1)
    },
    AdminName_Style:
    {
      fontSize: SIZES.title,
      fontWeight: 'bold',
      color: COLORS.blue,
      marginTop: RFPercentage(2)
    },
    Image_Container:
    {
      height: RFPercentage(15),
      width: RFPercentage(15),
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
      justifyContent: 'space-around',
      paddingVertical: 2
    },
  });


export default AdminProfile;

