import { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import Display from '../components/Display';
import ButtonGrid from '../components/ButtonGrid';

export default function CalculatorScreen({sHistoryActive}) {
    const [nums, sNums] = useState([])
    const [equations, sEquations] = useState([])

    function addNums(newNum){
       sNums(prevNum => [...prevNum, newNum])
       console.log(nums)
    }

    function clear(){
        sNums([])
    }

    function calculate(){
        const numsString = nums.join("")
        const numsCalculated = eval(numsString)
        sNums([numsCalculated])
        sEquations(prevEquations => [...prevEquations, numsString + ` = ${numsCalculated}`])
        console.log(equations)
    }

    return (
      <View style={styles.container}>
        <Display value={nums} sHistoryActive={sHistoryActive}/>
        <ButtonGrid onAdd={addNums} onClear={clear} onCalculate={calculate}/>
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