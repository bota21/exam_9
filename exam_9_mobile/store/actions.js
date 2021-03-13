import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_ERROR,
  SHOW_MODAL,
  CLOSE_MODAL
} from "./actionTypes";
import axios from "../axiosContact";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchRequestSuccess = (data) => {
  return { type: FETCH_REQUEST_SUCCESS, data };
};
const fetchRequestFailure = (error) => {
  return { type: FETCH_REQUEST_ERROR, error };
};
export const showModal = () => {
    return {type: SHOW_MODAL};
};
export const closeModal = () => {
    return {type: CLOSE_MODAL};
};

export const fetchContact = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const response = await axios.get(".json");
      dispatch(fetchRequestSuccess(response.data));
    } catch (e) {
      dispatch(fetchRequestFailure());
    }
  };
};
