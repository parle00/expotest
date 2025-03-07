import AppCard from "@/components/AppCard";
import PageLayout from "@/components/PageLayout";
import { useAuth } from "@/context/AuthContext";
import { Stack, useRouter } from "expo-router";
import { Text } from "react-native";
import { Button, Title } from "react-native-paper";

export default function SettingsScreen() {
  return (
    <PageLayout>
      <Stack.Screen
        options={{
          headerTitleAlign: "center",
        }}
      />
      <AppCard>
        <Title>SettingsScreen</Title>
      </AppCard>
    </PageLayout>
  );
}
