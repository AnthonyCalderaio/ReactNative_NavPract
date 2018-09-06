//LoginScreen.js
import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
export default class LoginScreen extends React.Component {
  render() {
    return (
      <View>
        
        <Button
          title="Go to Home screen"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    );
  }
static navigationOptions = {
    title: 'Login',
    headerStyle: {
      backgroundColor: '#00bfff',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  };
}
