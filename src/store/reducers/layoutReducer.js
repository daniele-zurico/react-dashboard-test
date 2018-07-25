import { LayoutActionTypes } from '../actions/layout.actions';

const initialState = {
  sideBar: false,
};

const layoutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LayoutActionTypes.OPEN_SIDEBAR:
      return { ...state, sideBar: true };
    case LayoutActionTypes.CLOSE_SIDEBAR:
      return { ...state, sideBar: false };
    default:
      return state;
  }
};

export default layoutReducer;
