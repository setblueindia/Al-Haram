// import React from 'react';
// import {View, StyleSheet, ActivityIndicator} from 'react-native';

// import axios from 'axios';
// import CryptoJS from 'crypto-js';
// import queryString from 'query-string';
// import publicIP from 'react-native-public-ip';

// import {WebView} from 'react-native-webview';

// import {config} from './config';
// import { NAVIGATION } from '../../constants/constants';

// class PaymentScreen extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       baseURL: '',
//       visible: true,
//     };
//   }

//   componentDidMount() {
//     const {route, navigation} = this.props;
//     const requestData = route.params?.request || {};
//     const sourcePage = route.params?.source || {};

//     this.setState({source: sourcePage}, () => {
//       this.processPayment(requestData)
//         .then(response => {
//           if (response.status == 'redirect') {
//             this.setState({baseURL: response.redirectUrl});
//           } else if (response.status == 'success') {
//             // go back with success before processing payment
//             this.returnResponse({status: 'success', data: {}});
//           }
//         })
//         .catch(err => {
//           // go back with error
//           this.returnResponse({status: 'error', error: err});
//         });
//     });
//   }

//   onPaymentComplete = processUrl => {
//     this.processResponse(processUrl)
//       .then(response => {
//         //go back with success after processing payment
//         this.returnResponse({status: 'success', data: response});
//       })
//       .catch(err => {
//         //go back with error
//         this.returnResponse({status: 'error', error: err});
//       });
//   };

//   // returnResponse = data => {
//   //   const {navigation} = this.props;
//   //   setTimeout(() => {
//   //     if (
//   //       navigation.state &&
//   //       navigation.state.params &&
//   //       navigation.state.params.callBack
//   //     ) {
//   //       navigation.state.params.callBack(data);
//   //     }
//   //   }, 500);
//   //   navigation.pop();
//   // };
//   returnResponse = data => {
//     const {navigation} = this.props;
//     setTimeout(() => {
//       if (
//         navigation.state &&
//         navigation.state.params &&
//         navigation.state.params.callBack
//       ) {
//         navigation.state.params.callBack(data);
//       }
//     }, 500);
//     navigation.navigate(NAVIGATION.ResponseScreen, {response: data});
//   };

//   processPayment = requestData => {
//     return new Promise((resolve, reject) => {
//       const txn_details =
//         '' +
//         requestData['trackid'] +
//         '|' +
//         config.terminalId +
//         '|' +
//         config.password +
//         '|' +
//         config.key +
//         '|' +
//         requestData['amount'] +
//         '|' +
//         config.currency +
//         '';
//       const hash = CryptoJS.SHA256(txn_details).toString();

//       publicIP()
//         .then(ip => {
//           let fields = {};
//           if (
//             requestData['action'] == '1' ||
//             requestData['action'] == '4' ||
//             requestData['action'] == '13'
//           ) {
//             if (
//               requestData['trackid'] == '' ||
//               requestData['customerEmail'] == '' ||
//               requestData['first_name'] == '' ||
//               requestData['last_name'] == '' ||
//               requestData['country'] == '' ||
//               requestData['amount'] == ''
//             ) {
//               reject('Required data for payment missing.');
//             } else {
//               if (
//                 requestData['cardToken'] != '' ||
//                 requestData['cardToken'] != null
//               ) {
//                 fields = {
//                   trackid: requestData['trackid'],
//                   transid: requestData['trackid'],
//                   terminalId: config.terminalId,
//                   customerEmail: requestData['customerEmail'],
//                   customerName:
//                     requestData['first_name'] + ' ' + requestData['last_name'],
//                   action: requestData['action'],
//                   instrumentType: 'DEFAULT',
//                   merchantIp: ip,
//                   password: config.password,
//                   currency: config.currency,
//                   country: requestData['country'],
//                   amount: requestData['amount'],
//                   udf2: requestData['udf2'],
//                   udf3: requestData['udf3'],

//                   udf1: '1234',
//                   udf5: '1234',
//                   udf4: '1234',
//                   tokenizationType: requestData['tokenizationType'],
//                   cardToken: requestData['cardToken'],
//                   requestHash: hash,
//                 };
//               } else {
//                 fields = {
//                   trackid: requestData['trackid'],
//                   transid: requestData['trackid'],
//                   terminalId: config.terminalId,
//                   customerEmail: requestData['customerEmail'],
//                   customerName:
//                     requestData['first_name'] + ' ' + requestData['last_name'],
//                   action: requestData['action'],
//                   instrumentType: 'DEFAULT',
//                   merchantIp: ip,
//                   password: config.password,
//                   currency: config.currency,
//                   country: requestData['country'],
//                   amount: requestData['amount'],
//                   udf2: requestData['udf2'],
//                   udf3: requestData['udf3'],

