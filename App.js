import {useState} from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import CalculatorScreen from './screens/CalculatorScreen';
import History from './screens/History';

export default function App() {
  const [historyActive, sHistoryActive] = useState(false)

  return (
    <SafeAreaView style={styles.container}>
      {historyActive ? <History /> :  <CalculatorScreen sHistoryActive={sHistoryActive}/>}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#202020',
  },
});
