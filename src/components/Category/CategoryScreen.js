import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryAPI } from '../../redux/mainStack/mainStackApi';
import { setCategories, selectCategories } from '../../redux/mainStackSlice/categorySlice';
import { View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
<<<<<<< HEAD
=======
import { BlurView } from '@react-native-community/blur';
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
import { useNavigation } from '@react-navigation/native';
const CategoryScreen = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
<<<<<<< HEAD
  const [viewMoreClicked, setViewMoreClicked] = useState(false);
  const [store_id, setstore_id] = useState("1");
  useEffect(() => {
    CategoryAPI(store_id)
      .then(responseData => {
        if (responseData.status === 1 && responseData.data) {
          const categoryData = responseData.data;
          dispatch(setCategories(categoryData));
=======
  const [viewMoreClicked, setViewMoreClicked] = useState(false); // Added state for "View more" functionality
  const navigation = useNavigation();
  useEffect(() => {
    const storeId = 1;
    const category_id = 4;
    CategoryAPI(storeId, category_id)
      .then(responseData => {
        if (responseData.status === 1 && responseData.data) {
          const categoryData = responseData.data;

          dispatch(setCategories(categoryData));

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
          if (categoryData.length > 0) {
            setClickedCategory(categoryData[0]);
          }
        } else {
          console.error('API Response Error:', responseData.message);
        }
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, [dispatch]);
<<<<<<< HEAD
  const navigation = useNavigation();
  const handleCategoryClick = (item) => {
    if (item.image) {
      setClickedCategory(item);
    console.log('Clicked category_id:', item.category_id);
    console.log('title:', item.title);
     
    } else {
      navigation.navigate('Products', { number: item.category_id });
    }
  };
  const handleImagePress = (subItem) => {
    navigation.navigate('Products', { number:subItem.category_id }); // Assuming 'number' is the identifier for the product
  };
  const renderCategoryTitle = ({ item }) => {
    const subCategory = clickedCategory?.sub_category || [];
    const shouldShowViewMore = subCategory.length > 6;
  
  
  
    return (
      <View>
        <TouchableOpacity onPress={() => handleCategoryClick(item)}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 3,
              padding: 10,
              backgroundColor: '#fff',
            }}>
            <View>
              <Text style={[styles.categoryTitle, clickedCategory && clickedCategory.category_id === item.category_id && styles.selectedButton]}>
                {item.title}
              </Text>
            </View>
            {/* Render the arrow icon only if the item has an image */}
            {item.image && !(clickedCategory && clickedCategory.category_id === item.category_id) && (
              <View style={{ alignSelf: 'center' }}>
                <MaterialIcons
                  name={'keyboard-arrow-right'}
                  size={25}
                  color={'black'}
                />
              </View>
            )}
          </View>
        </TouchableOpacity>
=======

  const handleCategoryClick = (item) => {
    // setClickedCategory(item);
    console.log('Clicked category_id:', item.category_id);
    console.log('title:', item.title);
  };
  const [subItemClicked, setSubItemClicked] = useState(false);
  const renderCategoryTitle = ({ item }) => {
    const subCategory = clickedCategory?.sub_category || [];
    const shouldShowViewMore = subCategory.length > 6;
    const handlePress = () => {
      console.log("subItem.category_id---",subItem.category_id);
      // navigation.navigate('Products', { number: subItem.category_id });
    };
    return (
      <View>
        <View>
          <TouchableOpacity onPress={() => handleCategoryClick(item)}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 3,
                padding: 10,
                backgroundColor: '#fff',
              }}>
              <View>
                <Text style={[styles.categoryTitle, clickedCategory && clickedCategory.category_id === item.category_id && styles.selectedButton]}>
                  {item.title}
                </Text>
              </View>
              {clickedCategory && clickedCategory.category_id === item.category_id ? (
                <View style={{ alignSelf: 'center' }}>
                </View>
              ) : (
                <View style={{ alignSelf: 'center' }}>
                  <MaterialIcons
                    name={'keyboard-arrow-right'}
                    size={25}
                    color={'black'}
                  />
                </View>
              )}
            </View>
          </TouchableOpacity>
        </View>
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        {clickedCategory && clickedCategory.category_id === item.category_id && (
          <View style={{ backgroundColor: "#fff" }}>
            <FlatList
              data={viewMoreClicked ? subCategory : subCategory.slice(0, 6)}
              keyExtractor={(subItem) => subItem.category_id.toString()}
              numColumns={3}
              renderItem={({ item: subItem, index }) => (
                <View style={{ flex: 1, margin: 5, backgroundColor: "#fff" }}>
<<<<<<< HEAD
<TouchableOpacity onPress={() => handleImagePress(subItem)}>
                <View>
                  <Image source={{ uri: subItem.image }} style={{ flex: 1, aspectRatio: 1, backgroundColor: "#fff" }} />
                  <Text style={{ textAlign: 'center', marginTop: 5, color: '#9e0203' }}>{subItem.title}</Text>
                  {shouldShowViewMore && index === 5 && subCategory.length > 1 && !viewMoreClicked && (
                    <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', alignSelf: "center" }}>
                      <TouchableOpacity onPress={() => {
                        setViewMoreClicked(!viewMoreClicked);
                        console.log('Clicked category_id:', clickedCategory?.category_id);
                      }}>
                        <Text style={{ color: '#9e0203', fontSize: 14, borderRadius: 15, backgroundColor: "#fff", width: "70%", textAlign: "center", aspectRatio: 3, padding: 2 }}>
                          View more
                        </Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
</TouchableOpacity>
=======
                  <TouchableOpacity onPress={handlePress}>

                  <Image source={{ uri: subItem.image }} style={{ flex: 1, aspectRatio: 1, backgroundColor: "#fff" }} />
                  </TouchableOpacity>
                  <Text style={{ textAlign: 'center', marginTop: 5, color: '#9e0203' }}>{subItem.title}</Text>
                  {shouldShowViewMore && index === 5 && subCategory.length > 1 && !viewMoreClicked && (
  <View style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, justifyContent: 'center', alignItems: 'center', alignSelf: "center" }}>
    <TouchableOpacity onPress={() => {
      setViewMoreClicked(!viewMoreClicked);
      console.log('Clicked category_id:', clickedCategory?.category_id);
    }}>
      <Text style={{ color: '#9e0203', fontSize: 14, borderRadius: 15, backgroundColor: "#fff", width: "70%", textAlign: "center", aspectRatio: 3, padding: 2 }}>
        View more
      </Text>
    </TouchableOpacity>
  </View>
)}
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
                </View>
              )}
            />
          </View>
        )}
      </View>
    );
  };
<<<<<<< HEAD
=======
  
 
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 300 }}>
          <ActivityIndicator size="large" color="#0000ff" />
<<<<<<< HEAD
=======
          {/* <Image source={require('../../assests/gif/app_Loader.gif')} style={{ width: 50, height: 50 }} /> */}
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        </View>
      ) : (
        <View>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.category_id.toString()}
            renderItem={renderCategoryTitle}
          />
        </View>
      )}
    </SafeAreaView>
  );
};
<<<<<<< HEAD
export default CategoryScreen;
=======

export default CategoryScreen;

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
