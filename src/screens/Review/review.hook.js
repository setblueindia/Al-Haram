import { useNavigation } from "@react-navigation/native"
import { useState } from "react"


const ReviewHook = () => {
    const navigation = useNavigation()
    const [showPopp, setShowPopp] = useState(false)
    return {
        navigation,
        showPopp, setShowPopp
    }
}

export default ReviewHook

