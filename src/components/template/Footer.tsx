import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { HStack } from '@/components/template/HStack'
import MenuLogo from '@/components/template/MenuLogo'
import MenuItems from '@/components/template/MenuItems'
import MenuAvatar from '@/components/template/MenuAvatar'
import FooterMenu from '@/components/template/FooterMenu'
import FooterAbout from '@/components/template/FooterAbout'
import { VStack } from '@/components/template/VStack'
import Copyright from '@/components/template/Copyright'
import MyStack from '@/components/MyStack'
import { useMedia } from 'tamagui'

const Footer = () => {
  const media = useMedia()

    return (<VStack px="$1"  $gtXs={{ px: '$10' }}> 
        <MyStack  maxHeight={"$21"}>
          <FooterAbout />
          <FooterMenu />
        </MyStack>
        
        <Copyright /> 
        </VStack>
      )
}

export default Footer

const styles = StyleSheet.create({})