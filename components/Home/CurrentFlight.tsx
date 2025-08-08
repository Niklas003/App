import { fetchFlightplan } from "@/api/fetchFlightPlan";
import { FlightPlanFormat } from "@/constants/Remote";
import { useColorScheme } from "@/hooks/useColorScheme.web";
import BasicFlight from "@/types/BasicFlight";
import { useEffect, useState } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedCardView } from "../ThemedCardView";
import { ThemedText } from "../ThemedText";
import { FlightProgress } from "../ui/FlightProgress";

export function CurrentFlight({flight}:{flight: BasicFlight}) {
  const currentScheme = useColorScheme();
    const [recentFlightplan, setRecentFlightplan] = useState<any>(null);

  useEffect(() => {
    fetchFlightplan('720073', FlightPlanFormat.JSON).then((res) => {
      setRecentFlightplan(res);
    });
  }, []);
  
  return (
    <ThemedCardView style={styles.card}>
      <TouchableOpacity style={styles.flex}>
        <View>
          <ThemedText type="defaultBold">{flight.origin}</ThemedText>
          <ThemedText>{flight.departUTC}</ThemedText>
        </View>
        <FlightProgress scheme={currentScheme} />
        <View>
          <ThemedText type="defaultBold">{flight.destination}</ThemedText>
          <ThemedText>{flight.arrivalUTC}</ThemedText>
        </View>
      </TouchableOpacity>
      <ThemedText>{recentFlightplan ? JSON.stringify(recentFlightplan) : "Loading..."}</ThemedText>
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
});
