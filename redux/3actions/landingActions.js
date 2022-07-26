import { toast } from "react-toastify";
import {
  FINISH_FETCHING_SECTION_1,
  START_FETCHING_SECTION_1,
  //
  FINISH_FETCHING_SECTION_2,
  START_FETCHING_SECTION_2,
  //
  FINISH_FETCHING_SECTION_3,
  START_FETCHING_SECTION_3,
  //
  FINISH_FETCHING_SECTION_4,
  START_FETCHING_SECTION_4,
  //
  FINISH_FETCHING_SECTION_5,
  START_FETCHING_SECTION_5,
  //
  FINISH_FETCHING_SECTION_6,
  START_FETCHING_SECTION_6,
  //
  FINISH_FETCHING_SECTION_7,
  START_FETCHING_SECTION_7,
} from "../1actionTypes/landingATs";

export const onStartFetchingSection1 = () => {
  return { type: START_FETCHING_SECTION_1 };
};

export const onFetchingSection1 = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSection1());
    fetch(`https://advanced-velocity.herokuapp.com/posts/landing-page/1`)
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

export const onFinishFetchingSection1 = (data) => {
  return { type: FINISH_FETCHING_SECTION_1, data };
};

//=========================================================================

export const onStartFetchingSection2 = () => {
  return { type: START_FETCHING_SECTION_2 };
};

export const onFetchingSection2 = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSection2());
    fetch(`https://advanced-velocity.herokuapp.com/posts/landing-page/2`)
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

export const onFinishFetchingSection2 = (data) => {
  return { type: FINISH_FETCHING_SECTION_2, data };
};

//=========================================================================

export const onStartFetchingSection3 = () => {
  return { type: START_FETCHING_SECTION_3 };
};

export const onFetchingSection3 = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSection3());
    fetch(`https://advanced-velocity.herokuapp.com/posts/landing-page/3`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSection3(resData[0]));
        if (resData.error) {
          return toast.error(resData.error);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const onFinishFetchingSection3 = (data) => {
  return { type: FINISH_FETCHING_SECTION_3, data };
};

//=========================================================================

export const onStartFetchingSection4 = () => {
  return { type: START_FETCHING_SECTION_4 };
};

export const onFetchingSection4 = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSection4());
    fetch(`https://advanced-velocity.herokuapp.com/posts/landing-page/4`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSection4(resData[0]));
        if (resData.error) {
          return toast.error(resData.error);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const onFinishFetchingSection4 = (data) => {
  return { type: FINISH_FETCHING_SECTION_4, data };
};

//=========================================================================

export const onStartFetchingSection5 = () => {
  return { type: START_FETCHING_SECTION_5 };
};

export const onFetchingSection5 = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSection5());
    fetch(`https://advanced-velocity.herokuapp.com/posts/landing-page/5`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSection5(resData[0]));
        if (resData.error) {
          return toast.error(resData.error);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const onFinishFetchingSection5 = (data) => {
  return { type: FINISH_FETCHING_SECTION_5, data };
};

//=========================================================================

export const onStartFetchingSection6 = () => {
  return { type: START_FETCHING_SECTION_6 };
};

export const onFetchingSection6 = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSection6());
    fetch(`https://advanced-velocity.herokuapp.com/posts/landing-page/6`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSection6(resData[0]));
        if (resData.error) {
          return toast.error(resData.error);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const onFinishFetchingSection6 = (data) => {
  return { type: FINISH_FETCHING_SECTION_6, data };
};

//=========================================================================

export const onStartFetchingSection7 = () => {
  return { type: START_FETCHING_SECTION_7 };
};

export const onFetchingSection7 = () => {
  return (dispatch) => {
    dispatch(onStartFetchingSection7());
    fetch(`https://advanced-velocity.herokuapp.com/posts/landing-page/7`)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingSection7(resData[0]));
        if (resData.error) {
          return toast.error(resData.error);
        }
      })
      .catch((err) => console.log(err));
  };
};

export const onFinishFetchingSection7 = (data) => {
  return { type: FINISH_FETCHING_SECTION_7, data };
};

//=========================================================================
