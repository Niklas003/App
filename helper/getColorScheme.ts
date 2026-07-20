import { useColorScheme } from "@/hooks/useColorScheme";

export const getColorScheme = (): 'light' | 'dark' => {
    const colorScheme = useColorScheme();
    return colorScheme === 'dark' ? 'dark' : 'light';
}