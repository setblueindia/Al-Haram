import React, { useState, useRef, useEffect } from 'react';
import {
  Image, View, Text, ScrollView,
  Dimensions,
  StyleSheet, I18nManager, Animated, Linking, TextInput,  FlatList,ActivityIndicator, Alert
} from 'react-native';
import {
  createDrawerNavigator,
} from '@react-navigation/drawer';
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
import { setCategories, selectCategories } from '../redux/DrawerList/DrawerListSlice';
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
import NumberOfItems from '../components/NumberOfItems/NumberOfItems';
import Register from '../components/Registor/Registor';
import Signup from '../components/Signup/Signup';
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
   <StackNavigator.Screen name='CustomHeader' component={CustomHeader}/>
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
                    color={color}  />
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
const DrawerContent = props => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [clickedCategory, setClickedCategory] = useState(null);
  const [store_id, setstore_id] = useState(1)
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState(null); 
  useEffect(() => {
    AsyncStorage.getItem('userData')
      .then((userData) => {
        if (userData) {
          const { firstname, lastname } = JSON.parse(userData);
          setFirstName(firstname);
          setLastName(lastname);
          setUserData({ firstName: firstname, lastName: lastname });
        }
      })
      .catch((error) => {
        console.error('Error retrieving user data from AsyncStorage:', error);
      });
  }, []);
  
  useEffect(() => {
    
    AsyncStorage.getItem('userData')
      .then((userData) => {
        if (userData) {
          const { firstname, lastname } = JSON.parse(userData);
          setFirstName(firstname);
          setLastName(lastname);
          setUserData({ firstName: firstname, lastName: lastname });
        }
      })
      .catch((error) => {
        console.error('Error retrieving user data from AsyncStorage:', error);
      });
    const storeId = store_id;
    setLoading(true)
    CategoryDrawerList(storeId)
      .then(responseData => {
        console.log("listdata::", responseData);
        setLoading(false);
        dispatch(setCategories(responseData.data));
        if (responseData.data.length > 0) {
          setClickedCategory(responseData.data[0]);
          setChildrenData(responseData.data[0].children_data || []);
        }
      })
      .catch(error => {
        console.error('Error responseData:111', error);
      });
  }, [dispatch]);
 
  const [loading, setLoading] = useState(false);
  const [isWomenFashionVisible, setIsWomenFashionVisible] = useState(false);
  const [isSubWomenFashionVisible, setIsSubWomenFashionVisible] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const { t, i18n } = useTranslation();
  const changeLanguageButtonHandler = () => {

    const langCode = i18n.language === 'en' ? 'ar' : 'en';
    changeLanguage(langCode);
  };
  const [showLanguagesList, setShowLanguagesList] = useState(true);
  const handleInstagramPress = () => {
    const instagramURL = 'https://www.instagram.com/alharamksa/';
    Linking.openURL(instagramURL);
  };
  const handleFacebookPress = () => {
    const facebookURL = 'https://www.facebook.com/alharamksa/';
    Linking.openURL(facebookURL);
  };
  const handlechatPress = () => {
    const instagramURL = 'https://maroof.sa/businesses/';
    Linking.openURL(instagramURL);
  };
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setShowLanguagesList(false);
    console.log('Selected Language:', t(lang));
  };
  useEffect(() => {
  if (selectedCategory !== null) {
    setlist(selectedCategory);
  }
}, [selectedCategory]);
  const [childrenData, setChildrenData] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isselectedCategoryvisible, setselectedCategoryvisible] = useState(false)
  const [list, setlist] = useState(null);
  const navigation = useNavigation();
  const handleLogin = () => {

    const firstname = 'John'; // Example value
    const lastname = 'Doe'; // Example value
    setFirstName(firstname);
    setLastName(lastname);
    // Navigate to the login screen
    navigation.navigate('Login');
  };
  
  const handleLogoutPress = () => {
    if (firstName && lastName) {
      AsyncStorage.removeItem('userData')
        .then(() => {
          setFirstName('');
          setLastName('');
          setUserData(null); 
          // props.navigation.navigate('Login'); 
        })
        .catch((error) => {
          console.error('Error removing user data from AsyncStorage:', error);
        });
    } else {
      // props.navigation.navigate('Login'); 
    }
  };
  
  
  return (
    <View style={{ flex: 1 }}>
      <View style={{}}>
        <View style={{ padding: 20, }}>
          <View style={{ flexDirection: 'row' }}>
          <Image
              source={
                userData
                  ? require('../assests/user.png')
                  : require('../assests/userhand.png') 
              }
              style={{ width: 50, height: 50, tintColor: '#980404' }}
            />
    
            <View style={{ alignSelf: 'center', paddingHorizontal: 10, flex: 1 }}>
            <Text style={{ color: '#9f0202', fontSize: 18, fontWeight: 'bold' }}>
  {`${firstName ? firstName : 'Login'} ${lastName ? lastName : ''}`}
</Text>

            </View>
            <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>

            <View style={{ alignSelf: 'center' ,padding:5}}>
            <Feather name="edit" size={20} color="#9f0202" />
            
            </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ height: 1, backgroundColor: 'black', margin: 10 }} />
      </View>
      <ScrollView>
        <View style={{ paddingHorizontal: 20 }}>
          <View>
            {loading ? (
             <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
             <ActivityIndicator size="large" color="#0000ff" />
             {/* <Image source={require('../../assests/gif/app_Loader.gif')} style={{ width: 50, height: 50 }} /> */}
           </View>
            ) : (
              <FlatList
              data={categories.children_data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          console.log("Pressed item id:", item.id);
                          setSelectedCategory(item.id);
                          setselectedCategoryvisible(!isselectedCategoryvisible);
                          // navigation.navigate('Categorybanner');
                        // Alert.alert("hello")
                          navigation.navigate('Categorybanner', { categoryId: item.id });
                        }}
                      >
                        <Text
                          style={{
                            textTransform: 'uppercase',
                            color: '#040404',
                            fontWeight: '600',
                            letterSpacing: 0.3,
                            fontSize: 15,
                          }}
                        >
                          {item.name}
                        
                        </Text>
                      </TouchableOpacity>
                      <View style={{ alignSelf: 'center' }}>
                        <MaterialIcons
                        name={
                          isselectedCategoryvisible
                            ? 'keyboard-arrow-down'
                            : 'keyboard-arrow-right'
                        }
            
                          size={25}
                          color="black"
                        />
                      </View>
                    </View>
                    {selectedCategory === item.id && (
              <FlatList
                data={item.children_data}
                keyExtractor={(childItem) => childItem.id.toString()}
                renderItem={({ item: childItem }) => (
                  <View>
                    <TouchableOpacity onPress={() => {
                          // setChildrenData(item.children_data || []);
                          console.log("Pressed2 item id:", item.id);
                          setlist(item.id)
                          
                        }}>     
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: 10,
                            color: '#2D3250',
                            padding: 10,
                            fontWeight: '600',
                            fontSize: 14,
                          }}
                        >
                          {childItem.name}
                        </Text>
                        <View style={{ alignSelf: 'center' }}>
                          <MaterialIcons
                            name={'keyboard-arrow-right'}
                            size={25}
                            color="black"
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    {childItem.children_data &&
                      childItem.children_data.map((nestedChild) => (
                        <TouchableOpacity key={nestedChild.id}>
                            {list === item.id && (
                         <View> 
                             <Text
                             style={{
                               marginLeft: 30,
                               color: '#647D87',
                               padding: 5,
                             }}
                           >
                             {nestedChild.name}
                           </Text>
                           <View
                             style={{
                               marginLeft: 30,
                               color: '#647D87',
                               padding: 3,
                               borderBottomWidth: 1,
                               borderBottomColor: '#BFCFE7',
                             }}
                           />
                         </View>
                         )}
                        </TouchableOpacity>
                      ))}
                  </View>
                )}
              />
            )} 
                  </View>
                );
              }}
            /> 
            )}
          </View>
        </View>
      </ScrollView>
      
      {/* <ScrollView>
        <View style={{ paddingHorizontal: 20, }}>
          <View>
         
   <FlatList
              data={categories.children_data}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => {
                return (
                  <View>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        paddingVertical: 10,
                      }}
                    >
                      <TouchableOpacity
                        onPress={() => {
                          console.log("Pressed item id:", item.id);
                          setSelectedCategory(item.id);
                          setselectedCategoryvisible(!isselectedCategoryvisible);
                          // navigation.navigate('Categorybanner');
                        // Alert.alert("hello")
                          navigation.navigate('Categorybanner', { categoryId: item.id });
                        }}
                      >
                        <Text
                          style={{
                            textTransform: 'uppercase',
                            color: '#040404',
                            fontWeight: '600',
                            letterSpacing: 0.3,
                            fontSize: 15,
                          }}
                        >
                          {item.name}
                        
                        </Text>
                      </TouchableOpacity>
                      <View style={{ alignSelf: 'center' }}>
                        <MaterialIcons
                        name={
                          isselectedCategoryvisible
                            ? 'keyboard-arrow-down'
                            : 'keyboard-arrow-right'
                        }
            
                          size={25}
                          color="black"
                        />
                      </View>
                    </View>
                    {selectedCategory === item.id && (
              <FlatList
                data={item.children_data}
                keyExtractor={(childItem) => childItem.id.toString()}
                renderItem={({ item: childItem }) => (
                  <View>
                    <TouchableOpacity onPress={() => {
                          // setChildrenData(item.children_data || []);
                          console.log("Pressed2 item id:", item.id);
                          setlist(item.id)
                          
                        }}>     
                      <View
                        style={{
                          flexDirection: 'row',
                          justifyContent: 'space-between',
                        }}
                      >
                        <Text
                          style={{
                            marginLeft: 10,
                            color: '#2D3250',
                            padding: 10,
                            fontWeight: '600',
                            fontSize: 14,
                          }}
                        >
                          {childItem.name}
                        </Text>
                        <View style={{ alignSelf: 'center' }}>
                          <MaterialIcons
                            name={'keyboard-arrow-right'}
                            size={25}
                            color="black"
                          />
                        </View>
                      </View>
                    </TouchableOpacity>
                    {childItem.children_data &&
                      childItem.children_data.map((nestedChild) => (
                        <TouchableOpacity key={nestedChild.id}>
                            {list === item.id && (
                         <View> 
                             <Text
                             style={{
                               marginLeft: 30,
                               color: '#647D87',
                               padding: 5,
                             }}
                           >
                             {nestedChild.name}
                           </Text>
                           <View
                             style={{
                               marginLeft: 30,
                               color: '#647D87',
                               padding: 3,
                               borderBottomWidth: 1,
                               borderBottomColor: '#BFCFE7',
                             }}
                           />
                         </View>
                         )}
                        </TouchableOpacity>
                      ))}
                  </View>
                )}
              />
            )} 
                  </View>
                );
              }}
            /> 

          </View>
        </View>

      </ScrollView> */}
      <View style={{ marginBottom: 60 }}>
  <View style={{ paddingHorizontal: 20, padding: 10 }}>
    {(firstName && lastName) ? (
    null
      // <TouchableOpacity onPress={handleLogoutPress}>
      //   <Text
      //     style={{
      //       textTransform: 'uppercase',
      //       color: '#040404',
      //       fontWeight: '600',
      //       fontSize: 15,
      //     }}>
      //     {`${t('LOGOUT')} `}
      //   </Text>
      // </TouchableOpacity>
    ) : (
      <TouchableOpacity onPress={firstName && lastName ? handleLogoutPress : handleLogin}>
        <Text
          style={{
            textTransform: 'uppercase',
            color: '#040404',
            fontWeight: '600',
            fontSize: 15,
          }}>
          {t('LOGIN')}
        </Text>
      </TouchableOpacity>
    )}
   
  </View>
  <View style={styles.btns}>
    <TouchableOpacity
      style={[
        styles.btn,
        selectedLanguage === 'en' ? styles.selectedBtn : null,

      ]}
      onPress={changeLanguageButtonHandler}
    >
      <View style={{ flexDirection: "row", alignItems: "center", }}>
        <Text style={{ color: 'black', marginRight: 5 }}>{i18n.language === 'ar' ? t('English') : t('عربي')}</Text>
      </View>
    </TouchableOpacity>
  </View>
