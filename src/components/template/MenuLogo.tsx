import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from 'tamagui'
import { router } from 'expo-router';
const MenuLogo = () => {
  let logoImage =require ('@assets/logo.png');

  return (
    <View>
       <Image
      source={{
        uri: '/assets/logo.png',
        width: 120,
        height: 120,
      }}
      onPress={() => router.push("/")}
      style={{cursor:'pointer'}}
    />
    </View>
  )
}

export default MenuLogo

const styles = StyleSheet.create({})