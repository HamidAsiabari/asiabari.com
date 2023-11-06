import React from 'react'
import { H1, H2, H3 } from 'tamagui'
import {View,  StyleSheet, Button, Dimensions } from 'react-native';
import { HStack } from '@/components/template/HStack';
import { Image } from 'tamagui'

const LandingHeroSection = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState<any>({});
    return (<HStack  style={styles.container} >
       <Image
      source={{
        uri: 'assets/personal.JPG',
        width: 600,
        height: "100%",
      }}
      style={{      
        maxWidth:"100%",
        // opacity:0.9,
        position:"absolute",
        left:0,
        top:-90,
      }}
    />
    <View style={{paddingTop:200,width:"100%"}} >
    <H1 style={{paddingRight:"20%", fontSize:84,fontWeight:700, textAlign:"right",lineHeight:80,textShadow:"#000 2px 0 15px"}} >Hamid</H1>
    <H1 style={{paddingRight:"10%", fontSize:84,fontWeight:700, textAlign:"right",lineHeight:120,textShadow:"#000 2px 0 15px"}}>Asiabari</H1>
     <H3 style={{paddingRight:"1%", fontSize:34,fontWeight:600, textAlign:"right",lineHeight:70,textShadow:"#000 2px 0 15px"}}>Senior Software Developer</H3>
     <H3 style={{paddingRight:"1%", fontSize:34,fontWeight:600, textAlign:"right",textShadow:"#000 2px 0 15px"}}>Software Project Manager</H3>
     </View>

       </HStack>);
}

export default LandingHeroSection


const styles = StyleSheet.create({
    container: {
      height: 900,
      width:"100%",
      justifyContent: 'center',
      backgroundColor: 'black',
    },
    
  });
  