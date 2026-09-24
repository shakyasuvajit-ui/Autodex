import { initializeFirebase } from "@/services/firebase";
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { ActivityIndicator, View } from 'react-native';
import 'react-native-reanimated';
import Toast from 'react-native-toast-message';

const { auth } = initializeFirebase();

export const unstable_settings = {
  anchor: '(home)',
};

export default function RootLayout() {
  const [isInitialized, setIsInitialized] = useState(false);


  useEffect(() => {
    if (isInitialized) {
      return;
    }
    setTimeout(() => {
      setIsInitialized(true);
    }, 2000);
  }, []);

  if (!isInitialized) {
    return <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" color="#0000ff" />
    </View>;
  }

  const isProtected = !!auth.currentUser;
  return (
      <>
      <Stack screenOptions={{ headerShown: false }} initialRouteName={isProtected ? '(home)' : 'index'}>
        <Stack.Screen name="index"  />
        <Stack.Screen name="login"  />
        <Stack.Screen name="signup" />
        <Stack.Screen name="(home)"/>
      </Stack>
      <Toast/>
      </>
      
  );
}