import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function History({ equations, sEquations, sHistoryActive }) {
  function handleClearHistory() {
    sEquations([]);
  }

  function handleDisableHistory() {
    sHistoryActive(false);
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Pressable onPress={handleDisableHistory} style={styles.closeButton}>
          <Text style={styles.closeButtonText}>X</Text>
        </Pressable>
        <Text style={styles.title}>History</Text>
        {/* Empty View to fill space on the right side */}
        <View style={styles.rightSpacer} />
      </View>

      {equations.map((equation, index) => (
        <View key={index} style={styles.equationContainer}>
          <Text style={styles.equation}>{equation}</Text>
        </View>
      ))}

      <Pressable onPress={handleClearHistory} style={styles.clearButton}>
        <Text style={styles.clearButtonText}>Clear</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    margin: 16,
    // Remove background color for transparency
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Adjust to space between the items
    marginBottom: 12,
  },
  closeButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#4d4d4d', // Dark gray to match overall styling
  },
  closeButtonText: {
    color: '#ffffff', // White text for contrast
    fontSize: 18,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#f0f0f0",
    textAlign: "center",
    flex: 1, // Allows the title to take up available space
  },
  rightSpacer: {
    width: 40, // Adjust this width to ensure enough space on the right side
  },
  equationContainer: {
    borderWidth: 1,
    borderColor: "#ffffff",
    borderRadius: 8,
    padding: 10,
    marginBottom: 6,
    alignItems: "center",
  },
  equation: {
    fontSize: 18,
    color: "#d1d1d1",
    textAlign: "center",
  },
  clearButton: {
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#4d4d4d', // Dark gray to match overall styling
    alignItems: 'center',
  },
  clearButtonText: {
    color: '#ffffff', // White text for the button
    fontSize: 18,
  },
});
