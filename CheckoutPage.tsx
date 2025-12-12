// CheckoutPage.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SafeScreen from "./SafeScreen";
import { PageType } from "./App";

export default function CheckoutPage({
  setPage,
  item
}: {
  setPage: (p: PageType) => void;
  item: any;
}) {
  return (
    <SafeScreen>
      <View style={styles.container}>

        {/* 🔙 BACK BUTTON */}
        <TouchableOpacity onPress={() => setPage("categories")} style={styles.backBtn}>
          <Text style={styles.backText}>◀ Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Checkout</Text>

        <View style={styles.box}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.price}>Rs. {item?.price}</Text>
        </View>

        <TouchableOpacity
          style={styles.btn}
          onPress={() => setPage("address")}
        >
          <Text style={styles.btnText}>Proceed to Address</Text>
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

  title: { fontSize: 28, fontWeight: "700" },

  box: {
    marginTop: 20,
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 10
  },
  name: { fontSize: 20, fontWeight: "600" },
  price: { marginTop: 5, fontSize: 16 },

  btn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginTop: 30
  },
  btnText: { color: "white", textAlign: "center", fontWeight: "700" }
});