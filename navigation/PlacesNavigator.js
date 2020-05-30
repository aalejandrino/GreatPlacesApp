import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import PlacesListScreen from "../screens/PlacesListScreen";

const PlacesNavigator = createStackNavigator({
  PlaceList: PlacesListScreen,
});

export default createAppContainer(PlacesNavigator);
