import { useNavigation } from "@react-navigation/native"
import { useSelector } from "react-redux"
import { NUMBER } from "../../constants/constants"
import { ColorSpace } from "react-native-reanimated"

const useProductDetails = () => {
    const lang = useSelector(state => state.lang)
    const navigation = useNavigation()

    const color = [1, 2, 3, 4]
    const Str = lang?.data == NUMBER.num1 ?
        {
            color: "Color : ",
            Size: "Size :",
            ProductCode: "Product Code :13884",
            MensPajamaSetShortTs: "Mens Pajama Set Short T-Shirt...",
            QNT : "QNT :",
            Addtocard:"Add to card"

        } :
        {
            color: "لون :",
            Size: " مقاس :",
            ProductCode: "رمز المنتج :13884",
            MensPajamaSetShortTs: "طقم بيجامة رجالي تي شيرت قصير...",
            QNT : "كيو إن تي :",
            Addtocard  : "اضف الى البطاقة"
        }

    const sliderData = [
        "https://img.freepik.com/premium-photo/plain-white-t-shirt-mockup-photo_398492-234.jpg",
        "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8yOV9waG90b19vZl9hX3doaXRlX3Qtc2hpcnRfb25fYV9taW5pbWFsX2JhY2tncl9lNzEyYTMzOC0wZmU5LTRjMTYtOWFkMC0wMDAyMDEyZWRlNDlfMS5qcGc.jpg",
        "https://img.freepik.com/premium-photo/white-cotton-t-shirt-mockup-tshirt-mockup_677428-1081.jpg",
        "https://images.unsplash.com/photo-1618677603286-0ec56cb6e1b5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8d2hpdGUlMjB0JTIwc2hpcnR8ZW58MHx8MHx8fDA%3D",
        "https://img.freepik.com/premium-photo/fashion-dress-mockup-white-tshirt-blank_856660-6512.jpg",
        "https://img.freepik.com/premium-photo/blank-white-tshirts-mockup-hanging-white-wall-front-view-template-custom-design-generative-ai_117038-6478.jpg"
    ]

    return {
        lang,
        navigation,
        sliderData,
        color,
        Str
    }
}

export default useProductDetails

