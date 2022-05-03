const redux = require("redux");
const axios = require("axios");
const thunkMiddleware = require("redux-thunk").default;
const createStore = redux.createStore;
//get this function from redux librery.
const applyMiddleware = redux.applyMiddleware;
//state
const initialState = {
  loading: false,
  users: [],
  error: "",
};
//actions
const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
//action creaters
//An action creator is a function that literally creates an action object. In Redux, action creators simply return an action object and pass the argument value if necessary. These action creators are passed to the dispatch function as the result value, and the dispatch is executed.
const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  };
};

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    value: users,
  };
};

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

//reducer funtion
const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCESS:
      return {
        loading: false,
        users: action.value,
        error: "",
      };
    case FETCH_USERS_FAILURE:
      return {
        loading: false,
        users: [],
        error: action.payload,
      };
  }
};

//Define async action creators.action creater returns an action
//what thunk creator gives abilty to action creater return funtion insted of an action object.❤😊❤
const fetchUsers = () => {
  //what is special about this function it doesnt have to be pure.it is allow to have side effect of async api call
  //it recieve dispatch method as an arguments.
  //function can dispatch action.
  //axios request and dispatch necessary action
  return function name(dispatch) {
    //what it does is that set loading is true by caling first action
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //response.data is array of users
        //we pass the list of users and what is list of users it is equal to response.data
        const users = response.data.map((user) => user.name);
        dispatch(fetchUsersSuccess(users)); //passing in the list of users to fetch userssucess
      })
      .catch((error) => {
        //error.message is the error discription
        dispatch(fetchUsersFailure(error.message)); //pass the value error.massage this is inbuild property.
      });
  };
};
//redux store
const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
  console.log(store.getState());
  console.log("prajwal");
});
store.dispatch(fetchUsers());
