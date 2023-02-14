import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

export default function RadioButton() {
  const [isPress, setIsPress] = useState(true);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsPress(!isPress)}>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            {isPress ? <View style={styles.buttonPrimary}></View> : null}
          </View>
          <Text style={styles.buttonText}>Radio Button</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 24,
    color: '#FFF',
  },
  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonPrimary: {
    backgroundColor: 'black',
    borderWidth: 2,
    height: 30,
    width: 30,
    margin: 3,
    borderRadius: 20,
    marginRight: 20,
  },
  button: {
    borderColor: 'black',
    borderWidth: 2,
    height: 40,
    width: 40,
    borderRadius: 20,
    marginRight: 20,
  },
});
