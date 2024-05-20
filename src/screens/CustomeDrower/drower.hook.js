import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {Dimensions, Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addLangCode, updateLangCode} from '../../redux/Slices/LangSlices';
import {Ar, En} from '../../constants/localization';
import { NUMBER } from '../../constants/constants';

const useDrowerHook = () => {
  const lang = useSelector(state => state.lang);
  const userData = useSelector(state => state?.userData )
  const [langues, setLangues] = useState();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const height = Dimensions.get("window").height

  const firstName = userData?.data?.firstname
  const lastName = userData?.data?.lastname
  const userName = firstName && lastName ? firstName +"  "+lastName : "User"




  const changeLable = () => {
    const lable = lang.data === '0' ? Ar : En;
    setLangues(lable);
  }
  useEffect(() => {
    changeLable();
  }, [lang]);

  const handleInstagramPress = () => {
    const instagramURL = 'https://www.instagram.com/alharamksa/';
    Linking.openURL(instagramURL);
  };
  const handleFacebookPress = () => {
    const facebookURL = 'https://www.facebook.com/alharamksa/';
    Linking.openURL(facebookURL);
  };
  const handlechatPress = () => {
    const businessesURL = 'https://maroof.sa/businesses/';
    Linking.openURL(businessesURL);
  };

  const changeLungues = async () => {
    const num = lang.data == NUMBER.num0 ? NUMBER.num1 : lang.data == NUMBER.num1 ? NUMBER.num0 : NUMBER.num0;

    try {
      await AsyncStorage.setItem('Lang', num);
      dispatch(updateLangCode(num));
    } catch (error) {
      console.log('UPDATE LANGUES ERROR :: ', error);
    }
  };

  const data = [
    {
      name: lang.data == NUMBER.num1 ? "Women's Fashion":"على الموضة للنساء",
      children_data: [
        {
          name: 'Women’s Clothing',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Top',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Toucer',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Footwear',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Lingeria',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
      ],
    },
    {
      name: lang.data == NUMBER.num1 ? "Kids Fashion" : "أزياء الاطفال",
      children_data: [
        {
          name: 'Women’s Clothing',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Top',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Toucer',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Footware',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Lingeria',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
      ],
    },
    {
      name:  lang.data == NUMBER.num1 ? "Men's Fashion" : "أزياء رجالية",
      children_data: [
        {
          name: 'Women’s Clothing',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Top',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Toucer',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Footware',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Lingeria',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
      ],
    },
    {
      name: lang.data == NUMBER.num1 ? "Baby Fashion & Supplies" : "أزياء ومستلزمات الأطفال",
      children_data: [
        {
          name: 'Women’s Clothing',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Top',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Toucer',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Footware',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Lingeria',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
      ],
    },
    {
      name: lang.data == NUMBER.num1 ? "Home Furnishing" : "تأثيث المنزل",
      children_data: [
        {
          name: 'Women’s Clothing',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Top',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Toucer',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Footware',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Lingeria',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
      ],
    },
    {
      name: lang.data == NUMBER.num1 ? "School" : "مدرسة",
      children_data: [
        {
          name: 'Women’s Clothing',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Top',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Toucer',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Footware',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Lingeria',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
      ],
    },
    {
      name: lang.data == NUMBER.num1 ? "Medical Dress" : "اللباس الطبي",
      children_data: [
        {
          name: 'Women’s Clothing',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Top',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Toucer',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Footware',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Lingeria',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
      ],
    },
    {
      name: lang.data == NUMBER.num1 ? 'ULTENSILS' : "أواني",
      children_data: [
        {
          name: 'Women’s Clothing',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Top',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Women’s Toucer',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Footware',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
        {
          name: 'Lingeria',
          children_data: [
            {
              name: 'Dresses',
            },
            {
              name: 'Jumpsuits & sets',
            },
            {
              name: 'Jalabiya',
            },
          ],
        },
      ],
    },
  ];

  return {
    lang,
    data,
    navigation,
    langues,
    userName,
    height,
    changeLungues,
    handleInstagramPress,
    handleFacebookPress,
    handlechatPress,
  };
};

export default useDrowerHook;
