import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { PageType } from "./App";

export default function Signup({
  setPage,
  role,
}: {
  setPage: (p: PageType) => void;
  role: "buyer" | "seller" | null;
}) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Signup as {role?.toUpperCase()}</Text>

      <TextInput
        style={styles.input}
        placeholder="Username"
        value={user}
        onChangeText={setUser}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={pass}
        onChangeText={setPass}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => setPage("categories")}
      >
        <Text style={styles.btnText}>Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPage("roleSelect")}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 30, fontWeight: "700", textAlign: "center" },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginVertical: 10,
  },
  btn: { backgroundColor: "black", padding: 15, borderRadius: 8, marginTop: 10 },
  btnText: { color: "white", textAlign: "center", fontWeight: "600" },
  back: { marginTop: 20, textAlign: "center", color: "blue" },
});