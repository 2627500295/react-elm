import { combineReducers } from 'redux';

import position from './position';
import sale from './sale';

const rootReducers = combineReducers({ position, sale });

export default rootReducers;
