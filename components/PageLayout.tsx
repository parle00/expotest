import React, { ReactNode } from "react";
import { StyleSheet, View } from "react-native";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 7,
    paddingRight: 7,
  },
});

export default PageLayout;
