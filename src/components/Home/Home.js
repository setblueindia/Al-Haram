<<<<<<< HEAD
import React, { useEffect, useState, useRef } from 'react';
import { View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, ActivityIndicator, Modal, Animated, TouchableOpacity } from 'react-native';
=======

import React, { useEffect, useState,useRef } from 'react';
import { View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions,FlatList,ActivityIndicator,Modal,Animated,TouchableOpacity } from 'react-native';
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
import { useDispatch, useSelector } from 'react-redux';
import { homeAPI } from '../../redux/mainStack/mainStackApi';
import { setLoading, setHomeData, setHomeError } from '../../redux/mainStackSlice/homeSlice';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';
<<<<<<< HEAD
import Carousel from 'react-native-snap-carousel';
import AsyncStorage from '@react-native-async-storage/async-storage';
const { width, height } = Dimensions.get('window');
const Home = ({ category }) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
=======
const { width, height } = Dimensions.get('window');
const Home = ({category}) => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [gameProductid, setGameProductid] = useState(251);
  const [schoolProductid, setSchoolProductid] = useState(297);
  const [specialProduct, setSpecialProduct] = useState(293);
  const [store_id, setstore_id] = useState("1");
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  const [Category, setCategory] = useState();
  const [topbanner, settopbanner] = useState();
  const [slider, setslider] = useState();
  const [gridbanner, setgridbanner] = useState();
  const [featuredproducts, setfeatured_products] = useState();
  const [specialOffers, setSpecialOffers] = useState();
  const [latestProducts, setLatestProducts] = useState();
<<<<<<< HEAD
  const [gameCategoryProducts, setGameCategoryProducts] = useState();
=======
  const [gameCategoryProducts, setGameCategoryProducts] = useState(); 
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  const [schoolCategoryProducts, setschoolCategoryProducts] = useState()
  const scrollViewRef = useRef(null);
  const [initialImageDisplayed, setInitialImageDisplayed] = useState(false);
  const { t } = useTranslation();
<<<<<<< HEAD
  const carouselRef = React.useRef(null);
  const renderCarouselItem = ({ item, index }) => (
    <View style={{}}>
      <Image key={index} style={styles.sliderImage} source={{ uri: item.image }} />
    </View>
  );
  useEffect(() => {
    let interval;
=======
  useEffect(() => {
    let interval;

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
<<<<<<< HEAD
    return () => clearInterval(interval);
  }, [initialImageDisplayed]);
  const [store_id, setstore_id] = useState("1")
  useEffect(() => {
    const fetchHomeData = async () => {
      try {
=======

    return () => clearInterval(interval);
  }, [initialImageDisplayed]);

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // dispatch(setLoading());
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        const responseData = await homeAPI(store_id);
        dispatch(setHomeData(responseData));
        setCategory(responseData.data.categories);
        settopbanner(responseData.data.top_banner);
<<<<<<< HEAD
        setslider(responseData.data.slider);
=======
        setslider(responseData.data.slider)
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
        setgridbanner(responseData.data.grid_banner);
        setfeatured_products(responseData.data.featured_products);
        setSpecialOffers(responseData.data.special_offer);
        setLatestProducts(responseData.data.latest_products);
        setGameCategoryProducts(responseData.data.game_category_products);
        setschoolCategoryProducts(responseData.data.school_supplies_category_products);
        setLoading(false);
      } catch (error) {
        console.error("home error", error);
<<<<<<< HEAD
        const errorMessage = error.message;
        const statusCode = error.response.status;
        dispatch(setHomeError({ errorMessage, statusCode }));
      }
    };
    fetchHomeData();
  }, [dispatch]);
  const opacity = useRef(new Animated.Value(1)).current;
=======
        dispatch(setHomeError(error.message));
      }
    };
    fetchHomeData();
  }, [dispatch, store_id]);
  const opacity = useRef(new Animated.Value(1)).current;

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  const fadeInOut = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
<<<<<<< HEAD
        useNativeDriver: false,
