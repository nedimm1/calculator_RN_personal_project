import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ value }) => {
  const isOperator = ['C', '(', ')', '/', '*', '-', '+', '='].includes(value);

  return (
    <TouchableOpacity style={[styles.button, isOperator && styles.operatorButton]}>
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#4A4A4A',
    flex: 1,
    height: 70,
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  operatorButton: {
    backgroundColor: '#FFA500', // Orange color for operators
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default Button;
