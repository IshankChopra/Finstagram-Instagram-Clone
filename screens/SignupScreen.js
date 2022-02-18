import { View, Image, StyleSheet } from "react-native";
import React from "react";
import SignupForm from "../components/signupScreen/SignupForm";

const Instagram_Logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

const SignupScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{
            uri: "https://cdn2.iconfinder.com/data/icons/social-media-2285/512/1_Instagram_colored_svg_1-512.png",
          }}
          style={{ height: 100, width: 100 }}
        />
        <Image
          source={{ uri: Instagram_Logo }}
          style={{ height: 100, width: 300 }}
        />
      </View>
      <SignupForm navigation={navigation} />
    </View>
  );
};

export default SignupScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 60,
  },
});
