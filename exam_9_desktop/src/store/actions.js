import {
  CLOSE_MODAL,
  DELETE_CONTACT,
  EDIT_CONTACT,
  FETCH_REQUEST,
  FETCH_REQUEST_MODAL,
  FETCH_REQUEST_SUCCESS,
  HIDE_BUTTON,
  SEND_REQUEST_SUCCESS,
  SHOW_MODAL,
} from "./actionTypes";
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
export const hideButton = () => {
  return { type: HIDE_BUTTON };
};
const sendRequestSuccess = (data) => {
  return { type: SEND_REQUEST_SUCCESS, data };
};
const fetchRequestModal = (data) => {
  return { type: FETCH_REQUEST_MODAL, data };
};
export const openModal = () => {
  return { type: SHOW_MODAL };
};
export const closeModal = () => {
  return { type: CLOSE_MODAL };
};
const editContact = () => {
  return { type: EDIT_CONTACT };
};
const deleteContact = () => {
  return { type: DELETE_CONTACT };
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

export const postContacts = (data) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      await axios.post(".json", data);
      dispatch(sendRequestSuccess(data));
      console.log(data);
    } catch (e) {
      dispatch(fetchRequestFailure(e));
    }
  };
};
export const fetchModal = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      const response = await axios.get("/" + id + ".json");
      dispatch(fetchRequestModal(response.data));
    } catch (e) {
      dispatch(fetchRequestFailure(e));
    }
  };
};

export const removeContact = (id) => {
  return async (dispatch) => {
    try {
      dispatch(fetchRequest());
      let response = await axios.delete(id + ".json");
      dispatch(deleteContact());
      console.log(response);
    } catch (e) {
      dispatch(fetchRequestFailure(e));
    }
  };
};

export const changeValueContact = () => {
  
}