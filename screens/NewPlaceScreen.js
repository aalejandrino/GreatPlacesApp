import React, { useState, useReducer } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useDispatch } from "react-redux";

import { addPlace } from "../store/actions/places";

import Colors from "../constant/Colors";

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");
  const [addressValue, setAddressValue] = useState("");
  const [imageValue, setImageValue] = useState("");

  const dispatch = useDispatch();

  const textChangeHandler = (inputIdentifier, text) => {
    // console.log(inputIdentifier);
    switch (inputIdentifier) {
      case "title":
        setTitleValue(text);
        return;

      case "address":
        setAddressValue(text);
        return;

      case "image":
        setImageValue(text);
        return;

      default:
        return;
    }
  };

  const submitFormHandler = () => {
    dispatch(addPlace(titleValue, addressValue, imageValue));
    props.navigation.popToTop();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => textChangeHandler("title", text)}
          value={titleValue}
        />
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => textChangeHandler("address", text)}
          value={addressValue}
        />
        <Text style={styles.label}>Image:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => textChangeHandler("image", text)}
          value={imageValue}
        />
        <Button
          title="Submit"
          color={Colors.primary}
          onPress={submitFormHandler}
        />
      </View>
    </ScrollView>
  );
};

NewPlaceScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "New Place",
  };
};

const styles = StyleSheet.create({
  form: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
