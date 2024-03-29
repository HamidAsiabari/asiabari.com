import React from 'react'
import { H1, H2, H3, useMedia } from 'tamagui'
import {View,  StyleSheet, Button, Dimensions } from 'react-native';
import { HStack } from '@/components/template/HStack';
import { Image } from 'tamagui'
import { Asset,useAssets } from 'expo-asset';

const LandingHeroSection = () => {
  const media = useMedia()
  const [assets, error] = useAssets([require('@assets/personal.jpg')]);

    return (<HStack  style={styles.container} >
      { assets != undefined ?   <Image
        source={{width: 600,
        height: 800,
        uri: assets[0].uri,
      }}
      minHeight="100%"
      maxHeight="100%"
      maxWidth="100%"
      // minWidth="100%"
      width="100%"
      style={{      
        maxWidth:"100%",
        // opacity:0.9,
        position:"absolute",
        left:0,
        top:-90,
      }}
      /> : null }
    <View style={{paddingTop:media.xs? 0 :100,width:"100%" , justifyContent:"center"}} >
    <H1 style={{paddingRight:media.xs? 0 :"20%", fontSize:media.xs? 60:84,fontWeight:700, textAlign:media.xs? "left":"right",lineHeight:80,textShadow:"#000 2px 0 15px"}} >Hamid</H1>
    <H1 style={{paddingRight:media.xs? 0 :"10%", fontSize:media.xs? 60:84,fontWeight:700, textAlign:media.xs? "left":"right",lineHeight:120,textShadow:"#000 2px 0 15px"}}>Asiabari</H1>
     <H3 style={{paddingRight:media.xs? 0 :"1%", fontSize:media.xs? 22:34,fontWeight:600, textAlign:media.xs? "left":"right",lineHeight:70,textShadow:"#000 2px 0 15px"}}>Senior Software Developer</H3>
     <H3 style={{paddingRight:media.xs? 0 :"1%", fontSize:media.xs? 22:34,fontWeight:600, textAlign:media.xs? "left":"right",textShadow:"#000 2px 0 15px"}}>Software Project Manager</H3>
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
  