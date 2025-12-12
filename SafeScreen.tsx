// SafeScreen.tsx
import React from "react";
import { SafeAreaView, Platform, StatusBar, StyleSheet } from "react-native";

export default function SafeScreen({ children }: { children: React.ReactNode }) {
  return <SafeAreaView style={styles.safe}>{children}</SafeAreaView>;
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    backgroundColor: "#fff",
  },
});
