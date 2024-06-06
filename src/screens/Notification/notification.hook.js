import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NotificationAIP, ReadNotification } from "../../api/axios.api"
import { useNavigation } from "@react-navigation/native"


const useNotificationHook = () => {
  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state?.userData)
  const [notiFicationID , setNotificationID] = useState(userData?.data?.id)
  const [loadding, setLoadding] = useState(false)
  const navigation = useNavigation()
  const [id, setID] = useState()
  const [showModal, setShowModal] = useState(false)
  const [messText, setMesageText] = useState('')
  const [moreData , setMoreData ] = useState(false)
  
  const [currePage , setCurrentPage] = useState(0)
  const [data, setData] = useState([])


  
  useEffect(() => {
    GETNotificationAPI()
  }, [])

  const onPress = async (sid) => {

    setLoadding(true)
    const dataQurry =
      `  {
      updateNotificationReadById(id : ${sid}){
        status
        message
      }
    }`
    try {
      const response = await ReadNotification(dataQurry, lang)
      setLoadding(false)
      if (response) {
        setShowModal(true)
        GETNotificationAPI()
        setLoadding(false)
   
      }
    } catch (error) {
      console.log("ERRORS ===> ", error)
      setLoadding(false)
    }
  }

  const GETNotificationAPI = async () => {
    console.log("Hello ====> ", )
    currePage < 1 &&  setLoadding(true)
    currePage >= 1 && setMoreData(true)
    const nextPage = currePage + 1
    const sData =
      ` {
      getNotificationHistoryByCustomerId(
        id : ${notiFicationID},
        pageSize: ${10},
        curPage: ${nextPage}
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

    try {
      const response = await NotificationAIP(sData, lang)
      // console.log("RESPONSE ::::::::::: ", response?.data?.data?.getNotificationHistoryByCustomerId)

      setData([...data,  ...response?.data?.data?.getNotificationHistoryByCustomerId])
      setCurrentPage(nextPage)
      setMoreData(false)
      setLoadding(false)
    } catch (error) {
      setData(undefined)
      setLoadding(false)
      console.log("RESPONSE ERROR ::::::::::: ", error)
    }

  }



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
    userData
  }
}

export default useNotificationHook

