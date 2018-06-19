import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { connect } from 'react-redux';

import Header from '@/components/Header';
import Wrapper from '@/components/Wrapper';

import Footer from '@/components/Footer';

import Position from '@/views/Home/TopHeader/Position';
import '@/views/Home/TopHeader/Position/style';

import Weather from '@/views/Home/TopHeader/Weather';
import '@/views/Home/TopHeader/Weather/style';

// import Header from './Header';
import Search from './Search';
import Carousel from './Carousel';
import './Carousel/style';


import './style';
import FoodEntry from './FoodEntry/FoodEntry';

@connect()
class Home extends Component {
  static propTypes = {
    prefixCls: PropTypes.string,
    className: PropTypes.string,
    weather: PropTypes.shape({
      temperature: PropTypes.number,
      code: PropTypes.string,
      description: PropTypes.string,
      image_hash: PropTypes.string,
    }),
    position: PropTypes.shape({}),
    sale: PropTypes.arrayOf(PropTypes.shape({})),
    foodentry: PropTypes.arrayOf(PropTypes.shape({})),
  };

  static defaultProps = {
    prefixCls: 'index',
    className: '',
    weather: {
      temperature: 28,
      code: 'CLEAR_DAY',
      description: '晴天',
      image_hash: '9b9c8e482821be2080edcffbb3a8d376png',
    },
    position: {
      address: '湖北省武汉市东西湖区径河街道吴新干线',
      city: '武汉市',
      city_id: 7,
      district_id: 5552,
      geohash: 'wt3nkbg2ueqb',
      latitude: 30.637988,
      longitude: 114.123035,
      name: '吴新干线',
    },
    sale: [
      {
        entries: [
          {
            business_flag: 0,
            description: '',
            id: 20032073,
            image_hash: '0e764044fb6df771e9cb42196ae3eeeejpeg',
            is_in_serving: true,
            is_personalized: false,
            link: 'eleme://web?navColor=&target_name=%E6%96%B0%E5%AE%A2%E4%B8%93%E4%BA%AB&url=https%3A%2F%2Fh5.ele.me%2Fnewuser%2F%3Factivity_ids%3D%255B10046017%255D&title=%E6%96%B0%E5%AE%A2%E4%B8%93%E4%BA%AB&navType=0&animation_type=1',
            more: '{"tags":null}',
            name: '新客专享',
            name_color: '',
            position: 1,
          },
        ],
        group_name: 'big_sale_promotion',
        group_type: 16,
        rank_id: '6e52081807f440789540324a695587a3',
        ranking_weight: 120,
        template: 'big_sale_promotion_template',
      },
    ],
    foodentry: [],
  };

  render = () => {
    const { prefixCls, className, position, weather, sale, foodentry } = this.props;
    const [bigSale] = sale;
    const classNames = classnames(prefixCls, className);

    return (
      <div className={classNames}>
        <Header tagName="header" className="index-header">
          <Wrapper style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Position position={position} />
            <Weather weather={weather} />
          </Wrapper>
        </Header>
        <Search />
        <Carousel className="carousel" carousel={bigSale} />
        <FoodEntry className="foodentry" foodentry={foodentry} />
        <Footer className={classnames(`${prefixCls}-footer`, 'footer')} />
      </div>
    );
  };
}

export default Home;
