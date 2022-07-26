import { updateObject } from "../../util/utility";
import {
  FINISH_FETCHING_ALL_PORJECTS,
  FINISH_FETCH_SPECIFIC_PROJECT,
  START_FETCHING_ALL_PORJECTS,
  START_FETCH_SPECIFIC_PROJECT,
} from "../1actionTypes/projectsAT";
import { projectsInitialState } from "../2initialState/projectsIS";

// ========================================================================
const startFetchingProjects = (state, action) => {
  return updateObject(state, { loadingAllProjects: true });
};

const finishFetchingProjects = (state, action) => {
  if (action.projects) {
    return updateObject(state, {
      loadingAllProjects: false,
      allProjects: action.projects,
    });
  } else {
    return updateObject(state, { loadingAllProjects: false });
  }
};
// ========================================================================

const startFetchingSpecificProject = (state, action) => {
  return updateObject(state, { loadingSpecificProject: true });
};

const finishFetchingSpecificProject = (state, action) => {
  if (action.project) {
    return updateObject(state, {
      loadingSpecificProject: false,
      specificProject: action.project,
    });
  } else {
    return updateObject(state, { loadingSpecificProject: false });
  }
};
// ========================================================================

export default function projectsReducer(state = projectsInitialState, action) {
  switch (action.type) {
    case START_FETCHING_ALL_PORJECTS:
      return startFetchingProjects(state, action);
    case FINISH_FETCHING_ALL_PORJECTS:
      return finishFetchingProjects(state, action);

    case START_FETCH_SPECIFIC_PROJECT:
      return startFetchingSpecificProject(state, action);
    case FINISH_FETCH_SPECIFIC_PROJECT:
      return finishFetchingSpecificProject(state, action);

    default:
      return state;
  }
}
