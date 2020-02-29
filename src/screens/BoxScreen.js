import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textOneStyle} />
      <Text style={styles.textTwoStyle} />
      <Text style={styles.textThreeStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    borderWidth: 3,
    borderColor: 'black',
    height: 200,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textOneStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'red'
  },
  textTwoStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'green',
    alignSelf: 'flex-end',
  },
  textThreeStyle: {
    height: 100,
    width: 100,
    backgroundColor: 'pink'
  },
});

export default BoxScreen;
