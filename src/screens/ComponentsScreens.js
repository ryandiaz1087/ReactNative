import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
  const name = 'Ryan Diaz';
  const greeting = <Text style={styles.subHeaderStyle}>My name is {name}</Text>;

  return (
    <View>
      <Text style={styles.textStyle}>Getting started with React Native!</Text>
      {greeting}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subHeaderStyle: {
    fontSize: 25,
  },
});

export default ComponentsScreen;