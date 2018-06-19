import React from 'react';

import getPictureURL from '@/utils/getPicUrl';

const Weather = ({ weather }) => (
  <div className="weather">
    <div className="info">
      <div className="tem temperature">{weather.temperature}</div>
      <div className="wea weather">{weather.description}</div>
    </div>
    <div className="ico">
      <img src={`${getPictureURL(weather.image_hash)}`} alt={weather.code} />
    </div>
  </div>
);

export default Weather;
