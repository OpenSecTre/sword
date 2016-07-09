// ----------------------------------
// Constants
// ----------------------------------
export const SCAN_SUCCESS = 'SCAN_SUCCESS';
export const SCAN_ERROR = 'SCAN_ERROR';
export const SCAN_LOADING = 'SCAN_LOADING';

export const CHANGE_IP = 'CHANGE_IP';
export const CHANGE_PORT = 'CHANGE_PORT';

// ----------------------------------
// Actions
// ----------------------------------
function _sendScan (ip, port) {
  return fetch(`/api/scan/${ip}/${port}`);
}

function _scanSuccess (result, dispatch) {
  result.json().then((json) => {
    dispatch({
      type: SCAN_SUCCESS,
      payload: json
    });
  });
}

function _scanError (error) {
  if (error) {
    console.log(error);
  }

  return {
    type: SCAN_ERROR,
    payload: []
  };
}

export function scanAction () {
  return function (dispatch, getState) {
    dispatch({
      type: SCAN_LOADING
    });

    var { scan } = getState();

    return _sendScan(encodeURIComponent(scan.ip), encodeURIComponent(scan.port)).then(
      (result) => _scanSuccess(result, dispatch),
      (error) => dispatch(_scanError(error))
    );
  };
}

export function changeIpAction (ip) {
  return {
    type: CHANGE_IP,
    payload: ip
  };
}

export function changePortAction (port) {
  return {
    type: CHANGE_PORT,
    payload: port
  };
}

// ----------------------------------
// Reducer
// ----------------------------------
const initialState = {
  ip: '',
  port: '',
  result: [],
  scanning: false
};

export default function scanReducer (state = initialState, action) {
  switch (action.type) {
    case SCAN_SUCCESS:
      return Object.assign({}, state, action.payload, {
        scanning: false
      });

    case SCAN_ERROR:
      return Object.assign({}, state, {
        scanning: false
      });

    case SCAN_LOADING:
      return Object.assign({}, state, {
        scanning: true
      });

    case CHANGE_IP:
      return Object.assign({}, state, {
        ip: action.payload
      });

    case CHANGE_PORT:
      return Object.assign({}, state, {
        port: action.payload
      });

    default:
      return state;
  }
};
