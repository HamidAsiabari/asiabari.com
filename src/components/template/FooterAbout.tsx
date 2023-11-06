import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuLogo from '@/components/template/MenuLogo'
import { VStack } from '@/components/template/VStack'
import { H2, H3, H4, H5, Paragraph } from 'tamagui'

const FooterAbout = () => {
  return (
    <VStack  maxWidth={"$21"}>
    <MenuLogo />
    <H5>FooterAbout</H5>
    <Paragraph >
        It explicitly doesn't inherit your theme color or other font properties.
    </Paragraph>
    <Paragraph>Email: </Paragraph>
    <Paragraph>Phone: </Paragraph>
    <Paragraph>Address: </Paragraph>
    </VStack>
  )
}

export default FooterAbout

const styles = StyleSheet.create({})