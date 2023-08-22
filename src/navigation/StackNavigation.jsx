import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "../screen/Welcome";

import Planet from "../screen/Planet";
import LatestNewsId from "../screen/LatestNewsId";
import Home from "../screen/Home";

const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="Home"
          options={{ headerShown: false }}
          component={Home}
        />
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />

        <Stack.Screen
          name="planet"
          options={{ headerShown: false }}
          component={Planet}
        />
        <Stack.Screen
          name="latestNews"
          options={{ headerShown: false }}
          component={LatestNewsId}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
