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

import ImagePicker from "../components/ImagePicker";

import { addPlace } from "../store/actions/places";

import Colors from "../constant/Colors";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  switch (action.type) {
    case FORM_INPUT_UPDATE:
      return { ...state, [action.input]: action.text };
    default:
      return state;
  }
};

const NewPlaceScreen = (props) => {
  // const [titleValue, setTitleValue] = useState("");
  // const [addressValue, setAddressValue] = useState("");
  // const [imageValue, setImageValue] = useState("");

  const [formState, dispatchFormState] = useReducer(formReducer, {
    title: "",
    address: "",
    image: "",
  });

  const dispatch = useDispatch();

  const textChangeHandler = (inputIdentifier, text) => {
    // console.log(inputIdentifier);
    dispatchFormState({
      type: FORM_INPUT_UPDATE,
      input: inputIdentifier,
      text,
    });
  };

  const submitFormHandler = () => {
    dispatch(addPlace(formState.title, formState.address, formState.image));
    props.navigation.popToTop();
  };

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => textChangeHandler("title", text)}
          value={formState.title}
        />
        <Text style={styles.label}>Address:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => textChangeHandler("address", text)}
          value={formState.address}
        />
        <Text style={styles.label}>Image:</Text>
        <TextInput
          style={styles.textInput}
          onChangeText={(text) => textChangeHandler("image", text)}
          value={formState.image}
        />
        <ImagePicker />
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
