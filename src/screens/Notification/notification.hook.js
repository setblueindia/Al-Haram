import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { NotificationAIP, ReadNotification, getCount } from "../../api/axios.api"
import { addNotificationCount } from "../../redux/Slices/AddNotificationCount"
import { useIsFocused } from "@react-navigation/native"


const useNotificationHook = () => {
  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state?.userData)
  const [notiFicationID, setNotificationID] = useState(userData?.data?.id)
  const [loadding, setLoadding] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [messText, setMesageText] = useState('')
  const [moreData, setMoreData] = useState(false)
  const [lotti, setLotti] = useState(false)
  const [currePage, setCurrentPage] = useState(0)
  const [data, setData] = useState([])
  const flatListRef = useRef(null);
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [nID, setNID] = useState([])
  const dispatch = useDispatch()
  const [refreshing, setRefreshing] = useState(false);
  const focus = useIsFocused()



  useEffect(() => {
    GETNotificationAPI()
  }, [focus])

  const onPress = async (sid, sindex) => {
    const dataQurry =
      `  {
      updateNotificationReadById(id : ${sid}){
        status
        message
      }
    }`
    try {
      setShowModal(true)
      const response = await ReadNotification(dataQurry, lang)
      setLoadding(false)
      if (response) {
        const read = true
        GETNotificationAPI()
        setLoadding(false)
        getUnReadeNotifications()

        setNID([...nID, sindex])
      }
    } catch (error) {
      console.log("ERRORS ===> ", error)
      setLoadding(false)
    }
  }
  const GETNotificationAPI = async (refreshingg) => {
    currePage < 1 && setLoadding(true)
    currePage >= 1 && setMoreData(true)
    const nextPage = currePage + 1
    const sData =
      ` {
      getNotificationHistoryByCustomerId(
        id : ${notiFicationID ? notiFicationID : userData?.data?.id},
        pageSize: ${10},
        curPage: ${refreshingg ? 1 : nextPage}
      )
      {
        id
        customer_id
        message
        type
        notification_view
        store
        creation_time
        total
      }
    } `



    if (userData?.data?.id) {
      try {
        const response = await NotificationAIP(sData, lang)
        setLotti(false)
        if (response?.status == "200") {
          refreshingg ?
            setData(response?.data?.data?.getNotificationHistoryByCustomerId) :
            setData([...data, ...response?.data?.data?.getNotificationHistoryByCustomerId])
          response?.data?.data?.getNotificationHistoryByCustomerId?.map((item) => {
          })
          if (response?.data?.data?.getNotificationHistoryByCustomerId?.length <= 0 && nextPage == 1) {
            setLoadding(false)
            setLotti(true)
          } else {
            setLotti(false)
          }
          setCurrentPage(nextPage)
          setMoreData(false)
        } else {
          setLoadding(false)
          setLotti(true)
        }
        setLoadding(false)
      } catch (error) {
        setData(undefined)
        setLotti(true)
        setLoadding(false)
        console.log("RESPONSE ERROR ::::::::::: ", error)
      }
    } else {
      setLoadding(false)
      setLotti(true)
      console.log("::::::::: User data not found :::::::")
    }
  }

  const handleScroll = (event) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    if (offsetY > 300) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  const getUnReadeNotifications = async () => {
    const qrry = `{
      getUnReadNotificationCountByCustomerId(customer_id : ${userData?.data?.id}){
          status 
          count
          message
      }
  } `
    if (userData?.data?.id) {
      try {
        const result = await getCount(qrry, lang?.data)
        if (result?.data?.data?.getUnReadNotificationCountByCustomerId?.status) {
          dispatch(addNotificationCount(result?.data?.data?.getUnReadNotificationCountByCustomerId?.count))
        }
      } catch (error) {
        console.log("GET NOTIFICATIONS COUNT :::::: ", error)
      }
    } else {
      console.log("USER ID NOT FOUND ::::::: ")
    }
  }

  const scrollToTop = () => {
    flatListRef.current?.scrollToOffset({
      offset: 0,
      animated: true,
    });
  };


  const onRefresh = () => {
    setRefreshing(true);
    const refreshingg = true
    GETNotificationAPI(refreshingg)
    setTimeout(() => {
      setRefreshing(false);
      setCurrentPage(1)
    }, 2000);
  };

  return {
    data,
    lang,
    loadding,
    setLoadding,
    onPress,
    setShowModal,
    showModal,
    setMesageText,
    GETNotificationAPI,
    moreData,
    messText,
    userData,
    lotti,
    setLotti,
    handleScroll,
    scrollToTop,
    flatListRef,
    showScrollToTop,
    nID,
    refreshing,
    onRefresh
  }
}

export default useNotificationHook

