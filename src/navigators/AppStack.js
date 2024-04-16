import React, { useState, useRef, useEffect } from 'react';
import {
  Image, View, Text, ScrollView,
  Dimensions,
  StyleSheet, Animated, Linking, TextInput, FlatList, ActivityIndicator,
} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTranslation } from 'react-i18next';
import Home from '../components/Home/Home';
import Category from '../components/Category/CategoryScreen';
import Notification from '../components/Notification/Notification';
import Profile from '../components/Profile/Profile';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Login from '../components/Login/Login';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Brands from 'react-native-vector-icons/FontAwesome5';
import OTPVerification from '../components/OtpScreen/OTPVerification';
import Categorybanner from '../components/Categorybanner/Categorybanner';
import { useDispatch, useSelector } from 'react-redux';
import { CategoryDrawerList } from '../redux/mainStack/mainStackApi';
import { drawerListStart, drawerListSuccess, drawerListFailure } from '../redux/DrawerList/drawerListSlice';
import CustomHeader from '../components/CustomHeader/CustomHeader';
import Products from '../components/Products/Products';
import AddressBookScreen from '../components/AddressBook/AddressBookScreen'
import AsyncStorage from '@react-native-async-storage/async-storage';
import Feather from 'react-native-vector-icons/Feather';
import Addresslist from '../components/AddressList/Addresslist';
import WishlistPage from '../components/WishlistPage/WishlistPage';
import EditProfile from '../components/EditProfile/EditProfile';
import HomeNewData from '../components/Home/HomeNewData';
import MainProduct from '../components/MainProduct/MainProduct';
import AddToCart from '../components/AddToCart/AddToCart'
import ForgotPassword from '../components/Forgot Password/ForgotPassword';
import Signup from '../components/Signup/Signup';
import ProfileHeader from '../components/ProfileHeader/ProfileHeader'
import LeftDrawerContent from '../components/LeftDrawerContent/LeftDrawerContent';
import RightDrawerContent from '../components/RightDrawerContent/RightDrawerContent';

