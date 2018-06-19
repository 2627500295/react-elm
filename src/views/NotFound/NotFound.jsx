import React, { Component } from 'react';
import { connect } from 'react-redux';

@connect()
class NotFound extends Component {
  render = () => (
    <div>
      <h1>NotFound</h1>
    </div>
  );
}

export default NotFound;
