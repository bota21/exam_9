import React from "react";
import { applyMiddleware, createStore } from "redux";
import Main from "./container/Main";
import reducer from "./store/reducer";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

export default function App() {
  const store = createStore(reducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
