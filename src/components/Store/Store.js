// import React from "react";
import { createStore } from "redux";
import reducer from "../Reducers/Reducers";



const store = createStore(reducer);

console.log(store)

export default store;