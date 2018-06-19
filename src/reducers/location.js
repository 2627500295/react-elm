
import * as LOCATION from '@/constants/location';

const initialState = {};

function location(state = initialState, action) {
  switch (action.type) {
    case LOCATION.SUCCESS:
      return {
        ...state,
        ...action.data,
      };

    case LOCATION.GET:
      return {
        ...state,
        name: '正在识别地址...',
      };

    default: return state;
  }
}

export default location;
