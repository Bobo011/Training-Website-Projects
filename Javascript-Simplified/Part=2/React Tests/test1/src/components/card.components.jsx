// eslint-disable-next-line no-unused-vars
import {
  compose,
  applyMiddleware,
  bindActionCreators,
  createStore,
} from "redux";
import { configureStore } from "@reduxjs/toolkit";

const Test = () => {
  const initialState = { value: 0 };
  const incrementAction = { type: "INCREMENT", payload: 5 };

  const INCREMENT = "INCREMENT";
  const ADD = "ADD";

  const increment = () => ({ type: INCREMENT });
  const add = (amount) => ({ type: ADD, payload: amount });

  const reducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
      return { value: state.value + 1 };
    }
    if (action.type === ADD) {
      return { value: state.value + action.payload };
    }

    return state;
  };
  const store = createStore(reducer, initialState);

  store.dispatch(increment());

  console.log(store.getState());

  return (
    <div className="header">
      <div className="header-left">
        <img
          className="logo"
          src={require("./Images/Untitled.png")}
          alt="logo"
        />
      </div>
      <div className="header-right">
        <button>Buy Now</button>
      </div>
    </div>
  );
};

export default Test;
