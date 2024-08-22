import {Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './chexkbutton.style';
import {COLOR} from '../../constants/style';
import Icon from 'react-native-vector-icons/dist/AntDesign';

const CheackButton = ({ onPress , preVriable , onPress2 , setCOD , setCredit , validation , setWalletAmount , WAmount , onPress3}) => {
  return (
    <TouchableOpacity
      onPress={() => {
        preVriable ? onPress(false) : onPress(true)
        if(validation){
          preVriable ? validation(false , "walletsystem" , WAmount ) : validation(true , "walletsystem" , WAmount)
        }
        onPress2 && onPress2(),
        setCOD &&  setCOD(false),
        setCredit &&  setCredit(false)
        onPress3 && onPress3("walletsystem")
      }}
      style={[styles.mainView, preVriable && {backgroundColor: COLOR.primaray}]}>
      <Icon style={styles.icon} name="check" size={15} />
    </TouchableOpacity>
  );
};

export default CheackButton;
