import { useAuth } from "@/context/AuthContext";
import { Text, View } from "react-native";

export default function HomeScreen() {
  const { authState } = useAuth();

  return (
    <View>
      <Text>{authState?.username}</Text>
    </View>
  );
}
