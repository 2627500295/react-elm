import React, { Component,Children } from 'react';
import './style';

export default class ActivityHeader extends Component {
  render = () => (
    <div className={'activity-header'}>
    	{
    		Children.map(this.props.children,(item)=>{
	    		return item
	    	})
    	}
    </div>
  );
}
ActivityHeader.defaultProps={
	subTit:''
}
