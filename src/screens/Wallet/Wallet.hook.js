
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { NUMBER } from '../../constants/constants';
import { Ar, En } from '../../constants/localization';
import { useEffect, useState } from 'react';
import { GetWallateAmount } from '../../api/axios.api';
import { WallateAmount } from '../../utils/asyncStorage';

const UseWalletHook = () => {
  const navigation = useNavigation();
  const lang = useSelector(state => state?.lang?.data);
  const userId = useSelector(state => state?.userData?.data?.id)
  const [amount, setAmount] = useState('')
  const [isLoadding, setIsLoading] = useState(false)
  const Str = lang == NUMBER.num0 ? Ar : En

  useEffect(() => {
    getWallteAmount()
  }, [navigation])

  const getWallteAmount = async () => {
    const data = `{ getWalletRemainingTotal(id : ${userId}) }`
    setIsLoading(true)
    try {
      const rep = await GetWallateAmount(data, lang)
      if (rep) {
        setAmount(rep?.data?.data?.getWalletRemainingTotal)
        const strAmount = JSON.stringify(rep?.data?.data?.getWalletRemainingTotal)
        WallateAmount(strAmount)
        setIsLoading(false)
      } else {
        console.log("ERT AMOUNT INNER ERROR :::::::: ", rep?.data)
      }
    } catch (error) {
      console.log("GERT AMOUNT ERROR :::::: ", error)
      setIsLoading(false)
    }
  }

  const data = {
    ManageWallet: lang == NUMBER.num1 ? "Manage Wallet" : "إدارة المحفظة",
    WalletDetails: lang == NUMBER.num1 ? "Wallet Details" : "تفاصيل المحفظة",
    YourWalletBalance: lang == NUMBER.num1 ? "Your Wallet Balance" : "رصيد محفظتك",
    AddAmount: lang == NUMBER.num1 ? "AddAmount" : "أضف المبلغ",
    EnterAmount: lang == NUMBER.num1 ? "Enter Amount" : "أدخل المبلغ",
    AddAmounttoWallet: lang == NUMBER.num1 ? "Add Amount to Wallet" : "إضافة مبلغ إلى المحفظة"
  }



  return {
    navigation,
    lang,
    data,
    Str,
    amount
  };
};

export default UseWalletHook

