import { BUY_LAPTOP } from "./actionTypes";
import { BUY_MOBILE } from "./actionTypes";
import { FETCH_USERS_FAILURE } from "./actionTypes";
import { FETCH_USERS_REQUEST } from "./actionTypes";
import { FETCH_USERS_SUCCESS } from "./actionTypes";
import axios from "axios";
const buyLaptop = () => {
  return {
    type: BUY_LAPTOP,
  };
};
export default buyLaptop;

export const buyMobile = () => {
  return {
    type: BUY_MOBILE,
  };
};

export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    data: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    data: error,
  };
};

export const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        let users = response.data;
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error));
      });
  };
};
