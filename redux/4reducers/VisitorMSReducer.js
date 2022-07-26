import { updateObject } from "../../util/utility";
import {
  FINISH_FETCHING_VISITOR_MANAGEMENT_SYSTEM,
  START_FETCHING_VISITOR_MANAGEMENT_SYSTEM,
} from "../1actionTypes/VisitorMSAT";
import { VisitorMSInitialState } from "../2initialState/VisitorMSIS.JS";

const startFetchingVisitorMs = (state, action) => {
  return updateObject(state, { loadingVisitorMS: true });
};

const finishFetchingVisitorMs = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingVisitorMS: false,
      VisitorMS: action.data,
    });
  } else {
    return updateObject(state, { loadingVisitorMS: false });
  }
};

export default function VisitorMSReducer(
  state = VisitorMSInitialState,
  action
) {
  switch (action.type) {
    case START_FETCHING_VISITOR_MANAGEMENT_SYSTEM:
      return startFetchingVisitorMs(state, action);
    case FINISH_FETCHING_VISITOR_MANAGEMENT_SYSTEM:
      return finishFetchingVisitorMs(state, action);

    default:
      return state;
  }
}