//                   udf1: '1234',
//                   udf5: '1234',
//                   udf4: '1234',
//                   requestHash: hash,
//                 };
//               }
//             }
//           } else if (requestData['action'] == '12') {
//             if (
//               requestData['trackid'] == '' ||
//               requestData['customerEmail'] == '' ||
//               requestData['first_name'] == '' ||
//               requestData['last_name'] == '' ||
//               requestData['country'] == '' ||
//               requestData['amount'] == ''
//             ) {
//               reject('Required data for payment missing.');
//             } else {
//               if (requestData['tokenOperation'] == 'A') {
//                 fields = {
//                   trackid: requestData['trackid'],
//                   transid: requestData['trackid'],
//                   terminalId: config.terminalId,
//                   instrumentType: 'DEFAULT',
//                   customerEmail: requestData['customerEmail'],
//                   customerName:
//                     requestData['first_name'] + ' ' + requestData['last_name'],
//                   action: requestData['action'],
//                   merchantIp: ip,
//                   password: config.password,
//                   currency: config.currency,
//                   country: requestData['country'],
//                   amount: requestData['amount'],
//                   udf2: requestData['udf2'],
//                   udf3: requestData['udf3'],

//                   udf1: '1234',
//                   udf5: '1234',
//                   udf4: '1234',
//                   tokenizationType: requestData['tokenizationType'],
//                   tokenOperation: requestData['tokenOperation'],
//                   requestHash: hash,
//                 };
//               } else {
//                 if (requestData['cardToken'] == '') {
//                   reject('Required data for tokenization missing.');
//                 } else {
//                   fields = {
//                     trackid: requestData['trackid'],
//                     transid: requestData['trackid'],
//                     terminalId: config.terminalId,
//                     customerEmail: requestData['customerEmail'],
//                     customerName:
//                       requestData['first_name'] +
//                       ' ' +
//                       requestData['last_name'],
//                     action: requestData['action'],
//                     instrumentType: 'DEFAULT',
//                     merchantIp: ip,
//                     password: config.password,
//                     currency: config.currency,
//                     country: requestData['country'],
//                     amount: requestData['amount'],
//                     udf2: requestData['udf2'],
//                     udf3: requestData['udf3'],

//                     udf1: '1234',
//                     udf5: '1234',
//                     udf4: '1234',
//                     cardToken: requestData['cardToken'],
//                     tokenizationType: requestData['tokenizationType'],
//                     tokenOperation: requestData['tokenOperation'],
//                     requestHash: hash,
//                   };
//                 }
//               }
//             }
//           } else {
//             if (
//               requestData['trackid'] == '' ||
//               requestData['customerEmail'] == '' ||
//               requestData['first_name'] == '' ||
//               requestData['last_name'] == '' ||
//               requestData['country'] == '' ||
//               requestData['amount'] == ''
//             ) {
//               reject('Required data for payment missing.');
//             } else {
//               if (
//                 requestData['cardToken'] != '' ||
//                 requestData['cardToken'] != null
//               ) {
//                 fields = {
//                   trackid: requestData['trackid'],
//                   transid: requestData['tranid'],
//                   terminalId: config.terminalId,
//                   instrumentType: 'DEFAULT',
//                   customerEmail: requestData['customerEmail'],
//                   customerName:
//                     requestData['first_name'] + ' ' + requestData['last_name'],
//                   action: requestData['action'],
//                   merchantIp: ip,
//                   password: config.password,
//                   currency: config.currency,
//                   country: requestData['country'],
//                   amount: requestData['amount'],
//                   udf2: requestData['udf2'],
//                   udf3: requestData['udf3'],

