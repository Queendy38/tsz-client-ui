import { BOOK } from './actions';

export const INITIAL_STATE = 
 null;

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BOOK:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};
