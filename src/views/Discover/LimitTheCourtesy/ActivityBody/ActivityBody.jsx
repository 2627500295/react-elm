import React, { Component } from 'react';
import ActivityItem from './ActivityItem';
import './style';

export default class ActivityBody extends Component {
  render = () => (
    <div className={'activity-body'}>
	    {
	    	this.props.specialOffer.map((item,idx)=>{
	    		return (
	    			<ActivityItem key={idx}
	    			srcImg={item.srcImg}
	    			commodityName={item.commodityName}
	    			goldCoin={item.goldCoin}
	    			price={item.price}
	    			title={item.title} />
	    		)
	    	})
	    }
    </div>
  );
}
