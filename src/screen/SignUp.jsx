import React from "react";
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

export default function SignUpScreen() {
  const navigation = useNavigation();
  const scaleValue = new Animated.Value(1);

  const handleSignUpPress = () => {
    Animated.sequence([
      Animated.timing(scaleValue, {
        toValue: 0.95,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleValue, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <FontAwesome name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
        </View>
        <View style={styles.imageContainer}>
          <Image
            source={require("../image/5.png")}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      </SafeAreaView>
      <View style={styles.formContainer}>
        <View style={styles.form}>
          <Text style={styles.label}>Full Name</Text>
          <TextInput
            style={styles.input}
            value="john snow"
            placeholder="Enter Name"
          />
          <Text style={styles.label}>Email Address</Text>
          <TextInput
            style={styles.input}
            value="john@gmail.com"
            placeholder="Enter Email"
          />
          <Text style={styles.label}>Password</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value="test12345"
            placeholder="Enter Password"
          />
          <Animated.View
            style={[
              styles.signUpButtonContainer,
              { transform: [{ scale: scaleValue }] },
            ]}
          >
            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUpPress}
            >
              <FontAwesome name="user-plus" size={24} color="white" />
              <Text style={styles.signUpButtonText}>Sign Up</Text>
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
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Already have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={styles.loginLink}> Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 16,
  },
  backButtonContainer: {
    backgroundColor: "rgb(43 65 214)",
    padding: 10,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  backButton: {
    paddingHorizontal: 4,
  },
  imageContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
  image: {
    width: 240,
    height: 170,
  },
  formContainer: {
    flex: 1,
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
  signUpButtonContainer: {
    alignItems: "center",
  },
  signUpButton: {
    flexDirection: "row",
    backgroundColor: "rgb(43 65 214)",
    borderRadius: 20,
    paddingVertical: 13,
    paddingHorizontal: 60,
    justifyContent: "center",
    alignItems: "center",
  },
  signUpButtonText: {
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
  loginContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 14,
  },
  loginText: {
    color: "white",
    fontWeight: "bold",
  },
  loginLink: {
    fontWeight: "bold",
    color: "rgb(43 65 214)",
    marginLeft: 4,
  },
});