=======
        useNativeDriver: false, // important to set this to false when using opacity
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
      }),
      Animated.timing(opacity, {
        toValue: 1,
        duration: 500,
        useNativeDriver: false,
      }),
    ]).start(() => fadeInOut());
  };
  const navigation = useNavigation();
  const handleViewAll = (number) => {
<<<<<<< HEAD
    console.log(`View All pressed for  number: ${number}`);;
=======
    console.log(`View All pressed for  number: ${number}`);
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    navigation.navigate('Products', { number });
  };
  useEffect(() => {
    fadeInOut();
  }, []);
<<<<<<< HEAD
  const handlePress = (sku) => {
    console.log("sku:", sku);
    navigation.navigate('MainProduct', { sku: sku });
  };
  const handleCategoryPress = (categoryId) => {
    console.log('Category ID:', categoryId);
    navigation.navigate('Categorybanner', { categoryId: categoryId });
  };
  return (
    <View>
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
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
                {Category &&
                  Category.map((category) => (
                    <TouchableOpacity onPress={() => handleCategoryPress(category.id)}
                    >
                      <Image source={{ uri: category.image }} style={{
                        width: width * 0.2,
                        height: height * 0.1,
                        margin: 5,
                        borderRadius: 100 / 3,
                      }} />
                      <Text style={{
                        width: width * 0.2,
                        fontSize: 13,
                        textAlign: 'center',
                      }}>{category.name}</Text>
                    </TouchableOpacity>
                  ))}
              </ScrollView>
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
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                  {featuredproducts && featuredproducts.length > 0 && (
                    <View style={{
                      flexDirection: 'row',
                      flexWrap: 'wrap',
                      justifyContent: 'space-between',
                      marginTop: 10,
                    }}>
                      {featuredproducts.map((product, index) => (
                        <TouchableOpacity onPress={() => handlePress(product.sku)}>
                          <View key={index} style={styles.featuredproductsview}>
                            <Image source={{ uri: product.image }} style={styles.featuredProductImage} />
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.featuredname}>
                              {product.name}{'..'}
                            </Text>
                            <Text style={styles.featuredprize}>
                              SAR {product.price}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  )}
                </ScrollView>
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
                    <ScrollView
                      horizontal
                      showsHorizontalScrollIndicator={false}
                      contentContainerStyle={styles.specialOffersContainer}
                    >
                      {specialOffers.map((product, index) => (
                        <TouchableOpacity onPress={() => handlePress(product.sku)}>

                          <View key={index} style={styles.specialOfferView}>
                            <Image source={{ uri: product.image }} style={styles.specialOfferImage} />
                            <Text numberOfLines={1} ellipsizeMode="tail" style={styles.specialOfferName}>
                              {product.name}{'..'}
                            </Text>
                            <Text style={styles.specialOfferPrice}>
                              SAR {product.price}
                            </Text>
                          </View>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  </View>
                )}
              </View>
              <View style={styles.latestproduct}>
                <Text style={styles.latestproductText}>{t('LATEST PRODUCTS')}</Text>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.latestProductsContent}
                >
                  {latestProducts &&
                    latestProducts.map((product, index) => (
                      <TouchableOpacity onPress={() => handlePress(product.sku)}>

                        <View key={index} style={styles.latestproductView}>
                          <Image source={{ uri: product.image }} style={styles.latestproductImage} />
                          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.latestproductName}>
                            {product.name}{'..'}
                          </Text>
                          <Text style={styles.latestproductPrice}>
                            SAR {product.price}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
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
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.gameCategoryProductsContent}
                >
                  {gameCategoryProducts &&
                    gameCategoryProducts.map((product, index) => (
                      <TouchableOpacity onPress={() => handlePress(product.sku)}>
                        <View key={index} style={styles.gamecategoryTextView}>
                          <Image source={{ uri: product.image }} style={styles.gamecategoryTextViewImage} />
                          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.gamecategoryName}>
                            {product.name}{'..'}
                          </Text>
                          <Text style={styles.gamecategoryPrice}>
                            SAR {product.price}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
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
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                  contentContainerStyle={styles.gameCategoryProductsContent}
                >
                  {schoolCategoryProducts &&
                    schoolCategoryProducts.map((product, index) => (
                      <TouchableOpacity onPress={() => handlePress(product.sku)}>
                        <View key={index} style={styles.gamecategoryTextView}>
                          <Image source={{ uri: product.image }} style={styles.gamecategoryTextViewImage} />
                          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.gamecategoryName}>
                            {product.name}{'..'}
                          </Text>
                          <Text style={styles.gamecategoryPrice}>
                            SAR {product.price}
                          </Text>
                        </View>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>
            </ScrollView>
          </SafeAreaView>
        </SafeAreaView>
      )}
    </View>
  );
};
export default Home;
=======
  
  const handlePress = (sku) => {
    navigation.navigate('MainProduct', { sku: sku });
};
const handleCategoryPress = (categoryId) => {
  console.log('Category ID:', categoryId);
  navigation.navigate('Categorybanner', { categoryId: categoryId });
};
  return (
<View>
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
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
         {Category &&
        Category.map((category) => (
             <TouchableOpacity  onPress={() => handleCategoryPress(category.id)}
             >
      <Image source={{ uri: category.image }} style={{
        width: width * 0.2,
        height: height * 0.1,
        margin: 5,
        borderRadius: 100/3,
      }} />
      <Text style={{
        width: width * 0.2, 
        fontSize: 13, 
        textAlign: 'center', 
      }}>{category.name}</Text>
    </TouchableOpacity>
        ))}
</ScrollView>
{topbanner && (
          <View style={styles.topbanner}>
            <Image source={{ uri: topbanner.image }} style={styles.topBannerImage} />
          </View>
        )}
            {slider && slider.length > 0 && (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}  ref={scrollViewRef}>
            {slider.map((slide, index) => (
            <View style={{}}>

              <Image key={index} style={styles.sliderImage} source={{ uri: slide.image }} />
            </View>
            ))}
          </ScrollView>
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
           <ScrollView horizontal showsHorizontalScrollIndicator={false}>
           {featuredproducts && featuredproducts.length > 0 && (
          <View style={{flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          marginTop: 10,}}>
            {featuredproducts.map((product, index) => (
             <TouchableOpacity onPress={() => handlePress(product.sku)}>
             <View key={index} style={styles.featuredproductsview}>
               <Image source={{ uri: product.image }} style={styles.featuredProductImage} />
               <Text numberOfLines={1} ellipsizeMode="tail" style={styles.featuredname}>
                 {product.name}{'..'}
               </Text>
               <Text style={styles.featuredprize}>
                 SAR {product.price}
               </Text>
             </View>
           </TouchableOpacity>
           
             
             
    
            ))}
          </View>
        )}
          </ScrollView>
          {specialOffers && specialOffers.length > 0 && (
      
          <View >
               <View style={{justifyContent:"space-between",flexDirection:"row"}}>
             <Text style={styles.specialOffersText}>{t('SPECIAL PRODUCTS')}</Text>
             <TouchableOpacity onPress={() => handleViewAll(293)}>
              
            <Text style={{ fontSize: 17,
    fontWeight: "500",
    color: "red",
    padding:5}}>View All</Text>
             </TouchableOpacity>
            </View>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.specialOffersContainer}
            >
              {specialOffers.map((product, index) => (
              <TouchableOpacity onPress={() => handlePress(product.sku)}>

                <View key={index} style={styles.specialOfferView}>
                  <Image source={{ uri: product.image }} style={styles.specialOfferImage} />
                   <Text numberOfLines={1} ellipsizeMode="tail" style={styles.specialOfferName}>
          {product.name}{'..'}
        </Text>
        <Text style={styles.specialOfferPrice}>
          SAR {product.price}
        </Text>
                </View>
              </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
        </View>
        <View style={styles.latestproduct}>
          <Text style={styles.latestproductText}>{t('LATEST PRODUCTS')}</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.latestProductsContent}
          >
            {latestProducts &&
              latestProducts.map((product, index) => (
                <TouchableOpacity onPress={() => handlePress(product.sku)}>

                <View key={index} style={styles.latestproductView}>
                  <Image source={{ uri: product.image }} style={styles.latestproductImage} />
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.latestproductName}>
                  {product.name}{'..'}
       </Text>
        <Text style={styles.latestproductPrice}>
           SAR {product.price}
        </Text>
                </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
        </View>

        <View style={styles.gamecategory}>
        <View style={{justifyContent:"space-between",flexDirection:"row"}}>
          <Text style={styles.gamecategoryText}>{t('GAMES')}</Text>
          <TouchableOpacity onPress={() => handleViewAll(251)}>

          <Text style={{ fontSize: 17,
    fontWeight: "500",
    color: "red",
    padding:5}}>View All</Text>
          </TouchableOpacity>
    </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.gameCategoryProductsContent}
          >
            {gameCategoryProducts &&
              gameCategoryProducts.map((product, index) => (
                <TouchableOpacity onPress={() => handlePress(product.sku)}>

                <View key={index} style={styles.gamecategoryTextView}>
                  <Image source={{ uri: product.image }} style={styles.gamecategoryTextViewImage} />
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.gamecategoryName}>
           {product.name}{'..'}
         </Text>
        <Text style={styles.gamecategoryPrice}>
          SAR {product.price}
         </Text>
                  
                </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
         
        </View>
        <View style={styles.gamecategory}>
        <View style={{justifyContent:"space-between",flexDirection:"row"}}>
          <Text style={styles.gamecategoryText}>{t('SCHOOL')}</Text>
          <TouchableOpacity onPress={() => handleViewAll(297)}>

          <Text style={{ fontSize: 17,
    fontWeight: "500",
    color: "red",
    padding:5}}>View All</Text>
          </TouchableOpacity>
    </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.gameCategoryProductsContent}
          >
            {schoolCategoryProducts &&
              schoolCategoryProducts.map((product, index) => (
                <TouchableOpacity onPress={() => handlePress(product.sku)}>

                <View key={index} style={styles.gamecategoryTextView}>
                  <Image source={{ uri: product.image }} style={styles.gamecategoryTextViewImage} />
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.gamecategoryName}>
           {product.name}{'..'}
         </Text>
        <Text style={styles.gamecategoryPrice}>
          SAR {product.price}
         </Text>
                  
                </View>
                </TouchableOpacity>
              ))}
          </ScrollView>
         
        </View>
        {/* {schoolCategoryProducts && schoolCategoryProducts.length > 0 && (
        <View style={styles.schoolcategory}>
          <View style={{justifyContent:"space-between",flexDirection:"row"}}>
          <Text style={styles.schoolcategoryText}>{t('SCHOOL')}</Text>
          <TouchableOpacity onPress={() => handleViewAll(297)}>
            
          <Text style={{ fontSize: 17,
    fontWeight: "500",
    color: "red",
    padding:5}}>View All</Text>
          </TouchableOpacity>
    </View>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.schoolCategoryProductsContent}
          >
            {schoolCategoryProducts.map((product, index) => (
              <View key={index} style={styles.schoolcategory}>
                <Image source={{ uri: product.image }} style={styles.schoolcategoryImage} />
                      <Text numberOfLines={1} ellipsizeMode="tail" style={styles.schoolcategoryName}>
          {product.name}{'..'}
        </Text>
         <Text style={styles.schoolcategoryPrice}>
          SAR {product.price}
        </Text>
                
              </View>
            ))}
          </ScrollView>
        </View>
      )} */}

      </ScrollView>
    </SafeAreaView>
    </SafeAreaView>
      )}
</View>  
  );
};
export default Home;
// import React, { useEffect, useState, useRef } from 'react';
// import { View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions, FlatList, ActivityIndicator, Modal, Animated, TouchableOpacity, RefreshControl } from 'react-native';
// import { useDispatch, useSelector } from 'react-redux';
// import { homeAPI } from '../../redux/mainStack/mainStackApi';
// import { setLoading, setHomeData, setHomeError } from '../../redux/mainStackSlice/homeSlice';
// import styles from './style';
// import { useTranslation } from 'react-i18next';
// import { useNavigation } from '@react-navigation/native';
// import HomeNewData from './HomeNewData';
// const { width, height } = Dimensions.get('window');
// const Home = () => {
//   const [loading, setLoading] = useState(true);
//   const dispatch = useDispatch();
//   const [gameProductid, setGameProductid] = useState(251);
//   const [schoolProductid, setSchoolProductid] = useState(297);
//   const [specialProduct, setSpecialProduct] = useState(293);
//   const [store_id, setstore_id] = useState("1");
//   const [Category, setCategory] = useState();
//   const [topbanner, settopbanner] = useState();
//   const [slider, setslider] = useState();
//   const [gridbanner, setgridbanner] = useState();
//   const [featuredproducts, setfeatured_products] = useState();
//   const [specialOffers, setSpecialOffers] = useState();
//   const [latestProducts, setLatestProducts] = useState();
//   const [gameCategoryProducts, setGameCategoryProducts] = useState();
//   const [schoolCategoryProducts, setschoolCategoryProducts] = useState()
//   const scrollViewRef = useRef(null);
//   const [initialImageDisplayed, setInitialImageDisplayed] = useState(false);
//   const { t } = useTranslation();

//   const [refreshing, setRefreshing] = useState(false); // State for refreshing

//   useEffect(() => {
//     let interval;

//     if (initialImageDisplayed) {
//       interval = setInterval(() => {
//         if (scrollViewRef.current) {
//           const newOffset = (scrollViewRef.current.contentOffset?.x || 0) + Dimensions.get('window').width;
//           scrollViewRef.current.scrollTo({ x: newOffset, animated: true });
//         }
//       }, 3000);
//     } else {
//       setTimeout(() => {
//         setInitialImageDisplayed(true);
//       }, 3000);
//     }

//     return () => clearInterval(interval);
//   }, [initialImageDisplayed]);

//   useEffect(() => {
//     const fetchHomeData = async () => {
//       try {
//         setRefreshing(true); // Set refreshing to true when fetching new data
//         const responseData = await homeAPI(store_id);
//         dispatch(setHomeData(responseData));
//         setCategory(responseData.data.categories);
//         settopbanner(responseData.data.top_banner);
//         setslider(responseData.data.slider)
//         setgridbanner(responseData.data.grid_banner);
//         setfeatured_products(responseData.data.featured_products);
//         setSpecialOffers(responseData.data.special_offer);
//         setLatestProducts(responseData.data.latest_products);
//         setGameCategoryProducts(responseData.data.game_category_products);
//         setschoolCategoryProducts(responseData.data.school_supplies_category_products);
//         setLoading(false);
//         setRefreshing(false); // Set refreshing back to false after data is fetched
//       } catch (error) {
//         console.error("home error", error);
//         dispatch(setHomeError(error.message));
//         setRefreshing(false); // Set refreshing back to false if there's an error
//       }
//     };
//     fetchHomeData();
//   }, [dispatch, store_id]);

//   const opacity = useRef(new Animated.Value(1)).current;

//   const fadeInOut = () => {
//     Animated.sequence([
//       Animated.timing(opacity, {
//         toValue: 0,
//         duration: 500,
//         useNativeDriver: false, // important to set this to false when using opacity
//       }),
//       Animated.timing(opacity, {
//         toValue: 1,
//         duration: 500,
//         useNativeDriver: false,
//       }),
//     ]).start(() => fadeInOut());
//   };

//   const navigation = useNavigation();
//   const handleViewAll = (number) => {
//     console.log(`View All pressed for  number: ${number}`);
//     navigation.navigate('Products', { number });
//   };

//   useEffect(() => {
//     fadeInOut();
//     onRefresh()
//   }, []);

//   // Function to handle refresh
//   const onRefresh = () => {
//     setstore_id("1"); 
//   };
//   const handlePress = (category) => {
//     console.log('Category ID:', category.id);
//     navigation.navigate('Categorybanner', { categoryId: category.id });
//   };
//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <ScrollView
       
//       >
//         {loading ? (
//           <View style={styles.lodercontainer}>
//             <TouchableOpacity onPress={() => fadeInOut()}>
//               <Animated.Image
//                 source={require('../../assests/gif/app_Loader.gif')} // Use the actual path to your GIF
//                 style={{ ...styles.animatedimage, opacity }}
//               />
//             </TouchableOpacity>
//           </View>
//         ) : (
//           <SafeAreaView style={styles.container}>
//                <ScrollView  
               
//         //        refreshControl={
//         //   <RefreshControl
//         //     refreshing={refreshing}
//         //     onRefresh={onRefresh}
//         //     tintColor="#FF0000"
//         //     title="Loading..."
//         //     titleColor="red"
//         //     colors={['#980404']}
//         //     progressBackgroundColor="#F4F6F9"
//         //   />
//         // }
//         >
//                <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
//   {Category && Category.map((category) => (
//      <TouchableOpacity onPress={() => handlePress(category)} key={category.category_id}>
//       <Image source={{ uri: category.image }} style={{
//         width: width * 0.2,
//         height: height * 0.1,
//         margin: 5,
//         borderRadius: 100/3,
//       }} />
//       <Text style={{
//         width: width * 0.2, 
//         fontSize: 13, 
//         textAlign: 'center', 
//       }}>{category.name}</Text>
//     </TouchableOpacity>
//   ))}
// </ScrollView>
// {topbanner && (
//           <View style={styles.topbanner}>
//             <Image source={{ uri: topbanner.image }} style={styles.topBannerImage} />
            
//           </View>
//         )}
         
//             {slider && slider.length > 0 && (
//           <ScrollView horizontal showsHorizontalScrollIndicator={false}  ref={scrollViewRef}>
//             {slider.map((slide, index) => (
//             <View style={{}}>

//               <Image key={index} style={styles.sliderImage} source={{ uri: slide.image }} />
//             </View>
//             ))}
//           </ScrollView>

//         )}
//         <View>
//         <Text style={styles.TopCategoriesText}>{t('Top Categories')}</Text>
      
//         </View>
//         {gridbanner && gridbanner.length > 0 && (
//           <View style={styles.gridBannerGrid}>
//             {gridbanner.slice(0, 2).map((item, index) => (
//               <Image key={index} style={styles.gridBannerImage} source={{ uri: item.image }} />
//             ))}
//           </View>
//         )}
//         {gridbanner && gridbanner.length > 1 && (
//           <View style={styles.gridBannerGrid}>
//             {gridbanner.slice(2, 4).map((item, index) => (
//               <Image key={index} style={styles.gridBannerImage} source={{ uri: item.image }} />
//             ))}
//           </View>
//         )}
//            <View style={styles.featuredProducts} >
//            <Text style={styles.featuredProductsText}>{t('FEATURE PRODUCTS')}</Text>
//            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
//            {featuredproducts && featuredproducts.length > 0 && (
//           <View style={{flexDirection: 'row',
//           flexWrap: 'wrap',
//           justifyContent: 'space-between',
//           marginTop: 10,}}>
//             {featuredproducts.map((product, index) => (
//                    <TouchableOpacity key={index} style={styles.featuredproductsview} 
//                   //  onPress={() => 
//                   //  navigation.navigate('MainProduct', { sku: product.sku})
//                   //  }
//                    >
//                    <Image source={{ uri: product.image }} style={styles.featuredProductImage} />
//                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.featuredname}>
//                      {product.name}{'..'}
//                    </Text>
//                    <Text style={styles.featuredprize}>
//                      SAR {product.price}
//                    </Text>
//                  </TouchableOpacity>
//             ))}
//           </View>
//         )}
//           </ScrollView>
//           {specialOffers && specialOffers.length > 0 && (
      
//           <View >
//                <View style={{justifyContent:"space-between",flexDirection:"row"}}>
//              <Text style={styles.specialOffersText}>{t('SPECIAL PRODUCTS')}</Text>
//              <TouchableOpacity onPress={() => handleViewAll(293)}>
              
//             <Text style={{ fontSize: 17,
//     fontWeight: "500",
//     color: "red",
//     padding:5}}>View All</Text>
//              </TouchableOpacity>
//             </View>
//             <ScrollView
//               horizontal
//               showsHorizontalScrollIndicator={false}
//               contentContainerStyle={styles.specialOffersContainer}
//             >
//               {specialOffers.map((offer, index) => (
//                 <View key={index} style={styles.specialOfferView}>
//                   <Image source={{ uri: offer.image }} style={styles.specialOfferImage} />
//                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.specialOfferName}>
//           {offer.name}{'..'}
//         </Text>
//         <Text style={styles.specialOfferPrice}>
//           SAR {offer.price}
//         </Text>
//                 </View>
//               ))}
//             </ScrollView>
//           </View>
//         )}
//         </View>
 
//         <View style={styles.latestproduct}>
//           <Text style={styles.latestproductText}>{t('LATEST PRODUCTS')}</Text>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.latestProductsContent}
//           >
//             {latestProducts &&
//               latestProducts.map((product, index) => (
//                 <View key={index} style={styles.latestproductView}>
//                   <Image source={{ uri: product.image }} style={styles.latestproductImage} />
//                   <Text numberOfLines={1} ellipsizeMode="tail" style={styles.latestproductName}>
//                   {product.name}{'..'}
//        </Text>
//         <Text style={styles.latestproductPrice}>
//            SAR {product.price}
//         </Text>
//                 </View>
//               ))}
//           </ScrollView>
//         </View>

//         <View style={styles.gamecategory}>
//         <View style={{justifyContent:"space-between",flexDirection:"row"}}>
//           <Text style={styles.gamecategoryText}>{t('GAMES')}</Text>
//           <TouchableOpacity onPress={() => handleViewAll(251)}>

//           <Text style={{ fontSize: 17,
//     fontWeight: "500",
//     color: "red",
//     padding:5}}>View All</Text>
//           </TouchableOpacity>
//     </View>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.gameCategoryProductsContent}
//           >
//             {gameCategoryProducts &&
//               gameCategoryProducts.map((product, index) => (
//                 <View key={index} style={styles.gamecategoryTextView}>
//                   <Image source={{ uri: product.image }} style={styles.gamecategoryTextViewImage} />
//                   <Text numberOfLines={1} ellipsizeMode="tail" style={styles.gamecategoryName}>
//            {product.name}{'..'}
//          </Text>
//         <Text style={styles.gamecategoryPrice}>
//           SAR {product.price}
//          </Text>
                  
//                 </View>
//               ))}
//           </ScrollView>
         
//         </View>
//         {schoolCategoryProducts && schoolCategoryProducts.length > 0 && (
//         <View style={styles.schoolcategory}>
//           <View style={{justifyContent:"space-between",flexDirection:"row"}}>
//           <Text style={styles.schoolcategoryText}>{t('SCHOOL')}</Text>
//           <TouchableOpacity onPress={() => handleViewAll(297)}>
            
//           <Text style={{ fontSize: 17,
//     fontWeight: "500",
//     color: "red",
//     padding:5}}>View All</Text>
//           </TouchableOpacity>
//     </View>
//           <ScrollView
//             horizontal
//             showsHorizontalScrollIndicator={false}
//             contentContainerStyle={styles.schoolCategoryProductsContent}
//           >
//             {schoolCategoryProducts.map((product, index) => (
//               <View key={index} style={styles.schoolcategory}>
//                 <Image source={{ uri: product.image }} style={{width: width * 35 / 100,
//          height: height * 25 / 100,}} />
//                       <Text numberOfLines={1} ellipsizeMode="tail" style={{ width: width * 35 / 100, 
//     textAlign: 'center',
//     color: "#4a484a",
//     padding: 5,}}>
//         {product.name}
//       </Text>
//          <Text style={styles.schoolcategoryPrice}>
//           SAR {product.price}
//         </Text>    
//               </View>
//             ))}
//           </ScrollView>
//         </View>
//       )}
// <HomeNewData/>
//       </ScrollView>
//           </SafeAreaView>
//         )}
      
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// export default Home; 




>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
