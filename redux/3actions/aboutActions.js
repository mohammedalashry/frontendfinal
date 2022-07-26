import { toast } from "react-toastify";
import {
  FINISH_FETCHING_ABOUT_SECTION_1,
  START_FETCHING_ABOUT_SECTION_1,
  //
  FINISH_FETCHING_ABOUT_SECTION_2,
  START_FETCHING_ABOUT_SECTION_2,
} from "../1actionTypes/aboutAT";

const onStartFetchingSection1 = () => {
  return { type: START_FETCHING_ABOUT_SECTION_1 };
};

export const onFetchingAboutSection1 = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSection1());
    fetch(`https://advanced-velocity.herokuapp.com/posts/about-us/1`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSection1(resData[0]));
        if (resData.error) {
          return toast.error(resData.error);
        }
      })
      .catch((err) => console.log(err));
  };
};

const onFinishFetchingSection1 = (data) => {
  return { type: FINISH_FETCHING_ABOUT_SECTION_1, data };
};

//=========================================================================

const onStartFetchingSection2 = () => {
  return { type: START_FETCHING_ABOUT_SECTION_2 };
};

export const onFetchingAboutSection2 = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSection2());
    fetch(`https://advanced-velocity.herokuapp.com/posts/about-us/2`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSection2(resData[0]));
        if (resData.error) {
          return toast.error(resData.error);
        }
      })
      .catch((err) => console.log(err));
  };
};

const onFinishFetchingSection2 = (data) => {
  return { type: FINISH_FETCHING_ABOUT_SECTION_2, data };
};

//=========================================================================
