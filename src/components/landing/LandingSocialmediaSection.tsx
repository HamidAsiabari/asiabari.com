import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Group, H2, H3, Paragraph, XGroup, useMedia } from 'tamagui'
import {  FileStack, Github, Linkedin, Milestone } from '@tamagui/lucide-icons'
import { Image } from 'tamagui'

const LandingSocialmediaSection = () => {
  const media = useMedia()

  return (
    <View 
    style={{
      minHeight:700,
      paddingTop:100,
      marginHorizontal:"auto",
      alignItems:"center",
      marginTop:40
    }}>
    <Image
      source={{
        uri: '/assets/social.png'
      }}
      minHeight="100vh"
      maxWidth="100vw"
      width="100vw"
      minWidth="100vw"
      style={{      
        opacity:0.2,
        position:"absolute",
        zIndex:-1,
        
        top:-0,
      }}
    />
    
     <H3 style={{paddingRight:"0%", fontSize:34,fontWeight:600, textAlign:"center",lineHeight:70,textShadow:"#000 2px 0 15px"}}>Connect with Me Online:</H3>
      <Paragraph fontSize={21} margin={34} style={{textAlign:"center",maxWidth:600,fontWeight:600,lineHeight:36}}>
      Stay updated and get in touch through my social media channels. Follow me on various platforms to stay informed about my work, industry insights, and upcoming projects.      </Paragraph>
      <Group orientation={media.xs ? "vertical":"horizontal"}>
        <Group.Item>
        <Button size="$6" icon={Linkedin}>
          Linkedin
          </Button>
        </Group.Item>
        <Group.Item>
        <Button size="$6" icon={Github}>
          Github
          </Button>
        </Group.Item>
        <Group.Item>
        <Button size="$6" icon={FileStack}>
          Stack Overflow
          </Button>
        </Group.Item>
      </Group>
    </View>
  )
}

export default LandingSocialmediaSection

const styles = StyleSheet.create({})