const DrawerNavigator = createDrawerNavigator();
const TabNavigator = createBottomTabNavigator();
const StackNavigator = createStackNavigator();
const LoginStack = () => (
  <StackNavigator.Navigator
    screenOptions={{
      headerShown: false,
    }}
  >
    <StackNavigator.Screen name="Login" component={Login}
      options={{
        headerShown: false,
        headerTitle: '',
      }}
    />
    <StackNavigator.Screen name="Signup" component={Signup}
      options={{
        headerShown: false,
        headerTitle: '',
      }}
    />
    <StackNavigator.Screen name="ForgotPassword" component={ForgotPassword}
      options={{
        headerShown: false,
        headerTitle: '',
      }}

    />
    <StackNavigator.Screen name="OTPVerification" component={OTPVerification}
      options={{
        headerShown: false,
        headerTitle: '',
      }}

    />
    <StackNavigator.Screen name="Home" component={Home}
      options={{
        headerShown: false,
        headerTitle: '',
      }}
    />
    <StackNavigator.Screen name="AddressBookScreen" component={AddressBookScreen}
      options={{
        headerShown: false,
        headerTitle: '',
      }}
    />
    <StackNavigator.Screen name="Products" component={Products}
      options={{
        headerShown: false,
        headerTitle: '',
      }}
    />
    <StackNavigator.Screen name='CustomHeader' component={CustomHeader} />
    <StackNavigator.Screen name='ProfileHeader' component={ProfileHeader} />
  </StackNavigator.Navigator>
);
const TabsLeft = ({ focused }) => {
  
  const { t } = useTranslation();
  const bounceValue = new Animated.Value(1);
  Animated.spring(bounceValue, {
    toValue: focused ? 1.2 : 1,
    friction: 2,
    useNativeDriver: true,
  }).start();
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        inactiveTintColor: '#444444',
        activeTintColor: '#980404',
        labelStyle: {
          fontSize: 12,
          fontWeight: '100',
        },
        style: {
          backgroundColor: 'white',
        },
      }}
    >
      <TabNavigator.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: t('Home'),
          tabBarIcon: ({ color, size, focused }) => {
            const bounceValue = new Animated.Value(1);
            Animated.spring(bounceValue, {
              toValue: focused ? 1.3 : 1,
              friction: 2,
              useNativeDriver: true,
            }).start();
            return (
              <Animated.View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {focused && (
                  <View
                    style={{
                      height: 3,
                      width: 50,
                      backgroundColor: '#980404',
                      marginBottom: 10,
                    }}
                  />
                )}
                <Animated.View
                  style={{
                    transform: [{ scale: bounceValue }],
                    borderRadius: focused ? 10 : 0,
                    overflow: 'hidden',
                  }}>
                  <Icon
                    name="home"
                    size={20}
                    color={color} />
                </Animated.View>
              </Animated.View>
            );
          },
        })}
      />
      <TabNavigator.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: t('Category'),
          tabBarIcon: ({ color, size, focused }) => {
            const bounceValue = new Animated.Value(1);
            Animated.spring(bounceValue, {
              toValue: focused ? 1.3 : 1,
              friction: 2,
              useNativeDriver: true,
            }).start();
            return (
              <Animated.View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }} >
                {focused && (
                  <View
                    style={{
                      height: 3,
                      width: 50,
                      backgroundColor: '#980404',
                      marginBottom: 10,
                    }} />
                )}
                <Animated.View
                  style={{
                    transform: [{ scale: bounceValue }],
                  }}
                >
                  <Icons
                    name="category"
                    size={20}
                    color={color}
                  />
                </Animated.View>
              </Animated.View>
            );
          },
        })}
      />
      <TabNavigator.Screen
        name="Notification"
        component={Notification}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: t('Notification'),
          tabBarIcon: ({ color, size, focused }) => {
            const bounceValue = new Animated.Value(1);
            Animated.spring(bounceValue, {
              toValue: focused ? 1.3 : 1,
              friction: 2,
              useNativeDriver: true,
            }).start();
            return (
              <Animated.View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }} >
                {focused && (
                  <View
                    style={{
                      height: 3,
                      width: 50,
                      backgroundColor: '#980404',
                      marginBottom: 10,
                    }} />
                )}
                <Animated.View
                  style={{
                    transform: [{ scale: bounceValue }],
                  }}>
                  <Image
                    source={require('../assests/notification.png')}
                    style={{ width: 20, height: 20, tintColor: color }}
                  />
                </Animated.View>
              </Animated.View>
            );
          },
        })}
      />
      <TabNavigator.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: t('Profile'),
          tabBarIcon: ({ color, size, focused }) => {
            const bounceValue = new Animated.Value(1);
            Animated.spring(bounceValue, {
              toValue: focused ? 1.2 : 1,
              friction: 2,
              useNativeDriver: true,
            }).start();
            return (
              <Animated.View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }} >
                {focused && (
                  <View
                    style={{
                      height: 3,
                      width: 50,
                      backgroundColor: '#980404',
                      marginBottom: 12,
                    }}
                  />
                )}
                <Animated.View
                  style={{
                    transform: [{ scale: bounceValue }],
                  }}
                >
                  <Image
                    source={
                      focused
                        ? require('../assests/user.png')
                        : require('../assests/userhand.png')
                    }
                    style={{ width: 20, height: 20, tintColor: focused ? '#980404' : '#444444' }}
                  />
                </Animated.View>
              </Animated.View>
            );
          },
        })}
      />
    </TabNavigator.Navigator>
  );
};
const TabsRight = () => {
  const { t } = useTranslation();
  return (
    <TabNavigator.Navigator
      tabBarOptions={{
        inactiveTintColor: '#444444',
        activeTintColor: '#980404',
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        style: {
          backgroundColor: 'white',
        },
      }}
    >
      <TabNavigator.Screen
        name="Profile"
        component={Profile}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: t('Profile'),
          tabBarIcon: ({ color, size, focused }) => {
            const bounceValue = new Animated.Value(1);
            Animated.spring(bounceValue, {
              toValue: focused ? 1.3 : 1,
              friction: 2,
              useNativeDriver: true,
            }).start();
            return (
              <Animated.View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {focused && (
                  <View
                    style={{
                      height: 3,
                      width: 50,
                      backgroundColor: '#980404',
                      marginBottom: 12,
                    }}
                  />
                )}
                <Animated.View
                  style={{
                    transform: [{ scale: bounceValue }],
                  }}
                >
                  <FontAwesome5
                    name="user-tie"
                    size={18}
                    color={color}
                  />
                </Animated.View>
              </Animated.View>
            );
          },
        })}
      />
      <TabNavigator.Screen
        name="Notification"
        component={Notification}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: t('Notification'),
          tabBarIcon: ({ color, size, focused }) => {
            const bounceValue = new Animated.Value(1);
            Animated.spring(bounceValue, {
              toValue: focused ? 1.3 : 1,
              friction: 2,
              useNativeDriver: true,
            }).start();
            return (
              <Animated.View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {focused && (
                  <View
                    style={{
                      height: 3,
                      width: 50,
                      backgroundColor: '#980404',
                      marginBottom: 10,
                    }}
                  />
                )}
                <Animated.View
                  style={{
                    transform: [{ scale: bounceValue }],
                  }}
                >
                  <Icons
                    name="notifications-on"
                    size={20}
                    color={color}
                  />
                </Animated.View>
              </Animated.View>
            );
          },
        })}
      />
      <TabNavigator.Screen
        name="Category"
        component={Category}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: t('Category'),
          tabBarIcon: ({ color, size, focused }) => {
            const bounceValue = new Animated.Value(1);
            Animated.spring(bounceValue, {
              toValue: focused ? 1.3 : 1,
              friction: 2,
              useNativeDriver: true,
            }).start();
            return (
              <Animated.View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {focused && (
                  <View
                    style={{
                      height: 3,
                      width: 50,
                      backgroundColor: '#980404',
                      marginBottom: 10,
                    }}
                  />
                )}
                <Animated.View
                  style={{
                    transform: [{ scale: bounceValue }],
                  }}
                >
                  <Icons
                    name="category"
                    size={20}
                    color={color}
                  />
                </Animated.View>
              </Animated.View>
            );
          },
        })}
      />
      <TabNavigator.Screen
        name="Home"
        component={Home}
        options={({ route }) => ({
          headerShown: false,
          tabBarLabel: t('Home'),
          tabBarIcon: ({ color, size, focused }) => {
            const bounceValue = new Animated.Value(1);
            Animated.spring(bounceValue, {
              toValue: focused ? 1.3 : 1,
              friction: 2,
              useNativeDriver: true,
            }).start();
            return (
              <Animated.View
                style={{
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                {focused && (
                  <View
                    style={{
                      height: 3,
                      width: 50,
                      backgroundColor: '#980404',
                      marginBottom: 10,
                    }}
                  />
                )}
                <Animated.View
                  style={{
                    transform: [{ scale: bounceValue }],
                    borderRadius: focused ? 10 : 0,
                    overflow: 'hidden',
                  }}
                >
                  <Icon
                    name="home"
                    size={20}
                    color={color}
                  />
                </Animated.View>
              </Animated.View>
            );
          },
        })}
      />
    </TabNavigator.Navigator>
  );
};
const Tabs = () => {
  
  const { i18n } = useTranslation();
  const tabBarPosition = i18n.language === 'ar' ? 'right' : 'left';
  return tabBarPosition === 'left' ? <TabsLeft /> : <TabsRight />;
};
const { width, height } = Dimensions.get('window');
// const LeftDrawerContent = ({route}) => {
//   // const user = route.params?.userData;
//   // console.log("route params userData:",user);
//   const toggleSubcategoriesVisibility = (categoryId) => {
//     // If the clicked category is already visible, hide it; otherwise, show it
//     setIsselectedCategoryvisible((prevState) => prevState ? false : true);
//     setSelectedCategoryId(categoryId); // Set the selected category ID
//   };
//   const [isselectedCategoryvisible, setIsselectedCategoryvisible] = useState(false);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [userData, setUserData] = useState(null);
//   const [store_id, setstore_id] = useState(1)
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true)
//         AsyncStorage.getItem('userData')
//           .then((userData) => {
//             if (userData) {
//               const { firstname, lastname } = JSON.parse(userData);
//               setFirstName(firstname);
//               setLastName(lastname);
//               setUserData({ firstName: firstname, lastName: lastname });
//             }
//           });

