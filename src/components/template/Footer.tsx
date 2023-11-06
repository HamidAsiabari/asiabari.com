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

const Footer = () => {
    return (<VStack>
        <HStack maxHeight={"$21"}>
          <FooterAbout />
          <FooterMenu />
        </HStack>
        <Copyright /> </VStack>
      )
}

export default Footer

const styles = StyleSheet.create({})