import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import Footer from '@/components/Common/Footer';
import { connect } from 'react-redux';

@connect()
export default class Discover extends Component {
  render = () => (
    <div>
      <h1>Discover</h1>
      <Footer className={classnames('footer')}>1</Footer>
    </div>
  );
}
