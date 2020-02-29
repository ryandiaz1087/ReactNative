import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextScreen = () => {
  const [name, setName] = useState('');

  console.log(name);
  return (
    <View>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        value={name}
        onChangeText={(newValue) => setName(newValue)}
        placeholder="your-name@name.com"
      />
      <Text>My name is {name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 2, 
  },
});

export default TextScreen;
