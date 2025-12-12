// Categories.tsx (Buyer Home page)
import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import SafeScreen from "./SafeScreen";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import { PageType } from "./App";

export default function Categories({
  setPage,
  cart,
  setCart,
  setCheckoutItem,
  allProducts,
}: {
  setPage: (p: PageType) => void;
  cart: any[];
  setCart: (c: any[]) => void;
  setCheckoutItem: (item: any) => void;
  allProducts: any[];
}) {
  const addToCart = (item: any) => setCart([...cart, item]);

  return (
    <SafeScreen>
      <View style={styles.container}>
        {/* Header: title + cart icon on right */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>Products</Text>
          <CartIcon cartCount={cart.length} onPress={() => setPage("cart")} />
        </View>

        {allProducts.length === 0 ? (
          <Text style={styles.emptyText}>No products yet. Sellers can upload products.</Text>
        ) : (
          <FlatList
            data={allProducts}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View style={styles.productBox}>
                <Text style={styles.productName}>{item.name}</Text>
                <Text>Category: {item.category}</Text>
                <Text>Rs. {item.price}</Text>

                <View style={styles.buttonRow}>
                  <TouchableOpacity style={styles.btn} onPress={() => addToCart(item)}>
                    <Text style={styles.btnText}>Add to Cart</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={styles.btn}
                    onPress={() => {
                      setCheckoutItem(item);
                      setPage("checkout");
                    }}
                  >
                    <Text style={styles.btnText}>Buy</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        )}
      </View>

      <Menu setPage={setPage} currentPage="home" />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, paddingBottom: 80 },

  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
  },

  title: { fontSize: 26, fontWeight: "700" },

  productBox: {
    backgroundColor: "#f3f3f3",
    padding: 15,
    borderRadius: 10,
    marginVertical: 6,
  },
  productName: { fontSize: 18, fontWeight: "600" },

  buttonRow: {
    flexDirection: "row",
    marginTop: 10,
    gap: 10,
  },

  btn: {
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  btnText: {
    color: "white",
    fontWeight: "700",
  },

  emptyText: {
    marginTop: 20,
    fontSize: 16,
    color: "gray",
  },
});