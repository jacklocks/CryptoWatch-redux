import { combineReducers } from "redux";
import stableReducer from "./stable.reducer";
import ListReducer from "./list.reducer";

export default combineReducers({
    stableReducer,
    ListReducer,
})