import * as FileSystem from "expo-file-system";

export const FETCH_PLACES = "FETCH_PLACES";
export const ADD_PLACE = "ADD_PLACE";

export const fetchPlaces = () => {
  return {
    type: FETCH_PLACES,
  };
};

export const addPlace = (title, address, imageURI) => async (dispatch) => {
  const fileName = imageURI.split("/").pop();

  const newimageURI = FileSystem.documentDirectory + fileName;

  try {
    await FileSystem.moveAsync({
      from: imageURI,
      to: newimageURI,
    });
  } catch (err) {
    console.log(err);
    throw err;
  }

  dispatch({
    type: ADD_PLACE,
    placeData: { title, address, imageURI: newimageURI },
  });
};
