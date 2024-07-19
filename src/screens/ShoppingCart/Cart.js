import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT, RESIZEMODE } from '../../constants/style'
import Counter from '../../components/Counter'
import Icon from 'react-native-vector-icons/AntDesign';
import { EXTRASTR, ICON, NUMBER } from '../../constants/constants'
import useShoppingcart from './ShoppingCart.hook'
import { Ar, En } from '../../constants/localization'



const Cart = ({ data, lang, deleteProduct, outOfStock , updateQnty}) => {


  const [qty, setQnt] = useState(parseInt(data?.qty))
  const name = data?.name?.substring(0, 20) 
  const lable = lang == NUMBER.num1 ? En : Ar

  return (

    <View>
      {!outOfStock ?
        <View style={[styles.container, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
          <View style={styles.ImageView}>
            <Image
              style={styles.Img}
              source={{ uri: data?.image }} />
          </View>
          <View style={[styles.containerView , lang == NUMBER.num0 &&  {marginRight:ResponsiveSize(20)}]}>
            <Text style={[styles.titleText , lang == NUMBER.num0 &&  {textAlign:EXTRASTR.right}]}>{data?.name?.length > 20 ? name + "..." : data?.name}</Text>
            <Text style={[styles.priceText, lang == NUMBER.num0 && { textAlign: 'right' }]}>{lable.SAR +  ": " + data?.price}</Text>
            <Text style={[styles.colorText, lang == NUMBER.num0 && { textAlign: 'right' }]}>
              {data?.options[0] && data?.options[0]?.label + " : " + data?.options[0]?.value}
            </Text>
            <Text style={[styles.colorText, lang == NUMBER.num0 && { textAlign: 'right' }]}>
              {data?.options[1] && data?.options[1]?.label + " : " + data?.options[1]?.value}
            </Text>

            <View style={[styles.lastView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
              <View style={[styles.qntView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
                <Text style={lang == NUMBER.num0 ? { marginLeft: ResponsiveSize(10) } : { marginRight: ResponsiveSize(10) }}>{"QTY :"}</Text>
                <Counter updateQnty={updateQnty} id={data?.item_id} qty={qty} setQnt={setQnt} />  
              </View>
              <TouchableOpacity
                onPress={() => { deleteProduct(data?.item_id) }}
              >
                <Icon name={ICON.delete} size={ResponsiveSize(35)} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        :
        <View style={[styles.outView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]}>
          <View style={styles.outImgeView}>
            <Image style={styles.imgOut} source={{ uri: data?.image }} />
            <View style={styles.saleView}>
              <Text style={
                { color: COLOR.white,
                  fontWeight: FONTWEGHIT.font700
                }}>{"SALE"}</Text>
            </View>
          </View>

          <View style={[styles.secondView, lang == NUMBER.num0 && { marginRight: ResponsiveSize(20) }]}>
            <Text style={[styles.normalText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>This product for stock testing</Text>
            <Text style={[styles.darkText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>{"SAR 48"}</Text>

            <View style={styles.barView} />

            <Text style={[styles.darkText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>This product for stock testing</Text>
            <Text style={[styles.normalText, lang == NUMBER.num0 && { textAlign: EXTRASTR.right }]}>Other color or sizes are available</Text>
          </View>

        </View>
      }

    </View>

  )
}

export default Cart

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: ResponsiveSize(280),
    backgroundColor: "#00000007",
    borderWidth: ResponsiveSize(1),
    borderColor: COLOR.gray,
    borderRadius: ResponsiveSize(20),
    padding: ResponsiveSize(20),
    flexDirection: ALINE.row

  },
  ImageView: {
    height: "100%",
    width: ResponsiveSize(180),
    backgroundColor: COLOR.white,
    borderRadius: ResponsiveSize(20)
  },
  Img: {
    height: "100%",
    width: "100%",
    resizeMode: 'contain',
    borderRadius: ResponsiveSize(20)
  },
  containerView: {
    padding: ResponsiveSize(10),
    marginTop: ResponsiveSize(10)
  },
  titleText: {
    color: "#202020",
    marginTop: ResponsiveSize(10),
    fontSize: ResponsiveSize(22),
  },
  priceText: {
    color: COLOR.primaray,
    marginTop: ResponsiveSize(5),
    fontSize: ResponsiveSize(25),
    fontWeight: FONTWEGHIT.font700
  },
  colorText: {
    color: "#00000060",
    marginTop: ResponsiveSize(5)
  },
  lastView: {
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
    justifyContent: ALINE.spaceBetween,
    marginTop: ResponsiveSize(20),
    width: ResponsiveSize(300)

  },
  qntView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.center,
    alignItems: ALINE.center
  },
  outView: {
    width: "100%",
    height: ResponsiveSize(200),
    backgroundColor: COLOR.white,
    elevation: ResponsiveSize(20),
    alignItems: ALINE.center,
    flexDirection: ALINE.row,
    padding: ResponsiveSize(20),
    // justifyContent:'center'
  },
  outImgeView: {
    height: ResponsiveSize(150),
    width: ResponsiveSize(150),
    borderWidth: ResponsiveSize(1),
    borderTopLeftRadius: ResponsiveSize(20),
    borderTopRightRadius: ResponsiveSize(20),
    borderColor: COLOR.primaray,
    alignItems: ALINE.center,
    marginBottom: ResponsiveSize(20)
  },
  imgOut: {
    height: ResponsiveSize(130),
    width: "100%",
    resizeMode: RESIZEMODE.contain,
    borderTopLeftRadius: ResponsiveSize(20),
    borderTopRightRadius: ResponsiveSize(20)

  },
  saleView: {
    height: ResponsiveSize(40),
    width: "100%",
    backgroundColor: COLOR.primaray,
    position: 'absolute',
    bottom: 0,
    justifyContent: ALINE.center,
    alignItems: ALINE.center
  },
  barView: {
    width: "100%",
    height: ResponsiveSize(1),
    backgroundColor: COLOR.darkGray,
    marginTop: ResponsiveSize(20),
    marginBottom: ResponsiveSize(10),
  },
  secondView: {
    marginLeft: ResponsiveSize(20)
  },
  darkText: {
    color: COLOR.primaray,
    fontWeight: FONTWEGHIT.font600
  },
  normalText: {
    color: "#202020",
    fontSize: ResponsiveSize(18),
    lineHeight: ResponsiveSize(30)
  }
})