import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { ResponsiveSize } from '../../utils/utils'
import { ALINE, COLOR, FONTWEGHIT } from '../../constants/style'
import Counter from '../../components/Counter'
import Icon from 'react-native-vector-icons/AntDesign';
import { ICON, NUMBER } from '../../constants/constants'



const Cart = ({data , lang}) => {
  
  return (
    <View style={[styles.container , lang == NUMBER.num0 && {flexDirection:ALINE.rowreverse} ]}>
      <View style={styles.ImageView}>
        <Image
          style={styles.Img}
          source={{ uri: "https://m.media-amazon.com/images/I/715gSUR3r5L._SX679_.jpg" }} />
      </View>
      <View style={styles.containerView}>
        <Text style={styles.titleText}>{data?.produtName}</Text>
        <Text style={[styles.priceText , lang ==NUMBER.num0 && {textAlign:'right'}]}>SAR 44</Text>
        <Text style={[styles.colorText , lang ==NUMBER.num0 && {textAlign:'right'}]}>{data?.Color}</Text>
        <Text style={[styles.colorText , lang ==NUMBER.num0 && {textAlign:'right'}]}>{data?.Size}</Text>
        <View style={[styles.lastView ,  lang == NUMBER.num0 && {flexDirection:ALINE.rowreverse} ]}>
          <View style={[styles.qntView , lang == NUMBER.num0 && {flexDirection:ALINE.rowreverse} ]}>
            <Text style={lang == NUMBER.num0 ? {marginLeft:ResponsiveSize(10)} : {marginRight:ResponsiveSize(10)}}>{data?.QTY}</Text>
            <Counter />
          </View>
          <TouchableOpacity>
            <Icon name={ICON.delete} size={ResponsiveSize(35)} />
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop: ResponsiveSize(20)

  },
  qntView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.center,
    alignItems: ALINE.center
  }
})