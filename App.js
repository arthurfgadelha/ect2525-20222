import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>HELLO ECT</Text>
      <Text></Text>
      <Text>Hello!! </Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#597',
    alignItems: 'center',
    justifyContent: 'center',

    
  },
  texto: {
      color: 'red',
      fontSize: 30,
    },

    logo: {
      width: 50,
      height: 50,
    },

});
