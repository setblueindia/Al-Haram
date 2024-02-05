
import React, { useEffect, useState,useRef } from 'react';
import { View, Text, SafeAreaView, Pressable, Image, ScrollView, Dimensions,FlatList,ActivityIndicator,Modal,Animated,TouchableOpacity } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { homeAPI } from '../../redux/mainStack/mainStackApi';
import { setLoading, setHomeData, setHomeError } from '../../redux/mainStackSlice/homeSlice';
import styles from './style';
import { useTranslation } from 'react-i18next';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const [gameProductid, setGameProductid] = useState(251);
  const [schoolProductid, setSchoolProductid] = useState(297);
  const [specialProduct, setSpecialProduct] = useState(293);
  const [store_id, setstore_id] = useState("1");
  const [Category, setCategory] = useState();
  const [topbanner, settopbanner] = useState();
  const [slider, setslider] = useState();
  const [gridbanner, setgridbanner] = useState();
  const [featuredproducts, setfeatured_products] = useState();
  const [specialOffers, setSpecialOffers] = useState();
  const [latestProducts, setLatestProducts] = useState();
  const [gameCategoryProducts, setGameCategoryProducts] = useState(); 
  const [schoolCategoryProducts, setschoolCategoryProducts] = useState()
  const scrollViewRef = useRef(null);
  const [initialImageDisplayed, setInitialImageDisplayed] = useState(false);
  const { t } = useTranslation();
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

  useEffect(() => {
    const fetchHomeData = async () => {
      try {
        // dispatch(setLoading());
        const responseData = await homeAPI(store_id);
        dispatch(setHomeData(responseData));
        setCategory(responseData.data.categories);
        settopbanner(responseData.data.top_banner);
        setslider(responseData.data.slider)
        setgridbanner(responseData.data.grid_banner);
        setfeatured_products(responseData.data.featured_products);
        setSpecialOffers(responseData.data.special_offer);
        setLatestProducts(responseData.data.latest_products);
        setGameCategoryProducts(responseData.data.game_category_products);
        setschoolCategoryProducts(responseData.data.school_supplies_category_products);
        setLoading(false);
      } catch (error) {
        console.error("home error", error);
        dispatch(setHomeError(error.message));
      }
    };
    fetchHomeData();
  }, [dispatch, store_id]);
  const opacity = useRef(new Animated.Value(1)).current;

  const fadeInOut = () => {
    Animated.sequence([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 500,
        useNativeDriver: false, // important to set this to false when using opacity
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
    console.log(`View All pressed for  number: ${number}`);
    navigation.navigate('Products', { number });
  };
  useEffect(() => {
    fadeInOut();
  }, []);
  return (
<View>
{loading ? (
       <View style={styles.lodercontainer}>
       <TouchableOpacity onPress={() => fadeInOut()}>
         <Animated.Image
           source={require('../../assests/gif/app_Loader.gif')} // Use the actual path to your GIF
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
          <View key={category.id} style={styles.categoryContainer}>
            <Image source={{ uri: category.image }} style={styles.image} />
          
          </View>
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
              <Image key={index} style={styles.gridBannerImage} source={{ uri: item.image }} />
            ))}
          </View>
        )}
        {gridbanner && gridbanner.length > 1 && (
          <View style={styles.gridBannerGrid}>
            {gridbanner.slice(2, 4).map((item, index) => (
              <Image key={index} style={styles.gridBannerImage} source={{ uri: item.image }} />
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
                   <View key={index} style={styles.featuredproductsview}>
                   <Image source={{ uri: product.image }} style={styles.featuredProductImage} />
                    <Text numberOfLines={1} ellipsizeMode="tail" style={styles.featuredname}>
                    {product.name}{'..'}
         </Text>
         <Text style={styles.featuredprize}>
           SAR {product.price}
         </Text>
                 </View>
             
             
    
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
              {specialOffers.map((offer, index) => (
                <View key={index} style={styles.specialOfferView}>
                  <Image source={{ uri: offer.image }} style={styles.specialOfferImage} />
                   <Text numberOfLines={1} ellipsizeMode="tail" style={styles.specialOfferName}>
          {offer.name}{'..'}
        </Text>
        <Text style={styles.specialOfferPrice}>
          SAR {offer.price}
        </Text>
                </View>
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
                <View key={index} style={styles.latestproductView}>
                  <Image source={{ uri: product.image }} style={styles.latestproductImage} />
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.latestproductName}>
                  {product.name}{'..'}
       </Text>
        <Text style={styles.latestproductPrice}>
           SAR {product.price}
        </Text>
                </View>
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
                <View key={index} style={styles.gamecategoryTextView}>
                  <Image source={{ uri: product.image }} style={styles.gamecategoryTextViewImage} />
                  <Text numberOfLines={1} ellipsizeMode="tail" style={styles.gamecategoryName}>
           {product.name}{'..'}
         </Text>
        <Text style={styles.gamecategoryPrice}>
          SAR {product.price}
         </Text>
                  
                </View>
              ))}
          </ScrollView>
         
        </View>
        {schoolCategoryProducts && schoolCategoryProducts.length > 0 && (
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
      )}

      </ScrollView>
    </SafeAreaView>
    </SafeAreaView>
      )}
</View>  
  );
};
export default Home;