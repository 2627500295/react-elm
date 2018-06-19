import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect()
export default class Loading extends Component {
  render = () => (
    <div>
      <h1>Loading</h1>
    </div>
  );
}
