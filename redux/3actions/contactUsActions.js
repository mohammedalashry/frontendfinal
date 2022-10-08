import {BASE_URL} from "../../variable";

import { toast } from "react-toastify";
import {
  CHANGE_CONTACT_US_INPUT,
  FINISH_CONTACT_US,
  START_CONTACT_US,
} from "../1actionTypes/contactUsAT";

export const onChangeContantUsInput = (text, inputIdentifier) => {
  return {
    type: CHANGE_CONTACT_US_INPUT,
    text: text,
    inputIdentifier,
  };
};
// ========================================================================
export const onStartContacting = () => {
  return { type: START_CONTACT_US };
};

export const onContacting = (e, contactForm) => {
  e.preventDefault();
  return (dispatch) => {
    dispatch(onStartContacting());
    fetch(`${BASE_URL}/contacts`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        firstName: contactForm.first_name.value,
        lastName: contactForm.last_name.value,
        email: contactForm.email.value,
        phoneNumber: contactForm.phoneNumber.value,
        company: contactForm.company.value,
        message: contactForm.message.value,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((resData) => {
        console.log(resData);
        if (resData) {
          return toast.success("message send successfully.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const onFinishContacting = () => {
  return { type: FINISH_CONTACT_US };
};
// ========================================================================
