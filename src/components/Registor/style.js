import {StyleSheet,Dimensions} from 'react-native';
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    logo: {
      alignItems: 'center',
      width: 140,
      height: 80,
      marginHorizontal: 20,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderBottomWidth: 1,
      borderBottomColor: 'lightgray',
      paddingHorizontal: 15,
      marginBottom: 20,
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    icon: {
      width: 30,
      height: 30,
      marginRight: 20,
    },
    input: {
      flex: 1,
      height: 40,
      fontSize: 16,
    },
    tabContent: {
      width: '100%',
      backgroundColor: '#fff',
    },
    signInButton: {
      backgroundColor: 'red',
      paddingVertical: 7,
      borderRadius: 28,
      alignItems: 'center',
      marginBottom: 20,
      width: '95%',
      marginHorizontal: 10,
      marginVertical: 20,
    },
    signInButtonText: {
      color: '#fff',
      fontSize: 18,
    },
  });
  

export default styles;