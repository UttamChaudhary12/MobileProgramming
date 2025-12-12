import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { PageType } from "./App";

export default function Login({
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
      <Text style={styles.title}>Login as {role?.toUpperCase()}</Text>

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
        onPress={() => {
          if (role === "seller") setPage("sellerHome");
          else setPage("home");}}
      >
        <Text style={styles.btnText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPage("signupRole")}>
        <Text style={styles.signup}>Create new account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPage("roleSelect")}>
        <Text style={styles.back}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 26, fontWeight: "700", textAlign: "center" },
  input: { borderWidth: 1, padding: 12, borderRadius: 8, marginVertical: 10 },
  btn: { backgroundColor: "black", padding: 15, borderRadius: 8, marginTop: 10 },
  btnText: { color: "white", textAlign: "center" },
  signup: { marginTop: 15, textAlign: "center", color: "blue" },
  back: { marginTop: 5, textAlign: "center", color: "blue" },
});