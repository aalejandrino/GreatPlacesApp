import { ADD_PLACE, FETCH_PLACES } from "../actions/places";

initialState = {
  places: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return state;

    case ADD_PLACE:
      console.log("adding place");

      return { ...state, places: updatedPlaces };

    default:
      return state;
  }
};

export default placesReducer;
