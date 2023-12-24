import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image, YStack } from 'tamagui'
import { router } from 'expo-router';
import { Asset,useAssets } from 'expo-asset';

const MenuLogo =  () => {
  // let logoImage =require ('@assets/logo.png');
  // const [assets, error] = useAssets([require('assets/logo.png')]);
  const [assets, error] = useAssets([require('@assets/logo.png')]);

  return (
    <View>
      { assets != undefined ?  <Image
      source={{
        uri: assets[0].uri,
        width: 120,
        height: 120,
      }}
      onPress={() => router.push("/")}
    //   style={{cursor:'pointer',
    // }}
    /> : null }
    </View>
  )
}

export default MenuLogo

const styles = StyleSheet.create({})