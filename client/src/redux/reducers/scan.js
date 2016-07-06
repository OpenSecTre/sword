import * as actionType from 'redux/constants/scan';
const initialState = {
  ip: '127.0.0.1',
  port: '22',
  result: [],
  scanning: false
};

export default function scanReducer (state = initialState, action) {
  switch (action.type) {
    case actionType.SCAN_SUCCESS:
      return Object.assign({}, state, action.payload, {
        scanning: false
      });

    case actionType.SCAN_ERROR:
      return Object.assign({}, state, {
        scanning: false
      });

    case actionType.SCAN_LOADING:
      return Object.assign({}, state, {
        scanning: true
      });

    case actionType.CHANGE_IP:
      return Object.assign({}, state, {
        ip: action.payload
      });

    case actionType.CHANGE_PORT:
      return Object.assign({}, state, {
        port: action.payload
      });

    default:
      return state;
  }
};
