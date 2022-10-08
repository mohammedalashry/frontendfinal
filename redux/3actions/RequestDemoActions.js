import {BASE_URL} from "../../variable";

import { toast } from "react-toastify";
import {
  START_FETCHING_REQUEST_DEMO,
  FINISH_FETCHING_REQUEST_DEMO,
  START_FETCHING_REQUEST_DEMO_CATEGORIES,
  FINISH_FETCHING_REQUEST_DEMO_CATEGORIES,
  START_SENDING_REQUEST_DEMO,
  FINISH_SENDING_REQUEST_DEMO,
  CHANGE_REQUEST_DEOM,
  CHANGE_REQUEST_DEOM_CHECK_BOX,
} from "../1actionTypes/RequestDemoAT";

// ============================================================
export const onStartFetchingRequestDemo = () => {
  return { type: START_FETCHING_REQUEST_DEMO };
};

export const onFetchingRequestDemo = () => {
  return (dispatch) => {
    dispatch(onStartFetchingRequestDemo());
    fetch(`${BASE_URL}/request-demo`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingRequestDemo(resData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onFinishFetchingRequestDemo = (data) => {
  return { type: FINISH_FETCHING_REQUEST_DEMO, data };
};

// =========================================================

export const onStartFetchingRequestDemoCategories = () => {
  return { type: START_FETCHING_REQUEST_DEMO_CATEGORIES };
};

export const onFetchingRequestDemoCategories = () => {
  return (dispatch) => {
    dispatch(onStartFetchingRequestDemoCategories());
    fetch(`${BASE_URL}/categories`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingRequestDemoCategroies(resData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onFinishFetchingRequestDemoCategroies = (data) => {
  return { type: FINISH_FETCHING_REQUEST_DEMO_CATEGORIES, data };
};

// =========================================================

export const onChangeRequestDemoInput = (text, inputIdentifier) => {
  return {
    type: CHANGE_REQUEST_DEOM,
    text: text,
    inputIdentifier,
  };
};
// =========================================================

export const onChangeRequestDemoCheckBoxInput = (
  checked,
  text,
  inputIdentifier
) => {
  return {
    type: CHANGE_REQUEST_DEOM_CHECK_BOX,
    checked,
    text: text,
    inputIdentifier,
  };
};
// =========================================================
export const onStartSendingRequestDemo = () => {
  return { type: START_SENDING_REQUEST_DEMO };
};

export const onSendingRequestDemo = (e, RDForm) => {
  console.log(91, RDForm);
  e.preventDefault();
  return (dispatch) => {
    dispatch(onStartSendingRequestDemo());
    fetch(`${BASE_URL}/request-demos`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: RDForm.first_name.value,
        lastName: RDForm.last_name.value,
        email: RDForm.email.value,
        phoneNumber: RDForm.phoneNumber.value,
        company: RDForm.company.value,
        interestedInLearning:
          RDForm.interests.value?.length > 0
            ? RDForm.interests.value.toString()
            : null,
        propertyYouOwn:
          RDForm.property.value?.length > 0
            ? RDForm.property.value.toString()
            : null,
        message: RDForm.message.value,
      }),
    })
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        if (resData) {
          toast.success("Sending Request demo success.");
        }
        dispatch(onFinishSendingRequestDemo(resData));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onFinishSendingRequestDemo = (data) => {
  return { type: FINISH_SENDING_REQUEST_DEMO, data };
};
