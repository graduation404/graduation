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
import {useTranslation} from 'react-i18next'

const ModalColors = ({modalColorVisible, setModalColorVisible,listColors,setlistColors}) => {
  const { t , i18n} = useTranslation();
  const [currentColor, setCurrentColor] = useState('#fff');
  return (
    <Modal animationType="slide" transparent={true} visible={modalColorVisible}>
      <View style={styles.container}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image source={Icons.Colors} style={styles.icon} />
          <Text style={styles.text}> {t('common:ChooseyourColors')}</Text>
        </View>
        <ColorPicker
          color={currentColor}
          swatchesOnly={false}
          onColorChangeComplete={color => {
            setCurrentColor(color);
          }}
          thumbSize={30}
          sliderSize={25}
          noSnap={true}
          row={true}
          swatchesLast={true}
          swatches={false}
          discrete={false}
        />

        <View style={styles.listColorsContainer}>
          {listColors.map((item, index) => (
            <TouchableOpacity
              style={[
                styles.icon,
                {
                  backgroundColor: item.colorCode,
                  marginHorizontal: RFPercentage(1),
                  elevation: 3,
                },
              ]}
              onLongPress={() => {
                let list = listColors.filter(color => item != color);
                setlistColors(list);
              }}
            />
          ))}
        </View>
        <View
          style={styles.containerBtns}>
          <SmallButton
            Text={t('common:Close')}
            onPress={() => {
              setModalColorVisible(false);
            }}
          />
          <SmallButton
            Text={t('common:AddColor')}
            onPress={() => {
              setlistColors(prev => [...prev, {colorCode:currentColor}]);
            }}
          />
        </View>
      </View>
    </Modal>
  );
};

export default ModalColors;

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
    paddingVertical: RFPercentage(4),
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
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SPACING.m,
  },
  containerBtns:{
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  }
});
