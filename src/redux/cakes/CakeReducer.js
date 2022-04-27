import { BUY_CAKE } from "./CakeType.js";
//reducer function.
const initialstate = {
  numOfCakes: 10,
};

export const cakeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };

    default:
      return state;
  }
};
