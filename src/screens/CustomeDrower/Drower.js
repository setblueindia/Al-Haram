// import {
//   Image,
//   TouchableOpacity,
//   Text,
//   View,
//   ScrollView,

// } from 'react-native';
// import React from 'react';
// import { styles } from './drower.style';
// import { WhiteOutLoginUser, chatapp, edit, fbimg, insta } from '../../assests';
// import useDrowerHook from './drower.hook';
// import DraweList from '../../components/DrawerList';
// import { NAVIGATION, NUMBER } from '../../constants/constants';
// import { ResponsiveSize } from '../../utils/utils';
// import SocialButtonDra from '../../components/ScoiaButtonDra';
// import { ALINE } from '../../constants/style';
// import StatusBarCus from '../../components/CustomStatusBar';
// import CusLoader from '../../components/CustomLoader';

// const Drower = () => {

//   const {
//     data,
//     navigation,
//     langues,
//     lang,
//     userName,
//     height,
//     loadding,
//     loder,
//     changeLungues,
//     handleInstagramPress,
//     handlechatPress,
//     handleFacebookPress,
//   } = useDrowerHook();

//   return (
//     <View style={[styles.mainView, { height: height }]}>

//       <StatusBarCus />
//       <View
//         style={[
//           styles.profileView,
//           lang.data == NUMBER.num0 && { flexDirection: ALINE.rowreverse },
//         ]}>
//         <View style={styles.profileIcon}>
//           <Image style={styles.icon} source={WhiteOutLoginUser} />
//         </View>
//         <View
//           style={[
//             styles.nameView,
//             lang.data == NUMBER.num0 && { marginRight: ResponsiveSize(20) },
//           ]}>
//           <Text style={styles.userNameText}> {userName}</Text>
//         </View>
//         <TouchableOpacity
//           onPress={() => { navigation.navigate(NAVIGATION.EditeProfileScreen) }}
//           style={[styles.editIcon, lang.data == NUMBER.num0 && { left: ResponsiveSize(5) }]}>
//           <Image style={styles.edit} source={edit} />
//         </TouchableOpacity>

//         {/* <View style={styles.lineView}>
//           <View style={styles.line} />
//         </View> */}
//       </View>

//       <ScrollView style={styles.ScrollView}>
//         {data.map((items, index) => {
//           return (
//             <View style={styles.drawerList} key={index}>
//               <DraweList name={items.name} data={items} />
//             </View>
//           );
//         })}
//       </ScrollView>

//       <View sxtyle={styles.LastView}>

//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate(NAVIGATION.Login);
//           }}
//           style={styles.loginTextView}>
//           <Text style={styles.loginText}>{langues?.LOGIN}</Text>
//         </TouchableOpacity>
//         <View style={styles.btnView}>
//           <TouchableOpacity
//             onPress={() => {
//               changeLungues();
//             }}
//             style={styles.chnageLangBtnView}>
//             <Text style={styles.btntext}>{langues?.ChangeLang}</Text>
//           </TouchableOpacity>
//         </View>
//         <View style={[styles.line, { marginVertical: ResponsiveSize(30) }]} />
//         <View style={styles.socialView}>
//           <SocialButtonDra onPress={handleInstagramPress} image={insta} />
//           <SocialButtonDra onPress={handleFacebookPress} image={fbimg} />
//           <SocialButtonDra onPress={handlechatPress} image={chatapp} />
//         </View>
//         <View style={styles.buildView}>
//           <Text>Build : v1.1</Text>
//         </View>
//       </View>

//       {loder && <View style={styles.loaddingView}>
//         <CusLoader />
//       </View>}
//     </View>
//   );
// };

// export default Drower;

// import { Image, TouchableOpacity, View } from 'react-native'
// import React from 'react'
// import CustomeHeader from '../../components/CustomeHeader'
// import CommanHeader from '../../components/ComanHeader'
// import useDrowerHook from './drower.hook'
// import { styles } from './drower.style'
// import { BASE_URL } from '../../constants/axios.url'

// const Drower = () => {
//   const { navigation, cetegouriesData } = useDrowerHook()
//   return (
//     <View style={styles.mainView}>
//       <CommanHeader navigation={navigation} />
//       <View style={styles.containerView}>

//         <View style={styles.TopView}>
//           {
//             cetegouriesData?.children?.map((items, index) => {
//               return (

