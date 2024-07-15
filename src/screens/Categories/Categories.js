import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from './categories.style'
import CustomeHeader from '../../components/CustomeHeader'
import useCategroiesHook from './categories.hook'
import { ResponsiveSize } from '../../utils/utils'
import { ICON, NAVIGATION, NUMBER } from '../../constants/constants';
import { ALINE } from '../../constants/style'
import Icon from 'react-native-vector-icons/AntDesign';
import { BASE_URL } from '../../constants/axios.url'
import CusLoader from '../../components/CustomLoader'
const Categories = () => {
  const { CategoriesData, navigation, lang, userData, isLoadding } = useCategroiesHook()
  const [viewMore, setViewMore] = useState(false)
  const [aindex, setIndex] = useState(0)



  return (

    <View style={styles.mainView}>
      <View style={styles.CustomeHeaderView} >
        <CustomeHeader search={true} like={true} shoppingcart={true} userData={userData} />
        <ScrollView>
          {CategoriesData?.map((items, index) => {
            const slicedArray = items?.sub_category?.slice(0, 6);
            const mainData = items?.sub_category
            const count = mainData?.length - slicedArray?.length
            return (
              <View key={index}>
                <TouchableOpacity
                  onPress={() => {
                    items?.sub_category.length > 0 ?
                      (setIndex(index), setViewMore(false)) : navigation.navigate(NAVIGATION.ProductScreen, { cetegoriesId: items?.category_id })
                  }}
                  style={[styles.opationView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]} key={index}>
                  <Text style={styles.title}>{items?.title}</Text>
                  {items?.sub_category.length > 0 && <Icon size={ResponsiveSize(25)} name={index == aindex ? lang == NUMBER.num0 ? ICON.left : ICON.down : ICON.right} />}
                </TouchableOpacity>

                {(index == aindex && items?.sub_category.length > 0) &&
                  <View style={styles.imageContainer} >
                    <FlatList
                      scrollEnabled={false}
                      style={{ transform: [{ rotate: '0deg' }] }}
                      data={viewMore ? mainData : slicedArray}
                      numColumns={3}
                      keyExtractor={(item, index) => index * Math.random()}
                      renderItem={({ item, index }) => {

                        return (
                          <>
                            <TouchableOpacity
                              onPress={() => { navigation.navigate(NAVIGATION.ProductScreen, { cetegoriesId: item?.category_id }) }}
                              key={index * Math.random()} style={[styles.imageView]}>
                              <Image
                                style={styles.image}
                                source={{ uri: item?.image }} />

                            </TouchableOpacity>

                            {
                              !viewMore && index == 5 &&
                              <View style={styles.ViewMore}>
                                <TouchableOpacity
                                  onPress={() => { setViewMore(true) }}
                                  style={styles.btnView}
                                >
                                  <Text style={styles.viewText}>{" + " + count}</Text>
                                </TouchableOpacity>
                              </View>
                            }
                          </>
                        )
                      }}

                    />
                  </View>
                }
              </View>
            )
          })}
          <View style={{ height: ResponsiveSize(220) }} />
        </ScrollView>
      </View>
      {isLoadding &&
        <View style={{ height: '100%', width: "100%", position: 'absolute' }}>
          <CusLoader />
        </View>}
    </View>
  )
}

export default Categories
