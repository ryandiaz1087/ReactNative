import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import ImageDetail from './components/ImageDetail';

const ImageScreen = () => {
  const dataToMap = [
    {
      title: "Forest",
      imageSource: require('../../assets/forest.jpg'),
    },
    {
      title: "Mountain",
      imageSource: require('../../assets/mountain.jpg'),
    },
    {
      title: "Beach",
      imageSource: require('../../assets/beach.jpg'),
    },
  ];
  return (
        <FlatList
          keyExtractor={item => item.title}
          data={dataToMap}
          renderItem={({ item }) => <ImageDetail title={item.title} imageSource={item.imageSource} />}
        />
    );
}

const styles = StyleSheet.create({

});

export default ImageScreen;
