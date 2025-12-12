import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PageType } from "./App";

export default function RoleSelect({
  setPage,
  setRole,
}: {
  setPage: (p: PageType) => void;
  setRole: (r: "buyer" | "seller") => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login As:</Text>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setRole("buyer");
          setPage("login");
        }}
      >
        <Text style={styles.btnText}>Buyer</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setRole("seller");
          setPage("login");
        }}
      >
        <Text style={styles.btnText}>Seller</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPage("signupRole")}>
        <Text style={styles.signup}>Create New Account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 28, fontWeight: "700", textAlign: "center", marginBottom: 20 },
  btn: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: "black",
    marginVertical: 10,
  },
  btnText: { textAlign: "center", color: "white", fontSize: 18 },
  signup: { marginTop: 25, textAlign: "center", fontSize: 16, color: "blue" },
});