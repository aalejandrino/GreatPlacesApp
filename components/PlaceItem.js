import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

const PlaceItem = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.title}</Text>
      <View style={styles.buttonContainer}>
        <Button title="test1" onPress={() => {}} />
        <Button title="test2" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 300,
    // width: "80%",
    borderWidth: 1,
    borderColor: "black",
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
  },
});

export default PlaceItem;
