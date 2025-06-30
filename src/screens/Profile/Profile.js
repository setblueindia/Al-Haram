import { Text, View, TouchableOpacity, ScrollView, Image, Modal } from 'react-native';
import React from 'react';
import { styles } from './profile.style';
import LinearGradient from 'react-native-linear-gradient';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AntDesign2 from 'react-native-vector-icons/MaterialCommunityIcons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import { ResponsiveSize } from '../../utils/utils';
import useProfileHook from './profile.hook';
import { EXTRASTR, ICON, NAVIGATION, NUMBER } from '../../constants/constants';
import { ALINE, COLOR, RESIZEMODE } from '../../constants/style';
import CustomeHeader from '../../components/CustomeHeader';
import { VAT, bussnis1, chatapp, fbimg, insta } from '../../assets';
import DeleteBox from '../../components/DeleteBox';


const Profile = () => {

  const { menuItems,
    onPress,
    lang,
    navigation,
    email,
    name,
    userData,
    PROFILEStr,
    version,
    setShoewDelete, shoeDelete,
    deleteAccount,
    setModal,
    modal,
    changeLungues,
    socialPress,
    singOut
  } = useProfileHook();

  return (
    <View
      style={styles.container}>

      <CustomeHeader
        shoppingcart={true}
        userData={userData}
      />

      <ScrollView style={styles.mainView}>
        <View style={styles.profileView}>

          <LinearGradient
            style={styles.linearView}
            colors={['#fff', '#FAF6EE']}
            angle={160}>
            <View style={styles.profileMain}>
              <View style={[styles.profileText, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <EvilIcons
                  name={ICON.user}
                  color={COLOR.primaray}
                  size={ResponsiveSize(100)}
                />
                <TouchableOpacity onPress={() => {
                  userData?.data ?
                    navigation.navigate(NAVIGATION.EditeProfileScreen) :
                    navigation.navigate(NAVIGATION.Login)
                }}>
                  <SimpleLineIcons
                    name={ICON.note}
                    color="#202020"
                    size={ResponsiveSize(35)}
                  />
                </TouchableOpacity>

              </View>

              <View style={styles.userText}>
                <Text
                  style={[
                    styles.userNameStyle,
                    lang == NUMBER.num0 && {
                      textAlign: EXTRASTR.right
                    }
                  ]}>
                  {name}
                </Text>
              </View>

              <View style={styles.emailText}>

                <Text
                  style={[
                    styles.textEmail,
                    lang == NUMBER.num0 && {
                      textAlign: EXTRASTR.right
                    }
                  ]}>
                  {email}
                </Text>

              </View>
            </View>
          </LinearGradient>
        </View>

        {menuItems?.map((item, index) => {
          return (
            <View >
              {item?.display == 1 &&
                <TouchableOpacity key={index}
                  style={[
                    styles.menuView,
                    lang == NUMBER.num0 && {
                      flexDirection: ALINE.rowreverse
                    }
                  ]}
                  onPress={() => {
                    onPress(item?.text)
                  }}>

                  <View style={
                    {
                      flexDirection: lang == NUMBER.num0 ? ALINE.rowreverse : ALINE.row,
                      width: "80%"
                    }}>

                    {(item.text !== PROFILEStr?.Sponser) &&
                      <AntDesign
                        name={item.icon}
                        color={COLOR.black}
                        size={ResponsiveSize(35)}
                      />

                    }
                    {item.text == PROFILEStr?.Sponser &&
                      <AntDesign2
                        name={ICON.transfer}
                        color={COLOR.black}
                        size={ResponsiveSize(35)}
                      />}


                    <View style={styles.textMenu}>
                      <Text
                        style={styles.menuText}>
                        {item?.text}
                      </Text>
                    </View>

                  </View>

                  <SimpleLineIcons
                    style={{ alignSelf: ALINE.center }}
                    name={lang == NUMBER.num0 ? "arrow-left" : "arrow-right"}
                    color={COLOR.black}
                    size={ResponsiveSize(20)}
                  />
                </TouchableOpacity>}
            </View>

          )
        }
        )}
        <View style={styles.bottomView}>

          <TouchableOpacity
            onPress={() => {
              changeLungues();
            }}
            style={styles.chnageLangBtnView}>
            <Text
              style={styles.btntext}>
              {PROFILEStr?.ChangeLang}
            </Text>
          </TouchableOpacity>

          <View style={[styles.socialView]}>

            <Text
              style={[
                styles.scoialLinkTex,
                lang == NUMBER.num0 && {
                  textAlign: EXTRASTR.right,
                  marginRight: ResponsiveSize(100)
                }
              ]}>{PROFILEStr?.SocialLinks}</Text>

            <View style={[
              styles.socialContainer,
              lang == NUMBER.num0 && {
                flexDirection: ALINE.rowreverse
              }]}>

              <View
                style={[
                  styles.scoialIconView,
                  lang == NUMBER.num0 && {
                    flexDirection: ALINE.rowreverse
                  }
                ]}>

                <TouchableOpacity
                  onPress={() => { socialPress("1") }}
                  style={styles.roundIcon}>
                  <Image
                    style={styles.cocialIcon}
                    source={insta}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { socialPress("2") }}
                  style={styles.roundIcon}>
                  <Image
                    style={styles.cocialIcon}
                    source={fbimg}
                  />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { socialPress("3") }}
                  style={styles.roundIcon}>
                  <Image
                    style={[styles.cocialIcon, { resizeMode: RESIZEMODE.contain }]}
                    source={chatapp}
                  />
                </TouchableOpacity>

              </View>

              <View style={styles.lineView} />

              <View style={styles.secondSocialView}>
                <TouchableOpacity
                  onPress={() => { socialPress("5") }}
                  style={{ width: "60%", height: ResponsiveSize(80) }}>
                  <Image style={styles.ComanImg}
                    source={bussnis1} />
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() => { socialPress("4") }}
                  style={{ width: "30%", height: ResponsiveSize(80) }}>
                  <Image style={[
                    styles.ComanImg,
                    {
                      marginTop: ResponsiveSize(10)
                    }
                  ]} source={VAT} />
                </TouchableOpacity>
              </View>
            </View>

            <Text
              style={styles.appVersion}>
              {`${PROFILEStr?.AppVersion} : ${version}`}
            </Text>
          </View>

        </View>
      </ScrollView >

      {
        modal &&
        <Modal
          visible={modal}
          animationType='slide'
          transparent
        >
          <DeleteBox
            noPress={() => { setModal(false) }}
            yesPress={() => { setModal(false), singOut() }}
            lang={lang}
            type={"L"}
          />
        </Modal>
      }


      {
        shoeDelete &&
        <Modal
          visible={shoeDelete}
          animationType='slide'
          transparent
        >
          <DeleteBox
            noPress={() => { setShoewDelete(false) }}
            yesPress={() => { setShoewDelete(false), deleteAccount() }}
            lang={lang}
            type={"M"} />
        </Modal>
      }
    </View >
  );
};

export default Profile;

