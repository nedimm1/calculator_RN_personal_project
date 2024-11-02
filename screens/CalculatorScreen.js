import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';

export default function CalculatorScreen() {
    const [nums, sNums] = useState([])

    function addNums(newNum){
       sNums(prevNum => [...prevNum, newNum])
       console.log(nums)
    }

    return (
      <View style={styles.container}>
        <Display value={nums.join('')}/>
        <ButtonGrid onAdd={addNums}/>
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