import { Text, View, TouchableOpacity, ScrollView, Image } from 'react-native';
import React from 'react';
import { styles } from './profile.style';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AntDesign2 from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ResponsiveSize } from '../../utils/utils';
import useProfileHook from './profile.hook';
import { NAVIGATION, NUMBER } from '../../constants/constants';
import { ALINE, COLOR } from '../../constants/style';
import CustomeHeader from '../../components/CustomeHeader';
import CusLoader from '../../components/CustomLoader';
import { chatapp, fbimg, insta } from '../../assests';




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
    setArabic,
    isLoadding,
    changeLungues,
    socialPress
  } = useProfileHook();

  return (
    <View style={{ flex: 1, height: "100%", width: "100%", backgroundColor: "#FFF3F4" }}>
      <CustomeHeader shoppingcart={true} userData={userData} />
      <ScrollView style={styles.mainView}>
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
              {item.text !== PROFILEStr?.Sponser &&
                <AntDesign
                  name={item.icon}
                  color="#000000"
                  size={ResponsiveSize(35)}
                />}
              {item.text == PROFILEStr?.Sponser &&

                <AntDesign2
                  name={"transfer"}
                  color="#000000"
                  size={ResponsiveSize(35)}
                />}

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

        <View>
          <View style={styles.btnView}>
            <TouchableOpacity
              onPress={() => {
                changeLungues();
              }}
              style={styles.chnageLangBtnView}>
              <Text style={styles.btntext}>{PROFILEStr?.ChangeLang}</Text>
            </TouchableOpacity>
          </View>

          <View style={[styles.socialView ]}>
            <Text style={styles.scoialLinkTex}>{lang == NUMBER.num1 ?  "Social Links" : "الروابط الاجتماعية"}</Text>
            <View style={[styles.scoialIconView ,lang == NUMBER.num0 && {flexDirection:'row-reverse'}]}>

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
                <Image style={styles.cocialIcon} source={chatapp} />
              </TouchableOpacity>
            </View>
          
            <Text style={{ color: COLOR.darkGray, marginTop: ResponsiveSize(20) }}>{lang == NUMBER.num0 ?  "إصدار التطبيق" + " : " + version    : "App Version : " + version}</Text>
          </View>

          <View style={{ height: ResponsiveSize(30), width: "100%", backgroundColor: "#FFF3F4" }} />
        </View>
      </ScrollView>


      {isLoadding &&
        <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
          <CusLoader />
        </View>
      }
    </View>
  );
};

export default Profile;

