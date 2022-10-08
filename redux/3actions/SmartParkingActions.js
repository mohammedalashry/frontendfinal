import {BASE_URL} from "../../variable";

import {
  START_FETCHING_SMART_PARKING,
  FINISH_FETCHING_SMART_PARKING,
} from "../1actionTypes/SmartParkingAT";

export const onStartFetchingSmartParking = () => {
  return { type: START_FETCHING_SMART_PARKING };
};

export const onFetchingSmartParking = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSmartParking());
    fetch(`${BASE_URL}/posts/smart-parking`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSmartParking(resData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onFinishFetchingSmartParking = (data) => {
  return { type: FINISH_FETCHING_SMART_PARKING, data };
};
