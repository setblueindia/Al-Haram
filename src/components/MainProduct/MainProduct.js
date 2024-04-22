import React, { useEffect, useState } from 'react';
import { View, Text, ActivityIndicator, FlatList, Image, Dimensions, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { fetchProductsApi } from '../../redux/mainStack/mainStackApi';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from '../../redux/mainStackSlice/MainProductSlice';
import Carousel from 'react-native-snap-carousel';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { AddWishlist } from '../../redux/mainStack/mainStackApi';
import { addWishlistStart, addWishlistSuccess, addWishlistFailure } from '../../redux/mainStackSlice/addWishlistSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Share } from 'react-native';
import { transparent } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
const { width, height } = Dimensions.get('window');
const MainProduct = ({ route }) => {
  const [heartIcon, setHeartIcon] = useState(require('../../assests/iconHeart.png'));
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [minimumPrice, setMinimumPrice] = useState(null);
  const [selectedOption, setSelectedOption] = useState(null);
  const [mediaGalleryEntries, setMediaGalleryEntries] = useState([]);
  const [swatchDataValues, setSwatchDataValues] = useState('');
  const navigation = useNavigation();
  const [selectedHeart, setSelectedHeart] = useState({});
  const handleHeartIconClick = async (id) => {
    try {
      const userDataString = await AsyncStorage.getItem('userData');
      if (userDataString) {
        const userData = JSON.parse(userDataString);
        const customer_id = userData.id;
        const productId = proId;
        const action = 'true';
        dispatch(addWishlistStart());
        const response = await AddWishlist(customer_id, productId, action);
        console.log("Added Wishlist response: ", response);
        console.log("Added Wishlist response for Product ID:", proId + response.message);
        console.log("message", response.message);
        Alert.alert('Wishlist Status', response.message);

      } else {
        console.log('No user data found in AsyncStorage.');
        navigation.navigate('Login');
        return;
      }
    } catch (error) {
      dispatch(addWishlistFailure(error));
      console.log("Error response: ", error);
    }
    setSelectedHeart({ ...selectedHeart, [id]: !selectedHeart[id] });
  };
  const { sku } = route.params;
  const [proId, setProductId] = useState(null);
  useEffect(() => {
    dispatch(fetchProductsStart());
    setLoading(true)
    fetchProductsApi(sku)
      .then((response) => {
        console.log('Response:', response);
        if (response && response.length > 0) {
          const fetchedProductId = response[0].id;
          console.log('Product ID:', fetchedProductId);
          setProductId(fetchedProductId);
        } else {
          console.log('No response or empty response array.');
        }
       
        const mediaEntries = response.map(product => product.media_gallery_entries);
        const files = mediaEntries.flat().map(entry => entry.file);
        setMediaGalleryEntries(files);
        if (response && response.length > 0) {
          const { minimum_price } = response[0].price_range;
          console.log("minin Price:", minimum_price.regular_price.value);
          setMinimumPrice(minimum_price.regular_price.value);
        } else {
          console.log('No response or empty response array.');
        }
        if (response && response.length>0) {
          const {configurable_options}= response[0].values;
          console.log("configurable:");
          
        } else {
          
        }
        setProducts(response);
        setLoading(false);
        dispatch(fetchProductsSuccess(response));
      })
      .catch((error) => {
        console.log('Error:', error);
        setError(error);
        setLoading(false);
        dispatch(fetchProductsFailure(error));
      });
  }, [dispatch, sku]);

  const handlePress = () => {
    navigation.navigate('AddToCart');
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const HomeScreen = () => {
    navigation.navigate('Home');
  };

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Error: {error.message}</Text>
      </View>
    );
  }
  const handleShareClick = () => {
    const shareUrl = 'https://picsum.photos/200';
    const title = 'Check out this item!';
    const text = 'Shared from MyApp';

    // Trigger share action
    Share.share({
      title: title,
      text: text,
      url: shareUrl,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };
  return (
    <View>
      <View>
        <View style={{ backgroundColor: "#F5F5F5", justifyContent: "space-between", flexDirection: "row", height: height * 8 / 100, alignItems: "center" }}>
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
      </View>
      <ScrollView style={{ backgroundColor: "#F5F5F5", }}>
        <View style={{ backgroundColor: "#F5F5F5", flex: 1 }}>
          <FlatList
            data={products}
            renderItem={({ item }) => (
              <View>
                <View style={{ backgroundColor: "#F5F5F5", }}>
                  <View style={{ marginVertical: 5, padding: 10 }}>
                    <Text style={{ fontSize: 17, color: "black" }}>{item.name}</Text>
                  </View>
                  <View style={{ alignItems: 'center', marginVertical: 5 }}>
                    <Carousel
                      data={mediaGalleryEntries}
                      renderItem={({ item }) => (
                        <View style={{ alignItems: 'center', marginHorizontal: 5 }}>
                          <Image
                            source={{ uri: `https://alharamstores.com/pub/media/catalog/product${item}` }}
                            style={{ width: width * 0.8, height: height * 0.4 }}
                          />
                        </View>
                      )}
                      sliderWidth={width}
                      itemWidth={width * 0.8}
                      autoplay
                      loop
                    />
                  </View>
                  <View style={{ marginHorizontal: 5 }}>
                    <View>
                      <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
                        <View >
                          <Text style={{ fontSize: 13, color: "#554D4D", fontSize: 15 }}>Sku: {item.sku}</Text>
                          {minimumPrice && <Text style={{ fontSize: 17, color: "#990107", fontWeight: '700' }}>SAR {minimumPrice}</Text>}
                        </View>
                        <View style={{ borderTopWidth: 1, borderTopColor: '#B5B5B5', marginVertical: 5, }}>
                        </View>
                      </View>
                      <View style={{ marginHorizontal: 10 }}>
                       
                          <View>
                          <View>
                          {/* {swatchDataValues && swatchDataValues.length > 0 ? (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
    <Text style={{ marginRight: 10, fontSize: 16, color: "#505050" }}>Color:</Text>
    {swatchDataValues.map((value, index) => (
      <TouchableOpacity key={index}>
        <View style={{ width: width * 0.13, backgroundColor: value ? value.toLowerCase() : 'black', borderRadius: 2, borderWidth: 2, borderColor: value ? value.toLowerCase() : 'black', flexDirection: 'row', alignItems: "center", marginHorizontal: 10 }}>
          <Text style={{ textAlign: "center", color: value ? value.toLowerCase() : 'black' }}>{value}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
) : (
  <Text>Hello</Text>
)} */}


                          {swatchDataValues && swatchDataValues.length > 0 && (
  <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
    <Text style={{ marginRight: 10, fontSize: 16, color: "#505050" }}>Color:</Text>
    {swatchDataValues.map((value, index) => (
      <TouchableOpacity key={index}>
        <View style={{ width: width * 0.13, backgroundColor: value ? value.toLowerCase() : 'black', borderRadius: 2, borderWidth: 2, borderColor: value ? value.toLowerCase() : 'black', flexDirection: 'row', alignItems: "center", marginHorizontal: 10 }}>
          <Text style={{ textAlign: "center", color: value ? value.toLowerCase() : 'black' }}>{value}</Text>
        </View>
      </TouchableOpacity>
    ))}
  </View>
)}

       <View>
       <View style={{ flex: 1 }}>
         {item.configurable_options && item.configurable_options.map((option, index) => {
           if (option.label === 'Size' && option.values) {
             return (
               <View key={index} style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10}}>
   <Text style={{ marginRight: 10, fontSize: 16, color: "#505050" }}>Size:</Text>
                 {option.values.map((value, valueIndex) => (
                   <TouchableOpacity key={valueIndex} style={{ margin: 10 }} onPress={() => handleOptionPress(value)}>
                     <View style={{ borderRadius: 25, borderColor: '#8A8484', borderWidth: 1, alignItems: 'center', backgroundColor: selectedOption === value ? '#990107' : '#fff', height: height * 5 / 100, width: width * 10 / 100 }}>
                       <Text style={{ textAlign: 'center', color: selectedOption === value ? '#FFFFFF' : '#3C3737', fontSize: 14, padding: 7 }}>{value.label}</Text>
                     </View>
                   </TouchableOpacity>
                 ))}
               </View>
             );
           }
           return null;
         })}
       </View>
     </View>
                          </View>

                          </View>
                       
                      </View>
                      <View style={{ marginVertical: 10, marginHorizontal: 10 }}>
                        <Text>Description:</Text>
                      </View>
                    </View>
                    <View>
                    </View>
                  </View>
                </View>
                <View style={{ width: width * 90 / 100, justifyContent: "space-between", flexDirection: "row", alignSelf: "center", height: height * 5 / 100 }}>
                  <View style={{ width: width * 0.15, height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 1, borderWidth: 1, borderColor: "#C2C2C2" }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleHeartIconClick(item.id)}>
                      <Image
                        source={selectedHeart[item.id] ? require('../../assests/selectedHeart.png') : require('../../assests/iconHeart.png')}
                        style={{ tintColor: '#990107', width: 31, height: 27 }}
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={{ backgroundColor: '#F5F5F5', width: width * 0.15, height: '100%', justifyContent: 'center', alignItems: 'center', borderRadius: 1, borderWidth: 1, borderColor: "#C2C2C2" }}>
                    <TouchableOpacity style={{ alignItems: 'center' }} onPress={() => handleShareClick()}>
                      <Image
                        source={require('../../assests/send.png')}
                        style={{
                          tintColor: '#990107',
                          width: 30,
                          height: 30,
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                  <TouchableOpacity onPress={handlePress}>
                    <View style={{ backgroundColor: '#990107', width: width * 0.5, alignItems: 'center', height: '100%', justifyContent: 'center' }}>
                      <Text style={{ fontSize: 17, fontWeight: "700", color: "#F5F5F5" }}>Add to cart</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            )}
            keyExtractor={(item, index) => index.toString()}
          />
          <View>
            <View>
              <FlatList
                data={products}
                renderItem={({ item }) => (
                  <View>
                      {item.related_products.length > 0 && (
                      <View>

                        <View style={{ borderTopWidth: 5, borderTopColor: '#B5B5B5', marginVertical: 10 }}></View>
                      <View style={{ marginHorizontal: 10, padding: 10 }}>
                        <Text style={{ color: "black", fontSize: 20 }}>Products related to this</Text>
                      </View>
                      </View>
                      )}
              
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>

                      <View style={{ flexDirection: 'row', padding: 10, }}>

                        {item.related_products.map((relatedProduct, index) => (
                          <View key={index} style={{
                            marginHorizontal: 5, borderRadius: 3,
                            overflow: 'hidden',
                            width: width * 40 / 100,

                            borderWidth: 0.5,
                            borderColor: "#E7DADA",
                          }}>
                            <View style={{
                              width: width * 39 / 100,
                              height: height * 20 / 100,
                            }}>
                              <Image
                                source={{ uri: relatedProduct.image.url }}
                                style={{ width: '100%', height: '100%' }}
                              />
                              <TouchableOpacity style={{
                                position: 'absolute',
                                top: 5,
                                right: 5,
                                borderRadius: 5,
                                backgroundColor: 'white',
                                padding: 5,
                              }}>
                                <Image
                                  source={require('../../assests/iconHeart.png')}
                                  style={{
                                    width: 20,
                                    height: 20,
                                    resizeMode: 'contain',
                                    tintColor: 'black',
                                  }}
                                />
                              </TouchableOpacity>
                            </View>
                            <View style={{
                              padding: 10
                            }}>
                              <View >
                                <Text numberOfLines={2} ellipsizeMode='tail' style={{ fontSize: 15, }}>{relatedProduct.name}</Text>
                              </View>
                              <View style={{}}>
                                <Text style={{ fontSize: 17, color: "#990107", fontWeight: '600' }}>SAR {relatedProduct.price_range.minimum_price.regular_price.value}</Text>
                              </View>
                            </View>
                          </View>
                        ))}
                      </View>
                    </ScrollView>
                  </View>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MainProduct;