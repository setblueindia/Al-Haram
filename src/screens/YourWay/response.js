// import React from 'react';
// import {
//   Text,
//   View,
//   StyleSheet,
//   ActivityIndicator,
//   TouchableOpacity,
// } from 'react-native';

// import moment from 'moment';

// class ResponseScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       type: '',
//       tranid: '',
//       status: '',
//       cardtoken: '',
//       maskedno: '',
//       amount: '',
//     };
//   }

//   componentDidMount() {
//     const {route} = this.props;
//     const responseData = route.params?.response || {};
//     console.log('Response Data:', responseData); // Check if this logs the expected data

//     if (Object.keys(responseData).length > 0) {
//       this.setState(responseData);
//     } else {
//       this.setState({type: 'success'});
//     }
//   }

//   render() {
//     const {type, tranid, status, cardtoken, maskedno, amount} = this.state;

//     return (
//       <View style={styles.container}>
//         {type == 'receiptToken' && (
//           <View>
//             <Text style={styles.txtHeader}>{'Invoice Order #' + tranid}</Text>
//             <Text style={styles.txtDetail}>{'Transaction is ' + status}</Text>
//             <Text style={styles.txtDetail}>
//               {'Order Date: ' + moment().format('YYYY-MM-DD HH:mm:ss')}
//             </Text>
//             <Text style={styles.txtHeader}>{'Token Details'}</Text>
//             <Text style={styles.txtDetail}>{'Card Token: ' + cardtoken}</Text>
//             <Text style={styles.txtDetail}>{'Masked Pan: ' + maskedno}</Text>
//             <Text style={styles.txtHeader}>{'Order Summary'}</Text>
//             <Text style={styles.txtDetail}>{'Total: ' + amount}</Text>
//           </View>
//         )}
//         {type == 'receipt' && (
//           <View>
//             <Text style={styles.txtHeader}>{'Invoice Order #' + tranid}</Text>
//             <Text style={styles.txtDetail}>{'Transaction is ' + status}</Text>
//             <Text style={styles.txtDetail}>
//               {'Order Date: ' + moment().format('YYYY-MM-DD HH:mm:ss')}
//             </Text>
//             <Text style={styles.txtHeader}>{'Order Summary'}</Text>
//             <Text style={styles.txtDetail}>{'Total: ' + amount}</Text>
//           </View>
//         )}
//         {type == 'success' && (
//           <View>
//             <Text style={styles.txtDetail}>{'Transaction is successful'}</Text>
//           </View>
//         )}
//         {/* {type.length == 0 && <ActivityIndicator size={'large'} />} */}
//         <TouchableOpacity
//           activeOpacity={0.8}
//           style={styles.btnAction}
//           onPress={() => {
//             this.props.navigation.navigate('Home');
//           }}>
//           <Text style={styles.txtAction}>{'New Transaction'}</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignSelf: 'stretch',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
//   txtHeader: {
//     marginTop: 30,
//     paddingVertical: 10,
//     textAlign: 'center',
//     fontWeight: '700',
//     fontSize: 14,
//   },
//   txtDetail: {
//     paddingVertical: 5,
//     textAlign: 'center',
//     fontSize: 13,
//   },
//   btnAction: {
//     height: 35,
//     borderRadius: 5,
//     marginTop: 40,
//     marginHorizontal: 50,
//     backgroundColor: '#3576be',
//     justifyContent: 'center',
//     alignSelf: 'stretch',
//     alignItems: 'center',
//   },
//   txtAction: {
//     fontSize: 14,
//     fontWeight: '600',
//     color: '#ffffff',
//   },
// });

// export default ResponseScreen;


import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import moment from 'moment';
import PropTypes from 'prop-types';
import { NAVIGATION } from '../../constants/constants';

const ResponseScreen = ({ route, navigation }) => {
  const [type, setType] = useState('loading');
  const [tranid, setTranid] = useState('');
  const [status, setStatus] = useState('');
  const [cardtoken, setCardtoken] = useState('');
  const [maskedno, setMaskedno] = useState('');
  const [amount, setAmount] = useState('');

  useEffect(() => {
    const responseData = route.params?.response || {};

    setType(responseData.type || 'success');
    setTranid(responseData.tranid || '');
    setStatus(responseData.status || '');
    setCardtoken(responseData.cardtoken || '');
    setMaskedno(responseData.maskedno || '');
    setAmount(responseData.amount || '');
  }, [route.params?.response]);

  return (
    <View style={styles.container}>
      {type === 'loading' && <ActivityIndicator size={'large'} />}
      {type === 'receiptToken' && (
        <View>
          <Text style={styles.txtHeader}>{'Invoice Order #' + tranid}</Text>
          <Text style={styles.txtDetail}>{'Transaction is ' + status}</Text>
          <Text style={styles.txtDetail}>{'Order Date: ' + moment().format('YYYY-MM-DD HH:mm:ss')}</Text>
          <Text style={styles.txtHeader}>{'Token Details'}</Text>
          <Text style={styles.txtDetail}>{'Card Token: ' + cardtoken}</Text>
          <Text style={styles.txtDetail}>{'Masked Pan: ' + maskedno}</Text>
          <Text style={styles.txtHeader}>{'Order Summary'}</Text>
          <Text style={styles.txtDetail}>{'Total: ' + amount}</Text>
        </View>
      )}
      {type === 'receipt' && (
        <View>
          <Text style={styles.txtHeader}>{'Invoice Order #' + tranid}</Text>
          <Text style={styles.txtDetail}>{'Transaction is ' + status}</Text>
          <Text style={styles.txtDetail}>{'Order Date: ' + moment().format('YYYY-MM-DD HH:mm:ss')}</Text>
          <Text style={styles.txtHeader}>{'Order Summary'}</Text>
          <Text style={styles.txtDetail}>{'Total: ' + amount}</Text>
        </View>
      )}
      {type === 'success' && (
        <View>
          <Text style={styles.txtDetail}>{'Transaction is successful'}</Text>
        </View>
      )}
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnAction}
        onPress={() => navigation.navigate(NAVIGATION.Done)}
      >
        <Text style={styles.txtAction}>{'New Transaction'}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  txtHeader: {
    marginTop: 30,
    paddingVertical: 10,
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 14,
  },
  txtDetail: {
    paddingVertical: 5,
    textAlign: 'center',
    fontSize: 13,
  },
  btnAction: {
    height: 35,
    borderRadius: 5,
    marginTop: 40,
    marginHorizontal: 50,
    backgroundColor: '#3576be',
    justifyContent: 'center',
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  txtAction: {
    fontSize: 14,
    fontWeight: '600',
    color: '#ffffff',
  },
});

ResponseScreen.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      response: PropTypes.object,
    }),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default ResponseScreen;
