import { combineReducers } from "redux";
import postReducer from "../reducer/postReducer";


export default combineReducers({
    post: postReducer,
});
