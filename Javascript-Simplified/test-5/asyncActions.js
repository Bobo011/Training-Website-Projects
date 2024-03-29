const redux = require("redux");
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USERS_REQUESTED = "FETCH_USERS_REQUESTED";
const FETCH_USERS_SUCCEEDED = "FETCH_USERS_SUCCEEDED";
const FETCH_USERS_FAILED = "FETCH_USERS_FAILED";

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUESTED,
  };
};
const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCEEDED,
    payload: users,
  };
};
const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILED,
    payload: error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USERS_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USERS_FAILED:
      return {
        ...state,
        loading: true,
        users: [],
        error: action.payload,
      };

    default:
      return state;
  }
};

const fetchUsers = () => {
  return function (dispatch) {
	dispatch(fetchUsersRequest()) //sets Loading to true
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        //Get users
        const users = response.data.map((user) => user.id);
		dispatch(fetchUsersSuccess(users))
      })
      .catch((error) => {
        //Error Message
        dispatch(fetchUsersFailure(error.message))
      });
  };
};
//thunkMiddleware Allows action creator to return a function instead of an action
//it is necessary to use async functions within and to fetch data
const store = createStore(reducer, applyMiddleware(thunkMiddleware));

store.subscribe(()=>{console.log(store.getState());})
store.dispatch(fetchUsers());


