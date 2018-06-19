import { put, call } from 'redux-saga/effects';

import * as SALE from '@/constants/sale';

import api from '@/utils/api';

// 任务开始
export const getSale = () => ({
  type: SALE.GET,
});

// 开始获取
export function* getCurSale(action) {
  try {
    // 焦点图
    const sale = yield call(api, '/elm/shopping/entries', {
      params: {
        latitude: action.data.latitude,
        longitude: action.data.longitude,
        'templates[]': 'big_sale_promotion_template',
      },
    });

    // 推送到 Reducers
    yield put({ type: SALE.SUCCESS, data: sale });
  } catch (err) {
    window.console.log(err);
  }
}

export default getCurSale;
