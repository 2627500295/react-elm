
// 正在识别地址...
// 未知地址
// 吴新干线

import * as POSITION from '@/constants/position';

const initialState = {
  name: '未知地址',
};

function Position(state = initialState, action) {
  switch (action.type) {
    case POSITION.SUCCESS:
      return {
        ...state,
        ...action.data,
      };

    case POSITION.GET:
      return {
        ...state,
        name: '正在识别地址...',
      };

    default: return state;
  }
}

export default Position;
