import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

function MaterialButtonDanger(props) {
  return (
<<<<<<< HEAD
    <TouchableOpacity
    onPress={props.addButtonClick}
    style={[styles.container, props.style]}>

=======
    <TouchableOpacity style={[styles.container, props.style]}>
>>>>>>> Added componets for the add button and the display card
      <Text style={styles.caption}>+</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F44336",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 16,
    paddingLeft: 16,
    elevation: 2,
    minWidth: 88,
    borderRadius: 2,
    shadowOffset: {
      height: 1,
      width: 0
    },
    shadowColor: "#000",
    shadowOpacity: 0.35,
    shadowRadius: 5
  },
  caption: {
    color: "#fff",
    fontSize: 14
  }
});

export default MaterialButtonDanger;
