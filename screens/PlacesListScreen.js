import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Platform } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { fetchPlaces } from "../store/actions/places";

const PlacesListScreen = (props) => {
  const test = useSelector((state) => state);

  console.log(test.places);

  const dispatch = useDispatch();

  const loadPlaces = async () => {
    await dispatch(fetchPlaces());
  };

  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);

  return (
    <View style={styles.screen}>
      <Text>Places List Screen</Text>
    </View>
  );
};

PlacesListScreen.navigationOptions = (navData) => {
  return {
    headerTitle: "All Places",
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="add place"
          iconName={Platform === "android" ? "md-add" : "ios-add"}
          onPress={() => {
            navData.navigation.navigate("NewPlace");
          }}
        />
      </HeaderButtons>
    ),
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
