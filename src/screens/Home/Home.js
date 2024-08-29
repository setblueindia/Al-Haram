import { View, Text, ScrollView, Image, RefreshControl, TouchableOpacity } from 'react-native';
import React from 'react';
import { styles } from './home.style';
import CustomeHeader from '../../components/CustomeHeader';
import StoryView from '../../components/StoryView';
import useHomeHook from './home.hook';
import Slider from '../../components/Slider';
import TopCategories from '../../components/TopCategories';
import HomeListView from '../../components/HomeListView';
import { banner2, firstBanner } from '../../assests';
import { NUMBER } from '../../constants/constants';
import { ResponsiveSize } from '../../utils/utils';
import CetegoriesBox from '../../components/CetegoriesBox';
import ProductBox from '../../components/ProductBox';
import CusLoader from '../../components/CustomLoader';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { COLOR } from '../../constants/style';


const Home = (props) => {
  const {
    data,
    HomeScreeData,
    lang,
    Sliderdata,
    navigation,
    CetegoriesData,
    loder,
    isLoadding,
    CetegouriesList,
    ProductDetails,
    onRefresh,
    handleScroll,
    setRefreshing,
    refreshing,
    scrollViewRef,
    showScrollToTop,
    scrollToTop
  } = useHomeHook(props)

  console.log("")

  return (
    <View style={styles.mainView}>
      <View style={styles.CustomeHeaderView}>
        <CustomeHeader search={true} like={true} shoppingcart={true} />
        <ScrollView
         ref={scrollViewRef}
        onScroll={handleScroll}
        refreshControl={
          <RefreshControl
          onRefresh={onRefresh}
          refreshing={refreshing}/>
        }
        onRefresh={()=>{CetegouriesList() , ProductDetails() }}
        style={styles.containerView}>
          <View style={styles.storyView}>
            <StoryView CetegoriesData={CetegoriesData} data={data} lang={lang} navigation={navigation} />
          </View>
          <View style={styles.bannerView2}>
            <View style={styles.bannerImage}>
              <Image style={styles.bannerImg} source={banner2} />
            </View>
          </View>
          <View style={styles.siderView}>
            <Slider data={Sliderdata} lang={lang} home={true} />
          </View>

          <View style={styles.categories}>
            {
              CetegoriesData?.map((items, index) => {
                return (
                  <View key={index} style={styles.cetegoriesBox}>
                    {items?.children.length > 0 &&
                     <CetegoriesBox navigation={navigation} lang={lang} items={items} index={index} />
                     }
                  </View>
                )
              })
            }
          </View>
          
          {
            HomeScreeData?.map((items, index) => {
              return (
                <View key={index} style={styles.productView}>
                  <ProductBox navigation={navigation} lang={lang} items={items} sindex={index} />
                </View>
              )
            })
          }

          <View style={{ height: ResponsiveSize(200) }} />
        </ScrollView>
      </View>
      {showScrollToTop && (
        <TouchableOpacity style={styles.scrollToTopButton} onPress={scrollToTop}>
          {/* <Text style={styles.scrollToTopButtonText}>Go to Top</Text> */}
          <Icon name="totop" size={ResponsiveSize(30)} color={COLOR.white} />
        </TouchableOpacity>
      )}

      {
        (!CetegoriesData || isLoadding) &&
        <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
          <CusLoader />
        </View>
      }
    </View>
  );
};

export default Home;
