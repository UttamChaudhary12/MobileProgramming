import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { PageType } from "./App";

export default function Menu({
  setPage,
  currentPage,
}: {
  setPage: (p: PageType) => void;
  currentPage: string;
}) {
  return (
    <View style={styles.menu}>
      <TouchableOpacity onPress={() => setPage("home")}>
        <Text style={currentPage === "home" ? styles.active : styles.text}>Home</Text>
      </TouchableOpacity>

      

      <TouchableOpacity onPress={() => setPage("contact")}>
        <Text style={currentPage === "contact" ? styles.active : styles.text}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setPage("profile")}>
        <Text style={currentPage === "profile" ? styles.active : styles.text}>Profile</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    backgroundColor: "#eee",
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  text: {
    fontSize: 15,
  },
  active: {
    fontSize: 15,
    fontWeight: "bold",
  },
});