//         const response = await CategoryDrawerList(store_id);

//         if (response.data && response.data.children_data) {
          
//           setCategories(response.data.children_data);
//           setLoading(false)
//           console.log("CategoryDrawerList responce children_data:",response.data.children_data);
//         }
//         dispatch(drawerListSuccess(response));
//         dispatch(drawerListStart(false));
//       } catch (error) {
//         dispatch(drawerListFailure(error));
//       }
//     };
//     fetchData();
//   }, [dispatch]);
//   const [expandedSubcategory, setExpandedSubcategory] = useState(null);
//   const toggleSubcategoryVisibility = (subcategoryID) => {
//     if (expandedSubcategory === subcategoryID) {
//       setExpandedSubcategory(null);
//     } else {
//       setExpandedSubcategory(subcategoryID);
//     }
//   };
//   const renderCategoryItem = ({ item: category }) => {
//     const handlePress = (categoryId, inBannerSection) => {
//       console.log(categoryId); 
//       if (inBannerSection === 1) {
//         navigation.navigate('Categorybanner', { categoryId });
//       } else {
//         navigation.navigate('Products', { number: categoryId });
//       }
//     };
//     return (
//       <View>
//         <View key={category.id}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               paddingVertical: 10,
//             }}
//           >
//             <TouchableOpacity onPress={() => handlePress(category.id,category.in_banner_section)}>
//               <Text
//                 style={{
//                   textTransform: 'uppercase',
//                   color: '#040404',
//                   fontWeight: '600',
//                   letterSpacing: 0.3,
//                   fontSize: 15,
//                 }}
//               >
//                 {category.name}
//               </Text>
//             </TouchableOpacity>
//             {category.children_data && category.children_data.length > 0 && (
//               <TouchableOpacity onPress={() => toggleSubcategoriesVisibility(category.id)}>
//                 <View style={{ alignSelf: 'center' }}>
//                   <MaterialIcons
//                     name={isselectedCategoryvisible && selectedCategoryId === category.id ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
//                     size={25}
//                     color="black"
//                   />
//                 </View>
//               </TouchableOpacity>
//             )}
//           </View>
//           <View>
//             {isselectedCategoryvisible && selectedCategoryId === category.id &&
//               category.children_data.map(subcategory => (
//                 <View key={subcategory.id}>
//                   <TouchableOpacity onPress={() =>
//                     navigation.navigate('Products', { number: subcategory.id })}
//                   >
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                       }}
//                     >
//                       <Text
//                         style={{
//                           marginLeft: 10,
//                           color: '#2D3250',
//                           padding: 10,
//                           fontWeight: '600',
//                           fontSize: 14,
//                         }}
//                       >
//                         {subcategory.name}
//                       </Text>
//                       {subcategory.children_data && subcategory.children_data.length > 0 && (
//                         <TouchableOpacity onPress={() => {
//                           toggleSubcategoryVisibility(subcategory.id);
//                         }}>
//                           <View style={{ alignSelf: 'center', marginRight: 10 }}>
//                             <MaterialIcons
//                               name={expandedSubcategory === subcategory.id ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
//                               size={25}
//                               color="black"
//                             />
//                           </View>
//                         </TouchableOpacity>
//                       )}
//                     </View>
//                   </TouchableOpacity>
//                   {expandedSubcategory === subcategory.id && subcategory.children_data && subcategory.children_data.length > 0 && subcategory.children_data.map(childData => (
//                     <TouchableOpacity onPress={() =>
//                       navigation.navigate('Products', { number: subcategory.id })}
//                     >
//                       <View key={childData.id}>
//                         <Text
//                           style={{
//                             marginLeft: 30,
//                             color: '#647D87',
//                             padding: 5,
//                           }}
//                         >
//                           {childData.name}
//                         </Text>
//                         <View
//                           style={{
//                             marginLeft: 30,
//                             color: '#647D87',
//                             padding: 3,
//                             borderBottomWidth: 1,
//                             borderBottomColor: '#BFCFE7',
//                           }}
//                         />
//                       </View>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               ))
//             }
//           </View>
//         </View>
//       </View>
//     );
//   };
//   const [categories, setCategories] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('en');
//   const { t, i18n } = useTranslation();
//   const changeLanguageButtonHandler = async () => {
//     const langCode = i18n.language === 'en' ? 'ar' : 'en';
//     let consoleValue;
//     if (i18n.language === 'en') {
//       consoleValue = 2;
//     } else {
//       consoleValue = 1;
//     }
//     try {
//       await AsyncStorage.setItem('consoleValue', consoleValue.toString());
//       console.log('Console value set:', consoleValue);
//     } catch (error) {
//       console.error('Error setting console value:', error);
//     }
//     changeLanguage(langCode);
//     handleCloseDrawer();
//   };
//   const handleCloseDrawer = () => {
//     navigation.closeDrawer(); 
//   };
//   const [showLanguagesList, setShowLanguagesList] = useState(true);
//   const handleInstagramPress = () => {
//     const instagramURL = 'https://www.instagram.com/alharamksa/';
//     Linking.openURL(instagramURL);
//   };
//   const handleFacebookPress = () => {
//     const facebookURL = 'https://www.facebook.com/alharamksa/';
//     Linking.openURL(facebookURL);
//   };
//   const handlechatPress = () => {
//     const businessesURL = 'https://maroof.sa/businesses/';
//     Linking.openURL(businessesURL);
//   };
//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     setShowLanguagesList(false);
//     console.log('Selected Language:', t(lang));
//   };
//   const navigation = useNavigation();
//   const handleLoginPress = () => {
//     navigation.navigate('Login');
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{}}>
//         <View style={{ padding: 10,backgroundColor:"gray" }}>
//           <View style={{ width: width * 70 / 100, height: height * 10 / 100, flexDirection: "row" }}>
//             <View style={{ width: width * 55 / 100 }}>
//               <TouchableOpacity onPress={() => {
//                 if (!userData) {
//                   navigation.navigate('Login');
//                 }
//               }}>
//                 <View style={{ flexDirection: "row", height: height * 10 / 100, }}>
//                   <Image
//                     source={
//                       userData
//                         ? require('../assests/user.png')
//                         : require('../assests/userhand.png')
//                     }
//                     style={{ width: 50, height: 50, tintColor: '#980404', margin: 10 }}
//                   />
//                   <View style={{ alignSelf: 'center', marginHorizontal: 5 }}>
//                     <Text style={{ color: '#9f0202', fontSize: 18, fontWeight: 'bold' }}>
//                       {`${firstName ? firstName : t('LOGIN')} ${lastName ? lastName : ''}`}
//                     </Text>

