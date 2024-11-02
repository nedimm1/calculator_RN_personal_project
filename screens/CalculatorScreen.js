import React from 'react';
import { StyleSheet, View } from 'react-native';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';

const CalculatorScreen = () => {
  return (
    <View style={styles.container}>
      <Display value="0" />
      <ButtonGrid />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1E1E',
  },
});

export default CalculatorScreen;
