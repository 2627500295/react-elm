import React, { Component } from 'react';
import './style';
export default class Order extends Component {
	render = () => (
		<div className='empty-order'>
			<section className='nodatatipWrap'>
			<img src='//fuss10.elemecdn.com/d/60/70008646170d1f654e926a2aaa3afpng.png' />
			<h3>登录后查看外卖订单</h3>
			<button>立即登录</button>
			</section>
		</div>
	);
}