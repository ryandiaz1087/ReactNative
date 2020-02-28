import React from 'react';
import { View, Button, StyleSheet, Text } from 'react-native';

const ColorCounter = ({ color, onPress }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`Increase ${color}`} onPress={() => onPress(prevState => prevState + 10)}  />
      <Button title={`Decrease ${color}`} onPress={() => onPress(prevState => prevState - 10)}  />
    </View>
  );
}

const styles = StyleSheet.create({});

export default ColorCounter;