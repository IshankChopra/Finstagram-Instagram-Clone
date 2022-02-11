import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import { POSTS } from "../data/posts";
import { ScrollView } from "react-native";
import Post from "../components/Home/Post";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {POSTS.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
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