import {BASE_URL} from "../../variable";

import {
  FINISH_FETCHING_VISITOR_MANAGEMENT_SYSTEM,
  START_FETCHING_VISITOR_MANAGEMENT_SYSTEM,
} from "../1actionTypes/VisitorMSAT";

export const onStartFetchingVisitorMS = () => {
  return { type: START_FETCHING_VISITOR_MANAGEMENT_SYSTEM };
};

export const onFetchingVisitorMS = () => {
  return (dispatch) => {
    dispatch(onStartFetchingVisitorMS());
    fetch(
      `${BASE_URL}/posts/visitor-management-system`
    )
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingVisitorMS(resData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onFinishFetchingVisitorMS = (data) => {
  return { type: FINISH_FETCHING_VISITOR_MANAGEMENT_SYSTEM, data };
};
