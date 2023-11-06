import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { H3, H4 } from 'tamagui'
import { HStack } from '@/components/template/HStack'

const MenuItems = () => {
  return (
    <HStack justifyContent={"flex-start"} padding={'$2'}  backgroundColor={'$backgroundTransparent'}>
      <H4>Services</H4>
      <H4>Contact</H4>
    </HStack>
  )
}

export default MenuItems

const styles = StyleSheet.create({})