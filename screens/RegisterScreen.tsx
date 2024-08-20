import React, { useState } from "react";
import { Alert, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation.types";
import RegistrationInput from "../components/RegistrationInput";
import { registerUser } from "../services/authService";
import RegisterScreenStyles from "../styles/RegisterScreenStyles";
import {
  validateEmail,
  validatePassword,
  validateConfirmPassword,
  validateUsername,
} from "../utils/validation";

type RegisterScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "Register"
>;

const RegisterScreen: React.FC<RegisterScreenProps> = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async () => {
    const { isValid: isUsernameValid } = validateUsername(username);
    const { isValid: isEmailValid } = validateEmail(email);
    const { isValid: isPasswordValid } = validatePassword(password);
    const { isValid: isConfirmPasswordValid } = validateConfirmPassword(
      password,
      confirmPassword
    );

    if (
      !isUsernameValid ||
      !isEmailValid ||
      !isPasswordValid ||
      !isConfirmPasswordValid
    ) {
      Alert.alert("Error", "Please fix the errors before submitting");
      return;
    }

    try {
      const response = await registerUser(username, email, password);

      if (response["error"] === null) {
        Alert.alert("Success", "Registration successful!");
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

  return (
    <View style={RegisterScreenStyles.container}>
      <Text style={RegisterScreenStyles.title}>Register</Text>

      <RegistrationInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        validate={validateUsername}
        containerStyle={RegisterScreenStyles.inputContainer}
        inputStyle={RegisterScreenStyles.input}
        errorContainerStyle={RegisterScreenStyles.errorMessageContainer}
        errorTextStyle={RegisterScreenStyles.errorMessage}
      />

      <RegistrationInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        validate={validateEmail}
        keyboardType="email-address"
        containerStyle={RegisterScreenStyles.inputContainer}
        inputStyle={RegisterScreenStyles.input}
        errorContainerStyle={RegisterScreenStyles.errorMessageContainer}
        errorTextStyle={RegisterScreenStyles.errorMessage}
      />

      <RegistrationInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        validate={validatePassword}
        secureTextEntry
        containerStyle={RegisterScreenStyles.inputContainer}
        inputStyle={RegisterScreenStyles.input}
        errorContainerStyle={RegisterScreenStyles.errorMessageContainer}
        errorTextStyle={RegisterScreenStyles.errorMessage}
      />

      <RegistrationInput
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        validate={(text) => validateConfirmPassword(password, text)}
        secureTextEntry
        containerStyle={RegisterScreenStyles.inputContainer}
        inputStyle={RegisterScreenStyles.input}
        errorContainerStyle={RegisterScreenStyles.errorMessageContainer}
        errorTextStyle={RegisterScreenStyles.errorMessage}
      />

      <TouchableOpacity
        style={RegisterScreenStyles.button}
        onPress={handleRegister}
      >
        <Text style={RegisterScreenStyles.buttonText}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegisterScreen;
