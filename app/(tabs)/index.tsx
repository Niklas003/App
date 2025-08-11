import { fetchFlightplan } from "@/api/fetchFlightPlan";
import { HelloWave } from "@/components/HelloWave";
import { AirportSearch } from "@/components/Home/AirportSearch";
import { CurrentFlight } from "@/components/Home/CurrentFlight";
import { HomeHeader } from "@/components/Home/HomeHeader";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { corporateColor, corporateLightWhite } from "@/constants/Colors";
import { FlightPlanFormat } from "@/constants/Remote";
import { getUTCTimeString } from "@/helper/getUTCTimeString";
import BasicFlight from "@/types/BasicFlight";
import { BlurView } from "expo-blur";
import { useEffect, useState } from "react";
import { Platform, StyleSheet } from "react-native";

export default function HomeScreen() {
  const [isInputFocus, setIsInputFocus] = useState<boolean>(false);
  const [recentFlightplan, setRecentFlightplan] = useState<any>(null);
  const [currentFlight, setCurrentFlight] = useState<BasicFlight | undefined>();

  useEffect(() => {
    fetchFlightplan("720073", FlightPlanFormat.JSON).then((res) => {
      setRecentFlightplan(res);
    });
  }, []);

  useEffect(() => {
    setCurrentFlight({
      origin: recentFlightplan?.origin.icao_code,
      destination: recentFlightplan?.destination.icao_code,
      departUTC: getUTCTimeString(recentFlightplan?.times.est_out),
      arrivalUTC: getUTCTimeString(recentFlightplan?.times.est_in),
      aircraft: recentFlightplan?.aircraft.icao_code,
      callsign: recentFlightplan?.atc.callsign,
    });
  }, [recentFlightplan]);

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: corporateLightWhite, dark: corporateColor }}
      headerImage={<HomeHeader />}
    >
      <AirportSearch isFocus={(focus) => setIsInputFocus(focus)} />
      {isInputFocus && <BlurView intensity={2000} tint="default" style={styles.inputBlurOverlay} />}
      <ThemedView style={styles.currentFlight}>
        <ThemedText type="lightSubtitle" style={styles.currentFlightTitle}>
          Aktueller Flug
        </ThemedText>
        <CurrentFlight flight={currentFlight} />
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
          </ThemedText>
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
  currentFlightTitle: {
    marginBottom: 16,
  },
});
