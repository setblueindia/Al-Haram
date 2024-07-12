import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { COLOR } from '../../constants/style'
import CustomeHeader from '../../components/CustomeHeader'
import { useNavigation } from '@react-navigation/native'
import CommanHeader from '../../components/ComanHeader'
import { ResponsiveSize } from '../../utils/utils'
import { bannecrSC } from '../../assests'

const Banner = () => {

    const navigation = useNavigation()
    const data = [1,2,3,4,5,6,7,8,9,10]

  return (
    <View style={styles.mainView}>
      <CommanHeader navigation={navigation}/>
      <ScrollView>
      <View style={styles.containerView}>
        {data?.map(()=>{
            return(
                <TouchableOpacity style={styles.imageView}>
                    <Image style={styles.img} source={bannecrSC}/>

                </TouchableOpacity>
            )
        })}
    
      </View>
      </ScrollView>
  
    </View>
  )
}

export default Banner

const styles = StyleSheet.create({
    mainView:{
        flex:1,
        backgroundColor:COLOR.white
    },
    containerView:{
        height:"100%",
        width:"100%",
        flexDirection:'row',
        flexWrap:'wrap',
    },
    imageView:{
        height:ResponsiveSize(300),
        width:ResponsiveSize(170),
        // backgroundColor:COLOR.black,
        marginLeft:ResponsiveSize(20),
        marginTop:ResponsiveSize(20),
        borderWidth:ResponsiveSize(1),
        borderRadius:ResponsiveSize(20),
        borderColor:"#FFEEEE"
        // paddingHorizontal:ResponsiveSize(10)
    },
    img:{
        height:"100%",
        width:"100%",
        resizeMode:'cover',
        borderRadius:ResponsiveSize(20)
    }
})