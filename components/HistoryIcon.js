import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

const HistoryIcon = ({ sHistoryActive }) => {
  const handlePress = () => {
    sHistoryActive(true);
  };

  return (
    <View style={{ position: 'absolute', top: 10, left: 10 }}>
      <TouchableOpacity onPress={handlePress}>
        <Image
          source={require('/Users/muhamedmuminovic/Desktop/calculator-1/pictures/historyIcon2.png')}
          style={{ width: 50, height: 50 }} // Slightly larger size
        />
      </TouchableOpacity>
    </View>
  );
};

export default HistoryIcon;
