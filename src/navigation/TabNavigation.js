import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
// Import your ProfileScreen component
import { Ionicons } from '@expo/vector-icons'; 
import Home from "../screen/Home";
const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
               headerShown: false ,
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={size}
              color={color}
            />
          ),
        }}
      />
      {/* Add more tab screens as needed */}
    </Tab.Navigator>
  );
};

export default TabNavigation;
