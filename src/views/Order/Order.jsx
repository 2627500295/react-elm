import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';
import { connect } from 'react-redux';
import EmptyOrder from './EmptyOrder';
import './style';
@connect()
export default class Order extends Component {
  static propTypes = {
    className: PropTypes.string,
  }

  static defaultProps = {
    className: '',
  }

  render = () => (
    <div className={classnames(this.props.className),'order'}>
      <Header>
        <Wrapper>
          <div className="back">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=" />
          </div>
          <div className="title">订单</div>
        </Wrapper>
      </Header>
      <EmptyOrder />
      <Footer className='footer'>1</Footer>
    </div>
  );
}
