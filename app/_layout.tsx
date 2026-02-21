import { SplashScreen, Stack } from "expo-router";
import {useFonts} from 'expo-font';
import { useEffect } from "react";   
import '../global.css'



export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
  "QuickSand-Bold": require('.././assets/font/Quicksand-Bold.ttf'),
  "QuickSand-Medium": require('.././assets/font/Quicksand-Medium.ttf'),
  "QuickSand-Regular": require('.././assets/font/Quicksand-Regular.ttf'),
  "QuickSand-SemiBold": require('.././assets/font/Quicksand-SemiBold.ttf'),
  "QuickSand-Light": require('.././assets/font/Quicksand-Light.ttf'),
});

useEffect(() => {
  if (error) throw error;

  if (fontsLoaded) {
    SplashScreen.hideAsync();
  }
}, [fontsLoaded, error]);

  return <Stack screenOptions={{headerShown: false}}/>
}
