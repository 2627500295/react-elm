import React, { Component } from 'react';
import ActivityHeader from './ActivityHeader';
import ActivityBody from './ActivityBody';
import ActivityMore from './ActivityMore';
import './style';

export default class LimitTheCourtesy extends Component {
	state={
		specialOffer:[
			{
				title:'限时优惠',
				srcImg:'https://fuss10.elemecdn.com/c/66/89cc6ef54261bbd98b94deeff2546jpeg.jpeg?imageMogr/format/webp/',
				commodityName:'3元饿了么红包',
				goldCoin:90,
				price:3
			},
			{
				title:'特价换购',
				srcImg:'https://fuss10.elemecdn.com/b/5f/f1014b884c14aafde894e985f1116jpeg.jpeg?imageMogr/format/webp/',
				commodityName:'无线蓝牙耳机',
				goldCoin:9,
				price:249
			},
			{
				title:'特价换购',
				srcImg:'https://fuss10.elemecdn.com/5/1d/b8e34dee6e362e482499fe0552fbbjpeg.jpeg?imageMogr/format/webp/',
				commodityName:'机械手感键鼠套装',
				goldCoin:9,
				price:129
			}
		]
	}
  render = () => (
    <div className={'limit-the-cour'}>
    	<ActivityHeader>
    		<div className={'activity-title'}>
    			<span className={'line left'}></span>
    			<span className={'activity-icon'}><svg></svg>限时好礼</span>
    			<span className={'line right'}></span>
    		</div>
    		<p className={'activity-sub-title'}>金币换豪礼</p>
    	</ActivityHeader>
    	<ActivityBody specialOffer={this.state.specialOffer} />
    	<ActivityMore />
    </div>
  );
}
