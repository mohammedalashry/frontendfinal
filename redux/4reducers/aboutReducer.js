import { updateObject } from "../../util/utility";
import {
  FINISH_FETCHING_ABOUT_SECTION_1,
  START_FETCHING_ABOUT_SECTION_1,
  //
  FINISH_FETCHING_ABOUT_SECTION_2,
  START_FETCHING_ABOUT_SECTION_2,
} from "../1actionTypes/aboutAT";
import { aboutInitialState } from "../2initialState/aboutIS";

const startFetchingSection1 = (state, action) => {
  return updateObject(state, { loadingSection1: true });
};

const finishFetchingSection1 = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSection1: false,
      section1: action.data,
    });
  } else {
    return updateObject(state, { loadingSection1: false });
  }
};

// =================================================================

const startFetchingSection2 = (state, action) => {
  return updateObject(state, { loadingSection2: true });
};

const finishFetchingSection2 = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSection2: false,
      section2: action.data,
    });
  } else {
    return updateObject(state, { loadingSection2: false });
  }
};

export default function aboutReducer(state = aboutInitialState, action) {
  switch (action.type) {
    case START_FETCHING_ABOUT_SECTION_1:
      return startFetchingSection1(state, action);
    case FINISH_FETCHING_ABOUT_SECTION_1:
      return finishFetchingSection1(state, action);

    case START_FETCHING_ABOUT_SECTION_2:
      return startFetchingSection2(state, action);
    case FINISH_FETCHING_ABOUT_SECTION_2:
      return finishFetchingSection2(state, action);

    default:
      return state;
  }
}