//                   </View>
//                 </View>
//               </TouchableOpacity>
//             </View>
//             <View style={{ width: width * 15 / 100, marginHorizontal: 10, marginVertical: 10 }}>
//               <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>

//                 <View style={{ alignSelf: 'center', }}>
//                   <Feather name="edit" size={20} color="#9f0202" />
//                 </View>
//               </TouchableOpacity>
//             </View>
//           </View>
//         </View>
//         <View style={{ height: 1, backgroundColor: 'black', margin: 10 }} />
//       </View>
//       <ScrollView>
//         <View >
//         {loading ? ( 
//         <View style={{ height:height*50/100, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="small" color="#9f0202" />
//       </View>
//       ) : ( 
        
//         <View style={{ paddingHorizontal: 20 }}>
//           <FlatList
//             data={categories}
//             renderItem={renderCategoryItem}
//             keyExtractor={(item) => item.id.toString()}
//           />
//         </View>
//       )}
//         </View>
//       </ScrollView>

//       <View style={{ marginBottom: 60 }}>
//         <View style={{ paddingHorizontal: 20, padding: 10 }}>
//           {(firstName && lastName) ? (
//             null
//           ) : (
//             <TouchableOpacity onPress={handleLoginPress}>
//               <Text
//                 style={{
//                   textTransform: 'uppercase',
//                   color: '#040404',
//                   fontWeight: '600',
//                   fontSize: 15,
//                 }}>
//                 {t('LOGIN')}
//               </Text>
//             </TouchableOpacity>
//           )}
//         </View>
//         <View style={styles.btns}>
//           <TouchableOpacity
//             style={[
//               styles.btn,
//               selectedLanguage === 'en' ? styles.selectedBtn : null,

//             ]}
//             onPress={changeLanguageButtonHandler}
//           >
//             <View style={{ flexDirection: "row", alignItems: "center", }}>
//               <Text style={{ color: 'black', marginRight: 5 }}>{i18n.language === 'ar' ? t('English') : t('عربي')}</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.footerContainer}>
//         <View style={styles.bottomSection}>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <View style={{ flex: 1, height: 1, backgroundColor: 'black', margin: 10 }} />
//           </View>
//           <View style={styles.versionInfo}>
//             <TouchableOpacity onPress={handleInstagramPress}>
//               <View style={styles.iconContainer}>
//                 <Image
//                   source={require('../assests/insta.png')}
//                   style={styles.whatsappIcon}
//                 />
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleFacebookPress}>
//               <View style={styles.iconContainer1}>
//                 <FontAwesome5Brands
//                   name="facebook"
//                   size={28}
//                   color="#316FF6"
//                   style={styles.roundedIcon1}
//                 />
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handlechatPress}>
//               <View style={styles.iconchat}>
//                 <Image
//                   source={require('../assests/chatapp.png')}
//                   style={styles.chatImage}
//                 />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <View style={{ marginBottom: 10 }}>
//         <Text style={{
//           color: 'black',
//           textAlign: 'center',
//           fontSize: 12,
//         }}>Build : v1.1</Text>
//       </View>
//     </View>
//   );
// };
// const RightDrawerContent = props => {
//   const toggleSubcategoriesVisibility = (categoryId) => {
//     // If the clicked category is already visible, hide it; otherwise, show it
//     setIsselectedCategoryvisible((prevState) => prevState ? false : true);
//     setSelectedCategoryId(categoryId); // Set the selected category ID
//   };
//   const [isselectedCategoryvisible, setIsselectedCategoryvisible] = useState(false);
//   const [selectedCategoryId, setSelectedCategoryId] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [userData, setUserData] = useState(null);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
  
//         const response = await CategoryDrawerList(store_id);
  
