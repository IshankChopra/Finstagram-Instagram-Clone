import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    flex: 1,
  },
});
