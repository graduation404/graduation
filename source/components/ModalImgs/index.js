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
import {useTranslation} from 'react-i18next';
import ImagePicker from 'react-native-image-crop-picker';
const ModalImgs = ({
  modalImgVisible,
  setModalImgVisible,
  listImgs,
  setlistImgs,
}) => {
  const {t, i18n} = useTranslation();
  const chooseFile = () => {
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      // multiple: true,
      mediaType: 'photo',
      compressImageQuality:.8,
      includeBase64: true,
    }).then(images => {
      console.log(images.mime.split('/')[1]);
      let formdata = new FormData();
      // console.log(images.path);
      if(images.size/1024>700){
        alert("Image Can't be more than 700 kilo byte")
      }else{
        formdata.append(
          'fileName',
          (images.path + '').slice(images.path.indexOf('picker') + 7),
        );
        formdata.append('filePath', images.path);
        formdata.append('size', images.size);
        formdata.append('bindingFile', images.data);
        let item = {
          bindingFile: images.data,
          fileName:`${new Date(new Date() - Math.random() * (1e+12))}`,
          size: images.size,
          filePath: images.path,
          fileExtension: images?.mime?.split('/')[1],
          img: {
            uri: images.path,
            type: images.mime,
            name: `${new Date(new Date() - Math.random() * (1e+12))}`,
          },
        };
        setlistImgs(prev => [
          ...prev,
          // {imageBase64: images.data, Mime: images.mime},
          item,
        ]);
      }
      
    });
  };
  // console.log(listImgs[0].fileName);
  return (
    <Modal animationType="slide" transparent={true} visible={modalImgVisible}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Icons.Camera} style={styles.icon} />
          <Text style={styles.text}>{t('common:ChooseyourImages')}</Text>
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
                  source={{
                    uri: `data:${item.bindingFile};base64,${item.bindingFile}`,
                  }}
                  style={styles.imageStyle}
                  resizeMode="contain"
                />
              </TouchableOpacity>
            )}
          />
        </View>
        <View style={styles.containerBtns}>
          <SmallButton
            Text={t('common:Close')}
            onPress={() => {
              setModalImgVisible(false);
            }}
          />
          <SmallButton
            Text={t('common:AddImage')}
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
