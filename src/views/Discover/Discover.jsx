import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import classnames from 'classnames';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';
import { connect } from 'react-redux';
import './style';

@connect()
export default class Discover extends Component {
  render = () => (
    <div className='discover'>
      <Header>
        <Wrapper>
          <div className="back">
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIzMiI+PHBhdGggZmlsbD0iI2ZmZiIgZD0iTTE2LjU1MiA1LjYzM0wxNC41MDggMy41OSAyLjI0MyAxNS44NTMgMTQuNTA4IDI4LjQxbDIuMDQ0LTIuMDQzLTEwLjIyLTEwLjUxM3oiLz48L3N2Zz4=" />
          </div>
          <div className="title">发现</div>
        </Wrapper>
      </Header>
     <div className='discover-content'></div>
      <Footer className={classnames('footer')}>1</Footer>
    </div>
  );
}
