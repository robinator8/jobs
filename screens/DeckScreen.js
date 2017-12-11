import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Swipe from '../components/Swipe';

class DeckScreen extends Component {
  render() {
    return (
      <View>
        <Swipe
          data={this.props.jobs}
        />
      </View>
    );
  }
}

const mapStateToProps = ({ jobs }) => (
  { jobs: jobs.results }
);

export default connect(mapStateToProps, actions)(DeckScreen);
