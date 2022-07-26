import { updateObject } from "../../util/utility";
import {
  START_FETCHING_SUPPORT,
  FINISH_FETCHING_SUPPORT,
} from "../1actionTypes/SupportAT";

import { SupportInitialState } from "../2initialState/SupportIS.JS";

// =================================================================

const startFetchingSupport = (state, action) => {
  return updateObject(state, { loadingSupport: true });
};

const finishFetchingSupport = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSupport: false,
      Support: action.data,
    });
  } else {
    return updateObject(state, { loadingSupport: false });
  }
};

// =================================================================

export default function SupportReducer(state = SupportInitialState, action) {
  switch (action.type) {
    case START_FETCHING_SUPPORT:
      return startFetchingSupport(state, action);
    case FINISH_FETCHING_SUPPORT:
      return finishFetchingSupport(state, action);

    default:
      return state;
  }
}
