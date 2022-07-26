import { updateObject } from "../../util/utility";
import {
  START_FETCHING_SMART_CONNECT,
  FINISH_FETCHING_SMART_CONNECT,
} from "../1actionTypes/SmartConnectAT";

import { SmartConnectIS } from "../2initialState/SmartConnectIS.JS";

const startFetchingSmartConnect = (state, action) => {
  return updateObject(state, { loadingSmartConnect: true });
};

const finishFetchingSmartConnect = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSmartConnect: false,
      SmartConnect: action.data,
    });
  } else {
    return updateObject(state, { loadingSmartConnect: false });
  }
};

export default function SmartConnectReducer(state = SmartConnectIS, action) {
  switch (action.type) {
    case START_FETCHING_SMART_CONNECT:
      return startFetchingSmartConnect(state, action);
    case FINISH_FETCHING_SMART_CONNECT:
      return finishFetchingSmartConnect(state, action);

    default:
      return state;
  }
}
