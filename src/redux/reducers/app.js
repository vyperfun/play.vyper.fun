import types from "../constants";

const initialState = {
  user: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN:
      return { ...state, user: action.payload };
    default:
      return state;
  }
};
