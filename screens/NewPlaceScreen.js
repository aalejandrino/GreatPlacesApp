import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

import Colors from "../constant/Colors";

const NewPlaceScreen = (props) => {
  const [titleValue, setTitleValue] = useState("");

  const titleChangeHandler = (text) => {
    setTitleValue(text);
  };

  const submitFormHandler = () => {};

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.label}>Title:</Text>
        <TextInput
          style={styles.textInput}
          onChange={titleChangeHandler}
          value={titleValue}
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
