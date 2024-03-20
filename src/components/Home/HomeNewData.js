import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryAPI } from '../../redux/mainStack/mainStackApi';
import { setCategories, selectCategories } from '../../redux/mainStackSlice/categorySlice';
import { View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
const { width, height } = Dimensions.get('window');
const HomeNewData = () => {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]); 
  const [clickedCategory, setClickedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [store_Id, setstore_Id] = useState(1);
  useEffect(() => {
    // const storeId = 1;
    const category_id = 4;
    CategoryAPI(store_Id, category_id)
=======
  useEffect(() => {
    const storeId = 1;
    const category_id = 4;
    CategoryAPI(storeId, category_id)
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      .then(responseData => {
        if (responseData.status === 1 && responseData.data) {
          const categoryData = responseData.data;

          dispatch(setCategories(categoryData));
          if (categoryData.length > 0) {
            setClickedCategory(categoryData[0]);
          }
          console.log('API Response Data:', categoryData);
        } else {
          console.error('API Response Error:', responseData.message);
        }

        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 300 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <ScrollView>
          <View>
            {categories.map(category => (
              <View key={category.category_id}>
                {category.sub_category.length > 0 && (
                  <Text style={{
                    fontSize: 17,
                    fontWeight: "500",
                    color: "#980404",
                    padding: 5,
                    marginHorizontal: 5
                  }}>{category.title}</Text>
                )}
                <ScrollView horizontal>
                  {category.sub_category.map(sub => (
                    <View key={sub.id} style={{ marginRight: 10 }}>
                      <Image source={{ uri: sub.image }} style={{
                        aspectRatio: 1,
                        backgroundColor: "#fff",
                        width: width * 35 / 100,
                        height: height * 20 / 100,
                      }} />
                      <Text style={{
                        textAlign: 'center',
                        color: "#4a484a",
                        padding: 5,
                        fontSize: 15
                      }}>{sub.title}</Text>
                    </View>
                  ))}
                </ScrollView>
              </View>
            ))}
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default HomeNewData;


