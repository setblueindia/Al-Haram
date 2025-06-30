import { useNavigation } from "@react-navigation/native"
import { useState } from "react"
import { useSelector } from "react-redux"


const useWriteHook = () => {
    const lang = useSelector(state => state.lang.data)
    const navigation = useNavigation()
    const [showPhotoOpations, setShowPhotoOpations] = useState(false)
    return {
        navigation,
        lang,
        showPhotoOpations, setShowPhotoOpations
    }
}

export default useWriteHook

