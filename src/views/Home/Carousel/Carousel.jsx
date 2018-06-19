import React from 'react';
import getPictureURL from '@/utils/getPicUrl';

const Carousel = ({ className, carousel }) => {
  const sale = carousel.entries;

  return (
    <div className={className}>
      <div className="swipe">
        <div className="swipe-wrap">
          <div className="swipe-item is-active">
            <img src={getPictureURL(sale[0].image_hash)} alt="" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Carousel;
