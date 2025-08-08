import { HelloWave } from "@/components/HelloWave";
import { AirportSearch } from "@/components/Home/AirportSearch";
import { CurrentFlight } from "@/components/Home/CurrentFlight";
import { HomeHeader } from "@/components/Home/HomeHeader";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { corporateColor, corporateLightWhite } from "@/constants/Colors";
import BasicFlight from "@/types/BasicFlight";
import { BlurView } from "expo-blur";
import { useState } from "react";
import { Platform, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const mockCurrentFlight: BasicFlight = {
    origin: "EDDB",
    destination: "HUEN",
    departUTC: "1205Z",
    arrivalUTC: "2006Z",
    aircraft: "A39N",
    callsign: "EGB5NK"
  }
  return (
    <ParallaxScrollView headerBackgroundColor={{ light: corporateLightWhite, dark: corporateColor }} headerImage={<HomeHeader />}>
      <AirportSearch isFocus={(focus) => setIsInputFocus(focus)} />
      {isInputFocus && <BlurView intensity={2000} tint="default" style={styles.inputBlurOverlay} />}
      <ThemedView style={styles.currentFlight}>
        <ThemedText type="lightSubtitle" style={styles.currentFlightTitle}>Aktueller Flug</ThemedText>
        <CurrentFlight flight={mockCurrentFlight} />
      </ThemedView>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it out</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes. Press{" "}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: "cmd + d",
              android: "cmd + m",
              web: "F12",
            })}
          </ThemedText>{" "}
          to open developer tools.
        </ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 2: Explore</ThemedText>
        <ThemedText>{`Tap the Explore tab to learn more about what's included in this starter app.`}</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
        <ThemedText>
          {`When you're ready, run `}
          <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{" "}
          <ThemedText type="defaultSemiBold">app</ThemedText> to{" "}
          <ThemedText type="defaultSemiBold">app-example</ThemedText>.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  inputBlurOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
  },
  currentFlight: {
    marginTop: -30,
  },
  currentFlightTitle:{
    marginBottom: 16,
  }
});
