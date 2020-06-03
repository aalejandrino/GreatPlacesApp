import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewPlaceScreen = (props) => {
  return (
    <View style={styles.screen}>
      <Text>New Place Screen</Text>
    </View>
  );
};

NewPlaceScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "New Place",
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default NewPlaceScreen;