//                   <TouchableOpacity style={styles.firstCeteImageView}>
//                     <Image style={styles.TopImage} source={{ uri: BASE_URL + items?.mobile_thumbnail }} />
//                   </TouchableOpacity>

//               )
//             })

//           }
//         </View>

//       </View>
//     </View>
//   )
// }

// export default Drower


import { Image, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CommanHeader from '../../components/ComanHeader';
import useDrowerHook from './drower.hook';
import { styles } from './drower.style';
import { BASE_URL } from '../../constants/axios.url';
import { COLOR } from '../../constants/style';
import { ResponsiveSize } from '../../utils/utils';
import { logo } from '../../assests';
import { NAVIGATION } from '../../constants/constants';
import { useSelector } from 'react-redux';

const Drower = () => {
  const { navigation, cetegouriesData } = useDrowerHook();
  const lang = useSelector(state => state?.lang?.data)
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(null);
  const [subData, setSubData] = useState([])
  const [childData, setChildData] = useState([])
  const [sindex, setIndex] = useState()
  const [topIndex, setTopIndex] = useState()
  const [on, setOn] = useState(false)
  

  const handleCategoryClick = (index) => {
    setSelectedCategoryIndex(selectedCategoryIndex === index ? null : index);
  };

  const groupedCategories = [];
  for (let i = 0; i < cetegouriesData?.children?.length; i += 3) {
    groupedCategories.push(cetegouriesData.children.slice(i, i + 3));
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.mainView}>
      <CommanHeader navigation={navigation} lang={lang} />
      <View style={styles.containerView}>
        {groupedCategories.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((items, index) => {
              const actualIndex = rowIndex * 3 + index;
              return (
                <TouchableOpacity
                  key={actualIndex}
                  style={styles.firstCeteImageView}
                  onPress={() => {
                    handleCategoryClick(actualIndex),
                      setSubData(items?.children),
                      setChildData([]),
                      setIndex(-1)
                    setTopIndex(actualIndex)
                    items?.children?.length <= 0 &&  navigation.navigate(NAVIGATION.ProductScreen , {cetegoriesId : items?.id})
                    on && topIndex == actualIndex ? setOn(false) : setOn(true)
                  }}
                >
                  <Image
                    style={[styles.topImage,
                    (topIndex == actualIndex && on) && { marginTop: ResponsiveSize(20) }
                    ]}
                    source={items?.mobile_thumbnail ? { uri: BASE_URL + items?.mobile_thumbnail } : logo}
                  />
                  <Text style={[styles.ceteGouriesText, (topIndex == actualIndex && on) && { top: ResponsiveSize(20) }]}>{items?.name}</Text>
                </TouchableOpacity>
              );
            })}
            {selectedCategoryIndex !== null && Math.floor(selectedCategoryIndex / 3) === rowIndex && (
              subData.length > 0 && <View style={styles.fullWidthView}>
                {subData?.map((subItem, subIndex) => (
                  <View>

                    <TouchableOpacity
                      onPress={() => {
                         setChildData(subItem?.children), 
                         setIndex(subIndex)
                         subItem?.children?.length <= 0 && navigation.navigate(NAVIGATION.ProductScreen ,  { cetegoriesId: subItem?.id })
                         }}
                      key={subIndex} style={[styles.subCategoryItem, subIndex == sindex && { backgroundColor: "#FFF9DF" }]}>
                      <View style={styles.subImageView}>
                        <Image source={subItem?.mobile_thumbnail ? { uri: BASE_URL + subItem?.mobile_thumbnail } : logo} style={[styles.subImge, !subItem?.mobile_thumbnail && { resizeMode: 'contain' }]} />
                      </View>
                      <Text style={styles.text}>{subItem?.name}</Text>
                    </TouchableOpacity>

                    {(childData.length > 0 && subIndex == sindex) &&
                      childData.map((childItem, childIndex) => {
                        return (
                          <TouchableOpacity
                            onPress={() => {
                              navigation?.navigate(NAVIGATION.ProductScreen,
                                { cetegoriesId: childItem?.id })
                            }
                            }
                            style={styles.childView} key={childIndex} >
                            <Text style={styles.chaildNameText}>{childItem?.name}</Text>
                          </TouchableOpacity>
                        )
                      })
                    }
                  </View>
                ))}
              </View>
            )}
          </View>
        ))}
      </View>
      <View style={{ flex: 1, height: ResponsiveSize(200) }}>

      </View>
    </ScrollView>
  );
};

export default Drower;


















