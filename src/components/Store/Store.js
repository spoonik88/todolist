// import React from "react";
import { createStore, applyMiddleware } from "redux";
import reducer from "../Reducers/Reducers";
import thunkMiddleware from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunkMiddleware));


export default store;