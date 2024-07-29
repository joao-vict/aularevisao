import { View, StyleSheet } from 'react-native';

import Tabela from './Olimpiadas';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
     <Tabela pais="Brasil" medalhas="0|1|2= 3" pais2="Espanha" medalhas2="0|0|1 = 1"/>
    </View>
  );
}

  const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }
  });
  