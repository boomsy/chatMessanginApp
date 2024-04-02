import { StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from "expo-splash-screen"
import tw from 'twrnc'
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import AppNavigation from './navigations/AppNavigation';
import { FONTS } from './constants/fonts';
import { SafeAreaProvider } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded]  = useFonts(FONTS);

  const onlayoutRootView = useCallback(async ()=> {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);


  if(!fontsLoaded) {
    return null;
  }


  return (
    <SafeAreaProvider onLayout={onlayoutRootView}>
      <AppNavigation />
    </SafeAreaProvider>
  );

}
