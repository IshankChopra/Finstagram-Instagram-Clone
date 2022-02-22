import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Header from "../components/Home/Header";
import Stories from "../components/Home/Stories";
import { POSTS } from "../data/posts";
import { ScrollView } from "react-native";
import Post from "../components/Home/Post";
import BottomTabs, { bottomTabIcons } from "../components/Home/BottomTabs";
import { db } from "../firebase";

const HomeScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    db.collectionGroup("posts")
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((post) => ({ id: post.id, ...post.data() }))
        );
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation} />
      <Stories />
      <ScrollView>
        {posts.map((post, index) => (
          <Post post={post} key={index} />
        ))}
      </ScrollView>
      <BottomTabs icons={bottomTabIcons} />
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
