import Ionicons from "@expo/vector-icons/Ionicons";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

const styles = StyleSheet.create({
    container: {
        paddingVertical: 12,
        paddingHorizontal: 16,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'flex-start',
    },
});

export function BackButton({ type = 'dark' }: { type?: 'light' | 'dark' }) {
    const router = useRouter();
    return (
        <TouchableOpacity onPress={() => router.back()} style={styles.container} activeOpacity={0.7}>
            <Ionicons name="chevron-back" size={26} color={type === "dark" ? "black" : "white"} />
        </TouchableOpacity>
    );
}