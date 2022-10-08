import {BASE_URL} from "../../variable";

import {
  START_FETCHING_SMART_CONNECT,
  FINISH_FETCHING_SMART_CONNECT,
} from "../1actionTypes/SmartConnectAT";

export const onStartFetchingSmartConnect = () => {
  return { type: START_FETCHING_SMART_CONNECT };
};

export const onFetchingSmartConnect = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSmartConnect());
    fetch(`${BASE_URL}/posts/smart-connect`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSmartConnect(resData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onFinishFetchingSmartConnect = (data) => {
  return { type: FINISH_FETCHING_SMART_CONNECT, data };
};
