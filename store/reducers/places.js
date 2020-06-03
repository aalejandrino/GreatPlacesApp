import { ADD_PLACE } from "../actions/places";

initialState = {};

const placesReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case ADD_PLACE:
      console.log("adding place");
      return state;

    default:
      return state;
  }
};
