import { checkValidity, updateObject } from "../../util/utility";
import {
  CHANGE_CONTACT_US_INPUT,
  FINISH_CONTACT_US,
  START_CONTACT_US,
} from "../1actionTypes/contactUsAT";
import { contactUsInitialState } from "../2initialState/contactUsIS";

const changeContactUsInputHandler = (state, action) => {
  const updatedContactUsForm = updateObject(state.contactForm, {
    [action.inputIdentifier]: updateObject(
      state.contactForm[action.inputIdentifier],
      {
        value: action.text,
        valid: checkValidity(
          action.text,
          state.contactForm[action.inputIdentifier] &&
            state.contactForm[action.inputIdentifier].validation
        ),
        touched: true,
      }
    ),
  });

  return updateObject(state, {
    ...state,
    contactForm: updatedContactUsForm,
  });
};
// =================================================================

const startContacting = (state, action) => {
  return updateObject(state, { loadingContact: true });
};

const finishContacting = (state, action) => {
  return updateObject(state, { loadingContact: false });
};
// =================================================================

export default function contactUsReducer(
  state = contactUsInitialState,
  action
) {
  switch (action.type) {
    case CHANGE_CONTACT_US_INPUT:
      return changeContactUsInputHandler(state, action);
    case START_CONTACT_US:
      return startContacting(state, action);
    case FINISH_CONTACT_US:
      return finishContacting(state, action);

    default:
      return state;
  }
}
