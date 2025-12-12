// CartPage.tsx
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity
} from "react-native";

import SafeScreen from "./SafeScreen";
import { PageType } from "./App";
import Menu from "./Menu";

export default function CartPage({
  setPage,
  cart,
  setCart,
  setCheckoutItem
}: {
  setPage: (p: PageType) => void;
  cart: any[];
  setCart: (c: any[]) => void;
  setCheckoutItem: (item: any) => void;
}) {
  const total = cart.reduce((sum, item) => sum + item.price, 0);

  const removeItem = (index: number) => {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  };

  const buyItem = (item: any) => {
    setCheckoutItem(item);
    setPage("checkout");
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.title}>My Cart</Text>

        {cart.length === 0 ? (
          <Text style={styles.empty}>Your cart is empty.</Text>
        ) : (
          <>
            <FlatList
              data={cart}
              keyExtractor={(_, index) => index.toString()}
              renderItem={({ item, index }) => (
                <View style={styles.itemBox}>
                  {/* PRODUCT INFO */}
                  <View style={{ flex: 1 }}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text>Rs. {item.price}</Text>
                  </View>

                  {/* BUY BUTTON */}
                  <TouchableOpacity
                    style={styles.buyBtn}
                    onPress={() => buyItem(item)}
                  >
                    <Text style={styles.buyText}>Buy</Text>
                  </TouchableOpacity>

                  {/* REMOVE BUTTON */}
                  <TouchableOpacity
                    style={styles.removeBtn}
                    onPress={() => removeItem(index)}
                  >
                    <Text style={styles.removeText}>Remove</Text>
                  </TouchableOpacity>
                </View>
              )}
            />

            {/* TOTAL + CLEAR CART */}
            <View style={styles.totalBox}>
              <Text style={styles.totalText}>Total: Rs. {total}</Text>

              <TouchableOpacity
                style={styles.clearBtn}
                onPress={() => setCart([])}
              >
                <Text style={styles.clearText}>Clear Cart</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>

      <Menu setPage={setPage} currentPage="cart" />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, paddingBottom: 80 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 20 },
  empty: { marginTop: 30, fontSize: 18, color: "gray" },

  itemBox: {
    flexDirection: "row",
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
    alignItems: "center",
    gap: 10
  },

  itemName: { fontSize: 18, fontWeight: "600" },

  buyBtn: {
    backgroundColor: "black",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8
  },
  buyText: {
    color: "white",
    fontWeight: "700"
  },

  removeBtn: {
    backgroundColor: "red",
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 8
  },
  removeText: { color: "white", fontWeight: "700" },

  totalBox: {
    marginTop: 20,
    backgroundColor: "#ddd",
    padding: 20,
    borderRadius: 12,
  },

  totalText: { fontSize: 22, fontWeight: "700", marginBottom: 10 },

  clearBtn: {
    backgroundColor: "black",
    padding: 14,
    borderRadius: 10,
  },
  clearText: { color: "white", textAlign: "center", fontWeight: "600" },
});