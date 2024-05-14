import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './drawe.style';
import Icon from 'react-native-vector-icons/AntDesign';
import {ALINE, COLOR} from '../../constants/style';
import {ResponsiveSize} from '../../utils/utils';
import InnerList from '../InnerList/InnerList';
import {useSelector} from 'react-redux';
import {EXTRASTR, ICON, NUMBER} from '../../constants/constants';

const DraweList = ({data, name}) => {
  const [on, setOn] = useState(false);
  const land = useSelector(state => state.lang);

  return (
    <View>
      <View style={styles.mainView}>
        <TouchableOpacity
          onPress={() => (on ? setOn(false) : setOn(true))}
          style={[
            styles.mainListView,
            land.data == NUMBER.num0 && {flexDirection: ALINE.rowreverse},
          ]}>
          <Text style={styles.mainHeaderText}>{data.name}</Text>
          {data?.children_data && (
            <Icon
              color={COLOR.black}
              name={
                on
                  ? ICON.down
                  : land.data !== NUMBER.num0
                  ? ICON.right
                  : ICON.left
              }
              size={20}
            />
          )}
        </TouchableOpacity>
        <View style={styles.innerTextView}>
          {on &&
            data?.children_data &&
            data?.children_data?.map((items, index) => {
              return <InnerList key={index} data={items} index={index} land={land}/>;
            })}
        </View>
      </View>
    </View>
  );
};

export default DraweList;
