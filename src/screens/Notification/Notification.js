import { ActivityIndicator, FlatList, Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from './notification.style'
import CustomeHeader from '../../components/CustomeHeader'
import { ALINE, COLOR } from '../../constants/style'
import { ResponsiveSize } from '../../utils/utils'
import { Shippment } from '../../assests'
import useNotificationHook from './notification.hook'
import { EXTRASTR, NUMBER } from '../../constants/constants'
import CusLoader from '../../components/CustomLoader'
import Icon from 'react-native-vector-icons/dist/Ionicons';
import LottieView from 'lottie-react-native'
import CusModal from '../../components/CusModal'


const Notification = () => {
  const { data, onPress, setID, lang, loadding,
    setShowModal,
    GETNotificationAPI,
    showModal,
    setMesageText,
    moreData,
    userData,
    messText } = useNotificationHook()




  return (
    <View style={styles.mainView}>
      <View style={styles.CustomeHeaderView}>
        <CustomeHeader search={true} like={true} shoppingcart={true} userData={userData} />



        <View style={styles.container}>
          <FlatList
            data={data}
            onEndReached={() => { GETNotificationAPI() }}
            onEndReachedThreshold={0.1}
            // keyExtractor={(index) => { Math.random() * index }}
            ListFooterComponent={() => {
              return (
                <View style={{
                  width: "100%",
                  height: ResponsiveSize(100),
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {
                    moreData &&
                    <ActivityIndicator
                      size={"large"}
                      color={COLOR.primaray}

                    />}

                </View>
              )
            }}

            renderItem={({ item, index }) => {
              const parts = item?.creation_time?.split(' ');
              const datePart = parts[0];
              const timePart = parts[1];
              const mes = item?.message?.substr(0, 100)

              // console.log("item =====> ", item?.notification_view )
              return (
                <View key={Math.random() * index}>
                  <TouchableOpacity
                    key={Math.random() * index}
                    onPress={() => {
                      item.notification_view == "0" && onPress(item?.id),
                        setMesageText(item?.message),
                        item.notification_view == "1" && setShowModal(true)
                    }}
                    style={[styles.notificationView, lang == NUMBER.num0 &&
                      { flexDirection: ALINE.rowreverse },
                    { backgroundColor: item.notification_view == NUMBER.num1 ? COLOR.white : "#FFF3F4" }]}
                  >

                    <View style={[styles.imgView, lang == NUMBER.num0 &&
                    {
                      marginLeft: ResponsiveSize(20),
                      marginRight: 0
                    }]}
                    >
                      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name={"notifications-circle-sharp"} size={ResponsiveSize(50)} color={COLOR.primaray} />
                        <Text style={[styles.shippmentText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{
                          // lang == NUMBER.num1 ? "Shipment" : "شحنة"
                          item?.type
                        }
                        </Text>
                      </View>

                      <View style={{ flexDirection: "row" }}>
                        <View style={[styles.barView, lang == NUMBER.num0 && { marginLeft: ResponsiveSize(10) }]} />
                        <View style={styles.dataView}>
                          <Text style={[styles.dateText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>
                            {
                              datePart
                              // lang == NUMBER.num1 ? "12.00 am" : "12.00 صباحا"
                            }
                          </Text>
                          <Text style={[styles.dateText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>
                            {
                              timePart
                              // "27-05-2024"
                            }
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View style={[styles.textView, lang == NUMBER.num0 && { marginLeft: ResponsiveSize(-20) }]}>
                      <Text numberOfLines={2} style={[styles.desShippment, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{
                        //  lang == NUMBER.num1 ?  "Dear Customer, your order 000089756 is ready and shipped" : "عزيزي العميل، طلبك 000089756 جاهز وتم شحنه"
                        item?.message?.length > 100 ? mes + " ..." : mes
                      }</Text>

                    </View>
                  </TouchableOpacity>
                  <View style={{ height: ResponsiveSize(20) }} />
                </View>

              )
            }}
          />

        </View>

      </View>

      {(!data || data?.length <= 0) &&
        <View style={{
          position: 'absolute'
          , height: "100%"
          , width: "100%"
        }}>

          <CustomeHeader search={true} like={true} shoppingcart={true} userData={userData} />
          <View style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            height: "100%",
            width: "100%",
            // position: 'absolute',
            backgroundColor: "#00000040",
            // marginTop:ResponsiveSize(120)

          }}>

            <LottieView
              source={require('../../assests/Lottianimation/Nonotofication2.json')}
              autoPlay loop
              resizeMode='cover'
              style={{ height: ResponsiveSize(300), width: ResponsiveSize(300) }}
            />
            <View style={{
              height: ResponsiveSize(60),
              width: ResponsiveSize(300),
              borderRadius: ResponsiveSize(100),
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: "#00000040"
            }}>
              <Text style={{ color: COLOR.white, fontSize: ResponsiveSize(25) }}>No Notification Found</Text>
            </View>
          </View>
        </View>
      }
      {(loadding) &&
        <View style={{ flex: 1, position: 'absolute', width: "100%" }}>
          <CusLoader />
        </View>
      }
      <Modal
        animationType='slide'
        transparent={true}
        visible={showModal}
      >
        <CusModal setModalShow={setShowModal} text={messText} notification={true} />
      </Modal>
    </View>
  )
}

export default Notification
