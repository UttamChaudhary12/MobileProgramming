// SellerHome.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Alert } from "react-native";
import SafeScreen from "./SafeScreen";
import { PageType } from "./App";

export default function SellerHome({
  setPage,
  allProducts,
  setAllProducts,
  setEditProduct,
  totalEarnings,
  itemsSold
}: {
  setPage: (p: PageType) => void;
  allProducts: any[];
  setAllProducts: (p: any[]) => void;
  setEditProduct: (p: any) => void;
  totalEarnings: number;
  itemsSold: number;
}) {
  const deleteProduct = (id: string) => {
    Alert.alert("Delete Product", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "Delete",
        style: "destructive",
        onPress: () => {
          const updated = allProducts.filter((p) => p.id !== id);
          setAllProducts(updated);
        },
      },
    ]);
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        
        {/* Header */}
        <View style={styles.topRow}>
          <TouchableOpacity
            style={styles.circleRow}
            onPress={() => setPage("profile")}
          >
            <View style={styles.circle} />
            <Text style={styles.helloText}>Hello Seller</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.uploadBtn}
            onPress={() => setPage("uploadProduct")}
          >
            <Text style={styles.uploadText}>Upload Product</Text>
          </TouchableOpacity>
        </View>

        {/* Dashboard Stats */}
        <View style={styles.grid}>
          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>My Products</Text>
            <Text style={styles.gridValue}>{allProducts.length}</Text>
          </View>

          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>Total Earnings</Text>
            <Text style={styles.gridValue}>Rs. {totalEarnings}</Text>
          </View>

          <View style={styles.gridItem}>
            <Text style={styles.gridTitle}>Items Sold</Text>
            <Text style={styles.gridValue}>{itemsSold}</Text>
          </View>
        </View>

        {/* Product List */}
        <Text style={styles.listTitle}>My Products</Text>

        {allProducts.length === 0 ? (
          <Text style={styles.emptyText}>You have no products.</Text>
        ) : (
          allProducts.map((p) => (
            <View key={p.id} style={styles.productRow}>
              <View style={{ flex: 1 }}>
                <Text style={styles.productName}>{p.name}</Text>
                <Text style={styles.productInfo}>
                  Rs. {p.price} • {p.category}
                </Text>
              </View>

              {/* Edit Button */}
              <TouchableOpacity
                style={styles.editBtn}
                onPress={() => {
                  setEditProduct(p);
                  setPage("editProduct");
                }}
              >
                <Text style={styles.editText}>Edit</Text>
              </TouchableOpacity>

              {/* Delete Button */}
              <TouchableOpacity
                style={styles.deleteBtn}
                onPress={() => deleteProduct(p.id)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))
        )}
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  circleRow: {
    flexDirection: "row",
    alignItems: "center",
  },

  circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
  },

  helloText: {
    marginLeft: 10,
    fontSize: 18,
  },

  uploadBtn: {
    borderWidth: 1,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 10,
  },

  uploadText: { fontWeight: "700" },

  grid: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  gridItem: {
    flex: 1,
    marginHorizontal: 4,
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    alignItems: "center",
  },

  gridTitle: { color: "gray" },
  gridValue: { marginTop: 6, fontSize: 18, fontWeight: "700" },

  listTitle: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },

  emptyText: { color: "gray" },

  productRow: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },

  productName: { fontSize: 16, fontWeight: "600" },

  productInfo: { fontSize: 14, color: "gray" },

  editBtn: {
    backgroundColor: "blue",
    padding: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
    marginRight: 6,
  },

  editText: { color: "white", fontWeight: "700" },

  deleteBtn: {
    backgroundColor: "red",
    padding: 6,
    paddingHorizontal: 10,
    borderRadius: 8,
  },

  deleteText: { color: "white", fontWeight: "700" },
});