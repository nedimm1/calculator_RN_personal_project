import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function History({ equations, sEquations }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>History</Text>
      {equations.map((equation, index) => (
        <Text key={index} style={styles.equation}>
          {equation}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f8f9fa',
    borderRadius: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  equation: {
    fontSize: 16,
    color: '#333',
    marginBottom: 4,
  },
});
