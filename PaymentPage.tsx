// PaymentPage.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import SafeScreen from "./SafeScreen";
import { PageType } from "./App";

export default function PaymentPage({
  setPage,
  item,
  totalEarnings,
  setTotalEarnings,
  itemsSold,
  setItemsSold,
  cart,
  setCart,
}: {
  setPage: (p: PageType) => void;
  item: any;
  totalEarnings: number;
  setTotalEarnings: (n: number) => void;
  itemsSold: number;
  setItemsSold: (n: number) => void;
  cart: any[];
  setCart: (c: any[]) => void;
}) {
  const handlePayment = () => {
    // ⭐ UPDATE SELLER METRICS
    setTotalEarnings(totalEarnings + item.price);
    setItemsSold(itemsSold + 1);

    // ⭐ REMOVE THIS ITEM FROM CART
    const updatedCart = cart.filter((p) => p.id !== item.id);
    setCart(updatedCart);

    // ⭐ Redirect to success page
    setPage("orderSuccess");
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Payment</Text>

        <View style={styles.box}>
          <Text style={styles.name}>{item?.name}</Text>
          <Text style={styles.price}>Rs. {item?.price}</Text>
        </View>

        <TouchableOpacity style={styles.payBtn} onPress={handlePayment}>
          <Text style={styles.payText}>Pay Now</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage("address")}>
          <Text style={styles.back}>Back</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 28, fontWeight: "700" },
  box: {
    backgroundColor: "#eee",
    padding: 20,
    borderRadius: 10,
    marginVertical: 20,
  },
  name: { fontSize: 20, fontWeight: "600" },
  price: { marginTop: 5, fontSize: 16 },
  payBtn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
  },
  payText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
  back: {
    marginTop: 15,
    textAlign: "center",
    color: "blue",
  },
});