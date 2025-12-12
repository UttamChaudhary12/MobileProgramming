import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import SafeScreen from "./SafeScreen";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import { categories } from "./products";
import { PageType } from "./App";

export default function CategoriesPage({
  setPage,
  cart,
}: {
  setPage: (p: PageType) => void;
  cart: any[];
}) {
  return (
    <SafeScreen>
      <View style={styles.container}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={styles.title}>Categories</Text>

          <CartIcon cartCount={cart.length} onPress={() => setPage("cart")} />
        </View>

        <FlatList
          horizontal
          data={categories}
          renderItem={({ item }) => (
            <View style={styles.categoryBox}>
              <Text>{item}</Text>
            </View>
          )}
        />
      </View>

      <Menu setPage={setPage} currentPage="categories" />
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15, paddingBottom: 80 },
  title: { fontSize: 26, fontWeight: "700", marginBottom: 10 },
  categoryBox: {
    backgroundColor: "#ddd",
    padding: 15,
    borderRadius: 10,
    marginRight: 10,
    width: 100,
    height: 200,
  },
});