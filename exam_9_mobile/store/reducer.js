import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_ERROR,
  SHOW_MODAL,
  CLOSE_MODAL,
} from "./actionTypes";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
  modalVisible: false,
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
      return { ...state, contacts: contactsData, loading: false };
    case FETCH_REQUEST_ERROR:
      return { ...state, error: action.error, loading: false };
    case SHOW_MODAL:
      return { ...state, modalVisible: true };
    case CLOSE_MODAL:
      return { ...state, modalVisible: false };
    default:
      return state;
  }
};
export default reducer;
