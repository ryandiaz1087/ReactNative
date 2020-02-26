import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = (props) => {
  console.log('hello');
  return (
    <View>
      <Text style={styles.text}>Yo sup bruh!</Text>
      <Button
        onPress={() => console.log('Button pressed')}
        title="Go to Components Demo"
      />
      <TouchableOpacity onPress={() => console.log('List pressed')}>
        <Text>Go To List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
