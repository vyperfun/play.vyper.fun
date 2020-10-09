import types from "../constants";

export const login = (payload) => (dispatch) => {
  const { email, password } = payload;

  dispatch({
    type: types.LOGIN,
    payload: {
      email: data.user.email,
      uid: data.user.uid,
    },
  });
};
