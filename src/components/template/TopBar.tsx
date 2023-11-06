import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HStack } from '@/components/template/HStack'
import MenuItems from '@/components/template/MenuItems'
import MenuLogo from '@/components/template/MenuLogo'
import MenuAvatar from '@/components/template/MenuAvatar'

const TopBar = () => {
  return (
    <HStack height={"$8"} width={"100%"} position='absolute' top={0} left={0} zIndex={9} backgroundColor={'$backgroundTransparent'}>
      <MenuLogo />
      {/* <MenuItems /> */}
      <MenuAvatar />
    </HStack>
  )
}

export default TopBar

const styles = StyleSheet.create({})