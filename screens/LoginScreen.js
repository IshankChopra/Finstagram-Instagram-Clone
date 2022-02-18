import { View, Image, StyleSheet } from "react-native";
import React from "react";
import LoginForm from "../components/loginScreen/LoginForm";

const Instagram_Logo =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image
          source={{ uri: Instagram_Logo }}
          style={{ height: 100, width: 300 }}
        />
      </View>
      <LoginForm />
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 50,
    paddingHorizontal: 12,
  },
  logoContainer: {
    alignItems: "center",
    marginTop: 150,
  },
});