//         if (response.data && response.data.children_data) {
//           setCategories(response.data.children_data);
//           setLoading(false);
//           console.log("CategoryDrawerList response children_data:", response.data.children_data);
//         }
  
//         dispatch(drawerListSuccess(response));
//         dispatch(drawerListStart(false));
//       } catch (error) {
//         dispatch(drawerListFailure(error));
//         console.error("Error fetching data:", error);
//       }
//     };
  
//     fetchData();
//   }, [dispatch]);
//   // useEffect(() => {
//   //   AsyncStorage.getItem('userData')
//   //     .then((userData) => {
//   //       if (userData) {
//   //         const { firstname, lastname } = JSON.parse(userData);
//   //         setFirstName(firstname);
//   //         setLastName(lastname);
//   //         setUserData({ firstName: firstname, lastName: lastname });
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.error('Error retrieving user data from AsyncStorage:', error);
//   //     });
//   // }, []);
//   const [store_id, setstore_id] = useState(2)
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true)
//         AsyncStorage.getItem('userData')
//           .then((userData) => {
//             if (userData) {
//               const { firstname, lastname } = JSON.parse(userData);
//               setFirstName(firstname);
//               setLastName(lastname);
//               setUserData({ firstName: firstname, lastName: lastname });
//             }
//           });

//         const response = await CategoryDrawerList(store_id);

//         if (response.data && response.data.children_data) {
          
//           setCategories(response.data.children_data);
//           setLoading(false)
//           console.log("CategoryDrawerList responce children_data:",response.data.children_data);
//         }
//         dispatch(drawerListSuccess(response));
//         dispatch(drawerListStart(false));
//       } catch (error) {
//         dispatch(drawerListFailure(error));
//       }
//     };
//     fetchData();
//   }, [dispatch]);
//   const [expandedSubcategory, setExpandedSubcategory] = useState(null);
//   const toggleSubcategoryVisibility = (subcategoryID) => {
//     if (expandedSubcategory === subcategoryID) {
//       setExpandedSubcategory(null);
//     } else {
//       setExpandedSubcategory(subcategoryID);
//     }
//   };
//   const renderCategoryItem = ({ item: category }) => {
//     const handlePress = (categoryId, inBannerSection) => {
//       console.log(categoryId);
//       if (!category.children_data || category.children_data.length === 0) {
//         navigation.navigate('Products', { number: categoryId });
//       } else {
//         if (inBannerSection === 1) {
//           navigation.navigate('Categorybanner', { categoryId });
//         } else {
//           navigation.navigate('Products', { number: categoryId });
//         }
//       } 
//       // if (inBannerSection === 1) {
//       //   navigation.navigate('Categorybanner', { categoryId });
//       // } else {
//       //   navigation.navigate('Products', { number: categoryId });
//       // }
//     };
//     return (
//       <View>
//         <View key={category.id}>
//           <View
//             style={{
//               flexDirection: 'row',
//               justifyContent: 'space-between',
//               paddingVertical: 10,
//             }}
//           >
//             {category.children_data && category.children_data.length > 0 ? (
//         <TouchableOpacity onPress={() => toggleSubcategoriesVisibility(category.id)}>
//           <View style={{ alignSelf: 'center' }}>
//             <MaterialIcons
//               name={isselectedCategoryvisible && selectedCategoryId === category.id ? 'keyboard-arrow-down' : 'keyboard-arrow-left'}
//               size={25}
//               color="black"
//             />
//           </View>
//         </TouchableOpacity>
//       ) : (
//         <Text style={{ alignSelf: 'center',color:"#fff" }}>.</Text>
//       )}
              
//             <TouchableOpacity onPress={() => handlePress(category.id,category.in_banner_section)}>
//               <Text
//                 style={{
//                   textTransform: 'uppercase',
//                   color: '#040404',
//                   fontWeight: '600',
//                   letterSpacing: 0.3,
//                   fontSize: 15,
//                 }}
//               >
//                 {category.name}
//               </Text>
//             </TouchableOpacity>
        
//           </View>
//           <View>
//             {isselectedCategoryvisible && selectedCategoryId === category.id &&
//               category.children_data.map(subcategory => (
//                 <View key={subcategory.id}>
//                   <TouchableOpacity onPress={() =>
//                     navigation.navigate('Products', { number: subcategory.id })}
//                   >
//                     <View
//                       style={{
//                         flexDirection: 'row',
//                         justifyContent: 'space-between',
//                       }}
//                     >
//                       {subcategory.children_data && subcategory.children_data.length > 0 ? (
//   <TouchableOpacity onPress={() => {
//     toggleSubcategoryVisibility(subcategory.id);
//   }}>
//     <View style={{ alignSelf: 'center', marginRight: 10 }}>
//       <MaterialIcons
//         name={expandedSubcategory === subcategory.id ? 'keyboard-arrow-down' : 'keyboard-arrow-left'}
//         size={25}
//         color="black"
//       />
//     </View>
//   </TouchableOpacity>
// ) : (
//   <Text style={{ alignSelf: 'center',color:"#fff" }}>.</Text>
// )}

//                           {/* {subcategory.children_data && subcategory.children_data.length > 0 && (
//                         <TouchableOpacity onPress={() => {
//                           toggleSubcategoryVisibility(subcategory.id);
//                         }}>
//                           <View style={{ alignSelf: 'center', marginRight: 10 }}>
//                             <MaterialIcons
//                               name={expandedSubcategory === subcategory.id ? 'keyboard-arrow-down' : 'keyboard-arrow-left'}
//                               size={25}
//                               color="black"
//                             />
//                           </View>
//                         </TouchableOpacity>
//                       )} */}
//                       <Text
//                         style={{
//                           marginLeft: 10,
//                           color: '#2D3250',
//                           padding: 10,
//                           fontWeight: '600',
//                           fontSize: 14,
//                         }}
//                       >
//                         {subcategory.name}
//                       </Text>
                  
