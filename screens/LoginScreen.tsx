import React, { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation.types";
import LoginScreenStyles from "../styles/LoginScreenStyles";
import { loginUser } from "../services/authService";

type LoginScreenProps = NativeStackScreenProps<RootStackParamList, "Login">;

const LoginScreen: React.FC<LoginScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await loginUser(username, password);

      if (response["error"] === null) {
        navigation.reset({
          index: 0,
          routes: [{ name: "Home" }],
        });
      }
    } catch (error) {
      console.log(error);
      Alert.alert("Error", "An error occurred during registration");
    }
  };

  const handleRegister = () => {
    navigation.navigate("Register");
  };

  const handleForgotPassword = () => {
    navigation.navigate("ForgotPassword");
  };

  return (
    <View style={LoginScreenStyles.background}>
      <View style={LoginScreenStyles.overlay}>
        <View style={LoginScreenStyles.logoContainer}>
          <Image
            source={require("../assets/logo.png")}
            style={LoginScreenStyles.logo}
          />
          <Text style={LoginScreenStyles.title}>Overhang</Text>
        </View>

        <View style={LoginScreenStyles.inputContainer}>
          <TextInput
            style={LoginScreenStyles.input}
            placeholder="Username"
            placeholderTextColor="#c2d4c2"
            keyboardType="default"
            autoCapitalize="none"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={LoginScreenStyles.input}
            placeholder="Password"
            placeholderTextColor="#c2d4c2"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          <TouchableOpacity
            style={LoginScreenStyles.button}
            onPress={handleLogin}
          >
            <Text style={LoginScreenStyles.buttonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleForgotPassword}>
            <Text style={LoginScreenStyles.linkText}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleRegister}>
            <Text style={LoginScreenStyles.linkText}>
              Don't have an account? Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
