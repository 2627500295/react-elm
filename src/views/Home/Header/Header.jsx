
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import { getPosition } from '@/actions/position';

@connect(
  state => state,
  dispatch => ({
    getPosition: () => dispatch(getPosition()),
  }),
)
class Header extends Component {
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.shape({
      name: PropTypes.string,
    }),
  };

  static defaultProps = {
    className: '',
    position: {},
  };

  componentDidMount() {
    this.props.getPosition();
  }

  render = () => {
    const { className, position } = this.props;
    const classNames = classnames(className);

    return (
      <header className={classNames}>
        <div className="header-wrapper">

        </div>
      </header>
    );
  }
}

export default Header;
