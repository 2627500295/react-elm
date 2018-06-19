import Mock, { Random } from 'mockjs';

Mock.mock('/api/eleme/everse_geo_coding', (options) => {
  const { latitude, longitude } = JSON.parse(options.body);

  if (latitude === undefined) {
    return {
      message: '1 error(s) decoding:\n\n* Required field "Latitude" not found',
      name: 'THRIFT_SCHEMA_MISMATCH_REQUEST',
    };
  }

  if (longitude === undefined) {
    return {
      message: '1 error(s) decoding:\n\n* Required field "Longitude" not found',
      name: 'THRIFT_SCHEMA_MISMATCH_REQUEST',
    };
  }

  if (!latitude && !longitude) {
    return {
      message: '无效的经纬度坐标',
      name: 'INVALID_LAT_LON',
    };
  }

  return {
    address: '湖北省武汉市东西湖区径河街道吴新干线',
    city: '武汉市',
    city_id: 7,
    district_id: 5552,
    latitude: 30.637988,
    longitude: 114.123035,
    name: '吴新干线',
    // geohash: 'wt3nkbg2ueqb',
    geohash: Random.string('abcdefghijklmnopqrstuvwxyz0123456789', 12),
    mock: Random.boolean(1, 9, true),
  };
});

export default Mock;
