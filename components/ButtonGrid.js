import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Button from './Button';

export default function ButtonGrid() {
    const isSpecialButton = (label) => ['C', '%', '÷', '×', '-', '+', '='].includes(label);
  
    return (
      <View style={styles.buttonContainer}>
        {[
          ['C', '%', '÷'],
          ['7', '8', '9', '×'],
          ['4', '5', '6', '-'],
          ['1', '2', '3', '+'],
          ['0', '.', '='],
        ].map((row, rowIndex) => (
          <View key={rowIndex} style={styles.buttonRow}>
            {row.map((label) => (
              <TouchableOpacity
                key={label}
                style={[
                  styles.button,
                  label === '0' ? styles.zeroButton : null,
                  isSpecialButton(label) ? styles.operatorButton : null,
                ]}
              >
                <Text style={[styles.buttonText, isSpecialButton(label) ? styles.operatorText : null]}>{label}</Text>
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
      backgroundColor: '#444444', // Default button color
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 35,
      marginHorizontal: 5,
    },
    zeroButton: {
      width: 150, // Double width for zero button
      justifyContent: 'center',
    },
    buttonText: {
      fontSize: 24,
      color: '#ffffff', // Default text color
    },
    operatorButton: {
      backgroundColor: '#FFA500', // Orange background for operators and special buttons (C, %)
    },
    operatorText: {
      color: '#ffffff', // White text for operators and special buttons
    },
  });