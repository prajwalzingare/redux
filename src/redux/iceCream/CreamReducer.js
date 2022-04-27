import { BUY_CREAM } from "./CreamType";
const initialstate = {
  numOfCream: 20,
};

export const creamReducer = (state = initialstate, action) => {
  switch (action.type) {
    case BUY_CREAM:
      return {
        ...state,
        numOfCream: state.numOfCream - 1,
      };

    default:
      return state;
  }
};
