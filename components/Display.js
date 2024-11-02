import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Display = ({ value }) => {
  return (
    <View style={styles.display}>
      <Text style={styles.displayText}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  display: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  displayText: {
    fontSize: 48,
    color: '#FFFFFF',
  },
});

export default Display;
