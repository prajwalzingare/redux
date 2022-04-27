import { combineReducers } from "redux";
import { cakeReducer } from "./cakes/CakeReducer";
import { creamReducer } from "./iceCream/CreamReducer";
import { UserReducer } from "./Users/UserReducer";
//yaha pe kya kiya apan ne ki we combine both reducer function in one root reducer i.e root reducer
export const rootReducer = combineReducers({
  cake: cakeReducer,
  cream: creamReducer,
  user: UserReducer,
});
