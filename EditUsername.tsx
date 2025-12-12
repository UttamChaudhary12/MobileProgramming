import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { PageType } from "./App";

export default function EditUsername({
  setPage,
  username,
  setUsername,
}: {
  setPage: (p: PageType) => void;
  username: string;
  setUsername: (u: string) => void;
}) {
  const [name, setName] = useState(username);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Change Username</Text>

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
      />

      <TouchableOpacity
        style={styles.btn}
        onPress={() => {
          setUsername(name);
          setPage("profile");
        }}
      >
        <Text style={styles.btnText}>Save</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPage("profile")}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 20 },
  title: { fontSize: 26, fontWeight: "700", textAlign: "center" },
  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
    marginVertical: 15,
  },
  btn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 8,
    marginTop: 10,
  },
  btnText: { color: "white", textAlign: "center" },
  cancel: { textAlign: "center", color: "blue", marginTop: 20 },
});