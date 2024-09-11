import React, { useState } from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function Contador() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Contador: {count}</Text>
      
      <Pressable style={styles.button} onPress={() => setCount(count + 1)}>
        <Text style={styles.buttonText}>Incrementar</Text>
      </Pressable>
      
      <Pressable style={styles.button} onPress={() => setCount(count - 1)}>
        <Text style={styles.buttonText}>Decrementar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: '#f39014',
  },
  text: {
    fontSize: 24,
    marginBottom: 20,
    color: '#fff',
  },
  button: {
    backgroundColor: '#1e90ff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

 