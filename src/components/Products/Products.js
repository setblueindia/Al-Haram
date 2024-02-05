import {TouchableHighlight,Animated,StyleSheet, View, Text, SafeAreaView, Pressable , Image, ScrollView, Dimensions,FlatList,TouchableOpacity,ActivityIndicator } from 'react-native';
import React,{useState,useEffect,useRef} from 'react'
import { useNavigation,useRoute  } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Modal from 'react-native-modal';
import { RadioButton } from 'react-native-paper';
import { useDispatch, useSelector } from 'react-redux';
import { AllCategory } from '../../redux/mainStack/mainStackApi';
import { setCategoryList } from '../../redux/categoryList/categoryList';
import { CategoryFilterAPI } from '../../redux/mainStack/mainStackApi';
import MultiSlider from '@ptomasroos/react-native-multi-slider'
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons'
const { width, height } = Dimensions.get('window');
const Products = () => {
  const [range, setRange] = useState([1, 50]);
  const onValuesChange = (values) => {
    setRange(values);
  };
    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [isfilterModalVisible, setfilterModalVisible] = useState(false);
    const [selectedId, setSelectedId] = useState(null);
    const HomeScreen = () => {
      navigation.navigate('Home');
    };
    const toggleModalFilter = () => {
      setfilterModalVisible(!isfilterModalVisible);
    };
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };
    const data = [
      { id: 1, label: 'Relevance' },
      { id: 2, label: 'New Arrivals' },
      { id: 3, label: 'Price Low-High' },
      { id: 4, label: 'Price High-Low' },
    ];
    const dispatch = useDispatch();   
  const [loading, setLoading] = useState(true);
  const scaleValue = useRef(new Animated.Value(1)).current;
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
  const categoryList = useSelector((state) => state.categoryList.categoryList);
  const route = useRoute();
  const { number } = route.params; 
  useEffect(() => {
    const store_id = 1;
    const category_id = number;
    const PageSize = 20;
    const CurPage = 1;
    const customer_id = 14;
    const fetchCategoryList = async () => {
      try {
        const categoryListData = await AllCategory(store_id, category_id, PageSize, CurPage, customer_id);
        dispatch(setCategoryList(categoryListData));
        console.log('Category List Response:', categoryListData);
      } catch (error) {
        console.error('Error fetching category list', error);
      }
    };
    fetchCategoryList();
  }, [dispatch, number]); 
  const [colors, setColors] = useState([]);
  const [category, setCategory] = useState([]);
  const [size, setSize] = useState([]);
  const [prize, setprize] = useState([]);
  useEffect(() => {
    const storeId = 1;
    const category_id = 2;
    CategoryFilterAPI(storeId, category_id)
      .then(responseData => {
        if (responseData.status === 1 && responseData.data) {
          const availableFilters = responseData.data.availablefilter;
          if (availableFilters.Color) {
            setColors(availableFilters.Color);   
            availableFilters.Color.forEach(color => {              
            });
          }
          if (availableFilters.Category) {
            setCategory(availableFilters.Category);
             availableFilters.Category.forEach(category => {
          });
          }
          if (availableFilters.Price) {
            console.log("Price Filters:", availableFilters.Price);
            setprize(availableFilters.Price);
          
            availableFilters.Price.forEach((priceFilter, index) => {
              console.log(`Display: ${priceFilter.display}, Value: ${priceFilter.value}`);
          
              // Log the value at index 0
              if (index === 0) {
                console.log(`Value at index 0: ${priceFilter.value}`);
              }
          
              // Log the value at index 1
              if (index === 1) {
                console.log(`Value at index 1: ${priceFilter.value}`);
              }
            });
          }
          if (availableFilters.Size) {
            setSize(availableFilters.Size);           
            availableFilters.Size.forEach(size => {
            });
          }
          setLoading(false);
        } else {
          setLoading(false);
        }
      })
      .catch(error => {
        setLoading(false);
      });
  }, []);
  const renderProductItem = ({ item }) => (
    <View style={{ marginTop: 10, flex: 1 }}>
  <View style={{ 
    borderRadius: 2, 
    overflow: 'hidden', 
    backgroundColor: 'black',
    width: width * 40 / 100,
    height: height * 25 / 100,
    marginVertical: 10,
    marginHorizontal: 20,
    borderWidth:0.5
  }}>
    <Image
      source={{ uri: item.image }}
      style={{ flex: 1, resizeMode: 'cover' }}
    />
     {item.special_offer && (
        <Image
          source={{ uri: item.special_offer }}
          style={{ 
            position: 'absolute',              
            left: 80, 
            width: width*20/100, 
            height:height*10/100, 
            resizeMode: 'cover' ,         
          }}
        />
      )}
  </View>
  <View style={{ alignSelf: 'center', marginTop: 10 }}>
    <Text style={{ color: 'black', textAlign: 'center' }} numberOfLines={1} ellipsizeMode="tail">
      {item.name.split(' ').slice(0, 2).join(' ')}
    </Text>
    <Text style={{ color: '#9f0202', textAlign: 'center' }}>SAR {item.price}</Text>
  </View>
</View>
  );
  const renderItemnew = ({ item }) => {
    return (
      <View style={{flexDirection:"colum", borderWidth: 0.8,padding:5,borderColor:"lightgray"}}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 8 }}>
        <RadioButton
        value={item.id}
        status={selectedId === item.id ? 'checked' : 'unchecked'}
        onPress={() => setSelectedId(item.id)}
        color="#9f0202"
      />
        <Text style={{ marginLeft: 8 ,fontSize:15,color:"gray"}}>{item.label}</Text>
      </View>
      </View>
    );
  };
  const handleGoBack = () => {
    navigation.goBack();
  };
  const [selectedButton, setSelectedButton] = useState('Size');
  const handlePressbutton = (button) => {
    setSelectedButton(button);
  };
  return (
    <View style={{backgroundColor:"#fff",flex:1,height:height}}>
    <View style={{backgroundColor:"#fff",justifyContent:"space-between",flexDirection:"row",height:height*8/100,alignItems:"center"}}>
        <View style={{marginHorizontal:10}}>
  
        <TouchableOpacity onPress={handleGoBack}>
        <Ionicons name="arrow-back" size={28} color="black" />
      </TouchableOpacity>
        </View>
        <View style={{}}>
  
        <TouchableOpacity onPress={HomeScreen}>
            <Image
              source={require('../../assests/Logo.png')} 
              style={{
                width: width*0.3, height: height*0.1, resizeMode: "contain", 
              }}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handlstore}>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../../assests/shopping-cart.png')}
                  style={styles.icon}
                />
              </View>
            </TouchableOpacity>
      </View>
      <View style={{flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    borderRadius: 5,
    padding: 5,
    borderColor: 'lightgray', 
    borderWidth: 1, 
    width: width*0.9,
    backgroundColor: "#fff",alignSelf:"center",}}>
      <TouchableOpacity onPress={toggleModal} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
    source={require('../../assests/iconSort.png')} 
    style={{ width: 20, height: 20, marginLeft: 5 }} 
  />
  <Text style={{
    color: 'gray',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: "200",paddingHorizontal:5
  }}>Sort</Text>
