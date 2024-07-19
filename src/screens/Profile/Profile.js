import { Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './profile.style';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ResponsiveSize } from '../../utils/utils';
import useProfileHook from './profile.hook';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { ALINE, COLOR } from '../../constants/style';
import CustomeHeader from '../../components/CustomeHeader';
import CusLoader from '../../components/CustomLoader';



const Profile = () => {

  const { menuItems,
    setSelectedItems,
    onPress,
    // loder,
    lang,
    navigation,
    email,
    name,
    userData,
    arabic,
    PROFILEStr,
    setArabic,
    changeLungues
  } = useProfileHook();



  return (
    <View style={styles.mainView}>
      <CustomeHeader shoppingcart={true} userData={userData} />
      <View style={styles.profileView}>
        <LinearGradient
          style={styles.linearView}
          colors={['#fff', '#FFE3E4']}
          angle={160}>

          <View style={styles.profileMain}>

            <View style={[styles.profileText, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>

              <EvilIcons
                name="user"
                color="#990107"
                size={ResponsiveSize(100)}
              />

              <TouchableOpacity onPress={() => {
                userData?.data ?
                  navigation.navigate(NAVIGATION.EditeProfileScreen) :
                  navigation.navigate(NAVIGATION.Login)
              }}>
                <SimpleLineIcons
                  name="note"
                  color="#202020"
                  size={ResponsiveSize(35)}
                />
              </TouchableOpacity>

            </View>
            <View style={styles.userText}>
              <Text style={[styles.userNameStyle, lang == NUMBER.num0 && { textAlign: 'right' }]}>{name}</Text>
            </View>

            <View style={styles.emailText}>
              <Text style={[styles.textEmail, lang == NUMBER.num0 && { textAlign: 'right' }]}>{email}</Text>
            </View>

          </View>


        </LinearGradient>
      </View>



      {menuItems.map((item, index) => (
        <TouchableOpacity key={index}
          style={[styles.menuView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}
          onPress={() => { onPress(item?.text) }}>

          <View style={{ flexDirection: lang == NUMBER.num0 ? 'row-reverse' : 'row', width: "80%" }}>

            <AntDesign
              name={item.icon}
              color="#000000"
              size={ResponsiveSize(35)}
            />

            <View style={styles.textMenu}>
              <Text style={styles.menuText}>{item.text}</Text>
            </View>

          </View>

          <SimpleLineIcons
            style={{ alignSelf: ALINE.center }}
            name={lang == NUMBER.num0 ? "arrow-left" : "arrow-right"}
            color={COLOR.black}
            size={ResponsiveSize(20)}
          />

        </TouchableOpacity>
      ))}


      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={() => {
            changeLungues();
          }}
          style={styles.chnageLangBtnView}>
          <Text style={styles.btntext}>{PROFILEStr?.ChangeLang}</Text>
        </TouchableOpacity>
      </View>
      {/* {console.log(arabic)}
      <View style={[styles.lanView]}>
        <TouchableOpacity
          onPress={() => {
            setArabic(true),
            changeLungues()
          }}
          style={[styles.lngBtn, !arabic && { backgroundColor: COLOR.white, borderWidth: ResponsiveSize(1) }]}>
          <Text style={[styles.btnText, !arabic && { color: COLOR.black }]}>{"عربي"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setArabic(false),
            changeLungues()
          }}
          style={[styles.lngBtn, arabic && { backgroundColor: COLOR.white, borderWidth: ResponsiveSize(1) }]}>
          <Text style={[styles.btnText, arabic && { color: COLOR.black }]}>{"English"}</Text>
        </TouchableOpacity>
      </View> */}
{/* 
      {loder &&
        <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
          <CusLoader />
        </View>} */}
    </View>
  );
};
export default Profile;

