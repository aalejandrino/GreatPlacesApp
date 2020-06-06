export const FETCH_PLACES = "FETCH_PLACES";
export const ADD_PLACE = "ADD_PLACE";

export const fetchPlaces = () => {
  return {
    type: FETCH_PLACES,
  };
};

export const addPlace = (title, address, image) => {
  return {
    type: ADD_PLACE,
    placeData: { title, address, image },
  };
};
