import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, H2, H3, Paragraph, XGroup } from 'tamagui'
import { Activity, Airplay, Milestone } from '@tamagui/lucide-icons'

const LandingAboutSection = () => {
  return (
    <View style={{minHeight:300, width:660, maxWidth:"88%",marginHorizontal:"auto",alignItems:"center"}}>
     <H3 style={{paddingRight:"0%", fontSize:34,fontWeight:600, textAlign:"center",lineHeight:70,textShadow:"#000 2px 0 15px"}}>About me:</H3>
      
      <Paragraph fontSize={18} margin={18} style={{textAlign:"center"}}>
      With over a decade of dedicated experience in software development and a strong foundation in project management, I've consistently delivered innovative solutions while staying up-to-date with industry trends.
      </Paragraph>
      <XGroup size="$6" $gtSm={{ size: '$5' }}>
        <XGroup.Item>
          <Button size="$6" icon={Activity}>
            Skills
          </Button>
        </XGroup.Item>
        <XGroup.Item>
          <Button size="$6" icon={Airplay}>
          Experiences
          </Button>
        </XGroup.Item>
        
        <XGroup.Item>
          <Button size="$6" icon={Milestone}>
          Journy
          </Button>
        </XGroup.Item>
      </XGroup>


    </View>
  )
}

export default LandingAboutSection

const styles = StyleSheet.create({})