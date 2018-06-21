import React, { Component } from 'react';
import './style';

export default class ActivityMore extends Component {
  render = () => (
    <div className={'activity-more'}>{this.props.content}
    	<svg></svg>
    </div>
  );
}
ActivityMore.defaultProps={
	content:'查看更多'
}
