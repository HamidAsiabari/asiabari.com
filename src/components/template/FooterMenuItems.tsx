import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { H3, H5, ListItem, YGroup } from 'tamagui'
import { Cloud, Moon, Star, Sun } from '@tamagui/lucide-icons'

const FooterMenuItems = () => {
  return (
    <View style={{paddingTop:50}}>
      <H5>FooterMenuItems</H5>
      <YGroup   alignSelf="center"  width={"$18"} size="$4">
      <YGroup.Item>
        <ListItem hoverTheme icon={Star} title="Star" subTitle="Twinkles" />
      </YGroup.Item>
      <YGroup.Item>
        <ListItem hoverTheme icon={Moon}>
          Moon
        </ListItem>
      </YGroup.Item>
      <YGroup.Item>
        <ListItem hoverTheme icon={Sun}>
          Sun
        </ListItem>
      </YGroup.Item>
      <YGroup.Item>
        <ListItem hoverTheme icon={Cloud}>
          Cloud
        </ListItem>
      </YGroup.Item>
    </YGroup>
    </View>
  )
}

export default FooterMenuItems

const styles = StyleSheet.create({})