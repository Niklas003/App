import { corporateYellow } from "@/constants/Colors";
import { useElementColor } from "@/hooks/useElementColor";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { ThemedCardView } from "../ThemedCardView";
import { ThemedText } from "../ThemedText";

type AirportSearchProps = {
  isFocus: (focusVal: boolean) => void;
};

export function AirportSearch({ isFocus }: AirportSearchProps) {
  const color = useElementColor();
  const [isFocusSet, setIsFocus] = useState<boolean>(false);
  const [destinationString, setDestinationString] = useState<string>("");

  const changeFocusState = (state: boolean) => {
    setIsFocus(state);
    isFocus(state);
  };

  return (
    <View>
      <ThemedCardView style={styles.destinationBox}>
        <Ionicons name="location-outline" size={32} color={color.icon} style={styles.inputIcon} />
        <TextInput
          style={[styles.destinationInput, { color: color.text }]}
          onChangeText={(updateString) => setDestinationString(updateString)}
          value={destinationString}
          placeholder="Was wird dein nächstes Ziel?"
          onFocus={() => changeFocusState(true)}
          onEndEditing={() => changeFocusState(false)}
          placeholderTextColor={color.placeholder}
          cursorColor={corporateYellow}
        />
      </ThemedCardView>
      {isFocusSet && destinationString.length > 3 && (
        <ThemedCardView style={styles.searchResults}>
          <ThemedText>{destinationString}</ThemedText>
          <ThemedText>{destinationString.length}</ThemedText>
        </ThemedCardView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  inputIcon: {
    position: "relative",
    top: 15,
    left: 10,
  },
  destinationBox: {
    flexDirection: "row",
    zIndex: 1100,
    position: "relative",
    bottom: 55,
    filter: "drop-shadow(0px 0px 20px #0000003b)",
    borderRadius: 5,
  },
  destinationInput: {
    height: 40,
    margin: 12,
    fontSize: 16,
    width: '100%'
  },
  searchResults: {
    flexDirection: "column",
    gap: 20,
    borderRadius: 5,
    zIndex: 1100,
    position: "absolute",
    top: 25,
    width: "100%",
    filter: "drop-shadow(0px 0px 20px #0000003b)",
    padding: 20,
    paddingHorizontal: 20,
  },
});
