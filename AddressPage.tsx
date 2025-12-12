// AddressPage.tsx
import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from "react-native";
import SafeScreen from "./SafeScreen";
import { PageType } from "./App";

export default function AddressPage({
  setPage
}: {
  setPage: (p: PageType) => void;
}) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleNext = () => {
    if (!name || !phone || !address) {
      Alert.alert("Please fill all fields!");
      return;
    }
    setPage("payment");
  };

  return (
    <SafeScreen>
      <View style={styles.container}>

        {/* 🔙 BACK BUTTON */}
        <TouchableOpacity onPress={() => setPage("checkout")} style={styles.backBtn}>
          <Text style={styles.backText}>◀ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Delivery Address</Text>

        <TextInput
          placeholder="Full Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <TextInput
          placeholder="Phone Number"
          keyboardType="numeric"
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          placeholder="Full Address"
          multiline
          style={[styles.input, { height: 100 }]}
          value={address}
          onChangeText={setAddress}
        />

        <TouchableOpacity style={styles.btn} onPress={handleNext}>
          <Text style={styles.btnText}>Proceed to Payment</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  // BACK BUTTON
  backBtn: {
    marginBottom: 10,
  },
  backText: {
    fontSize: 18,
    fontWeight: "600",
  },

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
    marginTop: 20
  },

  btnText: { color: "white", textAlign: "center", fontWeight: "700" }
});