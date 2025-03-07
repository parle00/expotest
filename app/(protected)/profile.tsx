import AppCard from "@/components/AppCard";
import PageLayout from "@/components/PageLayout";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "expo-router";
import { Text } from "react-native";
import { Button, Title } from "react-native-paper";

export default function ProfileScreen() {
  const { authState } = useAuth();
  const router = useRouter();
  return (
    <PageLayout>
      <AppCard>
        <Title>ProfileScreen</Title>
        <Button
          mode="contained"
          onPress={() => {
            router.navigate("/settings");
          }}
        >
          <Text>Git</Text>
        </Button>
      </AppCard>
    </PageLayout>
  );
}