//                     </View>
//                   </TouchableOpacity>
//                   {expandedSubcategory === subcategory.id && subcategory.children_data && subcategory.children_data.length > 0 && subcategory.children_data.map(childData => (
//                     <TouchableOpacity onPress={() =>
//                       navigation.navigate('Products', { number: subcategory.id })}
//                     >
//                       <View key={childData.id}>
//                         <Text
//                           style={{
//                             marginLeft: 30,
//                             color: '#647D87',
//                             padding: 5,
//                           }}
//                         >
//                           {childData.name}
//                         </Text>
//                         <View
//                           style={{
//                             marginLeft: 30,
//                             color: '#647D87',
//                             padding: 3,
//                             borderBottomWidth: 1,
//                             borderBottomColor: '#BFCFE7',
//                           }}
//                         />
//                       </View>
//                     </TouchableOpacity>
//                   ))}
//                 </View>
//               ))
//             }
//           </View>
//         </View>
//       </View>
//     );
//   };
//   const [categories, setCategories] = useState([]);
//   const [selectedLanguage, setSelectedLanguage] = useState('en');
//   const { t, i18n } = useTranslation();
//   const changeLanguageButtonHandler = async () => {
//     const langCode = i18n.language === 'en' ? 'ar' : 'en';
//     let consoleValue;
//     if (i18n.language === 'en') {
//       consoleValue = 2;
//     } else {
//       consoleValue = 1;
//     }
//     try {
//       await AsyncStorage.setItem('consoleValue', consoleValue.toString());
//       console.log('Console value set:', consoleValue);
//     } catch (error) {
//       console.error('Error setting console value:', error);
//     }
//     changeLanguage(langCode);
//     handleCloseDrawer();
//   };
//   const handleCloseDrawer = () => {
//     navigation.closeDrawer(); 
//   };
//   const [showLanguagesList, setShowLanguagesList] = useState(true);
//   const handleInstagramPress = () => {
//     const instagramURL = 'https://www.instagram.com/alharamksa/';
//     Linking.openURL(instagramURL);
//   };
//   const handleFacebookPress = () => {
//     const facebookURL = 'https://www.facebook.com/alharamksa/';
//     Linking.openURL(facebookURL);
//   };
//   const handlechatPress = () => {
//     const businessesURL = 'https://maroof.sa/businesses/';
//     Linking.openURL(businessesURL);
//   };
//   const changeLanguage = (lang) => {
//     i18n.changeLanguage(lang);
//     setShowLanguagesList(false);
//     console.log('Selected Language:', t(lang));
//   };
//   const navigation = useNavigation();
//   const handleLoginPress = () => {
//     navigation.navigate('Login');
//   };
//   return (
//     <View style={{ flex: 1 }}>
//       <View style={{}}>
//         <View style={{ padding: 10, }}>
//           <View style={{ width: width * 70 / 100, height: height * 10 / 100, flexDirection: "row" }}>
//           <View style={{ width: width * 15 / 100, marginHorizontal: 10, marginVertical: 10 }}>
//               <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>

//                 <View style={{ alignSelf: 'center', }}>
//                   <Feather name="edit" size={20} color="#9f0202" />
//                 </View>
//               </TouchableOpacity>
//             </View>
//             <View style={{ width: width * 55 / 100 }}>
//               <TouchableOpacity onPress={() => {
//                 if (!userData) {
//                   navigation.navigate('Login');
//                 }
//               }}>
//                 <View style={{ flexDirection: "row", height: height * 10 / 100, }}>
//                 <View style={{ alignSelf: 'center', marginHorizontal: 5 }}>
//                     <Text style={{ color: '#9f0202', fontSize: 18, fontWeight: 'bold' }}>
//                       {` ${lastName ? lastName : ''} ${firstName ? firstName : t('LOGIN')}`}
//                     </Text>

//                   </View>
//                   <Image
//                     source={
//                       userData
//                         ? require('../assests/user.png')
//                         : require('../assests/userhand.png')
//                     }
//                     style={{ width: 50, height: 50, tintColor: '#980404', margin: 10 }}
//                   />
                 
//                 </View>
//               </TouchableOpacity>
//             </View>
            
//           </View>
//         </View>
//         <View style={{ height: 1, backgroundColor: 'black', margin: 10 }} />
//       </View>
//       <ScrollView>
//         <View >
//         {loading ? ( 
//         <View style={{ height:height*50/100, justifyContent: 'center', alignItems: 'center' }}>
//         <ActivityIndicator size="small" color="#9f0202" />
//       </View>
//       ) : ( 
        
//         <View style={{ paddingHorizontal: 20 }}>
//           <FlatList
//             data={categories}
//             renderItem={renderCategoryItem}
//             keyExtractor={(item) => item.id.toString()}
//           />
//         </View>
//       )}
//         </View>
//       </ScrollView>

//       <View style={{ marginBottom: 60 }}>
//         <View style={{ paddingHorizontal: 20, padding: 10 }}>
//           {(firstName && lastName) ? (
//             null
//           ) : (
//             <TouchableOpacity onPress={handleLoginPress}>
//               <Text
//                 style={{
//                   textTransform: 'uppercase',
//                   color: '#040404',
//                   fontWeight: '600',
//                   fontSize: 15,
//                 }}>
//                 {t('LOGIN')}
//               </Text>
//             </TouchableOpacity>
//           )}
//         </View>
//         <View style={styles.btns}>
//           <TouchableOpacity
//             style={[
//               styles.btn,
//               selectedLanguage === 'en' ? styles.selectedBtn : null,

