import { put, call, all } from 'redux-saga/effects';
import getCurrentPosition from '@/utils/position';

import api from '@/utils/api';

import * as POSITION from '@/constants/position';
import { getCurSale } from '@/actions/sale';


// 任务开始
export const getPosition = () => ({
  type: POSITION.GET,
});

// 开始获取
export function* getCurPosition() {
  try {
    // 获取定位
    const position = process.env.NODE_ENV === 'development' ? { latitude: 30.63414901799691, longitude: 114.1196557204112 } : yield getCurrentPosition();

    // 获取地址
    const [location] = yield all([call(api, '/elm/poi/everse_geo_coding', {
      params: { latitude: position.latitude, longitude: position.longitude },
    }), getCurSale({ data: position })]);

    // 推送到 Reducers
    yield put({ type: POSITION.SUCCESS, data: location });
  } catch (error) {
    window.console.log(error);
  }
}

export default getCurPosition;
