import { corporateColor, corporateYellow } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { ColorSchemeName, StyleSheet, View } from "react-native";

export function FlightProgress({ scheme }: { scheme: ColorSchemeName }) {
  return (
    <View style={styles.progressContainer}>
      <View style={scheme === 'dark'? styles.progressNode : styles.progressNodeLight} />
      <View style={scheme === 'dark'? styles.progress : styles.progressLight} />
      <View style={scheme === 'dark'? styles.progressNode : styles.progressNodeLight} />
      <Ionicons style={styles.plane} name="airplane-sharp" size={24} color={corporateYellow} />
    </View>
  );
}

const styles = StyleSheet.create({
  progressContainer: {
    width: "60%",
    position: "relative",
    right: 4,
    top: 21,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  progressLight: {
    height: 0,
    borderColor: corporateColor,
    borderWidth: 0.5,
    width: "94%",
  },
  progress: {
    height: 0,
    borderColor: "white",
    borderWidth: 0.5,
    width: "94%",
  },
  progressNode: {
    position: "relative",
    bottom: 3.5,
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: "white",
  },
  progressNodeLight: {
    position: "relative",
    bottom: 3.5,
    height: 8,
    width: 8,
    borderRadius: 5,
    backgroundColor: corporateColor,
  },
  plane:{
    position: 'relative',
    bottom: 12,
    right: 100  //keep betweeen 174 and 31 based on flight progress
  }
});
