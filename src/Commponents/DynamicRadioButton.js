import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function DynamicRadioButton() {
  const [isPress, setIsPress] = useState(1);

  const language = [
    {
      id: 1,
      name: 'html',
    },
    {
      id: 2,
      name: 'css',
    },
    {
      id: 3,
      name: 'javaScript',
    },
    {
      id: 4,
      name: 'react-native',
    },
    {
      id: 5,
      name: 'react-js',
    },
    {
      id: 6,
      name: 'react',
    },
  ];
  return (
    <View style={styles.container}>
      {language.map((item, index) => (
        <TouchableOpacity key={index} onPress={() => setIsPress(item.id)}>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              {isPress === item.id ? (
                <View style={styles.buttonPrimary}></View>
              ) : null}
            </View>
            <Text style={styles.buttonText}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginLeft: 100,
  },
  buttonText: {
    fontSize: 24,
    color: '#00425A',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonPrimary: {
    backgroundColor: '#00425A',
    height: 30,
    width: 30,
    margin: 3,
    borderRadius: 20,
    marginRight: 20,
  },
  button: {
    borderColor: '#00425A',
    borderWidth: 2,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 20,
  },
});
