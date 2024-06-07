import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './chexkbutton.style';
import {COLOR} from '../../constants/style';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const CheackButton = ({ onPress , preVriable}) => {
  const [selected, setSelected] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => {
        preVriable ? onPress(false) : onPress(true)
        // selected ? setSelected(false) : setSelected(true);
      }}
      style={[styles.mainView, preVriable && {backgroundColor: COLOR.primaray}]}>
      <Icon style={styles.icon} name="check" size={15} />
    </TouchableOpacity>
  );
};

export default CheackButton;
