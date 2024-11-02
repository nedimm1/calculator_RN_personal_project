import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function History({ equations, sEquations }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      {equations.map((equation, index) => (
        <View key={index} style={styles.equationContainer}>
          <Text style={styles.equation}>
            {equation}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 20,
    paddingHorizontal: 16,
    margin: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#f0f0f0', // Light color for better contrast
    marginBottom: 12,
    textAlign: 'center',
  },
  equationContainer: {
    borderWidth: 1,
    borderColor: '#ffffff', // White border around the equation
    borderRadius: 8,
    padding: 10,
    marginBottom: 6,
    alignItems: 'center', // Center the content horizontally
  },
  equation: {
    fontSize: 18,
    color: '#d1d1d1', // Softer color for the text
    textAlign: 'center', // Center the text within the container
  },
});
