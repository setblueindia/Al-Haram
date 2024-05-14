import {
  Image,
  TouchableOpacity,
  Text,
  View,
  ScrollView,

} from 'react-native';
import React from 'react';
import { styles } from './drower.style';
import { WhiteOutLoginUser, chatapp, edit, fbimg, insta } from '../../assests';
import useDrowerHook from './drower.hook';
import DraweList from '../../components/DrawerList';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { ResponsiveSize } from '../../utils/utils';
import SocialButtonDra from '../../components/ScoiaButtonDra';
import { ALINE } from '../../constants/style';
import StatusBarCus from '../../components/CustomStatusBar';

const Drower = () => {
  const {
    data,
    navigation,
    langues,
    lang,
    userName,
    changeLungues,
    handleInstagramPress,
    handlechatPress,
    handleFacebookPress,
  } = useDrowerHook();

  return (
    <ScrollView style={styles.mainView}>

      <StatusBarCus />

      <View
        style={[
          styles.profileView,
          lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse },
        ]}>
        <View style={styles.profileIcon}>
          <Image style={styles.icon} source={WhiteOutLoginUser} />
        </View>
        <View
          style={[
            styles.nameView,
            lang.data == NUMBER.num0 && { marginRight: ResponsiveSize(20) },
          ]}>
          <Text style={styles.userNameText}> {userName}</Text>
        </View>
        <TouchableOpacity style={[styles.editIcon, lang.data == NUMBER.num0 && {left:ResponsiveSize(5)}]}>
          <Image style={styles.edit} source={edit} />
        </TouchableOpacity>

        <View style={styles.lineView}>
          <View style={styles.line} />
        </View>
      </View>

      <ScrollView style={styles.ScrollView}>
        {data.map((items, index) => {
          return (
            <View style={styles.drawerList} key={index}>
              <DraweList name={items.name} data={items} />
            </View>
          );
        })}
      </ScrollView>

      <View style={styles.LastView}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate(NAVIGATION.Login);
          }}
          style={styles.loginTextView}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.btnView}>
          <TouchableOpacity
            onPress={() => {
              changeLungues();
            }}
            style={styles.chnageLangBtnView}>
            <Text style={styles.btntext}>{langues?.ChangeLang}</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.line, { marginVertical: ResponsiveSize(30) }]} />
        <View style={styles.socialView}>
          <SocialButtonDra onPress={handleInstagramPress} image={insta} />
          <SocialButtonDra onPress={handleFacebookPress} image={fbimg} />
          <SocialButtonDra onPress={handlechatPress} image={chatapp} />
        </View>
        <View style={styles.buildView}>
          <Text>Build : v1.1</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Drower;
