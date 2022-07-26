import {
  START_FETCHING_INTERCOM,
  FINISH_FETCHING_INTERCOM,
} from "../1actionTypes/IntercomAT";

export const onStartFetchingIntercom = () => {
  return { type: START_FETCHING_INTERCOM };
};

export const onFetchingIntercom = () => {
  return (dispatch) => {
    dispatch(onStartFetchingIntercom());
    fetch(`https://advanced-velocity.herokuapp.com/posts/intercom`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingIntercom(resData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onFinishFetchingIntercom = (data) => {
  return { type: FINISH_FETCHING_INTERCOM, data };
};
