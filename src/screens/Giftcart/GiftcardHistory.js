import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ALINE, COLOR} from '../../constants/style';
import CommanHeader from '../../components/ComanHeader';
import {useSelector} from 'react-redux';
import {ResponsiveSize} from '../../utils/utils';
import {EXTRASTR, NUMBER} from '../../constants/constants';
import {useNavigation} from '@react-navigation/native';
import {SARICON} from '../../assests';
import {GetGiftCardHistory} from '../../api/axios.api';
import CusLoader from '../../components/CustomLoader';

const GiftcardHistory = ({route}) => {
  const lang = useSelector(state => state.lang?.data);
  const navigation = useNavigation();
  const [data, setData] = useState([]);
  const [totalPage, setToatalPage] = useState(0);
  const [page, setPage] = useState(1);
  const [isLoadding, setIsloadding] = useState(false);
  const [moreData, setMoreData] = useState(false);
  const pageSize = 10;

  const giftCardCode = route?.params?.id;

  useEffect(() => {
    getDate();
  }, []);

  const getDate = async () => {
    page == 1 && setIsloadding(true);
    page > 1 && setMoreData(true);
    const params = `
    {
    getHistoryByGiftcardCode(
        giftcard_code: "${giftCardCode}",
        pageSize:${pageSize},
        curPage:${page}
    ) {
        success        
        data{
            order_increment_id
            giftcard_code
            transaction_amount
            remaining_balance
            transaction_type
            bought_from            
        }        
        message
        total_count
    }
}
    `;
    try {
      const res = await GetGiftCardHistory(params, lang);

      if (res?.data?.data?.getHistoryByGiftcardCode?.success) {
        setData([...data, ...res?.data?.data?.getHistoryByGiftcardCode?.data]);
        setToatalPage(res?.data?.data?.getHistoryByGiftcardCode?.total_count);
        const isNextPage =
          res?.data?.data?.getHistoryByGiftcardCode?.total_count / pageSize >=
          page;
        isNextPage && setPage(page + 1);
        setIsloadding(false);
        setMoreData(false);
      } else {
        console.log('Get Gift cardt hiostory API error :::', res);
        setIsloadding(false);
        setMoreData(false);
      }
    } catch (error) {
      console.log('Get Gift cardt hiostory error :::', error);
      setIsloadding(false);
      setMoreData(false);
    }
  };

  return (
    <View style={styles.mainView}>
      <CommanHeader
        name={
          lang == NUMBER.num0
            ? 'سجل معاملات بطاقة الهدايا'
            : 'Giftcard Transaction History'
        }
        lang={lang}
        navigation={navigation}
      />
      <Text style={styles.GiftCardNumber}>
        {`${lang == NUMBER.num0 ? 'بطاقة هدايا' : 'Giftcard'} #${giftCardCode}`}
      </Text>

      <FlatList
        data={data}
        style={styles.flatList}
        onEndReached={() => {
          page <= totalPage / pageSize && getDate();
        }}
        ListFooterComponent={() => {
          return (
            <View style={styles.BottomLoader}>
              {moreData && (
                <ActivityIndicator size={'small'} color={COLOR.primaray} />
              )}
            </View>
          );
        }}
        renderItem={({item, index}) => {
          return (
            <View key={index}>
              <View style={[styles.conatinerVIew]}>
                <View
                  style={[
                    styles.lineView,
                    {backgroundColor: '#f2f8e9'},
                    lang == NUMBER.num0 && {
                      flexDirection: ALINE.rowreverse,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.firstText,
                      lang == NUMBER.num0 && {
                        textAlign: EXTRASTR.right,
                      },
                    ]}>
                    {lang == NUMBER.num0 ? 'رقم الطلب : ' : 'Order ID :'}
                  </Text>
                  <Text style={styles.secondText}>
                    {item?.order_increment_id}
                  </Text>
                </View>
                <View
                  style={[
                    styles.lineView,
                    {marginTop: ResponsiveSize(10)},
                    lang == NUMBER.num0 && {
                      flexDirection: ALINE.rowreverse,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.firstText,
                      lang == NUMBER.num0 && {
                        textAlign: EXTRASTR.right,
                      },
                    ]}>
                    {lang == NUMBER.num0
                      ? 'مبلغ العملية : '
                      : 'Transaction Amount  :'}
                  </Text>
                  <View style={styles.SARView}>
                    <Image style={styles.SARIcon} source={SARICON} />
                    <Text
                      style={[
                        styles.secondText,
                        {
                          marginLeft: ResponsiveSize(8),
                        },
                      ]}>
                      {item?.transaction_amount}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.lineView,
                    {marginTop: ResponsiveSize(10)},
                    lang == NUMBER.num0 && {
                      flexDirection: ALINE.rowreverse,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.firstText,
                      lang == NUMBER.num0 && {
                        textAlign: EXTRASTR.right,
                      },
                    ]}>
                    {lang == NUMBER.num0 ? 'النوع : ' : 'Type :'}
                  </Text>
                  <Text style={styles.secondText}>
                    {item?.transaction_type ? item?.transaction_type : '-'}
                  </Text>
                </View>
                <View
                  style={[
                    styles.lineView,
                    {marginTop: ResponsiveSize(10)},
                    lang == NUMBER.num0 && {
                      flexDirection: ALINE.rowreverse,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.firstText,
                      lang == NUMBER.num0 && {
                        textAlign: EXTRASTR.right,
                      },
                    ]}>
                    {lang == NUMBER.num0 ? 'تم الشراء من : ' : 'Bought From : '}
                  </Text>
                  <Text style={styles.secondText}>
                    {item?.bought_from ? item?.bought_from : '-'}
                  </Text>
                </View>

                <View
                  style={[
                    styles.lineView,
                    {
                      marginTop: ResponsiveSize(10),
                      borderBottomWidth: 0,
                    },
                    lang == NUMBER.num0 && {
                      flexDirection: ALINE.rowreverse,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.firstText,
                      lang == NUMBER.num0 && {
                        textAlign: EXTRASTR.right,
                      },
                    ]}>
                    {lang == NUMBER.num0
                      ? 'الرصيد المتبقي : '
                      : 'Remaining Balance : '}
                  </Text>

                  <View style={styles.SARView}>
                    <Image style={styles.SARIcon} source={SARICON} />
                    <Text
                      style={[
                        styles.secondText,
                        {
                          marginLeft: ResponsiveSize(8),
                        },
                      ]}>
                      {item?.remaining_balance ? item?.remaining_balance : '0'}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={{marginTop: ResponsiveSize(20)}} />
            </View>
          );
        }}
      />

      {isLoadding && (
        <View style={styles.CusLoader}>
          <CusLoader />
        </View>
      )}
    </View>
  );
};

export default GiftcardHistory;

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: COLOR.white,
  },
  conatiner: {
    flex: 1,
    padding: ResponsiveSize(20),
  },
  conatinerVIew: {
    width: '100%',
    borderWidth: ResponsiveSize(3),
    borderColor: '#DCDCDC',
    borderRadius: ResponsiveSize(10),
    padding: ResponsiveSize(20),
    backgroundColor: '#fff',
  },
  lineView: {
    flexDirection: ALINE.row,
    justifyContent: ALINE.spaceBetween,
    borderBottomWidth: 1,
    paddingVertical: ResponsiveSize(10),
    borderColor: '#DCDCDC',
  },
  firstText: {
    color: '#33691F',
    fontSize: ResponsiveSize(20),
  },
  secondText: {
    color: COLOR.primaray,
    fontSize: ResponsiveSize(20),
  },
  SARIcon: {
    height: ResponsiveSize(20),
    width: ResponsiveSize(20),
    tintColor: COLOR.primaray,
  },
  GiftCardNumber: {
    textAlign: ALINE.center,
    marginTop: ResponsiveSize(20),
    marginBottom: ResponsiveSize(10),
    fontSize: ResponsiveSize(25),
    color: COLOR.primaray,
  },
  SARView: {
    flexDirection: ALINE.row,
    alignItems: ALINE.center,
  },
  CusLoader: {
    height: '100%',
    width: '100%',
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
    position: 'absolute',
  },
  flatList: {
    paddingHorizontal: ResponsiveSize(20),
  },
  BottomLoader: {
    width: '100%',
    height: ResponsiveSize(100),
    justifyContent: ALINE.center,
    alignItems: ALINE.center,
  },
});
