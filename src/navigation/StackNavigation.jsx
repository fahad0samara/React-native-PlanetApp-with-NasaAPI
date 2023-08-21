import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Welcome from '../screen/Welcome';
import Login from '../screen/Login';
import SignUp from '../screen/SignUp';
import TabNavigation from './TabNavigation';
import Planet from '../screen/Planet';
import LatestNewsId from '../screen/LatestNewsId';


const Stack = createNativeStackNavigator();


export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          name="TabNavigation"
          options={{ headerShown: false }}
          component={TabNavigation}
        />
        <Stack.Screen
          name="Welcome"
          options={{ headerShown: false }}
          component={Welcome}
        />
        <Stack.Screen
          name="Login"
          options={{ headerShown: false }}
          component={Login}
        />
        <Stack.Screen
          name="SignUp"
          options={{ headerShown: false }}
          component={SignUp}
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