import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam('id');

  console.log('id: ', id);

  return (
    <View>
      <Text>ResultsShow</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ResultsShowScreen;
