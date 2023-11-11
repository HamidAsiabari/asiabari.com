import React from 'react'
import { H2 } from 'tamagui'
import {View,  StyleSheet, Button } from 'react-native';
import { Video, ResizeMode } from 'expo-av';

const LandingHeroSection = () => {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState<any>({});
    return (
      <View style={styles.container} >
        <Video
          ref={video}
          style={styles.video}
          source={{
            uri: 'assets/vid.mp4',
          }}
          useNativeControls
          resizeMode={ResizeMode.STRETCH}
          rate={0.1}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        />
        {/* <View style={styles.buttons}>
          <Button
            title={status.isPlaying ? 'Pause' : 'Play'}
            onPress={() =>
              status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
            }
          />
        </View> */}
      </View>
    );
}

export default LandingHeroSection


const styles = StyleSheet.create({
    container: {

    flexDirection: "column",
      height: 500,
      justifyContent: 'flex-start',
      backgroundColor: 'white',
      resizeMode:'cover'
    },
    video: {
    backgroundColor: 'green',
      alignSelf: 'center',
      width: "100%",
      height: "100%",
      position: "absolute",
        top: 0,
        left: 0,
        alignItems: "center",
        bottom: 0,
        right: 0,
        opacity:0.1
    },
    buttons: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
  