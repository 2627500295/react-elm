import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import Header from '@/components/Common/Header';
import Footer from '@/components/Common/Footer';

import './style';
import Search from './Search';

class Home extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    position: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: 'index',
    className: '',
    position: '吴新干线',
  };

  state = {};

  render = () => {
    const { prefixCls, className, position } = this.props;
    const classNames = classnames(prefixCls, className);
    console.log(this.props);

    return (
      <div className={classNames}>
        <Header className={classnames(`${prefixCls}-header`)}>
          <div className={classnames('position')}>
            <div className={classnames('label')} label={`当前地址: ${position}, 轻点两下重新选择`} role="button">
              <svg className={classnames('icon-map')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 31">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M22.116 22.601c-2.329 2.804-7.669 7.827-7.669 7.827-.799.762-2.094.763-2.897-.008 0 0-5.26-4.97-7.643-7.796C1.524 19.8 0 16.89 0 13.194 0 5.908 5.82 0 13 0s13 5.907 13 13.195c0 3.682-1.554 6.602-3.884 9.406zM18 13a5 5 0 1 0-10 0 5 5 0 0 0 10 0z"
                />
              </svg>
              <span className={classnames('address')}>{position}</span>
              <svg className={classnames('icon-dropdown')} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 8">
                <path
                  fill="#FFF"
                  fillRule="evenodd"
                  d="M5.588 6.588c.78.78 2.04.784 2.824 0l5.176-5.176c.78-.78.517-1.412-.582-1.412H.994C-.107 0-.372.628.412 1.412l5.176 5.176z"
                />
              </svg>
            </div>
          </div>
        </Header>
        <Search className="search" style={{ position: 'sticky', top: 0, zIndex: 999 }}>
          0
        </Search>
        <h1>Home</h1>
        <Footer className={classnames('footer')}>1</Footer>
      </div>
    );
  };
}

export default Home;
