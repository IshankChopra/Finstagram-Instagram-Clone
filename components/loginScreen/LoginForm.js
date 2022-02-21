import { View, Alert, Text, StyleSheet, Pressable, Image } from "react-native";
import React from "react";
import { TextInput } from "react-native";
import { TouchableOpacity } from "react-native";

import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";
import { Divider } from "react-native-elements";
import { firebase, db } from "../../firebase";

const LoginForm = ({ navigation }) => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(6, "Your password has to be atleast  characters"),
  });

  const onLogin = async (email, password) => {
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password);
      console.log("firebase login successfully");
    } catch (error) {
      Alert.alert(
        "🔥My Lord...",
        error.message + "\n\n... Whst would you like to do next🚀🚀",
        [
          {
            text: "OK",
            onPress: () => console.log("OK"),
            style: "cancel",
          },
          { text: "Sign Up", onPress: () => navigation.push("SignupScreen") },
        ]
      );
    }
  };

  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          onLogin(values.email, values.password);
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Phone number,username or email"
                placeholderTextColor="#444"
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={true}
                onChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>

            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    1 > values.password.length || values.password.length >= 6
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholder="Password"
                placeholderTextColor="#444"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChangeText={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              {/* <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text> */}
            </View>

            <Pressable
              titleSize={20}
              style={styles.button(isValid)}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Log In</Text>
            </Pressable>

            <View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Text style={{ color: "gray" }}>
                  Forgot your login details?{" "}
                </Text>
                <Text style={{ color: "#6BB0F5", fontWeight: "500" }}>
                  Get help logging in.
                </Text>
              </View>

              <View style={{ alignItems: "center", marginTop: 15 }}>
                <Text style={{ color: "gray", fontWeight: "500" }}>OR</Text>
              </View>

              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  marginTop: 20,
                }}
              >
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/512px-Facebook_f_logo_%282021%29.svg.png?20210818083032",
                  }}
                  style={{
                    height: 30,
                    width: 30,
                  }}
                />
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#3f729b",
                    fontWeight: "700",
                    marginLeft: 10,
                  }}
                >
                  Log in with Facebook
                </Text>
              </View>
            </View>

            <View style={{ alignItems: "flex-end", marginTop: 100 }}>
              <Divider width={1} orientation="vertical" />

              <View style={styles.signupContainer}>
                <Text>Don't have an account? </Text>
                <TouchableOpacity
                  onPress={() => navigation.push("SignupScreen")}
                >
                  <Text style={{ color: "#6BB0F5" }}>Sign up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 80,
  },
  inputField: {
    borderRadius: 4,
    padding: 12,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 1,
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signupContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 20,
  },
});
