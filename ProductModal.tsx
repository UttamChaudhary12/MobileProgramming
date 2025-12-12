import React from "react";
import { Modal, View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function ProductModal({ visible, product, onClose }) {
  if (!product) return null;

  return (
    <Modal visible={visible} transparent animationType="slide">
      <View style={styles.overlay}>
        <View style={styles.box}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>Rs. {product.price}</Text>

          <TouchableOpacity style={styles.closeBtn} onPress={onClose}>
            <Text style={styles.closeText}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.5)",
    justifyContent: "center",
    alignItems: "center",
  },
  box: {
    backgroundColor: "white",
    padding: 20,
    width: "80%",
    borderRadius: 10,
  },
  name: { fontSize: 22, fontWeight: "700" },
  price: { fontSize: 18, marginVertical: 10 },
  closeBtn: {
    backgroundColor: "black",
    padding: 12,
    borderRadius: 8,
    marginTop: 15,
  },
  closeText: { color: "white", textAlign: "center" },
});
