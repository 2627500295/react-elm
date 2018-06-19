import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

class Header extends PureComponent {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    style: PropTypes.shape({}),
    tagName: PropTypes.string,
  };

  static defaultProps = {
    prefixCls: '',
    className: '',
    tagName: 'header',
    style: {
      backgroundImage: 'linear-gradient(90deg, #0af, #0085ff)',
      color: '#fff',
    },
  };

  render = () => {
    const { tagName, prefixCls, children, className, style } = this.props;
    const classNames = classnames(prefixCls, className);

    return React.createElement(tagName, { className: classNames, style }, children);
  }
}

export default Header;
