import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import {COLORS, Icons, SIZES} from '../../../config';
import {RFValue} from 'react-native-responsive-fontsize';
const ModalQuests = ({
  visible = false,
  setQuestions,
  data,
  setModalVisible,
}) => {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <Modal
      isVisible={visible}
      swipeDirection="down"
      onBackdropPress={() => {
        setModalVisible(false);
        console.log('close');
      }}
      style={styles.modal}
      animationInTiming={600}
      animationIn="slideInUp">
      <View style={styles.modalContainer}>
        <FlatList
          data={data}
          renderItem={({item, index}) => (
            <View
              style={{
                width: SIZES.width / 1.1,
                minHeight: 60,
                backgroundColor: '#f2f2f2',
                borderRadius: 5,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
                paddingHorizontal: 10,
              }}>
              <View style={{maxWidth: '75%'}}>
                <Text style={{color: COLORS.black, fontSize: RFValue(15)}}>
                  {item?.question?.title}
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => {
                  let newq = data;
                  newq.splice(index, 1);
                  setQuestions([...newq]);
                }}
                style={{
                  width: '20%',
                  height: '100%',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Image
                  source={Icons.Trash}
                  style={styles.iconBtn}
                  // source={Icons.Colors}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </Modal>
  );
};

export default ModalQuests;

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
    height: SIZES.height / 1.5,
  },
  iconBtn: {
    width: '100%',
    height: SIZES.avatar - 50,
  },
});
