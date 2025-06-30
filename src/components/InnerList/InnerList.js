import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {ALINE, COLOR} from '../../constants/style';
import {ResponsiveSize} from '../../utils/utils';
import Icon from 'react-native-vector-icons/AntDesign';
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants';
import { useNavigation } from '@react-navigation/native';

const InnerList = ({data, index, land}) => {
  const [innerOn, setInnerOn] = useState(false);
  const navigation = useNavigation()
  return (
    <View key={index}>
      <TouchableOpacity
        onPress={() => {
          innerOn ? setInnerOn(false) : setInnerOn(true);
          navigation.navigate(NAVIGATION.ProductScreen)

        }}
        style={[styles.innerListView , land.data == NUMBER.num0 && {flexDirection:ALINE.rowreverse}]}>
        <Text style={styles.innerHeaderText}>{data.name}</Text>
        {data?.children?.length > 0 && (
          <Icon
            style={styles.icon}
            name={innerOn ? ICON.down : land.data == NUMBER.num0 ? ICON.left :  ICON.right}
            size={ResponsiveSize(25)}
          />
        )}
      </TouchableOpacity>

      {innerOn &&
        data?.children?.length > 0 &&
        data?.children?.map((items, index) => {
          return (
            <View key={index}>
              <TouchableOpacity style={styles.lableView }>
                <Text style={[styles.lableText , land.data == NUMBER.num0 && {textAlign:'right'} ]}>{items.name}</Text>
                <View style={styles.devider} />
                <View style={styles.line} />
              </TouchableOpacity>
              <View style={styles.devider} />
            </View>
          );
        })}
    </View>
  );
};

export default InnerList;

const styles = StyleSheet.create({
  innerHeaderText: {
    color: COLOR.black,
    fontSize: ResponsiveSize(25),
    marginLeft: ResponsiveSize(20),
  },
  innerListView: {
    padding: ResponsiveSize(10),
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
  },
  icon: {
    color: COLOR.black,
  },
  lableView: {

    marginLeft: ResponsiveSize(50),
  },
  line: {
    width: '100%',
    height: ResponsiveSize(1),
    backgroundColor: COLOR.gray,
  },
  lableText: {
    fontSize: ResponsiveSize(22),
    color: COLOR.gray,
  },
  devider: {
    marginTop: ResponsiveSize(10),
  },
});
