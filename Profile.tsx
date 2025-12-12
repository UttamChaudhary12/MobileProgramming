// Profile.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SafeScreen from "./SafeScreen";
import Menu from "./Menu";
import { PageType } from "./App";

export default function Profile({
  setPage,
  username,
  role,
}: {
  setPage: (p: PageType) => void;
  username: string;
  role: "buyer" | "seller" | null;
}) {
  return (
    <SafeScreen>
      <View style={styles.container}>

        <Text style={styles.title}>Profile</Text>

        <Text style={styles.label}>Username:</Text>
        <Text style={styles.value}>{username}</Text>

        <Text style={styles.label}>Role:</Text>
        <Text style={styles.value}>{role}</Text>

        {/* Edit Username */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setPage("editUsername")}
        >
          <Text style={styles.btnText}>Edit Username</Text>
        </TouchableOpacity>

        {/* Change Password */}
        <TouchableOpacity
          style={styles.btn}
          onPress={() => setPage("changePassword")}
        >
          <Text style={styles.btnText}>Change Password</Text>
        </TouchableOpacity>

        {/* 🔥 LOGOUT BUTTON */}
        <TouchableOpacity
          style={[styles.btn, styles.logoutBtn]}
          onPress={() => setPage("roleSelect")}
        >
          <Text style={styles.btnText}>Logout</Text>
        </TouchableOpacity>

      </View>

      <Menu setPage={setPage} currentPage="profile" />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, paddingBottom: 80 },

  title: { fontSize: 28, fontWeight: "700", marginBottom: 20 },

  label: { fontSize: 18, marginTop: 10, color: "gray" },
  value: { fontSize: 22, fontWeight: "600" },

  btn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },

  // Logout button style (optional: add red color if you want)
  logoutBtn: {
    marginTop: 30,
  },
});