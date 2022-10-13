const { createStore, combineReducers, applyMiddleware } = require("redux");
const logger = require("redux-logger").default;
const thunk = require("redux-thunk");
const BUY_LAPTOPS = "BUY_LAPTOPS";
const BUY_MOBILES = "BUY_MOBILES";
const initialState = {
  numOfLaptops: 100,
};
const initialMobile = {
  numOfMobiles: 1000,
};

const buyLaptops = () => {
  return {
    type: BUY_LAPTOPS,
  };
};

const buyMobile = () => {
  return {
    type: BUY_MOBILES,
  };
};

const laptopReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_LAPTOPS:
      return { numOfLaptops: state.numOfLaptops - 1 };

    default:
      return state;
  }
};

const mobileReducer = (state = initialMobile, action) => {
  switch (action.type) {
    case BUY_MOBILES:
      return { numOfMobiles: state.numOfMobiles - 1 };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  laptops: laptopReducer,
  mobiles: mobileReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log(store);
store.subscribe(() => {
  console.log(store.getState());
});
store.dispatch(buyLaptops());
store.dispatch(buyMobile());
