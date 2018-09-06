import React from 'react'
import { Text, View, Image } from 'react-native'
import styles from '/Users/anthony/Desktop/Manifest/navPract/styles/homescreen.js'
export default class HomeScreen extends React.Component {
  render() {
    return (
      <View >
        <Text style={styles.container}>Welcome to Home screen</Text>
      </View>
    );
  }
static navigationOptions = {
    title: 'Home',
    headerStyle: {
      backgroundColor: '#00bfff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}
