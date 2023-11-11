import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { H3, H4, useMedia } from 'tamagui'
import { HStack } from '@/components/template/HStack'
import FooterMenuItems from '@/components/template/FooterMenuItems'
import MyStack from '@/components/MyStack'

const FooterMenu = () => {
  const media = useMedia()

  return (
    <MyStack isVertical={media.sm} >
      <FooterMenuItems />
      <FooterMenuItems />
    </MyStack>
  )
}

export default FooterMenu

const styles = StyleSheet.create({})