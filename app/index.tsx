import { useAuth } from "@/context/AuthContext";
import React, { useState } from "react";
import { View, StyleSheet, Alert } from "react-native";
import { TextInput, Button, Card, Title, Paragraph } from "react-native-paper";

const LoginScreen = () => {
  const { onLogin } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    await onLogin(username, password);
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Title style={styles.title}>Giriş Yap</Title>
          <Paragraph style={styles.subtitle}>
            Kullanıcı adı ve şifrenizi girin
          </Paragraph>

          <TextInput
            label="Kullanıcı Adı"
            value={username}
            onChangeText={setUsername}
            style={styles.input}
            autoCapitalize="none"
          />
          <TextInput
            label="Şifre"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            style={styles.input}
            autoCapitalize="none"
          />

          <Button mode="contained" onPress={handleLogin} style={styles.button}>
            Giriş Yap
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    padding: 16,
    borderRadius: 8,
    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    marginBottom: 20,
    color: "gray",
  },
  input: {
    marginBottom: 16,
  },
  button: {
    marginTop: 20,
  },
});

export default LoginScreen;
