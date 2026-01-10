import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeInAsycncStorage = async (key: string, value: string) => {
    try {
        await AsyncStorage.setItem(key, value);
    } catch (e) {
        console.error("Error storing data in AsyncStorage", e);
    }}

export const getFromAsyncStorage = async (key: string): Promise<string | null> => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value;
    } catch (e) {
        console.error("Error retrieving data from AsyncStorage", e);
        return null;
    }
}

export const removeFromAsyncStorage = async (key: string) => {
    try {
        await AsyncStorage.removeItem(key);
    } catch (e) {
        console.error("Error removing data from AsyncStorage", e);
    }
}

export const checkKeyExistsInAsyncStorage = async (key: string): Promise<boolean> => {
    try {
        const value = await AsyncStorage.getItem(key);
        return value !== null;
    } catch (e) {
        console.error("Error checking key in AsyncStorage", e);
        return false;
    }
}