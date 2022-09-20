import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
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
import { LevelContainer, ProgressQuiz, StaticHeader } from '../../components';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { BookletContainer } from '../../components';
import React, { useEffect, useState } from 'react';
import { GetSpecifiecUserquizs } from '../../config/utils';
const ReportResult = (props) => {
  const {levelInd,BookletInd,id}=props.route.params
  const [PatientResult, setPatientResult] = useState([
    {
      id: 1,
      reactionTime: '3872',
      image: Icons.Check,
    },
    {
      id: 2,
      reactionTime: '2709',
      image: Icons.Check,
    },
    {
      id: 3,
      reactionTime: '1567',
      image: Icons.Cancel,
    },
    {
      id: 4,
      reactionTime: '1256',
      image: Icons.Check,
    },
    {
      id: 5,
      reactionTime: '1256',
      image: Icons.Cancel,
    },
    {
      id: 6,
      reactionTime: '1256',
      image: Icons.Cancel,
    },
  ]);

  const GetSpecifiecUserquis = () => {
    GetSpecifiecUserquizs(id,setPatientResult)
  }
  useEffect(()=>{
    // GetSpecifiecUserquis()
    console.log(levelInd,BookletInd)
  },[])

  return (
    <>
      <ScrollView>
        <View style={styles.Container}>
          <StaticHeader
            Header_name={'Result'}
            style={{ backgroundColor: '#A3DEFF' }}
          />
          <View style={styles.Top_Container}>
            <LevelContainer Persentage={50} Text={'Level '+JSON.stringify(levelInd)} Image={Icons.Signal} />

            <BookletContainer Text={'Booklet '+JSON.stringify(BookletInd)} Image={Icons.Books} />
            <View style={styles.progressContainer}>
              <ProgressQuiz Persentage={50} />
            </View>
          </View>

          <View style={styles.bottom_Container}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={PatientResult}
              renderItem={({ item, index }) => (
                <>
                  <View style={styles.Main_view}>
                    <View style={styles.Trial_View}>
                      <Text style={[styles.trialText, { color: COLORS.white }]}>Trial {item.id}</Text>
                    </View>

                    <View style={styles.Time_View}>
                      <Text style={styles.trialText}>
                        {item.reactionTime} milliseconds
                      </Text>
                    </View>
                    <View style={styles.Image_View}>
                      <Image source={item.image} style={styles.Image_Style} />
                    </View>
                  </View>
                </>
              )}
            />
          </View>

          <View style={styles.blue_contianer}>
            <View style={styles.blue_view}>
              <Text style={styles.Reaction_Time_Title}>
                Reaction Time (Booklet)
              </Text>
              <View style={styles.Reaction_Time_Contianer}>
                <Text style={styles.Reaction_Time_Text}>2230.830</Text>
              </View>
              <Text style={styles.Reaction_Time_Title}>Listening Efforts</Text>
              <View style={styles.Reaction_Time_Contianer}>
                <Text style={styles.Reaction_Time_Text}>0.324555666929209</Text>
              </View>
            </View>
          </View>

          <View style={styles.touchableopacity_style}>
            <Text style={styles.done_style}>Done</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ReportResult;

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
  },
  progressContainer: {
    width: '40%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom_Container: {
    width: '100%',
    alignItems: 'center',
  },
  Main_view: {
    height: RFPercentage(7.7),
    borderRadius: SIZES.height,
    width: SIZES.width * 0.9,
    backgroundColor: COLORS.white,
    elevation: 3,
    flexDirection: 'row',
    marginTop: RFPercentage(2),
    marginBottom: 2,
  },
  Trial_View: [
    {
      height: '100%',
      width: '17%',
      borderRadius: SIZES.Lradius,
      backgroundColor: COLORS.blue,
      alignItems: 'center',
      justifyContent: 'center',
    },
    SHADOW.dark,
  ],
  trialText: {
    color: COLORS.blue,
    // alignSelf: 'center',
    fontSize: SIZES.h2,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  Time_View: [
    {
      height: '100%',
      alignSelf: 'center',
      width: '65%',
      justifyContent: 'center',
      alignItems: 'center',
    },
  ],
  Image_View: [
    {
      height: '100%',
      width: '16%',

      alignItems: 'center',
      justifyContent: 'center',
    },
    SHADOW.dark,
  ],
  Image_Style: {
    height: RFPercentage(4.2),
    width: SIZES.height * 0.04,
  },
  container: {
    width: SIZES.width * 0.275,
    height: RFPercentage(17.5),
    borderRadius: SIZES.Sradius,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: RFPercentage(2.5),
    marginVertical: RFPercentage(2.5),
    marginLeft: RFPercentage(2.25),
    elevation: 10,
  },
  LevelImage: {
    height: RFPercentage(4),
    width: RFPercentage(4),
    marginBottom: RFPercentage(-6),
    tintColor: COLORS.blue,
  },
  BookletImage: {
    height: RFPercentage(6.5),
    width: RFPercentage(6.5),
    tintColor: COLORS.blue,
  },
  ProgressStyle: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  Text: {
    marginTop: RFPercentage(1.5),
    fontWeight: 'bold',
    fontSize: SIZES.h2,
    color: COLORS.blue,
  },
  blue_contianer: {
    width: '100%',
    height: SIZES.height * 0.19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  blue_view: {
    width: SIZES.width * 0.9,
    height: '90%',
    backgroundColor: '#A3DEFF',
    borderRadius: 13,
    marginTop: 15,
  },

  Reaction_Time_Title: {
    color: COLORS.blue,
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 5,
    marginLeft: 10,
  },
  Reaction_Time_Contianer: {
    backgroundColor: COLORS.blue,
    height: '15%',
    borderRadius: 15,
    alignSelf: 'center',
    marginTop: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  Reaction_Time_Text: {
    color: COLORS.white,
    fontWeight: 'bold',
    paddingHorizontal: 8,
  },

  touchableopacity_style: {
    backgroundColor: COLORS.blue,
    width: '35%',
    height: '5%',
    borderRadius: 15,
    alignSelf: 'center',
    marginBottom: 35,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  done_style: {
    color: COLORS.white,
    fontWeight: 'bold',
    fontSize: 15,
  },
});
