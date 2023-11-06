import { View, Text } from 'react-native'
import React from 'react'
import { H4, H5 } from 'tamagui'
import { HStack } from '@/components/template/HStack'

const Copyright = () => {
  return (
    <HStack maxHeight={'$6'} justifyContent='center'>
      <H5>©Asiabari.com 2023 All Rights Reserved</H5>
    </HStack>
  )
}

export default Copyright