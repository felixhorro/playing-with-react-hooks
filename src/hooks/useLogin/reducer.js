
const types = {
  RESET: 'NO_USER',
  LOGIN: {
    REQUEST: 'LOGIN_REQUEST',
    SUCCESS: 'LOGIN_SUCCESS',
    ERROR: 'LOGIN_ERROR'
  }
};

export const reset = () => ({
    type: types.RESET
});

export const loginRequest = () => ({
    type: types.LOGIN.REQUEST
});

export const loginSuccess = ({ name, rol }) => ({
    type: types.LOGIN.SUCCESS,
    payload: { name, rol }
});

export const loginError = (error) => ({
    type: types.LOGIN.ERROR,
    payload: error
});


export const initialState = {
  user: {},
  error: null,
  loading: false
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.RESET:
      return initialState;
    case types.LOGIN.REQUEST:
      return {
        ...state,
        loading: true
      }
    case types.LOGIN.SUCCESS:
      return {
        user: action.payload,
        error: null,
        loading: false
      }
    case types.LOGIN.ERROR:
      return {
        user: {},
        error: action.payload,
        loading: false
      }
    default:
      throw new Error('Unknown action type');
  }
}
