import { StyleSheet, Text, View } from 'react-native';
import HistoryIcon from './HistoryIcon';

function Display({value, sHistoryActive}) {
    return (
      <View style={styles.displayContainer}>
         <HistoryIcon sHistoryActive={sHistoryActive}/>
        <Text style={styles.displayText}>{value}</Text>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    displayContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-end',
      backgroundColor: '#333333', // Darker display background
      padding: 20,
      borderRadius: 10,
      marginBottom: 20,
    },
    displayText: {
      fontSize: 48,
      color: '#ffffff', // White text for contrast
    },
  });

export default Display;
