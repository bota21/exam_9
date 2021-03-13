import { FETCH_REQUEST, FETCH_REQUEST_SUCCESS } from "./actionTypes";
import axios from "../axiosContacts";

const fetchRequest = () => {
  return { type: FETCH_REQUEST };
};
const fetchRequestSuccess = (data) => {
  return { type: FETCH_REQUEST_SUCCESS, data };
};
const fetchRequestFailure = (error) => {
  return { type: fetchRequestFailure, error };
};

export const fetchContacts = () => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const response = await axios.get(".json");
      dispatch(fetchRequestSuccess(response.data));
    } catch (e) {
      dispatch(fetchRequestFailure(e));
    }
  };
};
