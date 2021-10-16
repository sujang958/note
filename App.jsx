import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { useFonts } from "expo-font"
import { StatusBar } from "expo-status-bar"
import React from "react"
import { ActivityIndicator, StyleSheet, Text, View } from "react-native"
import Home from "./screens/home"

const Stack = createStackNavigator()

export default function App() {
  const [loadedState, _] = useFonts({
    NotoSansBold: require("./assets/fonts/NotoSansKR-Bold.otf"),
  })

  if (!loadedState) return <ActivityIndicator color="#fff" size="large" />

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="home"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="home" component={Home} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </NavigationContainer>
  )
}
