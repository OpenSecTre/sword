import * as types from 'redux/constants/scan';

function sendScan () {
  return fetch('/api/scan');
}

function scanSuccess (result, dispatch) {
  result.json().then((json) => {
    dispatch({
      type: types.SCAN_SUCCESS,
      payload: json
    });
  });
}

function scanError (error) {
  console.log(error);
  return {
    type: types.SCAN_ERROR
  }
}

export function scanAction () {
  return function (dispatch) {
    dispatch({
      type: types.SCAN_LOADING
    });

    return sendScan().then(
      (result) => scanSuccess(result, dispatch),
      (error) => dispatch(scanError(error))
    );
  };
}

export function changeIpAction (ip) {
  return {
    type: types.CHANGE_IP,
    payload: ip
  };
}

export function changePortAction (port) {
  return {
    type: types.CHANGE_PORT,
    payload: port
  };
}
