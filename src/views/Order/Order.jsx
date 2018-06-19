import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Footer from '@/components/Footer';
import { connect } from 'react-redux';

@connect()
export default class Order extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render = () => (
    <div className={classnames(this.props.className)}>
      <h1>Order</h1>
      <Footer className='footer'>1</Footer>
    </div>
  );
}
