import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  container: {
    marginTop: 33,
    backgroundColor: '#eee',
  },
  text: {
    fontSize: 25,
  },
});

export default class Nav extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Header!</Text>
      </View>
    );
  }
}
