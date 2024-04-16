import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, Image, ScrollView, Dimensions, FlatList, Animated, TouchableOpacity, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import { homeAPI } from '../../redux/mainStack/mainStackApi';
import { setHomeData, setHomeError } from '../../redux/mainStackSlice/homeSlice';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CustomHeader from '../CustomHeader/CustomHeader';
const { width, height } = Dimensions.get('window');
const Home = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const carouselRef = React.useRef(null);
  const scrollViewRef = useRef(null);
  const opacity = useRef(new Animated.Value(1)).current;

  const navigation = useNavigation();

  const [loading, setLoading] = useState(false);
  const [Category, setCategory] = useState();
  const [topbanner, settopbanner] = useState();
  const [slider, setslider] = useState();
  const [gridbanner, setgridbanner] = useState();
  const [featuredproducts, setfeatured_products] = useState();
  const [specialOffers, setSpecialOffers] = useState();
  const [latestProducts, setLatestProducts] = useState();
  const [gameCategoryProducts, setGameCategoryProducts] = useState();
  const [schoolCategoryProducts, setschoolCategoryProducts] = useState()
  const [initialImageDisplayed, setInitialImageDisplayed] = useState(false);
  const [isloading, setisLoading] = useState(false);
  const [store_id, setstore_id] = useState("1")
  const getConsoleValue = async () => {
    try {
      const consoleValue = await AsyncStorage.getItem('consoleValue');
      console.log("language id:", consoleValue);
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
    setLoading(true);
    const fetchHomeData = async () => {
      try {
        const responseData = await homeAPI(store_id);
        console.log("response home:", responseData.data.categories);
        dispatch(setHomeData(responseData));
        setCategory(responseData.data.categories);
        settopbanner(responseData.data.top_banner);
        setslider(responseData.data.slider);
        setgridbanner(responseData.data.grid_banner);
        setfeatured_products(responseData.data.featured_products);
        setSpecialOffers(responseData.data.special_offer);
        setLatestProducts(responseData.data.latest_products);
        setGameCategoryProducts(responseData.data.game_category_products);
        setschoolCategoryProducts(responseData.data.school_supplies_category_products);
        setLoading(false);
      } catch (error) {
        console.error("home error", error);
        const errorMessage = error.message;
        const statusCode = error.response.status;
        dispatch(setHomeError({ errorMessage, statusCode }));
      }
    };
    fetchHomeData();
  }, [dispatch, store_id]);
  
  // useEffect(() => {
  //   setLoading(true);
  //   const fetchHomeData = async () => {
  //     try {
  //       console.log("responce home:",responseData.data.categories);
  //       const responseData = await homeAPI(store_id);
  //       dispatch(setHomeData(responseData));
  //       setCategory(responseData.data.categories);
  //       settopbanner(responseData.data.top_banner);
  //       setslider(responseData.data.slider);
  //       setgridbanner(responseData.data.grid_banner);
  //       setfeatured_products(responseData.data.featured_products);
  //       setSpecialOffers(responseData.data.special_offer);
  //       setLatestProducts(responseData.data.latest_products);
  //       setGameCategoryProducts(responseData.data.game_category_products);
  //       setschoolCategoryProducts(responseData.data.school_supplies_category_products);
  //       setLoading(false);
  //     } catch (error) {
  //       console.error("home error", error);
  //       const errorMessage = error.message;
  //       const statusCode = error.response.status;
  //       dispatch(setHomeError({ errorMessage, statusCode }));
  //     }
  //   };
  //   fetchHomeData();
  // }, [dispatch,store_id]);
  useEffect(() => {
    fadeInOut();
  }, []);
  useEffect(() => {
    let interval;
    if (initialImageDisplayed) {
      interval = setInterval(() => {
        if (scrollViewRef.current) {
          const newOffset = (scrollViewRef.current.contentOffset?.x || 0) + Dimensions.get('window').width;
          scrollViewRef.current.scrollTo({ x: newOffset, animated: true });
        }
      }, 3000);
    } else {
      setTimeout(() => {
        setInitialImageDisplayed(true);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [initialImageDisplayed]);
 
  
  
  
  const imageloder =(value,index)=>{
    setisLoading(value)
  }
  const fadeInOut = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false,
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => fadeInOut());
  };
  const handleViewAll = (number) => {
    console.log(`View All pressed for  number: ${number}`);
    // navigation.navigate('Products');
    navigation.navigate('Products', { number });
  };
  const handlePress = (sku) => {
    console.log("sku:", sku);
    navigation.navigate('MainProduct', { sku: sku });
  };
  const handleCategoryPress = (categoryId) => {
    console.log('Category ID:', categoryId);
    navigation.navigate('Categorybanner', { categoryId: categoryId });
  };
  const renderCarouselItem = ({ item, index }) => (
    <View style={{}}>
      <Image key={index} style={styles.sliderImage} source={{ uri: item.image }} />
    </View>
  );

  return (
    <View>
    <View>
     <CustomHeader/>
    </View>
      {loading ? (
        <View style={styles.lodercontainer}>
          <TouchableOpacity onPress={() => fadeInOut()}>
            <Animated.Image
              source={require('../../assests/gif/app_Loader.gif')}
              style={{ ...styles.animatedimage, opacity }}
            />
          </TouchableOpacity>
        </View>
      ) : (
        <SafeAreaView style={styles.container}>
          <SafeAreaView style={styles.container}>
            <ScrollView>
              <FlatList
                data={Category}
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.categories}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => handleCategoryPress(item.id)}>
                    <Image
                      source={{ uri: item.image }}
                      style={{
                        width: width * 0.2,
                        height: height * 0.1,
                        margin: 5,
                        borderRadius: 100 / 3,
                      }}
                    />
                    <Text style={{
                      width: width * 0.2,
                      fontSize: 13,
                      textAlign: 'center',
                    }}>{item.name}</Text>
                  </TouchableOpacity>
                )}
              />
              {topbanner && (
                <View style={styles.topbanner}>
                  <Image source={{ uri: topbanner.image }} style={styles.topBannerImage} />
                </View>
              )}
              {slider && slider.length > 0 && (
                <View>
                  <Carousel
                    ref={carouselRef}
                    data={slider}
                    renderItem={renderCarouselItem}
                    sliderWidth={width}
                    itemWidth={width}
                  
                    autoplay
                    loop
                  />
                </View>
              )}
              <View>
                <Text style={styles.TopCategoriesText}>{t('Top Categories')}</Text>
              </View>
              {gridbanner && gridbanner.length > 0 && (
                <View style={styles.gridBannerGrid}>
                  {gridbanner.slice(0, 2).map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Categorybanner', { categoryId: item.catId })}>
                      <Image style={styles.gridBannerImage} source={{ uri: item.image }} />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              {gridbanner && gridbanner.length > 1 && (
                <View style={styles.gridBannerGrid}>
                  {gridbanner.slice(2, 4).map((item, index) => (
                    <TouchableOpacity key={index} onPress={() => navigation.navigate('Categorybanner', { categoryId: item.catId })}>
                      <Image style={styles.gridBannerImage} source={{ uri: item.image }} />
                    </TouchableOpacity>
                  ))}
                </View>
              )}
              <View style={styles.featuredProducts} >
                <Text style={styles.featuredProductsText}>{t('FEATURE PRODUCTS')}</Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={featuredproducts}
                  contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    justifyContent: 'space-between',
                    marginTop: 10,
                  }}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item,index }) => (
                    <TouchableOpacity onPress={() => handlePress(item.sku)}>
                      <View style={styles.featuredproductsview}>
                        <View style={styles.featuredProductImageview}>
                          {isloading &&
                          <View style={styles.loaderContainer}>
                            <ActivityIndicator color="#9f0202"/>
                          </View>
                          }
                        {<Image 
                        key={index}
                        source={{ uri: item.image }} 
                        style={styles.featuredProductImage} 
                        onLoadStart={()=>imageloder(true,'onLoadStart')}
                        onLoadEnd={()=>imageloder(false,'onLoadStart')}
                        />}
                        </View>
                        <Text numberOfLines={1} ellipsizeMode="tail" style={styles.featuredname}>
                          {item.name}{'..'}
                        </Text>
                        <Text style={styles.featuredprize}>
                          SAR {item.price}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  )}
                />
                {specialOffers && specialOffers.length > 0 && (
                  <View >
                    <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                      <Text style={styles.specialOffersText}>{t('SPECIAL PRODUCTS')}</Text>
                      <TouchableOpacity onPress={() => handleViewAll(293)}>
                        <Text style={{
                          fontSize: 17,
                          fontWeight: "500",
                          color: "red",
                          padding: 5
                        }}>{t('View All')}</Text>
                      </TouchableOpacity>
                    </View>
                    <FlatList
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      data={specialOffers}
                      contentContainerStyle={styles.specialOffersContainer}
                      keyExtractor={(item, index) => index.toString()}
                      renderItem={({ item,index }) => (
                        <TouchableOpacity onPress={() => handlePress(item.sku)}>
                        <View style={styles.specialOfferView}>
                          <View style={styles.featuredProductImageview}>
                            {isloading &&
                            <View style={styles.loaderContainer}>
                              <ActivityIndicator color="#9f0202"/>
                            </View>
                            }
                          {<Image 
                          key={index}
                          source={{ uri: item.image }} 
                          style={styles.specialOfferImage} 
                          onLoadStart={()=>imageloder(true,'onLoadStart')}
                          onLoadEnd={()=>imageloder(false,'onLoadStart')}
                          />}
                          </View>
                          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.specialOfferName}>
                            {item.name}{'..'}
                          </Text>
                          <Text style={styles.specialOfferPrice}>
                            SAR {item.price}
                          </Text>
                        </View>
                      </TouchableOpacity>
                      )}
                    />
                  </View>
                )}
              </View>
              <View style={styles.latestproduct}>
                <Text style={styles.latestproductText}>{t('LATEST PRODUCTS')}</Text>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={latestProducts}
                  contentContainerStyle={styles.latestProductsContent}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item,index }) => (
                    <TouchableOpacity onPress={() => handlePress(item.sku)}>
                    <View style={styles.latestproductView}>
                      <View style={styles.featuredProductImageview}>
                        {isloading &&
                        <View style={styles.loaderContainer}>
                          <ActivityIndicator color="#9f0202"/>
                        </View>
                        }
                      {<Image 
                      key={index}
                      source={{ uri: item.image }} 
                      style={styles.latestproductImage} 
                      onLoadStart={()=>imageloder(true,'onLoadStart')}
                      onLoadEnd={()=>imageloder(false,'onLoadStart')}
                      />}
                      </View>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.latestproductName}>
                        {item.name}{'..'}
                      </Text>
                      <Text style={styles.latestproductPrice}>
                        SAR {item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                    // <TouchableOpacity onPress={() => handlePress(item.sku)}>
                    //   <View style={styles.latestproductView}>
                    //     <View>
                    //     {isloading &&
                    //       <View style={{justifyContent:"center",alignSelf:"center",borderRadius:1,zIndex:0,width:width,position:"absolute"}}>
                    //         <ActivityIndicator color='red'/>
                    //       </View>
                    //       }
                    //     {<Image source={{ uri: item.image }} 
                    //     style={styles.latestproductImage} 
                    //     onLoadStart={()=>imageloder(true,'onLoadStart')}
                    //     onLoadEnd={()=>imageloder(false,'onLoadStart')}
                    //     />}
                    //     </View>
                    //     <Text numberOfLines={1} ellipsizeMode="tail" style={styles.latestproductName}>
                    //       {item.name}{'..'}
                    //     </Text>
                    //     <Text style={styles.latestproductPrice}>
                    //       SAR {item.price}
                    //     </Text>
                    //   </View>
                    // </TouchableOpacity>
                  )}
                />
              </View>
              <View style={styles.gamecategory}>
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                  <Text style={styles.gamecategoryText}>{t('GAMES')}</Text>
                  <TouchableOpacity onPress={() => handleViewAll(251)}>
                    <Text style={{
                      fontSize: 17,
                      fontWeight: "500",
                      color: "red",
                      padding: 5
                    }}>{t('View All')}</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={gameCategoryProducts}
                  contentContainerStyle={styles.gameCategoryProductsContent}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item,index }) => (
                    <TouchableOpacity onPress={() => handlePress(item.sku)}>
                    <View style={styles.gamecategoryTextView}>
                      <View style={styles.featuredProductImageview}>
                        {isloading &&
                        <View style={styles.loaderContainer}>
                          <ActivityIndicator color="#9f0202"/>
                        </View>
                        }
                      {<Image 
                      key={index}
                      source={{ uri: item.image }} 
                      style={styles.gamecategoryTextViewImage} 
                      onLoadStart={()=>imageloder(true,'onLoadStart')}
                      onLoadEnd={()=>imageloder(false,'onLoadStart')}
                      />}
                      </View>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.gamecategoryName}>
                        {item.name}{'..'}
                      </Text>
                      <Text style={styles.gamecategoryPrice}>
                        SAR {item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                    // <TouchableOpacity onPress={() => handlePress(item.sku)}>
                    //   <View style={styles.gamecategoryTextView}>
                    //     <View>
                    //     {isloading &&
                    //       <View style={{justifyContent:"center",alignSelf:"center",borderRadius:1,zIndex:0,width:width,position:"absolute"}}>
                    //         <ActivityIndicator size="large" color="#9f0202"/>
                    //       </View>
                    //       }
                    //     {<Image 
                    //     source={{ uri: item.image }} 
                    //     style={styles.gamecategoryTextViewImage} 
                    //     onLoadStart={()=>imageloder(true,'onLoadStart')}
                    //     onLoadEnd={()=>imageloder(false,'onLoadStart')}
                    //     />}
                    //     </View>
                    //     <Text numberOfLines={1} ellipsizeMode="tail" style={styles.gamecategoryName}>
                    //       {item.name}{'..'}
                    //     </Text>
                    //     <Text style={styles.gamecategoryPrice}>
                    //       SAR {item.price}
                    //     </Text>
                    //   </View>
                    // </TouchableOpacity>
                  )}
                />
              </View>
              <View style={styles.gamecategory}>
                <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
                  <Text style={styles.gamecategoryText}>{t('SCHOOL')}</Text>
                  <TouchableOpacity onPress={() => handleViewAll(297)}>
                    <Text style={{
                      fontSize: 17,
                      fontWeight: "500",
                      color: "red",
                      padding: 5
                    }}>{t('View All')}</Text>
                  </TouchableOpacity>
                </View>
                <FlatList
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  data={schoolCategoryProducts}
                  contentContainerStyle={styles.gameCategoryProductsContent}
                  keyExtractor={(item, index) => index.toString()}
                  renderItem={({ item,index}) => (
                    <TouchableOpacity onPress={() => handlePress(item.sku)}>
                    <View style={styles.specialOfferView}>
                      <View style={styles.featuredProductImageview}>
                        {isloading &&
                        <View style={styles.loaderContainer}>
                          <ActivityIndicator color="#9f0202"/>
                        </View>
                        }
                      {<Image 
                      key={index}
                      source={{ uri: item.image }} 
                      style={styles.specialOfferImage} 
                      onLoadStart={()=>imageloder(true,'onLoadStart')}
                      onLoadEnd={()=>imageloder(false,'onLoadStart')}
                      />}
                      </View>
                      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.specialOfferName}>
                        {item.name}{'..'}
                      </Text>
                      <Text style={styles.specialOfferPrice}>
                        SAR {item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                    // <TouchableOpacity onPress={() => handlePress(item.sku)}>
                    //   <View style={styles.gamecategoryTextView}>
                    //     <View>
                    //     {isloading &&
                    //       <View style={{justifyContent:"center",alignSelf:"center",borderRadius:1,zIndex:0,width:width,position:"absolute"}}>
                    //         <ActivityIndicator size="large" color="#9f0202"/>
                    //       </View>
                    //       }
                    //    {
                    //    <Image source={{ uri: item.image }} 
                    //     style={styles.gamecategoryTextViewImage} 
                    //     onLoadStart={()=>imageloder(true,'onLoadStart')}
                    //     onLoadEnd={()=>imageloder(false,'onLoadStart')}
                    //     />
                    //    } 
                    //     </View>
                    //     <Text numberOfLines={1} ellipsizeMode="tail" style={styles.gamecategoryName}>
                    //       {item.name}{'..'}
                    //     </Text>
                    //     <Text style={styles.gamecategoryPrice}>
                    //       SAR {item.price}
                    //     </Text>
                    //   </View>
                    // </TouchableOpacity>
                  )}
                />
              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaView>
      )}
    </View>
  );
};
export default Home;