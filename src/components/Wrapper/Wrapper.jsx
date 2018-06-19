import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Wrapper extends Component {
  state = {};

  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
  };

  static defaultProps = {
    prefixCls: '',
    className: 'wrapper',
    style: {},
  };

  render = () => {
    const { prefixCls, children, className, style } = this.props;
    const classNames = classnames(
      prefixCls,
      className,
    );

    return (
      <div className={classNames} style={style}>{children}</div>
    );
  }
}

export default Wrapper;
