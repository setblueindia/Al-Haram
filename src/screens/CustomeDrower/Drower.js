import { Image, TouchableOpacity, View, Text, ScrollView } from 'react-native';
import React, { useState } from 'react';
import CommanHeader from '../../components/ComanHeader';
import useDrowerHook from './drower.hook';
import { styles } from './drower.style';
import { BASE_URL } from '../../constants/axios.url';
import { COLOR } from '../../constants/style';
import { ResponsiveSize } from '../../utils/utils';
import { logo } from '../../assests';
import { NAVIGATION, NUMBER } from '../../constants/constants';
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
    <View showsVerticalScrollIndicator={false} style={styles.mainView}>
      <CommanHeader navigation={navigation} lang={lang} />
      <ScrollView style={styles.containerView}>
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
                    items?.children?.length <= 0 && navigation.navigate(NAVIGATION.ProductScreen, { cetegoriesId: items?.id })
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
                        subItem?.children?.length <= 0 && navigation.navigate(NAVIGATION.ProductScreen, { cetegoriesId: subItem?.id })
                      }}
                      key={subIndex}
                      style={[styles.subCategoryItem,
                      lang == NUMBER.num0 && { flexDirection: 'row-reverse' },
                      subIndex == sindex && { backgroundColor: "#FFF9DF" }]}>
                      <View style={styles.subImageView}>
                        <Image source={ subItem?.mobile_circle_thumbnail ? { uri: BASE_URL + subItem?.mobile_circle_thumbnail  } : logo} style={[styles.subImge, !subItem?.mobile_thumbnail && { resizeMode: 'contain' }]} />
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
                            style={[styles.childView ]}
                             key={childIndex}
                             
                             >
                            <Text style={[styles.chaildNameText ,  lang == NUMBER.num0 && {textAlign:'right'}]}>{childItem?.name}</Text>
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
        <View style={{ flex: 1, height: ResponsiveSize(200) }}></View>
      </ScrollView>

    </View>
  );
};

export default Drower;


















