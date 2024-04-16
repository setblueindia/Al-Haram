import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryAPIBanner } from '../../redux/mainStack/mainStackApi';
import { setCategories, selectCategories } from '../../redux/mainStackSlice/categorySlice';
import { View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation, useRoute } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
const Categorybanner = ({ route }) => {
  const { categoryId } = route.params;
  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const [store_id, setstore_id] = useState('1');
  const getConsoleValue = async () => {
    try {
      const consoleValue = await AsyncStorage.getItem('consoleValue');
      console.log("Category store id:", consoleValue);
      if (consoleValue !== null) {
        
        const storeIdFromAsyncStore = parseInt(consoleValue, 10);
        // Set the store_id state with the value retrieved from AsyncStoragess
        setstore_id(storeIdFromAsyncStore);
        // Log the store ID here
        console.log('Store ID:', storeIdFromAsyncStore);
      }
    } catch (error) {
      console.error('Error getting console value from AsyncStorage:', error);
    }
  };
  useEffect(() => {
    getConsoleValue();
  }, []);
  useEffect(() => {
    
    const category_id = categoryId;
    setLoading(true)
    CategoryAPIBanner(category_id,store_id)
      .then(responseData => {
        console.log("API Response:", responseData);
        if (responseData.status === 1 && responseData.data) {
          const categoryData = responseData.data;
          console.log('Categories data ====>', categoryData);
          dispatch(setCategories(categoryData));
          if (categoryData.length > 0) {
            setClickedCategory(categoryData[0]);
          }
        } else {
          console.error('API Response Error:', responseData.message);
        }
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
        setLoading(false);
      });
  }, [dispatch, categoryId,store_id]);
  useEffect(() => {
    if (categories.length > 0) {
      const newClickedCategory = categories.find(category => category.category_id === categoryId);
      setClickedCategory(newClickedCategory || null);
    }
  }, [categories, categoryId]);
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Products', { number: item.category_id })}>
      <View style={{ margin: 10 }}>
        {loading ? (
          <ActivityIndicator size="small" color="#0000ff" />
        ) : (
          <View style={{ alignItems: 'center' }}>
            <View style={{ width: width * 0.27, height: height * 0.2 }}>
              <DelayedImage uri={item.image} />
            </View>
            <Text style={{ textAlign: 'center', marginTop: 5, color: '#9e0203', width: width * 0.27 }}>{item.title}</Text>
          </View>
        )}
      </View>
    </TouchableOpacity>
  );
  const DelayedImage = ({ uri }) => {
    const [showImage, setShowImage] = useState(false);
    useEffect(() => {
      const timer = setTimeout(() => {
        setShowImage(true);
      }, 1000);
      return () => clearTimeout(timer);
    }, []);
    return showImage ? <Image source={{ uri }} style={{ width: width * 20 / 100, height: height * 0.15, aspectRatio: 0.97 }} /> : null;
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ backgroundColor: "#fff", flex: 1 }}>
      {loading ? (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', marginVertical: 300 }}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      ) : (
        <View>
          <View style={{ backgroundColor: "#fff", justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
            <View style={{ marginHorizontal: 10 }} >
              <TouchableOpacity onPress={handleGoBack}>
                <Ionicons name="arrow-back" size={28} color="black" />
              </TouchableOpacity>
            </View>
            <View style={{}}>
              <TouchableOpacity onPress={HomeScreen}>
                <Image
                  source={require('../../assests/Logo.png')}
                  style={{
                    width: width * 0.3, height: height * 0.1, resizeMode: "contain",
                  }}
                />
              </TouchableOpacity>
            </View>
            <View style={{ marginRight: 10 }}>
              <AntDesign name="shoppingcart" size={28} color="black" />
            </View>
          </View>
          <View>
            <FlatList
              data={categories}
              renderItem={renderItem}
              keyExtractor={item => item.category_id.toString()}
              numColumns={3}
              showsVerticalScrollIndicator={false}
              
            />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};
export default Categorybanner;