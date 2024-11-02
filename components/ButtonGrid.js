import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';

export default function ButtonGrid({ onAdd, onClear, onCalculate }) {
  const isSpecialButton = (label) => ['%', '/', '×', '-', '+', '(', ")"].includes(label);
  const isClearButton = (label) => label === 'C';
  const isEqualButton = (label) => label === '=';

  const handlePress = (label) => {
    if (isClearButton(label)) {
      onClear();
    } else if (isEqualButton(label)) {
      onCalculate();
    } else {
      onAdd(label);
    }
  };

  return (
    <View style={styles.buttonContainer}>
      {[
        ['C', '(', ")", '/'],
        ['7', '8', '9', '×'],
        ['4', '5', '6', '-'],
        ['1', '2', '3', '+'],
        ['0', '.', '='],
      ].map((row, rowIndex) => (
        <View key={rowIndex} style={styles.buttonRow}>
          {row.map((label) => (
            <TouchableOpacity
              onPress={() => handlePress(label)}
              key={label}
              style={[
                styles.button,
                label === '0' ? styles.zeroButton : null,
                isSpecialButton(label) ? styles.operatorButton : null,
                isClearButton(label) ? styles.clearButton : null,
                isEqualButton(label) ? styles.equalButton : null,
              ]}
            >
              <Text style={[
                styles.buttonText, 
                isSpecialButton(label) ? styles.operatorText : null
              ]}>{label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
    justifyContent: 'space-between',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: 70,
    height: 70,
    backgroundColor: '#444444',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35,
    marginHorizontal: 5,
  },
  zeroButton: {
    width: 150,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#ffffff',
  },
  operatorButton: {
    backgroundColor: '#FFA500',
  },
  operatorText: {
    color: '#ffffff',
  },
  clearButton: {
    backgroundColor: 'red',
  },
  equalButton: {
    backgroundColor: 'green',
  },
});
