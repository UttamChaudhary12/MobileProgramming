import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function CartIcon({
  cartCount,
  onPress,
}: {
  cartCount: number;
  onPress: () => void;
}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.icon}>🛒</Text>

      {cartCount > 0 && (
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{cartCount}</Text>
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { position: "relative", marginBottom: 10 },
  icon: { fontSize: 28 },
  badge: {
    position: "absolute",
    right: -6,
    top: -5,
    backgroundColor: "red",
    borderRadius: 10,
    paddingHorizontal: 5,
  },
  badgeText: { color: "white", fontSize: 12 },
});