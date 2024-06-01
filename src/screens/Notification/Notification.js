import { Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
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
    showModal,
    setMesageText,
    messText } = useNotificationHook()

  return (
    <View style={styles.mainView}>
      <View style={styles.CustomeHeaderView}>
        <CustomeHeader search={true} like={true} shoppingcart={true} />



        <View style={styles.container}>
          {
            data?.map((items) => {

              const parts = items?.creation_time.split(' ');
              const datePart = parts[0];
              const timePart = parts[1];
              const mes = items?.message?.substr(0, 100)

              return (
                <>
                  <TouchableOpacity
                    onPress={() => {
                       items.notification_view == "0" && onPress(items?.id), 
                        setMesageText(items?.message),
                        items.notification_view == "1" && setShowModal(true)
                      }}
                    style={[styles.notificationView, lang == NUMBER.num0 &&
                      { flexDirection: ALINE.rowreverse },
                    { backgroundColor: items.notification_view == NUMBER.num1 ? COLOR.white : "#FFF3F4"  }]}
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
                          items?.type
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
                      <Text style={[styles.desShippment, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{
                        //  lang == NUMBER.num1 ?  "Dear Customer, your order 000089756 is ready and shipped" : "عزيزي العميل، طلبك 000089756 جاهز وتم شحنه"
                        items?.message?.length > 100 ? mes + " ..." : mes
                      }</Text>

                    </View>




                  </TouchableOpacity>


                  <View style={{ height: ResponsiveSize(20) }}  />
                </>
              )
            })
          }


        </View>

      </View>


      {!data &&
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          height: "100%",
          width: "100%",
          position: 'absolute',

        }}>
          <LottieView
            source={require('../../assests/Lottianimation/Nonotofication2.json')}
            autoPlay loop
            resizeMode='cover'
            style={{ height: ResponsiveSize(300), width: ResponsiveSize(300) }}
          />
          <Text style={{ color: COLOR.black, fontSize: ResponsiveSize(25) }}>No Notification Found</Text>

        </View>
      }
      {loadding &&
        <View style={{ flex: 1, position: 'absolute', width: "100%" }}>
          <CusLoader />
        </View>
      }
      <Modal
        animationType='slide'
        transparent={true}
        visible={showModal}
      >
        <CusModal setModalShow={setShowModal} text={messText} notification={true}/>
      </Modal>
    </View>
  )
}

export default Notification