//                   udf1: '1234',
//                   udf5: '1234',
//                   udf4: '1234',
//                   tokenizationType: requestData['tokenizationType'],
//                   cardToken: requestData['cardToken'],
//                   requestHash: hash,
//                 };
//               } else {
//                 fields = {
//                   trackid: requestData['trackid'],
//                   transid: requestData['tranid'],
//                   terminalId: config.terminalId,
//                   instrumentType: 'DEFAULT',
//                   customerEmail: requestData['customerEmail'],
//                   customerName:
//                     requestData['first_name'] + ' ' + requestData['last_name'],
//                   action: requestData['action'],
//                   merchantIp: ip,
//                   password: config.password,
//                   currency: config.currency,
//                   country: requestData['country'],
//                   amount: requestData['amount'],
//                   udf2: requestData['udf2'],
//                   udf3: requestData['udf3'],

//                   udf1: '1234',
//                   udf5: '1234',
//                   udf4: '1234',
//                   requestHash: hash,
//                 };
//               }
//             }
//           }

//           const data = JSON.stringify(fields);

//           axios
//             .request({
//               method: 'post',
//               url: config.requestUrl,
//               headers: {
//                 'Content-Type': 'application/json',
//               },
//               data: data,
//             })
//             .then(response => {
//               const urldecode = response.data;
//               if (urldecode['payid'] != undefined) {
//                 let url = '';
//                 if (urldecode['targetUrl'].includes('?')) {
//                   url =
//                     urldecode['targetUrl'] + 'paymentid=' + urldecode['payid'];
//                 } else {
//                   url =
//                     urldecode['targetUrl'] + '?paymentid=' + urldecode['payid'];
//                 }

//                 resolve({status: 'redirect', redirectUrl: url});
//               } else {
//                 if (urldecode['result'] != undefined) {
//                   if (urldecode['result'] == 'Successful') {
//                     resolve({status: 'success'});
//                   } else {
//                     let responsecode = '';
//                     if (urldecode['responsecode'] != undefined) {
//                       responsecode = urldecode['responsecode'];
//                     } else {
//                       responsecode = urldecode['responseCode'];
//                     }

//                     const json = {
//                       result: '1',
//                       responsecode: responsecode,
//                       description: responsecode,
//                     };

//                     const json_data = JSON.stringify(json);
//                     console.log(json_data);

//                     reject(
//                       'Something went wrong! Response Code - ' + responsecode,
//                     );
//                   }
//                 }
//               }
//             })
//             .catch(function (error) {
//               console.log(error);
//               reject('Something went wrong!');
//             });
//         })
//         .catch(error => {
//           console.log(error);
//           reject('Something went wrong detecting ip!');
//         });
//     });
//   };

//   processResponse = responseUrl => {
//     return new Promise((resolve, reject) => {
//       const responseObject = queryString.parse(responseUrl);

//       const requestHash =
//         '' +
//         responseObject['TranId'] +
//         '|' +
//         config.key +
//         '|' +
//         responseObject['ResponseCode'] +
//         '|' +
//         responseObject['amount'] +
//         '';
//       const txn_details1 =
//         '' +
//         responseObject['TrackId'] +
//         '|' +
//         config.terminalId +
//         '|' +
//         config.password +
//         '|' +
//         config.key +
//         '|' +
//         responseObject['amount'] +
//         '|' +
//         config.currency +
//         '';

//       const hash = CryptoJS.SHA256(requestHash).toString();
//       const hash1 = CryptoJS.SHA256(txn_details1).toString();

//       if (hash == responseObject['responseHash']) {
//         const apifields = {
//           trackid: responseObject['TrackId'],
//           terminalId: config.terminalId,
//           action: '10',
//           merchantIp: '',
//           password: config.password,
//           currency: config.currency,
//           transid: responseObject['TranId'],
//           amount: responseObject['amount'],
//           udf5: 'Test5',
//           udf3: 'Test3',
//           udf4: 'Test4',
//           udf1: 'Test1',
//           udf2: 'Test2',
//           requestHash: hash1,
//         };

//         const apifields_string = JSON.stringify(apifields);

//         axios
//           .request({
//             method: 'post',
//             url: config.requestUrl,
//             headers: {
//               'Content-Type': 'application/json',
//             },
//             data: apifields_string,
//           })
//           .then(response => {
//             const urldecodeapi = response.data;
//             let inquiryResponsecode = '';

//             if (urldecodeapi['responseCode'] != undefined) {
//               inquiryResponsecode = urldecodeapi['responseCode'];
//             } else {
//               inquiryResponsecode = urldecodeapi['responsecode'];
//             }

//             const inquirystatus = urldecodeapi['result'];

