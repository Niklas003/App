import { Image } from 'expo-image';
import { Dimensions, StyleSheet, useColorScheme, View } from "react-native";
import { ThemedText } from "./ThemedText";


export function ParallaxHeader({ title, children }: { title: string, children?: React.ReactNode }) {
    const colorScheme = useColorScheme();
    const logoImage = colorScheme === 'dark' ? require('@/assets/images/eagle_img_logo_light.png') : require('@/assets/images/eagle_img_logo.png')
    return (
        <>
            <Image
                source={require('@/assets/images/Cockpit_night.png')}
                style={styles.reactLogo} />
            <ThemedText style={styles.titleText} type='title'>{title}</ThemedText>
            <Image source={logoImage} style={styles.imageLogo} />
            <View style={styles.childrenContainer}>
                {children}
            </View>
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
    childrenContainer: {
        position: 'absolute',
        zIndex: -1,
        top: 80,
        left: 0,
    }
});