// OrderSuccess.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SafeScreen from "./SafeScreen";
import { PageType } from "./App";

export default function OrderSuccess({
  setPage
}: {
  setPage: (p: PageType) => void;
}) {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.check}>✔</Text>

        <Text style={styles.title}>Order Placed Successfully!</Text>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setPage("home")}
        >
          <Text style={styles.btnText}>Go to Home</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20
  },

  check: {
    fontSize: 80,
    color: "green",
    marginBottom: 20
  },

  title: {
    fontSize: 26,
    fontWeight: "700",
    textAlign: "center"
  },

  btn: {
    backgroundColor: "black",
    padding: 14,
    borderRadius: 10,
    marginTop: 30,
    width: "60%"
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700"
  }
});