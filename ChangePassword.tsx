// ChangePassword.tsx
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import SafeScreen from "./SafeScreen";
import { PageType } from "./App";

export default function ChangePassword({
  setPage
}: {
  setPage: (p: PageType) => void;
}) {
  const [oldPass, setOldPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const handleChange = () => {
    if (!oldPass || !newPass || !confirmPass) {
      Alert.alert("All fields are required");
      return;
    }

    if (newPass !== confirmPass) {
      Alert.alert("New passwords do not match");
      return;
    }

    Alert.alert("Password changed successfully!");
    setPage("profile");
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Change Password</Text>

        <TextInput
          secureTextEntry
          placeholder="Current Password"
          style={styles.input}
          value={oldPass}
          onChangeText={setOldPass}
        />

        <TextInput
          secureTextEntry
          placeholder="New Password"
          style={styles.input}
          value={newPass}
          onChangeText={setNewPass}
        />

        <TextInput
          secureTextEntry
          placeholder="Confirm New Password"
          style={styles.input}
          value={confirmPass}
          onChangeText={setConfirmPass}
        />

        <TouchableOpacity style={styles.btn} onPress={handleChange}>
          <Text style={styles.btnText}>Save Password</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage("profile")}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>

      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 20 },

  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12
  },

  btn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginTop: 10
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700"
  },

  cancel: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16
  }
});