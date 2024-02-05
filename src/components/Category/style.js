import { StyleSheet, Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  maincontainer:{
  },
  buttoncontainer: {
  },
  button: {
    backgroundColor: '#FFF',
    padding: 15,
    width: width,
  },
  buttonText: {
    color: 'black',
    fontSize:20
    // textAlign: 'center',
  },
  selectedButton: {
    backgroundColor: '#fff', // Change to red for selected button
   padding:15,
   fontSize:17,
   fontWeight:"normal"
  },
  categoryTitle: {
    color: 'black', // Default text color
    fontSize: 18,   // Default font size
    backgroundColor: '#fff',
    // padding:10,
    fontSize:17,
    fontWeight:"bold"
  },
  selectedButton: {
    // backgroundColor: 'pink', // Change to red for selected button
    // padding:15,
    fontSize:17,
    fontWeight:"normal",
    color: '#9e0203',   // Selected text color
    fontWeight:"bold"
  },
  image:{ 
    width:width, 
    height:height*10/100,
  },
  imagecontainer:{ 
    margin: 5, 
    marginHorizontal: 10 ,
  },
  imgemaincontainer:{ 
    width:width*25/100,
    height: height*20/100,
  
  },
 subimage: { 
  width: '100%', 
  height: '100%', 
  borderRadius: 2,
 }
});

export default styles;
