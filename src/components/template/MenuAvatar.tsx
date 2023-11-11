import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Button, YStack } from 'tamagui'
import { Menu } from '@tamagui/lucide-icons'
import { SheetMenu } from '@/components/template/SheetMenu'
import { useSegments } from 'expo-router'

const MenuAvatar = () => {
  
const [open, setOpen] = useState(false)

const segments = useSegments()

useEffect(() => {
  setOpen(false)

}, [segments])
  return (< >
  < >
    <Button 
      backgroundColor={'$backgroundTransparent'}
      onPress={()=>{
        setOpen(!open)}} 
      icon={<Menu size="$2" />}>
      </Button>
     </>
     <SheetMenu open={open} setOpen={setOpen} /></>)
}

export default MenuAvatar

const styles = StyleSheet.create({})