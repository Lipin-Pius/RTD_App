import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

function Card(props) {
  return (
    <TouchableOpacity style={[styles.container, props.style]}>
      <View style={styles.rect}>
        <Text style={styles.temprature}>temprature</Text>
      </View>
      <View style={styles.rect2}>
        <Text style={styles.nickName}>nick name</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "rgba(230, 230, 230,1)",
    flexDirection: "row"
  },
  rect: {
    flex: 0.26,
    backgroundColor: "rgba(218, 218, 218,1)",
    justifyContent: "center"
  },
  temprature: {
    color: "#121212",
    alignSelf: "center"
  },
  rect2: {
    flex: 0.74,
    backgroundColor: "rgba(233, 233, 233,1)"
  },
  nickName: {
    color: "#121212",
    marginTop: 28,
    marginLeft: 73
  }
});

export default Card;
