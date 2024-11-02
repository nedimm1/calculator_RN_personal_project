import React from 'react';
import { View, Image, TouchableOpacity, Alert } from 'react-native';

const HistoryIcon = ({image}) => {
  const handlePress = () => {
    Alert.alert("Image Pressed!", "You pressed the image.");
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress}>
        <Image
        source={"/Users/muhamedmuminovic/Desktop/calculator-1/pictures/historyIcon2.png"}
          style={{ width: 200, height: 200 }} 
        />
      </TouchableOpacity>
    </View>
  );
};

export default HistoryIcon;
