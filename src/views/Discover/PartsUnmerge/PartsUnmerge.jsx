import React, { Component } from 'react';
import PartChild from './PartChild';
import './style';

export default class PartsUnmerge extends Component {
  state={
    partsLists:[
      {
        titleList:'百元红包',
        srcImg:'https://fuss10.elemecdn.com/3/cc/a45d2b9d7d09bbc49b40d4e626093jpeg.jpeg?imageMogr/format/webp/',
        commodity:'兴业银行联名卡',
        isStatus:true
      },
      {
        titleList:'超级会员',
        srcImg:'https://fuss10.elemecdn.com/d/eb/c8ad79611ef80216a0b84700d3e0ajpeg.jpeg?imageMogr/format/webp/',
        commodity:'每月领大额礼包',
        styleItem:{color:'rgb(245, 120, 93)'},
        isStatus:false
      },
      {
        titleList:'金币商城',
        srcImg:'https://fuss10.elemecdn.com/8/38/9c9aea0e856149083d84af3444b78jpeg.jpeg?imageMogr/format/webp/',
        commodity:'0元好物在这里',
        styleItem:{color:'rgb(255, 153, 0)'},
        isStatus:false
      },
      {
        titleList:'推荐有奖',
        srcImg:'https://fuss10.elemecdn.com/6/76/8d42eef97ff4c1c2b671085358541jpeg.jpeg?imageMogr/format/webp/',
        commodity:'5元现金拿不停',
        styleItem:{color:' rgb(27, 169, 225)'},
        isStatus:false
      },
      {
        titleList:'周边优惠',
        srcImg:'https://fuss10.elemecdn.com/5/10/2351e989d4171479ba0d7b5c06053jpeg.jpeg?imageMogr/format/webp/',
        commodity:'领取口碑好劵',
        styleItem:{color:'rgb(237, 102, 96)'},
        isStatus:false
      }
    ]
  }
  render = () => (
    <div className='parts-unmerge'>
      {
        this.state.partsLists.map((item,idx)=>{
          return (
            <PartChild key={idx}
            titleList={item.titleList}
            srcImg={item.srcImg}
            commodity={item.commodity}
            styleItem={item.styleItem}
            isStatus={item.isStatus} />
          )
        })
      }
    </div>
  );
}
