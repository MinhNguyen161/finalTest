import * as types from "../constants/postCons";

let initialState = {
    list: [],
    loading
};

const postReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case types.GET_EXPERIENCES_REQUEST:
            return { ...state, loading: true };

        case types.GET_EXPERIENCES_SUCCESS:
            return {
                loading: false,
                list: payload
            };
        case types.GET_EXPERIENCES_FAILURE:
            return { ...state, loading: false };

        default:
            return { ...state };
    }
};

export default postReducer;
