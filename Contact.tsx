// Contact.tsx
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SafeScreen from "./SafeScreen";
import Menu from "./Menu";
import { PageType } from "./App";

export default function Contact({
  setPage,
}: {
  setPage: (p: PageType) => void;
}) {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Contact</Text>

        <Text style={styles.text}>Email: support@example.com</Text>
        <Text style={styles.text}>Phone: +123 456 7890</Text>
      </View>

      {/* FIX: Add currentPage */}
      <Menu setPage={setPage} currentPage="contact" />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, paddingBottom: 80 },
  title: { fontSize: 30, fontWeight: "700" },
  text: { marginTop: 10, fontSize: 16 },
});