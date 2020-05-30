import React from "react";
import { StyleSheet, Text, View } from "react-native";

import PlacesNavigator from "./navigation/PlacesNavigator";

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>GreatPlacesApp</Text>
    // </View>
    <PlacesNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