</View>

      {/* <View style={{ marginBottom: 60 }}>
        <View style={{ paddingHorizontal: 20, padding: 10 }}>
        {firstName && lastName ? (
            <TouchableOpacity onPress={handleLogoutPress}>
              <Text
                style={{
                  textTransform: 'uppercase',
                  color: '#040404',
                  fontWeight: '600',
                  fontSize: 15,
                }}>
                {t('LOGOUT')}
              </Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text
              style={{
                textTransform: 'uppercase',
                color: '#040404',
                fontWeight: '600',
                fontSize: 15,
              }}>
            {t('LOGIN')}
            </Text>
          </TouchableOpacity>
            
          )}
        </View>
        <View style={styles.btns}>
          <TouchableOpacity
            style={[
              styles.btn,
              selectedLanguage === 'en' ? styles.selectedBtn : null,

            ]}
            onPress={changeLanguageButtonHandler}
          >
            <View style={{ flexDirection: "row", alignItems: "center", }}>
              <Text style={{ color: 'black', marginRight: 5 }}>{i18n.language === 'ar' ? t('English') : t('عربي')}</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View> */}
      <View style={styles.footerContainer}>
        <View style={styles.bottomSection}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 1, height: 1, backgroundColor: 'black', margin: 10 }} />
          </View>
          <View style={styles.versionInfo}>
            <TouchableOpacity onPress={handleInstagramPress}>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assests/insta.png')}
                  style={styles.whatsappIcon}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleFacebookPress}>
              <View style={styles.iconContainer1}>
                <FontAwesome5Brands
                  name="facebook"
                  size={28}
                  color="#316FF6"
                  style={styles.roundedIcon1}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlechatPress}>
              <View style={styles.iconchat}>
                <Image
                  source={require('../assests/chatapp.png')}
                  style={styles.chatImage}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{ marginBottom: 10 }}>
        <Text style={{
          color: 'black',
          textAlign: 'center',
          fontSize: 12,
        }}>Build : v1.1</Text>
      </View>
    </View>
  );
};
const CustomHeaderleft = ({ clicked, searchPhrase, setSearchPhrase, setCLicked }) => {
  const navigation = useNavigation();

  const handleDrawerOpen = () => {
    navigation.openDrawer();
  };
  const [count, setCount] = useState(0);
  const animatedScale = new Animated.Value(1);

  const animationRef = useRef(null);

  const playFireworksAnimation = () => {
    if (animationRef.current) {
      animationRef.current.play();
    }
  };

  const HomeScreen = () => {
    navigation.navigate('Home');
  };
  const [animatedValue] = useState(new Animated.Value(1));

  const handlePress = () => {
    // Add your "crackers effect" animation here
    Animated.sequence([
      Animated.timing(animatedValue, { toValue: 1.4, duration: 100, useNativeDriver: false }),
      Animated.timing(animatedValue, { toValue: 1, duration: 100, useNativeDriver: false }),
    ]).start();
  };
  const scaleValue = useRef(new Animated.Value(1)).current;
  const [counter, setCounter] = useState(0);
  const handlstore = () => {
    setCounter(counter + 1);
    // Add your start effect animation logic here
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 1.2, // Scale factor when pressed
        duration: 100,
        useNativeDriver: false, // Make sure to set useNativeDriver to false for Android
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
                  style={{ width: 25, height: 25, tintColor: '#444444' }}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={handlePress}>
              <Animated.View style={{ transform: [{ scale: animatedValue }], padding: 5 }}>
              <Feather name="heart" size={26} color="#444444" />
                {/* <Image
                  source={require('../assests/heart.png')}
                  style={{ width: 25, height: 25, tintColor: '#444444' }}
                /> */}
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
            color="#444444"
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
      <View style={{alignSelf:"center"}}>

<Image
source={require('../assests/Logo.png')} // Replace with your splash image path
style={{width:width*65/100,height:height*25/100}}
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
        options={{
          headerTitle: '',
          headerLeft: () => {
            if (isLanguageHindi) {
              return <CustomHeaderRight />;
            } else {
              return <CustomHeaderleft />;
            }
          },
        }}
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
      <DrawerNavigator.Screen
      name="NumberOfItems"
      component={NumberOfItems}
      options={{ headerTitle: '', headerShown: false }}
    />
    <DrawerNavigator.Screen
      name="Registor"
      component={Register}
      options={{ headerTitle: '', headerShown: false }}
    />
    </DrawerNavigator.Navigator>
  );
}

