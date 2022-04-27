import {
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILURE,
} from "./UserType";
const axios = require("axios");
//this is special
//by using thunk middlewewre
export const fetchUsers = () => {
  //insted of returning an action we return a function.
  //what is special about this function it doesent have to be pure.it is allow to have side effect such as async api call.
  //it recieves dispatch method as its argument.
  return function name(dispatch) {
    //before fire of api we dispatch this action
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users") //if the request gets succesfull.
      .then((response) => {
        const users = response.data.map((user) => user);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        const errorMsg = error.message;
        dispatch(fetchUsersFailure(errorMsg));
      });
  };
};

//this action all returns an action which is named as fetchUsers in another component.
export const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

export const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};
