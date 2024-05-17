import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NUMBER } from '../../constants/constants'

const useHomeHook = () => {

  const [storyData, setStoryData] = useState()
  const lang = useSelector(state => state.lang)

  const data = [
    {
      name: lang.data == NUMBER.num1 ? "Women's Fashion":"على الموضة للنساء",
      img: require("../../assests/images/Home/1.png")

    },
    {
      name: lang.data == NUMBER.num1 ? "Women's Fashion":"على الموضة للنساء",
      img: require("../../assests/images/Home/2.png")

    },
    {
      name: lang.data == NUMBER.num1 ? "Women's Fashion":"على الموضة للنساء",
      img: require("../../assests/images/Home/3.png")

    },
    {
      name: lang.data == NUMBER.num1 ? "Women's Fashion":"على الموضة للنساء",
      img: require("../../assests/images/Home/4.png")

    },
    {
      name: lang.data == NUMBER.num1 ? "Women's Fashion":"على الموضة للنساء",
      img: require("../../assests/images/Home/5.png")

    },
  ]

  const HomeScreeData = {
    data: [
      Games = {
        name: lang.data == NUMBER.num1 ? "Featured Products" : "منتجات مميزة",
        innerData: [
          {
            id : 1,
            name: "Water Gun",
            imge: require('../../assests/images/Home/F1.png'),
            price: "200Rs"

          },
          {
            id : 2,
            name: "Baby Swing",
            imge: require('../../assests/images/Home/F2.png'),
            price: "250Rs"
          },
          {
            id : 3,
            name: "ball",
            imge: require('../../assests/images/Home/F3.png'),
            price: "100Rs"
          },
          {
            id : 4,
            name: "Plastic bat",
            imge: require('../../assests/images/Home/F4.png'),
            price: "150Rs"
          },

        ]
      },
      Shool = {
        name: lang.data == NUMBER.num1 ?  "School" : "مدرسة",
        innerData: [
          {
            name: "Water Gun",
            imge: require('../../assests/images/Home/t1.png'),
            price: "200Rs"

          },
          {
            name: "Baby Swing",
            imge: require('../../assests/images/Home/t2.png'),
            price: "250Rs"
          },
          {
            name: "ball",
            imge: require('../../assests/images/Home/t1.png'),
            price: "100Rs"
          },
          {
            name: "Plastic bat",
            imge: require('../../assests/images/Home/t2.png'),
            price: "150Rs"
          },

        ]
      },
      LatestProduct = {
        name: lang.data == NUMBER.num1 ?   "Latest Product" : "أحدث المنتجات",
        innerData: [
          {
            name: "Water Gun",
            imge: require('../../assests/images/Home/phone1.jpg'),
            price: "200Rs"

          },
          {
            name: "Baby Swing",
            imge: require('../../assests/images/Home/phone2.jpg'),
            price: "250Rs"
          },
          {
            name: "ball",
            imge: require('../../assests/images/Home/t1.png'),
            price: "100Rs"
          },
          {
            name: "Plastic bat",
            imge: require('../../assests/images/Home/t2.png'),
            price: "150Rs"
          },

        ]
      }


    ]

  }

const Sliderdata = [
  "https://img.freepik.com/free-photo/medium-shot-smiley-woman-indoors_23-2148875315.jpg",
  "https://st2.depositphotos.com/1518767/6899/i/450/depositphotos_68995953-stock-photo-fashion-designer-using-digital-tablet.jpg",
  "https://plus.unsplash.com/premium_photo-1661727339503-b15c728dff40?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmFzaGlvbiUyMGRlc2lnbmVyfGVufDB8fDB8fHww",
  "https://plus.unsplash.com/premium_photo-1661741573027-7b95db386a03?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D",
  "https://images.unsplash.com/photo-1573612664822-d7d347da7b80?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGZhc2hpb24lMjBkZXNpZ25lcnxlbnwwfHwwfHx8MA%3D%3D"
]




  return {
    data,
    HomeScreeData,
    lang,
    Sliderdata
  }
}

export default useHomeHook
