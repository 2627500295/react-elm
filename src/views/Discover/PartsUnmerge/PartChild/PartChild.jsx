import React, { Component } from 'react';
import './style';

export default class PartChild extends Component {
  get getHeight(){
    return this.props.isStatus?'actHeight':''
  }
  render = () => (
    <div className={`part-list ${this.getHeight}`}>
      <div className='content-wrapper'>
        <p className='title' style={this.props.styleItem}>{this.props.titleList}</p>
        <p className='tips'>{this.props.commodity}</p>
      </div>
      <img src={this.props.srcImg} />
    </div>
  );
}
PartChild.defaultProps={
  styleItem:{color:'rgb(232, 143, 40)'}
}
