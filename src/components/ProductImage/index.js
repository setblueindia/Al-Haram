import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FastImage from 'react-native-fast-image'

const ProductImage = ({ style, url, onLoad }) => {
    return (
        <FastImage
            style={style}
            source={{ uri: url, priority: FastImage.priority.low, }}
            onLoadStart={() => { onLoad(true) }}
            onLoadEnd={() => { onLoad(false) }}
            windowSize={5}
            initialNumToRender={3}
            maxToRenderPerBatch={5}
            removeClippedSubviews={true}
        />
    )
}

export default ProductImage

const styles = StyleSheet.create({})