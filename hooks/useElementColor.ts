import { Colors } from "@/constants/Colors";
import { useColorScheme } from "react-native";

export function useElementColor(){
    const colorScheme = useColorScheme()
    return colorScheme === 'light' ? Colors.light : Colors.dark
}