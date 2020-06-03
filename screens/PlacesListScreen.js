import React from "react";
import { View, Text, StyleSheet } from "react-native";

const PlacesListScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>Places List Screen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "Places List",
    headerRight: () => <Text>Test</Text>,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PlacesListScreen;
