import { toast } from "react-toastify";
import {
  FINISH_FETCHING_ALL_PORJECTS,
  FINISH_FETCH_SPECIFIC_PROJECT,
  START_FETCHING_ALL_PORJECTS,
  START_FETCH_SPECIFIC_PROJECT,
} from "../1actionTypes/projectsAT";

// ========================================================================

const onStartFetchingProjects = () => {
  return { type: START_FETCHING_ALL_PORJECTS };
};

export const onFetchingProjects = () => {
  return (dispatch) => {
    dispatch(onStartFetchingProjects());
    fetch("https://advanced-velocity-2022.herokuapp.com/projects")
      .then((res) => res.json())
      .then((resData) => {
        console.log(resData);
        dispatch(onFinishFetchingProjects(resData));
        if (resData.error) {
          toast.error(resData.error);
        }
      })
      .catch((err) => console.log(err));
  };
};

const onFinishFetchingProjects = (projects) => {
  return { type: FINISH_FETCHING_ALL_PORJECTS, projects };
};
// ========================================================================

const onStartFetchingSpecifcProject = () => {
  return { type: START_FETCH_SPECIFIC_PROJECT };
};

export const onFetchingSpecificProject = (projectId) => {
  return (dispatch) => {
    dispatch(onStartFetchingSpecifcProject());
    fetch(`https://advanced-velocity-2022.herokuapp.com/projects/${projectId}`)
      .then((res) => res.json())
      .then((resData) => {
        console.log(46, resData);
        dispatch(onFinishFetchingSpecificProject(resData));
        if (resData.error) {
          toast.error(resData.error);
        }
      });
  };
};

const onFinishFetchingSpecificProject = (project) => {
  return { type: FINISH_FETCH_SPECIFIC_PROJECT, project };
};
