import { SafeAreaView } from "react-native";
import React from "react";
import AddNewPost from "../components/newpost/AddNewPost";

const PostScreen = () => {
  return (
    <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
      <AddNewPost />
    </SafeAreaView>
  );
};

export default PostScreen;
