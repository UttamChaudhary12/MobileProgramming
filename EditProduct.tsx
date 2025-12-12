// EditProduct.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from "react-native";

import SafeScreen from "./SafeScreen";
import { PageType } from "./App";

// Firebase
import { db } from "./firebaseConfig";
import { ref, update } from "firebase/database";

export default function EditProduct({
  setPage,
  editProduct,
  allProducts,
  setAllProducts
}: {
  setPage: (p: PageType) => void;
  editProduct: any;
  allProducts: any[];
  setAllProducts: (p: any[]) => void;
}) {

  const [name, setName] = useState(editProduct.name);
  const [price, setPrice] = useState(String(editProduct.price));
  const [description, setDescription] = useState(editProduct.description);

  const saveChanges = async () => {
    if (!name || !price || !description) {
      Alert.alert("All fields are required.");
      return;
    }

    // ⭐ Update on Firebase
    const productRef = ref(db, "products/" + editProduct.id);
    await update(productRef, {
      name,
      price: Number(price),
      description
    });

    // ⭐ Update locally
    const updatedList = allProducts.map((p) =>
      p.id === editProduct.id
        ? { ...p, name, price: Number(price), description }
        : p
    );

    setAllProducts(updatedList);

    Alert.alert("Product updated!");
    setPage("sellerHome");
  };

  return (
    <SafeScreen>
      <View style={styles.container}>
        <Text style={styles.title}>Edit Product</Text>

        <TextInput
          style={styles.input}
          value={name}
          onChangeText={setName}
          placeholder="Product Name"
        />

        <TextInput
          style={styles.input}
          value={price}
          keyboardType="numeric"
          onChangeText={setPrice}
          placeholder="Price"
        />

        <TextInput
          style={[styles.input, { height: 100 }]}
          value={description}
          multiline
          onChangeText={setDescription}
          placeholder="Description"
        />

        <TouchableOpacity style={styles.btn} onPress={saveChanges}>
          <Text style={styles.btnText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setPage("sellerHome")}>
          <Text style={styles.cancel}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  title: { fontSize: 26, fontWeight: "700", marginBottom: 20 },

  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },

  btn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
  },

  btnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },

  cancel: {
    textAlign: "center",
    marginTop: 20,
    fontSize: 16,
  },
});