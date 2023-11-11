import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Group, H2, H3, Paragraph, XGroup, useMedia } from 'tamagui'
import { Activity, Airplay, Milestone } from '@tamagui/lucide-icons'
import { Image } from 'tamagui'

const LandingAboutSection = () => {
    const media = useMedia()

  return (
    <View style={{marginTop:-90,paddingTop:90,minHeight:740, width:"100%", marginHorizontal:"auto",alignItems:"center", backgroundColor:"black"}}>
    
    <Image
      source={{
        uri: '/assets/laptop.png',
        width: 800,
        height: 740,
      }}
      
      // minHeight="100%"
      // maxHeight="100%"
      maxWidth="100vw"
      minWidth="100%"
      width="100vw"
      style={{      
        // maxWidth:"100%",
        opacity:0.2,
        position:"absolute",
        right:0,
        zIndex:-1,
        
        top:-0,
      }}
    />
     <H3 style={{paddingRight:"0%", fontSize:34,fontWeight:600, textAlign:"center",lineHeight:70,textShadow:"#000 2px 0 15px"}}>About me:</H3>
      
      <Paragraph fontSize={22} margin={18} style={{textAlign:"center",width:"70%",maxWidth:770,textShadow:"#000 2px 0 15px"}}>
      With over a decade of dedicated experience in software development and a strong foundation in project management, I've consistently delivered innovative solutions while staying up-to-date with industry trends.
      </Paragraph>

      <Group orientation={media.xs ? "vertical":"horizontal"}>
        <Group.Item>
        <Button size="$6" icon={Activity}>
            Skills
          </Button>
        </Group.Item>
        <Group.Item>
        <Button size="$6" icon={Airplay}>
          Experiences
          </Button>
        </Group.Item>
        <Group.Item>
        <Button size="$6" icon={Milestone}>
          Journy
          </Button>
        </Group.Item>
      </Group>
</View>
  )
}

export default LandingAboutSection

const styles = StyleSheet.create({})