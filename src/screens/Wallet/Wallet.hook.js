
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { NUMBER } from '../../constants/constants';
import { Ar, En } from '../../constants/localization';

const UseWalletHook = () => {

  const navigation = useNavigation();
  const lang = useSelector(state => state?.lang?.data);

  const Str = lang == NUMBER.num0 ? Ar : En

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
    Str
  };
};

export default UseWalletHook

