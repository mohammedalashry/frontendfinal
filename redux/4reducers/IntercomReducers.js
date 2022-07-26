import { updateObject } from "../../util/utility";
import {
  START_FETCHING_INTERCOM,
  FINISH_FETCHING_INTERCOM,
} from "../1actionTypes/IntercomAT";

import { IntercomIS } from "../2initialState/IntercomIS.JS";

const startFetchingIntercom = (state, action) => {
  return updateObject(state, { loadingIntercom: true });
};

const finishFetchingIntercom = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingIntercom: false,
      Intercom: action.data,
    });
  } else {
    return updateObject(state, { loadingIntercom: false });
  }
};

export default function IntercomReducer(state = IntercomIS, action) {
  switch (action.type) {
    case START_FETCHING_INTERCOM:
      return startFetchingIntercom(state, action);
    case FINISH_FETCHING_INTERCOM:
      return finishFetchingIntercom(state, action);

    default:
      return state;
  }
}
