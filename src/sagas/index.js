import { takeLatest, all } from 'redux-saga/effects';

import * as POSITION from '@/constants/position';
import getCurrentPosition from '@/actions/position';

function* Position() {
  yield takeLatest(POSITION.GET, getCurrentPosition);
}

function* rootSaga() {
  yield all([Position()]);
}

export default rootSaga;
