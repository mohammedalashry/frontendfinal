import { updateObject } from "../../util/utility";
import {
  FINISH_FETCHING_LINKS,
  START_FETCHING_LINKS,
} from "../1actionTypes/socialAT";
import { socialInitialState } from "../2initialState/SocialIS";

const startFetchingLinks = (state, action) => {
  return updateObject(state, { loadingLinks: true });
};

const finishFetchingLinks = (state, action) => {
  if (action.links) {
    return updateObject(state, { loadingLinks: false, links: action.links });
  } else {
    return updateObject(state, { loadingLinks: false });
  }
};

export default function socialReducer(state = socialInitialState, action) {
  switch (action.type) {
    case START_FETCHING_LINKS:
      return startFetchingLinks(state, action);
    case FINISH_FETCHING_LINKS:
      return finishFetchingLinks(state, action);

    default:
      return state;
  }
}
