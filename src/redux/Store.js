import { createStore, applyMiddleware } from "redux"; //applymiddlewere function is redux function
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// import { cakeReducer } from "./cakes/CakeReducer";
// import { creamReducer } from "./iceCream/CreamReducer";
import { rootReducer } from "./RootReducer";
//createstore kya parameter leta hai bhai reducer function oo bhi single reducer function.
//only single reducer function but if you have multiple reducer then midlewere is used for combining the reducer function
//because of 2 reducer function now we will pass rootreducer in createstore.s
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, thunk))
); //applymidleware loger loges the all previous state ,action and next state.
