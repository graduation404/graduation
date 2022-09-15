import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Image,
} from "react-native";

import { RFValue } from "react-native-responsive-fontsize";
import { COLORS } from "../../config";
const NoInternet = ({ buttonHandler }) => {

  return (
    <ScrollView style={styles.container}>
      <View style={[styles.buttonContainer, styles.imageContainer]}>
        <Image
          source={require("../../assets/imgs/error.png")}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.header}>Excuse Me</Text>
      <Text style={styles.text}>Something Wrong</Text>

      <View style={[styles.buttonContainer]}>
        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.button}
          onPress={buttonHandler}
        >
          <Text style={styles.buttonText}>Reload</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.white,
  },
  buttonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    width: RFValue(190),
    height: RFValue(150),
  },
  imageContainer: {
    marginHorizontal: RFValue(80),
    marginTop: RFValue(40),
    marginBottom: RFValue(20),
  },
  header: {
    fontFamily: "Roboto-Bold",
    fontSize: RFValue(25),
    marginBottom: RFValue(15),
    color: COLORS.black,
    textAlign: "center",
  },
  text: {
    fontFamily: "Roboto-Bold",
    fontSize: RFValue(17),
    marginBottom: RFValue(30),
    marginHorizontal: RFValue(20),
    color: COLORS.gray,
    textAlign: "center",
  },
  button: {
    minWidth: RFValue(150),
    minHeight: RFValue(38),
    backgroundColor: COLORS.blue,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(25),
    paddingHorizontal: RFValue(5),
    paddingVertical: RFValue(5),
  },
  buttonText: {
    fontFamily: "Roboto-Regular",
    fontSize: RFValue(20),
    color: COLORS.white,
  },
});

export default NoInternet;
