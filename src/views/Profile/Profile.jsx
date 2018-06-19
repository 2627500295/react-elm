import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Footer from '@/components/Footer';
import { connect } from 'react-redux';

@connect()
export default class Profile extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: 'footer',
  }

  render = () => (
    <div>
      <h1>Profile</h1>
      <Footer className={classnames(this.props.className)}>1</Footer>
    </div>
  );
}
