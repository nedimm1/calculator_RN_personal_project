import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';

export default function CalculatorScreen() {
    return (
      <View style={styles.container}>
        <Display />
        <ButtonGrid />
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#202020',
      padding: 20,
    },
  });