//             if (
//               inquirystatus === 'Approved' ||
//               responseObject['ResponseCode'] === inquiryResponsecode
//             ) {
//               if (
//                 responseObject['cardToken'] != undefined &&
//                 responseObject['maskedPAN'] != undefined &&
//                 responseObject['maskedPAN'] != '' &&
//                 responseObject['cardToken'] != '' &&
//                 responseObject['cardToken'] != null &&
//                 responseObject['cardToken'] != 'null'
//               ) {
//                 resolve({
//                   type: 'receiptToken',
//                   amount: responseObject['amount'],
//                   tranid: responseObject['TranId'],
//                   status: 'Successful',
//                   cardtoken: responseObject['cardToken'],
//                   maskedno: responseObject['maskedPAN'],
//                 });
//               } else {
//                 resolve({
//                   type: 'receipt',
//                   amount: responseObject['amount'],
//                   tranid: responseObject['TranId'],
//                   status: responseObject['Result'],
//                 });
//               }
//             } else {
//               reject('Something went wrong!!! Data Tamper!!!!!!!');
//             }
//           })
//           .catch(error => {
//             console.log(error);
//             reject('Something went wrong processing response!');
//           });
//       } else {
//         reject('Hash Mismatch!');
//       }
//     });
//   };

//   render() {
//     const {baseURL, visible} = this.state;

//     return (
//       <>
//         {baseURL.length > 0 && (
//           <WebView
//             source={{uri: baseURL}}
//             scalesPageToFit={true}
//             sharedCookiesEnabled={true}
//             automaticallyAdjustContentInsets={true}
//             startInLoadingState={true}
//             renderError={() => null}
//             renderLoading={() => null}
//             onLoadStart={() => this.setState({visible: true})}
//             onLoadEnd={() => this.setState({visible: false})}
//             onShouldStartLoadWithRequest={event => {
//               if (event.url.startsWith(config.responseUrl)) {
//                 this.onPaymentComplete(event.url);
//                 return false;
//               } else {
//                 return true;
//               }
//             }}
//           />
//         )}
//         {visible && (
//           <View
//             style={{
//               width: '100%',
//               height: '100%',
//               position: 'absolute',
//               backgroundColor: 'transparent',
//               justifyContent: 'center',
//               alignItems: 'center',
//             }}>
//             <ActivityIndicator size={'large'} />
//           </View>
//         )}
//       </>
//     );
//   }
// }

// export default PaymentScreen;


