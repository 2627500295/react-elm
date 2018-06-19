import * as SALE from '@/constants/sale';

const initialState = [];

function Position(state = initialState, action) {
  switch (action.type) {
    case SALE.SUCCESS:
      return [...state, ...action.data];

    default: return state;
  }
}

export default Position;
