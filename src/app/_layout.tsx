import { Suspense, useEffect } from "react";
import { useColorScheme } from "react-native";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Slot, SplashScreen, Stack } from "expo-router";
import { TamaguiProvider, Text, Theme, ScrollView, YStack,H2 } from "tamagui";

import { MySafeAreaView } from "@components/MySafeAreaView";
import config from "@root/tamagui.config";
import TopBar from "@/components/template/TopBar";
import Footer from "@/components/template/Footer";
import Copyright from "@/components/template/Copyright";

import { HStack } from "@/components/template/HStack";
import { VStack } from "@/components/template/VStack";
SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const colorScheme = useColorScheme();

  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf")
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (<TamaguiProvider config={config}>
      <Suspense fallback={<Text>Loading...</Text>}>
        <Theme name="dark">
        <MySafeAreaView>
    <ScrollView >
    <TopBar />
    <Slot />
    <Footer  />
      </ScrollView>
      </MySafeAreaView>
          </Theme>
      </Suspense>
    </TamaguiProvider>
  );
}
