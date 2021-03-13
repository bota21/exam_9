import {
  FETCH_REQUEST,
  FETCH_REQUEST_SUCCESS,
  FETCH_REQUEST_FAILURE,
} from "./actionTypes";

const initialState = {
  contacts: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_REQUEST_SUCCESS:
      const contactsData = Object.keys(action.data).map((id) => {
        const newContacts = {
          title: action.data[id].name,
          image: action.data[id].img,
          email: action.data[id].email,
          phone: action.data[id].phone,
        };
        return newContacts;
      });

      return { ...state, contacts: contactsData, loading: false };
    case FETCH_REQUEST_FAILURE:
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
};

export default reducer;
