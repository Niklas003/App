import { Colors, corporateColor, corporateLightWhite } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import BasicFlight from "@/types/BasicFlight";
import * as Haptics from 'expo-haptics';
import { Button } from "expo-router/react-navigation";
import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedCardView } from "../ThemedCardView";
import { ThemedText } from "../ThemedText";
import { FlightProgress } from "../ui/FlightProgress";

export function CurrentFlight({flight, error, refreshFlightPlan}:{flight: BasicFlight | undefined, error: string | null, refreshFlightPlan: () => void}) {
  const currentScheme = useColorScheme();
  return (
    <ThemedCardView style={styles.card}>
      {flight ? (
      <><TouchableOpacity style={styles.flex} onPress={() => Haptics.notificationAsync(
          Haptics.NotificationFeedbackType.Warning
        )}>
          <View>
            <ThemedText type="defaultBold">{flight.origin}</ThemedText>
            <ThemedText>{flight.departUTC}</ThemedText>
          </View>
          <FlightProgress scheme={currentScheme} />
          <View>
            <ThemedText type="defaultBold">{flight.destination}</ThemedText>
            <ThemedText>{flight.arrivalUTC}</ThemedText>
          </View>
        </TouchableOpacity><Button onPressIn={() => refreshFlightPlan()} style={currentScheme === "dark" ? styles.refreshButton : styles.refreshButtonLight} color={currentScheme === "dark" ? corporateColor : corporateLightWhite}>Refresh</Button></>  
    ):(
        error ? <ThemedText>{error}</ThemedText> :
        <ThemedText>Loading</ThemedText>
      )}
    </ThemedCardView>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 16,
    paddingHorizontal: 10,
    borderRadius: 5,
    filter: "drop-shadow(0px 0px 20px #0000003b)",
    marginBottom: 20,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  refreshButton: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: Colors.light.background,
  },
  refreshButtonLight: {
    marginTop: 20,
    borderRadius: 5,
    backgroundColor: Colors.dark.background,
  }
});
