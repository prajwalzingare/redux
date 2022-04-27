//we are going to write action creater hear.
//An action creator is a function that literally creates an action object. In Redux, action creators simply return an action object and pass the argument value if necessary. These action creators are passed to the dispatch function as the result value, and the dispatch is executed.
//action is object with type proprty.

import { BUY_CAKE } from "./CakeType";
//isko bhi export karna padega to be able to use components.
export const buyCake = (number = 1) => {
  return {
    type: BUY_CAKE,
    //payload is basicallly another value that we pass.
    payload: number,
  };
};
