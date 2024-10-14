import { Text, View, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import React from 'react';
import { styles } from './profile.style';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AntDesign2 from 'react-native-vector-icons/MaterialCommunityIcons';
import AntDesign3 from 'react-native-vector-icons/Ionicons';

import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ResponsiveSize } from '../../utils/utils';
import useProfileHook from './profile.hook';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { ALINE, COLOR } from '../../constants/style';
import CustomeHeader from '../../components/CustomeHeader';
import CusLoader from '../../components/CustomLoader';
import { VAT, bussnis1, chatapp, fbimg, insta } from '../../assests';
import DeleteBox from '../../components/DeleteBox';




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
    version,
    setModal,
    modal,
    setArabic,
    isLoadding,
    changeLungues,
    socialPress,
    singOut
  } = useProfileHook();

  return (
    <View style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "#FFF3F4" }}>
      <CustomeHeader shoppingcart={true} userData={userData} />
      <ScrollView style={styles.mainView}>
        <View style={styles.profileView}>

          <LinearGradient
            style={styles.linearView}
            colors={['#fff', '#FAF6EE']}
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
              {(item.text !== PROFILEStr?.Sponser) &&
                <AntDesign
                  name={item.icon}
                  color="#000000"
                  size={ResponsiveSize(35)}
                />

              }
              {item.text == PROFILEStr?.Sponser &&
                <AntDesign2
                  name={"transfer"}
                  color="#000000"
                  size={ResponsiveSize(35)}
                />}

              {/* {(item.text == PROFILEStr?.Notification  ) &&
                <AntDesign3
                  name={item.icon}
                  color="#000000"
                  size={ResponsiveSize(35)}
                />} */}



              {/* <Image style={{height:ResponsiveSize(30) , width:ResponsiveSize(30) , tintColor:COLOR.black }} source={SoupanserIcon}/> */}
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

        <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: ResponsiveSize(20), paddingVertical: ResponsiveSize(20), backgroundColor: "#FAF6EE" }}>
          <TouchableOpacity
            onPress={() => {
              changeLungues();
            }}
            style={styles.chnageLangBtnView}>
            <Text style={styles.btntext}>{PROFILEStr?.ChangeLang}</Text>
          </TouchableOpacity>

          <View style={[styles.socialView]}>
            <Text style={[styles.scoialLinkTex, lang == NUMBER.num0 && { textAlign: 'right', marginRight: ResponsiveSize(100) }]}>{lang == NUMBER.num1 ? "Social Links" : "حساباتنا"}</Text>
            <View style={[{ width: "100%", flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>
              <View style={[styles.scoialIconView, lang == NUMBER.num0 && { flexDirection: 'row-reverse' }]}>

                <TouchableOpacity
                  onPress={() => { socialPress("1") }}
                  style={styles.roundIcon}>
                  <Image style={styles.cocialIcon} source={insta} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { socialPress("2") }}
                  style={styles.roundIcon}>
                  <Image style={styles.cocialIcon} source={fbimg} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { socialPress("3") }}
                  style={styles.roundIcon}>
                  <Image style={[styles.cocialIcon, { resizeMode: 'contain' }]} source={chatapp} />
                </TouchableOpacity>

              </View>

              <View style={{ width: ResponsiveSize(2), height: ResponsiveSize(50), backgroundColor: COLOR.darkGray, marginTop: ResponsiveSize(20) }} />
              <View style={{ width: "50%", alignItems: 'center', justifyContent: 'space-around', flexDirection: 'row' }}>
                <TouchableOpacity
                  onPress={() => { socialPress("5") }}
                  style={{ width: "60%", height: ResponsiveSize(80) }}>
                  <Image style={{ height: "100%", width: "100%", resizeMode: 'contain' }} source={bussnis1} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { socialPress("4") }}
                  style={{ width: "30%", height: ResponsiveSize(80) }}>
                  <Image style={{ height: "100%", width: "100%", resizeMode: 'contain', marginTop: ResponsiveSize(10) }} source={VAT} />
                </TouchableOpacity>
              </View>
            </View>
            <Text style={{ color: COLOR.darkGray, marginTop: ResponsiveSize(20), width: "100%", textAlign: 'center' }}>{lang == NUMBER.num0 ? "إصدار التطبيق" + " : " + version : "App Version : " + version}</Text>
          </View>

        </View>
      </ScrollView>


      {isLoadding &&
        <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
          <CusLoader />
        </View>
      }

      {console.log("modal :::", modal)}

      {modal &&
        <Modal
          visible={modal}
          animationType='slide'
          transparent
        >
          <DeleteBox noPress={() => { setModal(false) }} yesPress={() => { setModal(false), singOut() }} lang={lang} type={"L"} />

        </Modal>
      }
    </View>
  );
};

export default Profile;

