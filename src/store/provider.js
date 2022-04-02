import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import logger from "redux-logger";
export default function StoreProvider({ initialState, children }) {
    const store = createStore(rootReducer, applyMiddleware(thunk, logger));
    return <Provider store={store}>{children}</Provider>;
}