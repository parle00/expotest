import React, { ReactNode } from "react";
import { StyleSheet } from "react-native";
import { Card } from "react-native-paper";

interface AppCardProps {
  children: ReactNode;
}

const AppCard = ({ children }: AppCardProps) => {
  return <Card style={styles.card}>{children}</Card>;
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 4,
    paddingLeft: 8,
    paddingRight: 8,
  },
});

export default AppCard;
