import {
  FlatList,
  Image,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {COLORS, Icons, SIZES, SPACING} from '../../config';
import {SmallButton} from '../Buttons';
import ColorPicker from 'react-native-wheel-color-picker';
// Import Image Picker
import ImagePicker from 'react-native-image-crop-picker';
const ModalImgs = ({
  modalImgVisible,
  setModalImgVisible,
  listImgs,
  setlistImgs,
}) => {
  const chooseFile = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      multiple: true,
      includeBase64: true,
    }).then(images => {
      console.log(images);
      setlistImgs(prev => [...prev, ...images]);
    });
  };

  return (
    <Modal animationType="slide" transparent={true} visible={modalImgVisible}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Icons.Camera} style={styles.icon} />
          <Text style={styles.text}> Choose your Images</Text>
        </View>

        <View style={styles.listColorsContainer}>
          <FlatList
            data={listImgs}
            horizontal
            style={{width: '100%'}}
            renderItem={({item}) => (
              <TouchableOpacity
                onLongPress={() => {
                  let list = listImgs.filter(img => item != img);
                  setlistImgs(list);
                }}>
                <Image
                  source={{uri: `data:${item.mime};base64,${item.data}`}}
                  style={styles.imageStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.containerBtns}>
          <SmallButton
            Text="Close"
            onPress={() => {
              setModalImgVisible(false);
            }}
          />
          <SmallButton
            Text="Add Image"
            onPress={() => {
              // setListImgs(prev => [...prev, currentColor]);
              chooseFile();
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalImgs;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    paddingHorizontal: RFPercentage(4),
    elevation: 20,
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    width: SIZES.width,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: RFPercentage(2),
  },
  icon: {
    height: RFPercentage(5),
    width: RFPercentage(5),
  },
  text: {
    color: COLORS.blue,
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
  },
  listColorsContainer: {
    width: '100%',

    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.m,
  },
  containerBtns: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  imageStyle: {
    width: 200,
    height: 200,
    margin: 5,
    marginHorizontal: 10,
    elevation: 3,
    backgroundColor: COLORS.gray,
  },
});
