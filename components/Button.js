import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

const Button = ({ value }) => {
  const isOperator = ['C', '(', ')', '/', '*', '-', '+'].includes(value);
  const isEqualButton = value === '=';

  return (
    <TouchableOpacity
      style={[
        styles.button,
        isOperator && styles.operatorButton,
        isEqualButton && styles.equalButton,
      ]}
    >
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
  equalButton: {
    backgroundColor: '#32CD32', // Green color for '=' button
  },
  buttonText: {
    fontSize: 24,
    color: '#FFFFFF',
  },
});

export default Button;
