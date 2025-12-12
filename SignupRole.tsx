import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PageType } from "./App";

export default function SignupRole({
  setPage,
  setRole,
}: {
  setPage: (p: PageType) => void;
  setRole: (r: "buyer" | "seller") => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up As:</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setRole("buyer");
          setPage("signup");
        }}
      >
        <Text style={styles.btnText}>Buyer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setRole("seller");
          setPage("signup");
        }}
      >
        <Text style={styles.btnText}>Seller</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPage("roleSelect")}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 28, textAlign: "center", fontWeight: "700", marginBottom: 20 },
  btn: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "black",
    marginVertical: 10,
  },
  btnText: { textAlign: "center", color: "white", fontSize: 18 },
  back: { marginTop: 25, textAlign: "center", color: "blue", fontSize: 16 },
});