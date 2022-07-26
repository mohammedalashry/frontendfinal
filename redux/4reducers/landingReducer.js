import { updateObject } from "../../util/utility";

import {
  FINISH_FETCHING_SECTION_1,
  START_FETCHING_SECTION_1,
  //
  FINISH_FETCHING_SECTION_2,
  START_FETCHING_SECTION_2,
  //
  FINISH_FETCHING_SECTION_3,
  START_FETCHING_SECTION_3,
  //
  FINISH_FETCHING_SECTION_4,
  START_FETCHING_SECTION_4,
  //
  FINISH_FETCHING_SECTION_5,
  START_FETCHING_SECTION_5,
  //
  FINISH_FETCHING_SECTION_6,
  START_FETCHING_SECTION_6,
  //
  FINISH_FETCHING_SECTION_7,
  START_FETCHING_SECTION_7,
} from "../1actionTypes/landingATs";
import { landingInitialState } from "../2initialState/landingIS";

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

// =================================================================

const startFetchingSection3 = (state, action) => {
  return updateObject(state, { loadingSection3: true });
};

const finishFetchingSection3 = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSection3: false,
      section3: action.data,
    });
  } else {
    return updateObject(state, { loadingSection3: false });
  }
};

// =================================================================

const startFetchingSection4 = (state, action) => {
  return updateObject(state, { loadingSection4: true });
};

const finishFetchingSection4 = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSection4: false,
      section4: action.data,
    });
  } else {
    return updateObject(state, { loadingSection4: false });
  }
};

// =================================================================

const startFetchingSection5 = (state, action) => {
  return updateObject(state, { loadingSection5: true });
};

const finishFetchingSection5 = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSection5: false,
      section5: action.data,
    });
  } else {
    return updateObject(state, { loadingSection5: false });
  }
};

// =================================================================

const startFetchingSection6 = (state, action) => {
  return updateObject(state, { loadingSection6: true });
};

const finishFetchingSection6 = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSection6: false,
      section6: action.data,
    });
  } else {
    return updateObject(state, { loadingSection6: false });
  }
};

// =================================================================

const startFetchingSection7 = (state, action) => {
  return updateObject(state, { loadingSection7: true });
};

const finishFetchingSection7 = (state, action) => {
  if (action.data) {
    return updateObject(state, {
      loadingSection7: false,
      section7: action.data,
    });
  } else {
    return updateObject(state, { loadingSection7: false });
  }
};

// =================================================================

export default function landingReducer(state = landingInitialState, action) {
  switch (action.type) {
    case START_FETCHING_SECTION_1:
      return startFetchingSection1(state, action);
    case FINISH_FETCHING_SECTION_1:
      return finishFetchingSection1(state, action);

    case START_FETCHING_SECTION_2:
      return startFetchingSection2(state, action);
    case FINISH_FETCHING_SECTION_2:
      return finishFetchingSection2(state, action);

    case START_FETCHING_SECTION_3:
      return startFetchingSection3(state, action);
    case FINISH_FETCHING_SECTION_3:
      return finishFetchingSection3(state, action);

    case START_FETCHING_SECTION_4:
      return startFetchingSection4(state, action);
    case FINISH_FETCHING_SECTION_4:
      return finishFetchingSection4(state, action);

    case START_FETCHING_SECTION_5:
      return startFetchingSection5(state, action);
    case FINISH_FETCHING_SECTION_5:
      return finishFetchingSection5(state, action);

    case START_FETCHING_SECTION_6:
      return startFetchingSection6(state, action);
    case FINISH_FETCHING_SECTION_6:
      return finishFetchingSection6(state, action);

    case START_FETCHING_SECTION_7:
      return startFetchingSection7(state, action);
    case FINISH_FETCHING_SECTION_7:
      return finishFetchingSection7(state, action);

    default:
      return state;
  }
}
