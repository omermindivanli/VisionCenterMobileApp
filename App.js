import React from 'react';
import { View } from 'react-native';
import Nav from './src/components/Nav';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appMessage: 'Hej Hej!',
    };
  }
  componentWillMount() {
    console.log(this.state.appMessage);
  }
  render() {
    return (
      <View>
        <Nav />
      </View>
    );
  }
}
