import { BUY_LAPTOP } from "../actions/actionTypes";

const initialState = {
  noOfLaptops: 100,
};

const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOP:
      return { noOfLaptops: state.noOfLaptops - 1 };
    default:
      return state;
  }
};

export default laptopReducer;
