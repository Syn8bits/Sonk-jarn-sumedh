import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'

const {width,height} = Dimensions.get('screen')

const SlideItem = ({item}) => {
  return (
    <View style={styles.container}>
      <Image source={item.img} resizeMode='contain' style={styles.image}/>
    </View>
  )
}

export default SlideItem

const styles = StyleSheet.create({
  container:{
    flex :1,
    width,
    height: 400,
    alignItems: 'center',
  },
  image:{
    flex :1,
    width: '100%',
    
  },
  content:{
    flex:0.4,
    alignItems: 'center',
  }
})