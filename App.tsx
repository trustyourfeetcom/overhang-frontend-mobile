import React, { useEffect, useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import RootNavigator from "./navigation/RootNavigator";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        setAppIsReady(true);
        await SplashScreen.hideAsync();
      } catch (e) {
        console.warn("An error occurred while preparing the app:", e);
      }
    };

    prepare();
  }, []);

  if (!appIsReady) {
    return null;
  }

  return (
    <RootNavigator/>
  );
}
