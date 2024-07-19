import { View, Text, ScrollView, Image } from 'react-native';
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


const Home = (props) => {
  const {
    data,
    HomeScreeData,
    lang,
    Sliderdata,
    navigation,
    CetegoriesData,
    loder,
    isLoadding
  } = useHomeHook(props)

  return (
    <View style={styles.mainView}>

      <View style={styles.CustomeHeaderView}>
        <CustomeHeader search={true} like={true} shoppingcart={true} />
        <ScrollView style={styles.containerView}>

          <View style={styles.storyView}>
            <StoryView CetegoriesData={CetegoriesData} data={data} lang={lang} navigation={navigation} />
          </View>
          {/* <View style={{ backgroundColor: "#EAE9E4" }}> */}

          {/* <View style={styles.bannerView}>
              <Image style={styles.bannerImg} source={{ uri: "https://t4.ftcdn.net/jpg/04/96/39/15/360_F_496391566_qkdbKWomcUUpByvdbOqOErHprAUDgdo5.jpg" }} />
            </View> */}
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
                    {items?.children.length > 0 && <CetegoriesBox navigation={navigation} lang={lang} items={items} index={index} />}
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

          {/* </View> */}
          {/* <View style={styles.topCategories}>
            <Text style={[styles.topCategoriesText, lang.data == NUMBER.num0 && { textAlign: 'right', marginRight: ResponsiveSize(20) }]}>{lang.data == NUMBER.num1 ? "Top Categories" : "أهم الفئات"}</Text>
            <TopCategories lang={lang} />
          </View> */}
          {/* 
          <View style={styles.bannerView3}>
            <Image style={styles.bannerImg} source={{ uri: "https://img.freepik.com/free-vector/flat-horizontal-sale-banner-template-with-photo_23-2149000923.jpg" }} />
          </View> */}

          {/* <View style={styles.listView}>

            {HomeScreeData?.data?.map((data, index) => {
              return (
                <View key={index}>
                  <HomeListView navigation={navigation} lang={lang} data={data} sindex={index} />
                </View>
              )
            })}
          </View> */}

          <View style={{ height: ResponsiveSize(200) }} />
        </ScrollView>
      </View>

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
