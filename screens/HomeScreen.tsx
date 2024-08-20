import React from "react";
import { View, Text, StyleSheet } from "react-native";
import HomeScreenStyles from "../styles/HomeScreenStyles";

const HomeScreen = () => {
  return (
    <View style={HomeScreenStyles.container}>
      <Text style={HomeScreenStyles.title}>Welcome to Overhang</Text>
      <Text style={HomeScreenStyles.subtitle}>This is the Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
