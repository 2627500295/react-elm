import React, { Component } from 'react';
import './style';

export default class ActivityItem extends Component {
  render = () => (
    <a>
    	<img src={this.props.srcImg} />
    	<div className={'food-info'}>
				<p className={'ui-ellipsis'}>{this.props.commodityName}</p>
				<div className={'food-price'}>
					<span className={'ui-ellipsis'+' price'}>{this.props.goldCoin}金币</span>
					<del className={'ui-ellipsis'+' original-price'}>¥{this.props.price}</del>
				</div>
			</div>
    	<span className={'discount'}>{this.props.title}</span>
    </a>
  );
}