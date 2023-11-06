import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { H3, H4 } from 'tamagui'
import { HStack } from '@/components/template/HStack'
import FooterMenuItems from '@/components/template/FooterMenuItems'

const FooterMenu = () => {
  return (
    <HStack padding={'$6'}>
      <FooterMenuItems />
      <FooterMenuItems />
    </HStack>
  )
}

export default FooterMenu

const styles = StyleSheet.create({})