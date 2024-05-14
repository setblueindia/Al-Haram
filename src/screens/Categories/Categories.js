import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { styles } from './categories.style'
import CustomeHeader from '../../components/CustomeHeader'
import useCategroiesHook from './categories.hook'
import CategoriesList from '../../components/CategoriesList'
import { ResponsiveSize } from '../../utils/utils'

const Categories = () => {
  const { CategoriesData, navigation , lang } = useCategroiesHook()
  return (

    <View style={styles.mainView}>
      <View style={styles.CustomeHeaderView} >
        <CustomeHeader search={true} like={true} shoppingcart={true} />

      </View>
      <ScrollView>

        {CategoriesData.map((items, index) => {
          return (
            <View key={index}>
              <CategoriesList index={index} data={items} navigation={navigation} name={items.title} lang={lang}/>
            </View>

          )
        })}

      </ScrollView>
    </View>
  )
}

export default Categories
