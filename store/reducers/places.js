import { ADD_PLACE, FETCH_PLACES } from "../actions/places";

import Place from "../../models/place";

const initialState = {
  availablePlaces: [],
};

const placesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PLACES:
      return state;

    case ADD_PLACE:
      const { title, address, imageURI } = action.placeData;
      const newPlace = new Place(
        new Date().toString(),
        title,
        address,
        imageURI
      );
      const updatedPlaces = [...state.availablePlaces, newPlace];

      return { ...state, availablePlaces: updatedPlaces };

    default:
      return state;
  }
};

export default placesReducer;
