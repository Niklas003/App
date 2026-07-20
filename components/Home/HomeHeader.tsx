import { Image } from 'expo-image';
import React from 'react';
import { Dimensions, StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "../ThemedText";

export function HomeHeader() {
      const colorScheme = useColorScheme();
    const logoImage = colorScheme === 'dark'? require('@/assets/images/eagle_img_logo_light.png') : require('@/assets/images/eagle_img_logo.png')
    return (
        <>
            <Image
                source={require('@/assets/images/eagle_title.png')}
                style={styles.reactLogo} />
            <ThemedText style={styles.titleText} type='lightTitle'>Dein nächster <ThemedText type='title'>Flug</ThemedText></ThemedText>
            <Image source={logoImage}
                style={styles.imageLogo} />
        </>
    )
}

const styles = StyleSheet.create({
  reactLogo: {
    height: 250,
    width: Dimensions.get('window').width,
    bottom: 0,
    left: 0,
    position: 'absolute',
    opacity: .4
  },
  imageLogo: {
    position: 'absolute',
    opacity: 1,
    height: 40,
    width: 40,
    left: Dimensions.get('window').width / 2 - 20,
    top: 30
  },
  titleText: {
    paddingTop: 120,
    paddingLeft: 20,
  },
});