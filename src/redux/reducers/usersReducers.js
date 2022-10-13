import { FETCH_USERS_FAILURE } from "../actions/actionTypes";
import { FETCH_USERS_REQUEST } from "../actions/actionTypes";
import { FETCH_USERS_SUCCESS } from "../actions/actionTypes";

const initialState = {
  users: [],
  error: "",
  isLoading: false,
};
export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return { ...state, isLoading: true };
    case FETCH_USERS_SUCCESS:
      return { isLoading: false, users: action.data, error: "" };

    case FETCH_USERS_FAILURE:
      return { isLoading: false, users: [], error: action.data };
    default:
      return state;
  }
};
