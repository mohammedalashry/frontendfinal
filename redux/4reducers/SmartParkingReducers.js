import { updateObject } from "../../util/utility";
import {
  START_FETCHING_SMART_PARKING,
  FINISH_FETCHING_SMART_PARKING,
} from "../1actionTypes/SmartParkingAT";

import { SmartParkingIS } from "../2initialState/SmartParkingIS.JS";

const startFetchingSmartParking = (state, action) => {
  return updateObject(state, { loadingSmartParking: true });
};

const finishFetchingSmartParking = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSmartParking: false,
      SmartParking: action.data,
    });
  } else {
    return updateObject(state, { loadingSmartParking: false });
  }
};

export default function SmartParkingReducer(
  state = SmartParkingIS,
  action
) {
  switch (action.type) {
    case START_FETCHING_SMART_PARKING:
      return startFetchingSmartParking(state, action);
    case FINISH_FETCHING_SMART_PARKING:
      return finishFetchingSmartParking(state, action);

    default:
      return state;
  }
}
