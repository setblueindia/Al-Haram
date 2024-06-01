import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { NotificationAIP, ReadNotification } from "../../api/axios.api"
import { useNavigation } from "@react-navigation/native"


const useNotificationHook = () => {
  const lang = useSelector(state => state?.lang?.data)
  const userData = useSelector(state => state?.userData?.data?.id)
  const [loadding, setLoadding] = useState(false)
  const navigation = useNavigation()
  const [id, setID] = useState()
  const [showModal, setShowModal] = useState(false)
  const [messText, setMesageText] = useState('')
  const [data, setData] = useState([
    // {
    //   id: 1,
    //   like: false
    // },
    // {
    //   id: 2,
    //   like: false
    // },
    // {
    //   id: 3,
    //   like: false
    // },
    // {
    //   id: 4,
    //   like: false
    // },
    // {
    //   id: 5,
    //   like: false
    // },
  ])

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
        showModal == false && GETNotificationAPI()
        setLoadding(false)
      }
    } catch (error) {
      console.log("ERRORS ===> ", error)
      setLoadding(false)
    }
  }

  const GETNotificationAPI = async () => {
    setLoadding(true)
    const data =
      ` {
      getNotificationHistoryByCustomerId(
        id : ${userData},
        pageSize: ${10},
        curPage: ${1}
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
      const response = await NotificationAIP(data, lang)
      // console.log("RESPONSE ::::::::::: ", response?.data?.data?.getNotificationHistoryByCustomerId)
      setData(response?.data?.data?.getNotificationHistoryByCustomerId)
      setLoadding(false)
    } catch (error) {
      setLoadding(false)
      console.log("RESPONSE ERROR ::::::::::: ", error)
    }

  }

  useEffect(() => {
    GETNotificationAPI()
  }, [])


  return {
    data,
    lang,
    loadding,
    setLoadding,
    onPress,
    setShowModal,
    showModal,
    setMesageText,
    messText
  }
}

export default useNotificationHook