</TouchableOpacity>
        <View style={{ height: 30,
    width: 1,
    backgroundColor: 'gray',
    marginHorizontal: 0,}}></View>
         <TouchableOpacity onPress={toggleModalFilter} style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Image
    source={require('../../assests/iconFilter.png')} // Replace with the actual path to your image
    style={{ width: 20, height: 20, marginLeft: 5 }} // Adjust the width and height as needed
  />
  <Text style={{
    color: 'gray',
    fontSize: 17,
    textAlign: 'center',
    fontWeight: "200",paddingHorizontal:5
  }}>Filter</Text>
</TouchableOpacity>
      </View>
<View>
<View>
<FlatList
          data={categoryList.data}
          renderItem={renderProductItem}
         numColumns={2}
        />    
</View>
</View>
<Modal isVisible={isModalVisible} style={styles.modal} onBackdropPress={toggleModal} backdropOpacity={0.5}>
        <View style={styles.modalContent}>
          <View style={{marginBottom:10}}>
          <Text style={{ fontSize: 18, color: "#9f0202", }}>Sort By</Text>
          </View>
          <FlatList
            data={data}
            renderItem={renderItemnew}
            keyExtractor={(item) => item.label}
          />
        </View>
      </Modal>
      <Modal isVisible={isfilterModalVisible} style={styles.modal2} onBackdropPress={toggleModalFilter} backdropOpacity={0.5}>
        <View style={styles.Content}>
          <View style={{alignSelf:"flex-end",margin:15}}>
          <TouchableOpacity onPress={toggleModalFilter}>
    <SimpleLineIcons name="close" size={25} color="#9f0202" />
  </TouchableOpacity>
          </View>
        <View style={{justifyContent:'space-between',flexDirection:'row'}}>
     <View style={{paddingHorizontal:20}}>
     <Text style={{fontSize:22,color:"#9f0202"}}>Filter By</Text>
     </View>
      <View style={{ flexDirection: 'row',justifyContent:"space-between",marginRight:10}}>
        <TouchableOpacity onPress={() => console.log('Clear button pressed')} style={{width:width*20/100,borderRadius:1,borderWidth:1,borderColor:"green",borderRightColor:"red",marginRight:10,padding:5}}>
          <Text style={{textAlign:"center"}}>Clear</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => console.log('Edit button pressed')} style={{width:width*20/100,borderRadius:1,borderWidth:1,borderColor:"green",borderRightColor:"red",backgroundColor:"#9f0202",padding:5}}>
          <Text style={{textAlign:"center",color:"#fff"}}>Apply</Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{paddingVertical:10,}}>
    <View
      style={{
        borderBottomColor: '#eae0e0',
        borderBottomWidth: 1, 
      
      }}
    />
   <View style={{justifyContent:"space-between",flexDirection:"row",height:height}}>
    <View style={{backgroundColor:"#f9f8f8",width:width*40/100}}>