// export default function AppContainer() {
//   const { i18n } = useTranslation();
//   const isLanguageHindi = i18n.language === 'ar';
//   const drawerPosition = isLanguageHindi ? 'right' : 'left';
//   const navigation = useNavigation();
//   return (
//     <DrawerNavigator.Navigator
//       screenOptions={{
//         drawerPosition: drawerPosition,
//       }}
//       drawerContent={props => <DrawerContent {...props} />}
//     >
//       <DrawerNavigator.Screen
//         name="Tabs"
//         component={Tabs}
//         options={{
//           headerTitle: '',
//           headerLeft: () => {
//             if (isLanguageHindi) {
//               return <CustomHeaderRight />;
//             } else {
//               return <CustomHeaderleft />;
//             }
//           },
//         }}
//       />
//       <DrawerNavigator.Screen
//         name="Login"
//         component={LoginStack}
//         options={{ headerTitle: '', headerShown: false, }}
//       />
//        <DrawerNavigator.Screen
//         name="Products"
//         component={Products}
//         options={{headerTitle: '', headerShown: false}}
//       />
//        <DrawerNavigator.Screen
//         name="Categorybanner"
//         component={Categorybanner}
//         options={{headerTitle: '', headerShown: false}}
//       />
//        <DrawerNavigator.Screen
//         name="Addresslist"
//         component={Addresslist}
//         options={{headerTitle: '', headerShown: false}}
//       />
//          <DrawerNavigator.Screen
//         name="AddressBookScreen"
//         component={AddressBookScreen}
//         options={{headerTitle: '', headerShown: false}}
//       />
//        <DrawerNavigator.Screen
//         name="WishlistPage"
//         component={WishlistPage}
//         options={{headerTitle: '', headerShown: false}}
//       />
//        <DrawerNavigator.Screen
//         name="EditProfile"
//         component={EditProfile}
//         options={{headerTitle: '', headerShown: false}}
//       />
//         <DrawerNavigator.Screen
//         name="HomeNewData"
//         component={HomeNewData}
//         options={{headerTitle: '', headerShown: false}}
//       />
//           <DrawerNavigator.Screen
//         name="MainProduct"
//         component={MainProduct}
//         options={{headerTitle: '', headerShown: false}}
//       />
//       <DrawerNavigator.Screen
//         name="AddToCart"
//         component={AddToCart}
//         options={{headerTitle: '', headerShown: false}}
//       />
//     </DrawerNavigator.Navigator>
//   );
// }
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
    // backgroundColor: '#980404', // You can set your desired background color

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
    // marginLeft: 10,
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
    // backgroundColor:"#fff8bd"
  },
  verticalLine: {
    height: '100%', // Set the height as per your requirement
    width: 1, // Set the width of the line
    backgroundColor: 'black', // Set the color of the line
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
    // hei: '100%',
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