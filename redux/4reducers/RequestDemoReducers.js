import { checkValidity, updateObject } from "../../util/utility";
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
import { RequestDemoIS } from "../2initialState/RequestDemoIS";

// =================================================================
const changeRDInputHandler = (state, action) => {
  const updatedRDForm = updateObject(state.RDForm, {
    [action.inputIdentifier]: updateObject(
      state.RDForm[action.inputIdentifier],
      {
        value: action.text,
        valid: checkValidity(
          action.text,
          state.RDForm[action.inputIdentifier] &&
            state.RDForm[action.inputIdentifier].validation
        ),
        touched: true,
      }
    ),
  });

  return updateObject(state, {
    ...state,
    RDForm: updatedRDForm,
  });
};
// =================================================================
const changeRDCheckInputHandler = (state, action) => {
  console.log(38, action.checked);
  if (action.checked) {
    const updatedRDForm = updateObject(state.RDForm, {
      [action.inputIdentifier]: updateObject(
        state.RDForm[action.inputIdentifier],
        {
          value: [...state.RDForm[action.inputIdentifier].value, action.text],
        }
      ),
    });

    console.log(48, updatedRDForm);
    return updateObject(state, {
      ...state,
      RDForm: updatedRDForm,
    });
  } else {
    const currentCheckedValues = [
      ...state.RDForm[action.inputIdentifier].value,
    ];
    console.log(58, currentCheckedValues);
    const removedItem = currentCheckedValues.filter(
      (item) => item !== action.text
    );

    const updatedRDForm = updateObject(state.RDForm, {
      [action.inputIdentifier]: updateObject(
        state.RDForm[action.inputIdentifier],
        {
          value: [
            ...(state.RDForm[action.inputIdentifier].value = removedItem),
          ],
        }
      ),
    });

    return updateObject(state, {
      ...state,
      updatedRDForm,
    });
  }
};
// =================================================================

const startFetchingRD = (state, action) => {
  return updateObject(state, { loadingRD: true });
};

const finishFetchingRD = (state, action) => {
  return updateObject(state, { loadingRD: false });
};

// =================================================================
const startFetchingRDCategories = (state, action) => {
  return updateObject(state, { loadingRDCategories: true });
};

const finishFetchingRDCategories = (state, action) => {
  return updateObject(state, { loadingRDCategories: false });
};

// =================================================================

const startSendingRD = (state, action) => {
  return updateObject(state, { loadingSendingRD: true });
};

const finishSendingRD = (state, action) => {
  return updateObject(state, { loadingSendingRD: false });
};
// =================================================================

export default function RDReducer(state = RequestDemoIS, action) {
  switch (action.type) {
    case CHANGE_REQUEST_DEOM:
      return changeRDInputHandler(state, action);
    case CHANGE_REQUEST_DEOM_CHECK_BOX:
      return changeRDCheckInputHandler(state, action);

    case START_FETCHING_REQUEST_DEMO:
      return startFetchingRD(state, action);
    case FINISH_FETCHING_REQUEST_DEMO:
      return finishFetchingRD(state, action);

    case START_FETCHING_REQUEST_DEMO_CATEGORIES:
      return startFetchingRDCategories(state, action);
    case FINISH_FETCHING_REQUEST_DEMO_CATEGORIES:
      return finishFetchingRDCategories(state, action);

    case START_SENDING_REQUEST_DEMO:
      return startSendingRD(state, action);
    case FINISH_SENDING_REQUEST_DEMO:
      return finishSendingRD(state, action);

    default:
      return state;
  }
}
