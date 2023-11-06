import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'tamagui'

const MenuLogo = () => {
  return (
    <View>
       <Image
      source={{
        uri: 'assets/logo.png',
        width: 120,
        height: 120,
      }}
    />
    </View>
  )
}

export default MenuLogo

const styles = StyleSheet.create({})