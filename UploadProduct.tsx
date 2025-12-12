// UploadProduct.tsx
import React, { useState } from "react";
import { 
  View, Text, TextInput, TouchableOpacity, StyleSheet, Alert 
} from "react-native";

import SafeScreen from "./SafeScreen";
import { categories } from "./products";
import { PageType } from "./App";

// Firebase
import { db } from "./firebaseConfig";
import { ref, push, set } from "firebase/database";

export default function UploadProduct({
  setPage,
  allProducts,
  setAllProducts
}: {
  setPage: (p: PageType) => void;
  allProducts: any[];
  setAllProducts: (p: any[]) => void;
}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState(categories[0]);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<string | null>(null);

  const handleUpload = async () => {
    if (!name || !price || !description || !image) {
      Alert.alert("Please fill all fields and upload an image.");
      return;
    }

    // ⭐ Firebase reference to `products` collection
    const productRef = ref(db, "products");
    const newRef = push(productRef);

    const newProduct = {
      id: newRef.key, // Firebase KEY becomes product ID
      name,
      category,
      price: Number(price),
      description,
      image
    };

    // ⭐ Save to Firebase
    await set(newRef, newProduct);

    // ⭐ Update local state
    setAllProducts([...allProducts, newProduct]);

    Alert.alert("Product Uploaded Successfully!");
    setPage("sellerHome");
  };

  return (
    <SafeScreen>
      <View style={styles.container}>

        {/* Back button */}
        <TouchableOpacity onPress={() => setPage("sellerHome")}>
          <Text style={styles.backText}>← Back</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Upload Your Product</Text>

        <TextInput
          placeholder="Product Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Select Category:</Text>

        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            style={[
              styles.categoryBtn,
              category === cat && styles.selectedCategory,
            ]}
            onPress={() => setCategory(cat)}
          >
            <Text
              style={[
                styles.categoryText,
                category === cat && { color: "white" },
              ]}
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}

        <TextInput
          placeholder="Price"
          keyboardType="numeric"
          style={styles.input}
          value={price}
          onChangeText={setPrice}
        />

        <TextInput
          placeholder="Description"
          style={[styles.input, { height: 100 }]}
          multiline
          value={description}
          onChangeText={setDescription}
        />

        {/* Temporary image picker placeholder */}
        <TouchableOpacity
          style={styles.imageBtn}
          onPress={() => setImage("dummy-image.jpg")}
        >
          <Text style={styles.imageText}>
            {image ? "Image Selected" : "Upload Image"}
          </Text>
        </TouchableOpacity>

        {/* Submit */}
        <TouchableOpacity style={styles.uploadBtn} onPress={handleUpload}>
          <Text style={styles.uploadBtnText}>Submit Product</Text>
        </TouchableOpacity>
      </View>
    </SafeScreen>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },

  backText: { fontSize: 18, marginBottom: 10 },

  title: { fontSize: 26, fontWeight: "700", marginBottom: 15 },

  input: {
    borderWidth: 1,
    padding: 12,
    borderRadius: 10,
    marginBottom: 12,
  },

  label: { fontSize: 18, fontWeight: "600", marginBottom: 5 },

  categoryBtn: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginVertical: 6,
  },

  selectedCategory: { backgroundColor: "black" },

  categoryText: { color: "black", fontWeight: "600" },

  imageBtn: {
    backgroundColor: "gray",
    padding: 14,
    borderRadius: 10,
    marginVertical: 10,
  },

  imageText: { color: "white", textAlign: "center" },

  uploadBtn: {
    backgroundColor: "black",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },

  uploadBtnText: {
    color: "white",
    textAlign: "center",
    fontWeight: "700",
  },
});