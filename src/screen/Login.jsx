import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
  Animated,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const navigation = useNavigation();
  const scaleValue = new Animated.Value(1);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginPress = () => {
    // Input validation logic here (e.g., check if fields are not empty)
    if (!email || !password) {
      // Display an error message or perform desired action
      alert("Please fill all fields");
      return;
    }

    // Navigate to the home screen upon successful login
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <FontAwesome name="arrow-left" size={20} color="black" />
        </TouchableOpacity>
      </SafeAreaView>
      <View style={styles.imageContainer}>
        <Image
          source={require("../image/4.png")}
          style={styles.headerImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            value={email}
            placeholder="Enter Email"
            onChangeText={setEmail}
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={password}
            placeholder="Enter Password"
            onChangeText={setPassword}
          />
          <Animated.View
            style={[
              styles.loginButtonContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            <TouchableOpacity
              style={styles.loginButton}
              onPress={handleLoginPress}
            >
              <FontAwesome name="sign-in" size={24} color="white" />
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
        <View style={styles.socialButtonsContainer}>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="google" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <AntDesign name="apple1" size={40} color="black" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.socialButton}>
            <FontAwesome name="facebook" size={40} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
            <Text style={styles.signupLink}> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  backButton: {
    paddingHorizontal: 4,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  headerImage: {
    width: 350,
    height: 200,
  },
  formContainer: {
    flex: 2,
    backgroundColor: "black",
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  form: {
    marginBottom: 24,
  },
  label: {
    color: "white",
    marginLeft: 16,
    marginBottom: 5,
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: "#f0f0f0",
    color: "gray",
    borderRadius: 20,
    marginBottom: 10,
  },
  loginButtonContainer: {
    alignItems: "center",
  },
  loginButton: {
    flexDirection: "row",
    backgroundColor: "rgb(43 65 214)",
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  loginButtonText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginLeft: 10,
  },
  socialButtonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 10,
  },
  socialButton: {
    backgroundColor: "#f0f0f0",
    borderRadius: 20,
    padding: 8,
    marginHorizontal: 8,
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
  },
  signupText: {
    color: "white",
    fontWeight: "bold",
  },
  signupLink: {
    fontWeight: "bold",
    color: "rgb(43 65 214)",
    marginLeft: 4,
  },
});
