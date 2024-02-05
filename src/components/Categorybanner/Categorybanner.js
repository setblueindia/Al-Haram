import React, { useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryAPIBanner } from '../../redux/mainStack/mainStackApi';
import { setCategories, selectCategories } from '../../redux/mainStackSlice/categorySlice';
import { View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions,FlatList,TouchableOpacity,ActivityIndicator } from 'react-native';
import styles from './style';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
const { width, height } = Dimensions.get('window');
const Categorybanner = () => {
  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const storeId = 1; 
    const category_id = 3;
    CategoryAPIBanner(storeId, category_id)
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
  }, [dispatch]);
 
  const renderItem = ({ item }) => (
    <View style={{margin: 10,marginHorizontal:10}}> 

    <TouchableOpacity onPress={() => setClickedCategory(item)} >
      <Image source={{ uri: item.image }} style={{width:width*27/100,height:height*0.2}} />
    </TouchableOpacity>
    </View>
  );
  const handleGoBack = () => {
    navigation.goBack();
  };
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
     
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',marginVertical:300 }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Image source={require('../../assests/gif/app_Loader.gif')} style={{ width: 50, height: 50 }} />
      </View>
      ) : (
     <View>
  <View style={{backgroundColor:"#fff",justifyContent:"space-between",flexDirection:"row",height:height*8/100,alignItems:"center"}}>
      <View style={{marginHorizontal:10}} >
<TouchableOpacity onPress={handleGoBack}>

      <Ionicons name="arrow-back" size={28} color="black" />
</TouchableOpacity>
      </View>
      <View style={{}}>

      <TouchableOpacity onPress={HomeScreen}>
          <Image
            source={require('../../assests/Logo.png')} // Replace with your image path
            style={{
              width: width*0.3, height: height*0.1, resizeMode: "contain", 
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{marginRight:10}}>
        <AntDesign name="shoppingcart" size={28} color="black" />
      </View>
    </View>
       <View>
        <FlatList
         data={categories}
         renderItem={renderItem}
         keyExtractor={item => item.category_id.toString()}
         numColumns={3} // Display 3 images in each row
         showsVerticalScrollIndicator={false}
       />
     </View>
        </View>
      )}
      
    </SafeAreaView>
  );
};

export default Categorybanner;