//             ]}
//             onPress={changeLanguageButtonHandler}
//           >
//             <View style={{ flexDirection: "row", alignItems: "center", }}>
//               <Text style={{ color: 'black', marginRight: 5 }}>{i18n.language === 'ar' ? t('English') : t('عربي')}</Text>
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//       <View style={styles.footerContainer}>
//         <View style={styles.bottomSection}>
//           <View style={{ flexDirection: 'row', alignItems: 'center' }}>
//             <View style={{ flex: 1, height: 1, backgroundColor: 'black', margin: 10 }} />
//           </View>
//           <View style={styles.versionInfo}>
//             <TouchableOpacity onPress={handleInstagramPress}>
//               <View style={styles.iconContainer}>
//                 <Image
//                   source={require('../assests/insta.png')}
//                   style={styles.whatsappIcon}
//                 />
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handleFacebookPress}>
//               <View style={styles.iconContainer1}>
//                 <FontAwesome5Brands
//                   name="facebook"
//                   size={28}
//                   color="#316FF6"
//                   style={styles.roundedIcon1}
//                 />
//               </View>
//             </TouchableOpacity>
//             <TouchableOpacity onPress={handlechatPress}>
//               <View style={styles.iconchat}>
//                 <Image
//                   source={require('../assests/chatapp.png')}
//                   style={styles.chatImage}
//                 />
//               </View>
//             </TouchableOpacity>
//           </View>
//         </View>
//       </View>
//       <View style={{ marginBottom: 10 }}>
//         <Text style={{
//           color: 'black',
//           textAlign: 'center',
//           fontSize: 12,
//         }}>Build : v1.1</Text>
//       </View>
//     </View>
//   );
// };

const DrawerContent = props => {
   const { i18n } = useTranslation();
  const langCode = i18n.language;

  // Define the component to render based on the language code
  const ContentComponent = langCode === 'en' ? LeftDrawerContent: RightDrawerContent;

  // Render the selected component
  return <ContentComponent {...props} />;
};

