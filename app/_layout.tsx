import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, error] = useFonts({
    DMBold: require("@/assets/fonts/DMSans-Bold.ttf"),
    DMMedium: require("@/assets/fonts/DMSans-Medium.ttf"),
    DMRegular: require("@/assets/fonts/DMSans-Regular.ttf"),
  });

  useEffect(() => {
    if (error) throw error;
    if (fontsLoaded) SplashScreen.hideAsync();
  }, [fontsLoaded, error]);

  if (!fontsLoaded) return null;

  if (!fontsLoaded && !error) return null;

  return <Stack />;
}
