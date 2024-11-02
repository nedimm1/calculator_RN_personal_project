import React from 'react';
import { StyleSheet, View } from 'react-native';
import Button from './Button';

const ButtonGrid = () => {
  const buttons = [
    ['C', '(', ')', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <View style={styles.buttonContainer}>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.buttonRow}>
          {row.map((buttonValue) => (
            <Button key={buttonValue} value={buttonValue} />
          ))}
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 2,
    padding: 10,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});

export default ButtonGrid;
