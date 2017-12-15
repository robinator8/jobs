import React, { Component } from 'react';
import { View, Platform } from 'react-native';
import { Button } from 'react-native-elements';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SettingsScreen extends Component {
  static navigationOptions = {
    headerStyle: {
      marginTop: Platform.OS === 'android' ? 24 : null
    }
  };

  render() {
    return (
      <View style={{ paddingTop: 10, }}>
        <Button
          large
          title="Reset Liked Jobs"
          icon={{ name: 'delete-forever' }}
          backgroundColor="#f44336"
          onPress={this.props.clearLikedJobs}
        />
      </View>
    );
  }
}

export default connect(null, actions)(SettingsScreen);
