import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Platform, FlatList } from "react-native";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import HeaderButton from "../components/HeaderButton";

import { fetchPlaces } from "../store/actions/places";

import PlaceItem from "../components/PlaceItem";

const PlacesListScreen = (props) => {
  const availablePlaces = useSelector((state) => state.places.availablePlaces);

  const dispatch = useDispatch();

  const loadPlaces = useCallback(async () => {
    await dispatch(fetchPlaces());
  }, [dispatch]);

  useEffect(() => {
    loadPlaces();
  }, [loadPlaces]);

  const renderPlaceItem = (itemdata) => {
    return (
      <PlaceItem
        title={itemdata.item.title}
        address={itemdata.item.address}
        image={itemdata.item.image}
        onSelect={() => {}}
      />
    );
  };

  return (
    // <View style={styles.screen}>
    //   <Text>Places List Screen</Text>
    // </View>
    <FlatList
      data={availablePlaces}
      renderItem={renderPlaceItem}
      keyExtractor={(item) => item.id}
    />
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
