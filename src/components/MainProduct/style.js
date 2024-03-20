import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  buttonContainer: {
    top: 20,
    borderRadius: 20,
    overflow: 'hidden',
  },
  header: {
    height: '100%',
  },
  headerred: {
    height: 170,
<<<<<<< HEAD
    backgroundColor: '#8b0000',
  },
  logocontainer: {
    borderColor: '#d3d3d3', 
    borderWidth: 2,
    backgroundColor: "#fff",
    borderRadius: 40,
=======
    // backgroundColor:"red"
    backgroundColor: '#8b0000',
  },
  logocontainer: {
    borderColor: '#d3d3d3', // Set your desired border color
    borderWidth: 2,
    backgroundColor: "#fff",
    borderRadius: 40,
    // width: "75%",
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
    alignSelf: "center",
    marginVertical: 70,
    height: "50%"
  },
  logo: {
    alignItems: 'center',
<<<<<<< HEAD
    width: 140,  
    height: 80,
    marginHorizontal: 20,
=======
    width: 140,  // Set the width of the image as needed
    height: 80,
    marginHorizontal: 20,
    
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  container1: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
<<<<<<< HEAD
=======

>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  input: {
    width: '80%',
    marginBottom: 15,
    padding: 10,
    borderBottomWidth: 1,
  },
  headerContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 500,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  loginButtons: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loginButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
  },
  googleButton: {
<<<<<<< HEAD
    backgroundColor: 'red', 
  },
  facebookButton: {
    backgroundColor: '#1877F2', 
=======
    backgroundColor: 'red', // You can set your desired color
  },
  facebookButton: {
    backgroundColor: '#1877F2', // Facebook blue color
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: 'lightgray',
    height: 50,
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  selectedTab: {
      borderBottomWidth: 2,
    borderColor: '#8b0000',
    paddingVertical: 15,
  },
  tabText: {
    color: 'black',
    fontSize: 17,
  },
 
  icon: {
    width: 20,
    height: 20,
    marginRight: 50,
  },
  input: {
    flex: 1,
    height: 40,
    color: 'black',
  },
  tabContent: {
    width: '100%',
    marginVertical: 30,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
<<<<<<< HEAD
    borderBottomWidth: 1, 
    borderBottomColor: 'lightgray', 
=======
    borderBottomWidth: 1, // Border Bottom Width for the underline
    borderBottomColor: 'lightgray', // Border Bottom Color
    // paddingHorizontal: 15,
>>>>>>> b4abaf8bbbc138a89f03284b22c271b68253ac7c
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
  rememberMeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  rememberMeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  checkboxPlaceholder: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#007bff',
    marginRight: 10,
  },
  checkIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  rememberMeText: {
    fontSize: 14,
    color: '#000',
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