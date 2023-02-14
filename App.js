import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RadioButton from './src/Commponents/RadioButton';
import DynamicRadioButton from './src/Commponents/DynamicRadioButton';
export default function App() {
  return (
    <View style={styles.container}>
      {/* <RadioButton/> */}
      <DynamicRadioButton/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#7B8FA1',
  },
  text: {
    fontSize: 40,
    color: '#FFF',
  },
});
