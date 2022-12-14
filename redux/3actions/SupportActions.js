import {
  START_FETCHING_SUPPORT,
  FINISH_FETCHING_SUPPORT,
} from "../1actionTypes/SupportAT";
import {BASE_URL} from "../../variable";


export const onStartFetchingSupport = () => {
  return { type: START_FETCHING_SUPPORT };
};

export const onFetchingSupport = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSupport());
    fetch(`${BASE_URL}/posts/support`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSupport(resData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onFinishFetchingSupport = (data) => {
  return { type: FINISH_FETCHING_SUPPORT, data };
};
