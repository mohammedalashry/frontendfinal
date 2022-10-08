import { toast } from "react-toastify";
import {
  FINISH_FETCHING_LINKS,
  START_FETCHING_LINKS,
} from "../1actionTypes/socialAT";

const onStartFetchingLinks = () => {
  return { type: START_FETCHING_LINKS };
};

export const onFetchingLinks = () => {
  return (dispatch) => {
    dispatch(onStartFetchingLinks());
    fetch("https://advanced-velocity-2022.herokuapp.com/social-media")
      .then((res) => res.json())
      .then((resData) => {
        console.log(17, resData);
        dispatch(onFinishFetchingLinks(resData));
        if (resData.error) {
          return toast.error(resData.error);
        }
      });
  };
};

const onFinishFetchingLinks = (links) => {
  return { type: FINISH_FETCHING_LINKS, links };
};
