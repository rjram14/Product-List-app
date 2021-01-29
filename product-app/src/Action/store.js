import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../Reducer/reducer";

export default createStore(rootReducer, applyMiddleware(thunk));
