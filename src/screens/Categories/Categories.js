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
const Categories = () => {
  const { CategoriesData, navigation, lang, userData } = useCategroiesHook()
  const [viewMore, setViewMore] = useState(false)
  const [aindex, setIndex] = useState(0)

  return (

    <View style={styles.mainView}>
      <View style={styles.CustomeHeaderView} >
        <CustomeHeader search={true} like={true} shoppingcart={true} userData={userData} />
        <ScrollView>
          {CategoriesData?.map((items, index) => {
            const slicedArray = items?.children?.slice(0, 6);
            const mainData = items?.children
            const count = mainData?.length - slicedArray?.length
            // console.log("==========> " , items?.id)


            return (
              <View key={index}>
                <TouchableOpacity
                  onPress=  {() => {
                    items?.children.length > 0 ?
                    ( setIndex(index), setViewMore(false) ) : navigation.navigate(NAVIGATION.ProductScreen , {cetegoriesId: items?.id})
                    }}
                  style={[styles.opationView, lang == NUMBER.num0 && { flexDirection: ALINE.rowreverse }]} key={index}>
                  <Text style={styles.title}>{items?.name}</Text>
                  {items?.children.length > 0 && <Icon size={ResponsiveSize(25)} name={index == aindex ? lang == NUMBER.num0 ? ICON.left : ICON.down : ICON.right} />}
                </TouchableOpacity>

                {(index == aindex && items?.children.length > 0) &&
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
                              onPress={() => { navigation.navigate(NAVIGATION.ProductScreen, { cetegoriesId: item?.id }) }}
                              key={index * Math.random()} style={[styles.imageView]}>
                              <Image
                                style={styles.image}
                                source={{ uri: BASE_URL + item?.mobile_thumbnail }} />

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
    </View>
  )
}

export default Categories
