import * as types from "../constants/postCons";
import api from "../api";
import { message } from "antd";

const getPost = () => async (dispatch) => {
    dispatch({ type: types.GET_EXPERIENCES_REQUEST, payload: null });
    try {
        const res = await api.get(`/post`);
        dispatch({ type: types.GET_EXPERIENCES_SUCCESS, payload: res.data.data.post }); // careful
        console.log("Post List", res.data.data);
    } catch (err) {
        dispatch({ type: types.GET_EXPERIENCES_FAILURE, payload: err.message });
        console.log(err.message);
    }
}
