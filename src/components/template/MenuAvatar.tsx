import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Avatar, Button } from 'tamagui'
import { Menu } from '@tamagui/lucide-icons'
import { SheetMenu } from '@/components/template/SheetMenu'

const MenuAvatar = () => {
const [open, setOpen] = useState(false)

  return (<><Button onPress={()=>{setOpen(!open)}} icon={<Menu size="$2" />}></Button><SheetMenu open={open} setOpen={setOpen} /></>)
}

export default MenuAvatar

const styles = StyleSheet.create({})