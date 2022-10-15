import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {COLORS, Icons, SIZES} from '../../config';
import CustomInputAddPatient from '../customInput';
import {LargeButton, SmallButton} from '../Buttons';
import {t} from 'i18next';

const ModalQuiz = ({modal, setModal,valInput,setValInput,sendQuiz,Loading}) => {
  return (
    <Modal
      isVisible={modal}
      swipeDirection="down"
      onBackdropPress={() => {
        setModal(false);
      }}
      style={styles.modal}
      animationInTiming={600}
      animationIn="slideInUp">
      <View style={styles.modalContainer}>
        <Text style={{color: '#061721', marginBottom: "10%"}}>
          I am the modal content!
        </Text>
        <CustomInputAddPatient
          placeholder="Enter SNR Loss (Dual)"
          icon={Icons.PointHand}
          colorIcon={COLORS.blue}
          value={valInput}
          onChangeText={text => setValInput(text)}
          keyboardType="decimal-pad"
        />
        <SmallButton
          Text="Submit & Send"
          style={{width: '60%', borderRadius: SIZES.Sradius,marginTop:"6%"}}
            Loading={Loading}
            onPress={()=>sendQuiz()}
        />
      </View>
    </Modal>
  );
};

export default ModalQuiz;

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContainer: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 16,
    borderTopRightRadius: 18,
    borderTopLeftRadius: 18,
    paddingTop: 20,
    paddingBottom: 40,
    alignItems: 'center',
    height: SIZES.height / 2.5,
  },
});
