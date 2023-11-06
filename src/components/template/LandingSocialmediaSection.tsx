import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, H2, H3, Paragraph, XGroup } from 'tamagui'
import { Activity, Airplay, FileStack, Github, Linkedin, Milestone } from '@tamagui/lucide-icons'

const LandingSocialmediaSection = () => {
  return (
    <View style={{minHeight:300, width:660, maxWidth:"88%",marginHorizontal:"auto",alignItems:"center",marginTop:40}}>
     <H3 style={{paddingRight:"0%", fontSize:34,fontWeight:600, textAlign:"center",lineHeight:70,textShadow:"#000 2px 0 15px"}}>Connect with Me Online:</H3>
      
      <Paragraph fontSize={18} margin={18} style={{textAlign:"center"}}>
      Stay updated and get in touch through my social media channels. Follow me on various platforms to stay informed about my work, industry insights, and upcoming projects.      </Paragraph>
      <XGroup size="$6" $gtSm={{ size: '$5' }}>
        <XGroup.Item>
          <Button size="$6" icon={Github}>
          Github
          </Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button size="$6" icon={Linkedin}>
          Linkedin
          </Button>
        </XGroup.Item>
        
        <XGroup.Item>
          <Button size="$6" icon={FileStack}>
          Stack Overflow
          </Button>
        </XGroup.Item>
      </XGroup>


    </View>
  )
}

export default LandingSocialmediaSection

const styles = StyleSheet.create({})