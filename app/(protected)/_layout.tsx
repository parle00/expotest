import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: "absolute",
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen
        name="explore"
        options={{
          title: "Keşfet",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="travel-explore" size={24} color={color} />
          ),

          tabBarLabel: "",
        }}
      />

      <Tabs.Screen
        name="profile"
        options={{
          title: "Profil",
          headerShown: true,
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="personal-injury" size={24} color={color} />
          ),
          tabBarLabel: "",
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
