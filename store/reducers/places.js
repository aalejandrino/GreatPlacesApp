import { ADD_PLACE, FETCH_PLACES } from "../actions/places";

import Place from "../../models/place";

initialState = {
  availablePlaces: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return state;

    case ADD_PLACE:
      const { title } = action.placeData;
      const newPlace = new Place(new Date().toString(), title);
      const updatedPlaces = [...state.availablePlaces, newPlace];

      return { ...state, availablePlaces: updatedPlaces };

    default:
      return state;
  }
};

export default placesReducer;
