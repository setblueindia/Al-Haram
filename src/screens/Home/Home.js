import { View, ScrollView, Image, RefreshControl, TouchableOpacity, Modal } from 'react-native';
import React from 'react';
import { styles } from './home.style';
import CustomeHeader from '../../components/CustomeHeader';
import StoryView from '../../components/StoryView';
import useHomeHook from './home.hook';
import Slider from '../../components/Slider';
import { Giftcard, banner2, whatsapp } from '../../assests';
import { ResponsiveSize } from '../../utils/utils';
import CetegoriesBox from '../../components/CetegoriesBox';
import ProductBox from '../../components/ProductBox';
import CusLoader from '../../components/CustomLoader';
import Icon from 'react-native-vector-icons/dist/AntDesign';
import { COLOR, RESIZEMODE } from '../../constants/style';
import FastImage from 'react-native-fast-image';
import CusModal from '../../components/CusModal';
import GiftCart from '../Giftcart/GiftCart';
import { NAVIGATION } from '../../constants/constants';


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
    showPop,
    mes,
    setShowPop,
    CetegouriesList,
    ProductDetails,
    onRefresh,
    handleScroll,
    setRefreshing,
    openPlayStore,
    refreshing,
    scrollViewRef,
    showScrollToTop,
    bannerUrl,
    scrollToTop,
    openWhatsApp
  } = useHomeHook(props)

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
              refreshing={refreshing} />
          }
          onRefresh={() => { CetegouriesList(), ProductDetails() }}
          style={styles.containerView}>
          <View style={styles.storyView}>
            <StoryView CetegoriesData={CetegoriesData} data={data} lang={lang} navigation={navigation} />
          </View>


          <View style={styles.bannerView2}>
            <View style={styles.bannerImage}>
              <FastImage resizeMode={RESIZEMODE.contain} style={styles.bannerImg} source={{uri : bannerUrl}} />
            </View>
          </View>

          <View style={styles.siderView}>
            <Slider data={Sliderdata} lang={lang} home={true} />
          </View>

          {/* <View style={styles.giftcart}>
            <TouchableOpacity
            onPress={()=>{navigation.navigate(NAVIGATION.giftcard)}}
            style={styles.giftcartView}>
              <Image style={{height:"100%" , width:"100%" , resizeMode:'cover' ,  borderRadius:ResponsiveSize(20)}} source={Giftcard}/>

            </TouchableOpacity>

          </View>   */}

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
          <Icon name="totop" size={ResponsiveSize(30)} color={COLOR.white} />
        </TouchableOpacity>
      )}

      {
        (!CetegoriesData || isLoadding || !Sliderdata) &&
        <View style={{ height: "100%", width: "100%", position: 'absolute' }}>
          <CusLoader />
        </View>
      }

      <Modal
        transparent={true}
        visible={showPop}
        animationType='slide'
      >
        <CusModal text={mes} setModalShow={setShowPop} notification={false} GETNotificationAPI={openPlayStore} />
      </Modal>

      <TouchableOpacity
      onPress={()=>{openWhatsApp()}}
        style={{
          height: ResponsiveSize(80),
          width: ResponsiveSize(80),
          borderRadius: ResponsiveSize(100),
          // backgroundColor: COLOR.black,
          position: 'absolute',
          bottom: ResponsiveSize(80),
          right: ResponsiveSize(40)
        }}
      >
        <Image style={{
          height:"100%",
          width:"100%",
          resizeMode:'contain'
        }} source={whatsapp}/>

      </TouchableOpacity>




    </View>
  );
};

export default Home;
