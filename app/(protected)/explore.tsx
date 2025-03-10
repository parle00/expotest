import AppCard from "@/components/AppCard";
import PageLayout from "@/components/PageLayout";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { Text } from "react-native";
import { Button, Title } from "react-native-paper";

export default function ExploreScreen() {
  return (
    <PageLayout>
      <AppCard>
        <Title>ExploreScreen</Title>
        <Button mode="contained">
          <Text>Git</Text>
        </Button>
      </AppCard>
    </PageLayout>
  );
}
