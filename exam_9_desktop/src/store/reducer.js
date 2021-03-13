import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
  HIDE_BUTTON,
  SEND_REQUEST_SUCCESS,
  FETCH_REQUEST_MODAL,
  SHOW_MODAL,
  CLOSE_MODAL,
  DELETE_CONTACT,
  CHANGE_VALUE,
} from "./actionTypes";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
  addButton: "block",
  editData: [],
  showModal: "none",
  id: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_REQUEST_SUCCESS:
      const contactsData = Object.keys(action.data).map((id) => {
        const newContacts = {
          id: id,
          title: action.data[id].name,
          image: action.data[id].img,
          email: action.data[id].email,
          phone: action.data[id].phone,
        };
        return newContacts;
      });
      return {
        ...state,
        contacts: contactsData,
        loading: false,
        addButton: true,
      };
    case FETCH_REQUEST_FAILURE:
      return { ...state, error: action.error, loading: false };
    case HIDE_BUTTON:
      return { ...state, addButton: "none" };
    case SEND_REQUEST_SUCCESS:
      return { ...state, loading: false };
    case FETCH_REQUEST_MODAL:
      return { ...state, editData: action.data, loading: false };
    case SHOW_MODAL:
      return { ...state, showModal: "block" };
    case CLOSE_MODAL:
      return { ...state, showModal: "none" };
    case DELETE_CONTACT:
      return { ...state, loading: false, showModal: "none" };
    case CHANGE_VALUE:
      return { ...state, editData: action.value };
    default:
      return state;
  }
};

export default reducer;
