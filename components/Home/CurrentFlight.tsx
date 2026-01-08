import { useColorScheme } from "@/hooks/useColorScheme.web";
import BasicFlight from "@/types/BasicFlight";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ThemedCardView } from "../ThemedCardView";
import { ThemedText } from "../ThemedText";
import { FlightProgress } from "../ui/FlightProgress";

export function CurrentFlight({flight, error}:{flight: BasicFlight | undefined, error: string | null}) {
  const currentScheme = useColorScheme();
  
  return (
    <ThemedCardView style={styles.card}>
      {flight?.origin ? (
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
      </TouchableOpacity>):(
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
});