import React, {useState, useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import axios from 'axios';
import CryptoJS from 'crypto-js';
import publicIP from 'react-native-public-ip';
import {WebView} from 'react-native-webview';
import {config} from './config';
import queryString from 'query-string'; // Ensure you import query-string

const PaymentScreen = ({route, navigation}) => {
  const {request, callBack} = route.params;
  const [baseURL, setBaseURL] = useState('');
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    console.log('Starting payment process with request:', request); // Log request details

    processPayment(request)
      .then(response => {
        console.log('Payment process response:', response); // Log response from payment process

        if (response.status === 'redirect') {
          setBaseURL(response.redirectUrl);
        } else if (response.status === 'success') {
          returnResponse({status: 'success', data: {}});
        }
      })
      .catch(err => {
        console.error('Payment process error:', err); // Log any errors during payment process
        returnResponse({status: 'error', error: err});
      });
  }, []);

  const returnResponse = data => {
    setTimeout(() => {
      if (callBack) {
        callBack(data);
      } else {
        console.error('callBack function is not defined');
      }
    }, 500);
    navigation.pop();
  };

  const processPayment = requestData => {
    return new Promise((resolve, reject) => {
      const txn_details = `${requestData.trackid}|${config.terminalId}|${config.password}|${config.key}|${requestData.amount}|${config.currency}`;
      const hash = CryptoJS.SHA256(txn_details).toString();
      console.log('Generated hash for payment request:', hash); // Log the hash

      publicIP()
        .then(ip => {
          let fields = createFields(requestData, hash, ip);

          console.log('Payment request fields:', fields); // Log the fields being sent

          axios
            .post(config.requestUrl, JSON.stringify(fields), {
              headers: {'Content-Type': 'application/json'},
            })
            .then(response => handleResponse(response, resolve, reject))
            .catch(error => {
              console.error('Error sending payment request:', error); // Log errors during the request
              reject('Something went wrong with payment!');
            });
        })
        .catch(error => {
          console.error('Error detecting IP:', error); // Log errors during IP detection
          reject('Error detecting IP!');
        });
    });
  };

  const createFields = (requestData, hash, ip) => {
    const fields = {
      trackid: requestData.trackid,
      terminalId: config.terminalId,
      customerEmail: requestData.customerEmail,
      customerName: `${requestData.first_name} ${requestData.last_name}`,
      action: requestData.action,
      instrumentType: 'DEFAULT',
      merchantIp: ip,
      password: config.password,
      currency: config.currency,
      country: requestData.country,
      amount: requestData.amount,
      udf1: '1234',
      udf2: requestData.udf2 || '',
      udf3: requestData.udf3 || '',
      udf4: '1234',
      udf5: '1234',
      requestHash: hash,
    };

    if (requestData.action === '12') {
      fields.tokenizationType = requestData.tokenizationType || '';
      fields.cardToken = requestData.cardToken || '';
    }

    return fields;
  };

  const handleResponse = (response, resolve, reject) => {
    const urldecode = response.data;
    console.log('Payment response data:', urldecode); // Log the response data

    if (urldecode.payid !== undefined) {
      let url = urldecode.targetUrl.includes('?')
        ? `${urldecode.targetUrl}&paymentid=${urldecode.payid}`
        : `${urldecode.targetUrl}?paymentid=${urldecode.payid}`;
      resolve({status: 'redirect', redirectUrl: url});
    } else if (urldecode.result !== undefined) {
      if (urldecode.result === 'Successful') {
        resolve({status: 'success'});
      } else {
        reject(`Payment failed: ${urldecode.responseCode}`);
      }
    }
  };

  const onPaymentComplete = processUrl => {
    console.log('Payment complete with URL:', processUrl); // Log the URL when payment completes

    processResponse(processUrl)
      .then(response => returnResponse({status: 'success', data: response}))
      .catch(err => returnResponse({status: 'error', error: err}));
  };

  const processResponse = responseUrl => {
    return new Promise((resolve, reject) => {
      const responseObject = queryString.parse(responseUrl);
      const requestHash = `${responseObject.TranId}|${config.key}|${responseObject.ResponseCode}|${responseObject.amount}`;
      const hash = CryptoJS.SHA256(requestHash).toString();
      console.log('Generated hash for response:', hash); // Log the generated hash for response

      if (hash === responseObject.responseHash) {
        const apifields = {
          trackid: responseObject.TranId,
          terminalId: config.terminalId,
          action: '10',
          merchantIp: '',
          password: config.password,
          currency: config.currency,
          transid: responseObject.TranId,
          amount: responseObject.amount,
          udf5: 'Test5',
          udf3: 'Test3',
          udf4: 'Test4',
          udf1: 'Test1',
          udf2: 'Test2',
          requestHash: hash,
        };

        console.log('Inquiry request fields:', apifields); // Log fields for inquiry request

        axios
          .post(config.requestUrl, JSON.stringify(apifields), {
            headers: {'Content-Type': 'application/json'},
          })
          .then(response => {
            const urldecodeapi = response.data;
            console.log('Inquiry response data:', urldecodeapi); // Log inquiry response data

            const inquiryResponsecode =
              urldecodeapi.responseCode || urldecodeapi.responsecode;
            const inquirystatus = urldecodeapi.result;

            if (
              inquirystatus === 'Approved' ||
              responseObject.ResponseCode === inquiryResponsecode
            ) {
              resolve({
                type: responseObject.cardToken ? 'receiptToken' : 'receipt',
                amount: responseObject.amount,
                tranid: responseObject.TranId,
                status:
                  inquirystatus === 'Approved'
                    ? 'Successful'
                    : responseObject.Result,
                cardtoken: responseObject.cardToken,
                maskedno: responseObject.maskedPAN,
              });
            } else {
              reject('Payment inquiry failed!');
            }
          })
          .catch(error => {
            console.error('Error processing inquiry:', error); // Log errors during the inquiry
            reject('Error processing inquiry!');
          });
      } else {
        reject('Hash mismatch!');
      }
    });
  };

  return (
    <View style={{flex: 1}}>
      {baseURL ? (
        <WebView
          style={{flex: 1}}
          source={{uri: baseURL}}
          onNavigationStateChange={navState => {
            if (!navState.url.includes(config.returnUrl)) {
              return;
            }
            setVisible(true);
            onPaymentComplete(navState.url);
          }}
        />
      ) : (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PaymentScreen;

