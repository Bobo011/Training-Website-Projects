const redux = require("redux");
const createStore = redux.createStore;
const produce = require('immer').produce

const InitialState = {
  name: "Random Name",
  address: {
    street: `Street `,
    city: `City `,
    state: `State `,
  },
};

const STREET_UPDATED = "STREET_UPDATED";

const updateStreet = (street) => {
  return {
    type: STREET_UPDATED,
    payload: street,
  };
};

const reducer = (state = InitialState, action) => {
  switch (action.type) {
    case STREET_UPDATED:
//       return { ...state, address:{
// ...state.address,
// street:action.payload
// 	  }}

return produce(state, (draft)=>{
	draft.address.street = action.payload
})
    default:
      return state;
  }
};


const store = redux.createStore(reducer)

console.log("Initial State", store.getState());

store.dispatch(updateStreet('New Street'));

console.log('Updated State', store.getState())