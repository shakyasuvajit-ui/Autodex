import Ionicons from "@expo/vector-icons/Ionicons";
import { useState } from "react";
import { StyleSheet, Text, TextInput, TextInputProps, TextStyle, TouchableOpacity, View, ViewStyle } from "react-native";

export type InputFieldProps = TextInputProps & {
    label?: string;
    error?: string;
    containerStyle?: ViewStyle;
    labelStyle?: TextStyle;
    inputContainerStyle?: ViewStyle;
};

export function InputField({
    label,
    style: inputStyle,
    containerStyle,
    labelStyle,
    inputContainerStyle,
    error,
    secureTextEntry,
    ...props
}: InputFieldProps) {
    const [isPasswordHidden, setIsPasswordHidden] = useState(secureTextEntry ?? false);

    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={[styles.label, labelStyle]}>{label}</Text>}
            <View style={[styles.inputContainer, inputContainerStyle, error ? styles.inputErrorBorder : null]}>
                <TextInput
                    style={[styles.input, inputStyle]}
                    secureTextEntry={secureTextEntry ? isPasswordHidden : false}
                    placeholderTextColor="#666666"
                    {...props}
                />
                {secureTextEntry && (
                    <TouchableOpacity
                        style={styles.inputSuffix}
                        onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                        activeOpacity={0.7}
                    >
                        <Ionicons
                            name={isPasswordHidden ? "eye" : "eye-off"}
                            size={22}
                            color="#FFFFFF"
                        />
                    </TouchableOpacity>
                )}
            </View>
            {error ? <Text style={styles.error}>{error}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        gap: 8,
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: '#38383A',
        borderRadius: 6,
        backgroundColor: '#000000',
        minHeight: 52,
        paddingHorizontal: 14,
    },
    inputErrorBorder: {
        borderColor: '#FF453A',
    },
    input: {
        flex: 1,
        minHeight: 52,
        color: '#FFFFFF',
        fontSize: 14,
        paddingVertical: 10,
    },
    inputSuffix: {
        paddingLeft: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    error: {
        color: '#FF453A',
        fontSize: 12,
        marginTop: 2,
    },
});