<View style={{}}>
      <TouchableHighlight
        underlayColor="#f8f2f2"
        style={{
          backgroundColor: selectedButton === 'Size' ? '#f8f2f2' : '#fff',
          padding: 15,
          borderBottomWidth: 1,
          borderColor: '#f8f2f2',
        }}
        onPress={() => handlePressbutton('Size')}
      >
        <Text style={{ fontSize: 16, textAlign: 'center' }}>Size</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#f8f2f2"
        style={{
          backgroundColor: selectedButton === 'Category' ? '#f8f2f2' : '#fff',
          padding: 15,
          borderBottomWidth: 1,
          borderColor: '#f8f2f2',
        }}
        onPress={() => handlePressbutton('Category')}
      >
        <Text style={{ textAlign: 'center' }}>Category</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#f8f2f2"
        style={{
          backgroundColor: selectedButton === 'Prize' ? '#f8f2f2' : '#fff',
          padding: 15,
          borderBottomWidth: 1,
          borderColor: '#f8f2f2',
        }}
        onPress={() => handlePressbutton('Prize')}
      >
        <Text style={{ textAlign: 'center' }}>Prize</Text>
      </TouchableHighlight>
      <TouchableHighlight
        underlayColor="#f8f2f2"
        style={{
          backgroundColor: selectedButton === 'Color' ? '#f8f2f2' : '#fff',
          padding: 15,
          borderBottomWidth: 1,
          borderColor: '#f8f2f2',
        }}
        onPress={() => handlePressbutton('Color')}
      >
        <Text style={{ textAlign: 'center' }}>Color</Text>
      </TouchableHighlight>
    </View>
    </View>
    <View style={{ width: 1, backgroundColor: '#f8f2f2' }} />
    <View style={{backgroundColor:"#fff",width:width*60/100,paddingBottom:10}}>
<ScrollView> 
<View >
{selectedButton === 'Prize' &&  (
          <View style={styles.container}>
            <Text style={styles.text}> {range[0]} - {range[1]} </Text>
            <View style={{alignSelf:"center",}}>

            <MultiSlider
              values={range}
              min={0}
              max={499}
              step={1}
              sliderLength={160}
              onValuesChange={onValuesChange}
              allowOverlap
              snapped
            />
              </View>
            
          </View>
        )}
   
    </View>
{selectedButton == 'Size' && size.map(s => (
  <View key={s.id} style={{ justifyContent: "space-between", flexDirection: "row", paddingVertical: 10,width:width*50/100,alignSelf:"center",}}>
    <Text style={{}}>{s.display}</Text>
    <Text>{s.value}</Text>
  </View>
))}
{ selectedButton === 'Category' && category.map(cat => (
            <View style={{justifyContent:'space-between',flexDirection:"row", paddingVertical: 10,width:width*50/100,alignSelf:"center"}}>
              <Text key={cat.id}>{cat.display}</Text>
              <Text>{cat.value}</Text>
              </View>
            ))}
{ selectedButton === 'Color' && colors.map(color => (
  <View style={{justifyContent:"space-between",flexDirection:"row", paddingVertical: 10,width:width*50/100,alignSelf:"center"}}>

    <Text key={color.display}>{color.display}</Text>
    <Text>{color.value}</Text>
  </View>
          ))}
</ScrollView>
    </View>
    
   </View>
    </View>


        </View>
      </Modal>
          </View>
  )
}
export default Products
const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modal2: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 50,
    borderTopLeftRadius:15,
    borderTopRightRadius:15
  },
 Content: {
    backgroundColor: '#FFF',
    // padding: 10,
    borderTopLeftRadius:15,
    borderTopRightRadius:15,
    height:height*90/100,
    marginTop:10
  },
  button: {
    backgroundColor: '#3498db',
    padding: 10,
    margin: 5,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  table: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    marginTop: 30,
 },
 row: {
    flexDirection:"column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
 },
 cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    width: 200,
    height: 200,
    textAlign: "center",
    fontSize: 18,
    color: "black",
    borderColor: "black",
 },
 icon: {

  width:24,
  height:24,
  marginRight:20
},
container: {
  flex: 1,
  alignSelf:"center",
},
text: {
  fontSize: 16,
  marginBottom: 10,
  textAlign:"center",
  padding:10,
  color:'#9f0202'
},
});