const CustomHeaderleft = () => {
  const navigation = useNavigation();
  const handleDrawerOpen = () => {
    navigation.openDrawer();
  };
  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  const [animatedValue] = useState(new Animated.Value(1));
  const handlePress = () => {
    Animated.sequence([
      Animated.timing(animatedValue, { toValue: 1.4, duration: 100, useNativeDriver: false }),
      Animated.timing(animatedValue, { toValue: 1, duration: 100, useNativeDriver: false }),
    ]).start();
  };
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [counter, setCounter] = useState(0);
  const handlstore = () => {
    setCounter(counter + 1);
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2, 
        duration: 100,
        useNativeDriver: false,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: false,
      }),
    ]).start();
  };
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const animatedStyle = { transform: [{ scale: scaleValue }], padding: 5 };
  const handleCancel = () => {
    setIsSearchVisible(false);
  };
  return (
    <View>
      {isSearchVisible && (
        <View
          style={{
            margin: 10,
            justifyContent: "flex-start",
            alignItems: "center",
            flexDirection: "row",
            width: "95%",
          }}
        >
          <View style={{
            width: width * 80 / 100, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 4,
            borderWidth: 1,
            borderColor: '#43766C',
            borderRadius: 20
          }}>
            <View style={{ marginHorizontal: 10 }}>
              <Icons
                name="search"
                size={30}
                color="#43766C"

              />
            </View>
            <TextInput
              style={{
                fontSize: 15,
                marginLeft: 5,
                width: '80%',
                color: "black",
                height: 40
              }}
              placeholder="Search..."
            />
          </View>
          <TouchableOpacity onPress={handleCancel}>
            <View style={{ marginHorizontal: 10 }}>
              <Icons name="cancel" size={35} color="#980404" />
            </View>
          </TouchableOpacity>
        </View>

      )}
      {!isSearchVisible && (
        <View style={{ flexDirection: "row", alignSelf: "center", width: width, justifyContent: "space-between", flex: 1, paddingHorizontal: 10 }}>
          <View style={{ alignSelf: "center", width: width * 10 / 100, }}>
            <TouchableOpacity onPress={handleDrawerOpen}>
              <Icons
                name="menu"
                size={30}
                color="#444444"
              />
            </TouchableOpacity>
          </View>
          <View style={{ flex: 0.9 }}>
            <TouchableOpacity onPress={HomeScreen}>
              <Image
                source={require('../assests/Logo.png')}
                style={{
                  width: "70%", height: 50, resizeMode: "contain", alignSelf: "center"
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity onPress={toggleSearch}>
              <View style={{ padding: 5 }}>
                <Image
                  source={require('../assests/search..png')}
                  style={{ width: 25, height: 25, tintColor: 'green' }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
              <Animated.View style={{ transform: [{ scale: animatedValue }], padding: 5 }}>
                <Feather name="heart" size={26} color="#444444" />
              </Animated.View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlstore}>
              <Animated.View style={[styles.iconContainer, animatedStyle]}>
                <Image
                  source={require('../assests/shopping-cart.png')}
                  style={styles.icon}
                />
              </Animated.View>
            </TouchableOpacity>
          </View>
        </View>
      )}
    </View>

  );
};
const CustomHeaderRight = () => {
  const navigation = useNavigation();
  const handleDrawerOpen = () => {
    navigation.openDrawer();
  };
  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  return (
    <View style={{
      flexDirection: "row", alignSelf: "center",
      width: width, justifyContent: "space-between", flex: 1, paddingHorizontal: 10
    }}>
      <View style={{ flexDirection: "row", alignSelf: "center" }}>
        <View style={{ padding: 5 }}>
          <Icon
            name="search1"
            size={25}
            color="#43766C"

          />
        </View>
        <View style={{ padding: 5 }}>
          <Icon
            name="hearto"
            size={25}
            color="#444444"
          />
        </View>
        <View style={{ padding: 5 }}>
          <Icon
            name="shoppingcart"
            size={25}
            color="#444444"
          />
        </View>

      </View>
      <View style={{ flex: 0.9 }}>
        <TouchableOpacity onPress={HomeScreen}>
          <Image
            source={require('../assests/Logo.png')} // Replace with your image path
            style={{
              width: "70%", height: 50, resizeMode: "contain", alignSelf: "center"
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignSelf: "center", width: width * 10 / 100, }}>
        <TouchableOpacity onPress={handleDrawerOpen}>
          <Icons
            name="menu"
            size={30}
            color="#444444"
          />
        </TouchableOpacity>

      </View>
    </View>
  );
};

function SplashScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ alignSelf: "center" }}>
        <Image
          source={require('../assests/Logo.png')}
          style={{ width: width * 65 / 100, height: height * 25 / 100 }}
          resizeMode="contain"
        />
      </View>
    </View>
  );
}
export default function AppContainer() {
  const { i18n } = useTranslation();
  const isLanguageHindi = i18n.language === 'ar';
  const drawerPosition = isLanguageHindi ? 'right' : 'left';
  const navigation = useNavigation();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <DrawerNavigator.Navigator
      screenOptions={{
        drawerPosition: drawerPosition,
      }}
      drawerContent={props => <DrawerContent {...props} />}
    >
      <DrawerNavigator.Screen
        name="Tabs"
        component={Tabs}
        options={{ headerTitle: '', headerShown: false }}
        // options={{
        //   headerTitle: '',
        //   headerLeft: () => {
        //     if (isLanguageHindi) {
        //       return <CustomHeaderRight />;
        //     } else {
        //       return <CustomHeaderleft />;
        //     }
        //   },
        // }}
      />
      <DrawerNavigator.Screen
        name="Login"
        component={LoginStack}
        options={{ headerTitle: '', headerShown: false }}
      />
      <DrawerNavigator.Screen
        name="Products"
        component={Products}
        options={{ headerTitle: '', headerShown: false }}
      />
      <DrawerNavigator.Screen
        name="Categorybanner"
        component={Categorybanner}
        options={{ headerTitle: '', headerShown: false }}
      />
      <DrawerNavigator.Screen
        name="Addresslist"
        component={Addresslist}
        options={{ headerTitle: '', headerShown: false }}
      />
      <DrawerNavigator.Screen
        name="AddressBookScreen"
        component={AddressBookScreen}
        options={{ headerTitle: '', headerShown: false }}
      />
      <DrawerNavigator.Screen
        name="WishlistPage"
        component={WishlistPage}
        options={{ headerTitle: '', headerShown: false }}
      />
      <DrawerNavigator.Screen
        name="EditProfile"
        component={EditProfile}
        options={{ headerTitle: '', headerShown: false }}
      />
      <DrawerNavigator.Screen
        name="HomeNewData"
        component={HomeNewData}
        options={{ headerTitle: '', headerShown: false }}
      />
      <DrawerNavigator.Screen
        name="MainProduct"
        component={MainProduct}
        options={{ headerTitle: '', headerShown: false }}
      />
      <DrawerNavigator.Screen
        name="AddToCart"
        component={AddToCart}
        options={{ headerTitle: '', headerShown: false }}
      />
    </DrawerNavigator.Navigator>
  );
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(0,0,0,.5)',
  },
  modalView: {
    margin: 20,
    width: width - 20,
    // height: height / 2,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  languageItem: {
    width: '100%',
    height: 50,
    borderRadius: 10,
    borderWidth: 0.5,
    marginTop: 10,
    paddingLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  btns: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  btn: {
    width: width * 50 / 100,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderBottomWidth: 4,
    borderWidth: 1,
    borderColor: '#43766C',
    borderRadius: 2,
  },
  selectedBtn: {
  },
  container: {
    flex: 1,
  },
  drawerItem: (active = false) => ({
    padding: 11,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 3,
  }),
  drawerRouteText: {
    letterSpacing: 0.4,
    color: 'black',
    fontSize: 15,
    fontWeight: '400'
  },
  itemContainer: {
    flex: 0.8,
    padding: 15,
  },
  bottomSection: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  logoutContainer: {
    borderTopColor: 'black',
    borderTopWidth: 0.5,
  },
  versionText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 17,
    padding: 5
  },
  logoutSection: {
    paddingHorizontal: 30,
    paddingVertical: 15,
    flexDirection: 'row',
    alignItems: 'center',
  },
  footerContainer: {
    flex: 0.2,
  },
  verticalLine: {
    height: '100%', 
    width: 1, 
    backgroundColor: 'black', 
  },
  copyRightText: {
    fontSize: 12
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191266',
  },
  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    marginBottom: 100,
    fontSize: 18,
    color: 'white',
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6258e8',
  },
  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },
  image: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  versionInfo: {
    justifyContent: "center",
    flexDirection: "row",
    marginBottom: 10
  },
  verticalLine: {
    width: '100%',
    backgroundColor: 'red',
    marginHorizontal: 10,
  },
  iconContainer: {
    marginRight: 10
  },
  iconchat: {
    marginRight: 10
  },
  roundedIcon: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#980404"
  },
  whatsappIcon: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  },
  chatImage: {
    width: 40,
    height: 30,
    resizeMode: 'contain',
    marginLeft: 10
  },
  searchBar__unclicked: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    backgroundColor: "#d9dbda",
    borderRadius: 15,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 10,
    width: "80%",
    borderRadius: 15,
  },
  input: {
    fontSize: 20,
    marginLeft: 10,
    width: "90%",
    color: "black"
  },
});