import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import ColorCounter from './components/ColorCounter';

const SquareScreen = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);

  return (
    <View>
      <View>
        <ColorCounter color="Red" onPress={setRed} />
        <ColorCounter color="Green" onPress={setGreen} />
        <ColorCounter color="Blue" onPress={setBlue} />
      </View>
      <View style={{ height: 150, width: 150, backgroundColor: `rgb(${red}, ${green}, ${blue})` }}/>
      <Text style={styles.yourColor}>Your RGB value is: {red}, {green}, {blue} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  yourColor: {
    fontSize: 20,
  },
});

export default SquareScreen;