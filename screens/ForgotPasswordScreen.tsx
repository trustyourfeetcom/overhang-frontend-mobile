import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/navigation.types";
import ForgotPasswordScreenStyles from "../styles/ForgotPasswordScreenStyles";

type ForgotPasswordScreenProps = NativeStackScreenProps<
  RootStackParamList,
  "ForgotPassword"
>;

const ForgotPasswordScreen: React.FC<ForgotPasswordScreenProps> = ({
  navigation,
}) => {
  const [email, setEmail] = useState("");

  const handleResetPassword = () => {
    // Implement password reset logic here
    console.log("Resetting password for", email);
  };

  return (
    <View style={ForgotPasswordScreenStyles.container}>
      <Text style={ForgotPasswordScreenStyles.title}>Reset Password</Text>

      <TextInput
        style={ForgotPasswordScreenStyles.input}
        placeholder="Email"
        placeholderTextColor="#c2d4c2"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />

      <TouchableOpacity
        style={ForgotPasswordScreenStyles.button}
        onPress={handleResetPassword}
      >
        <Text style={ForgotPasswordScreenStyles.buttonText}>
          Send Reset Link
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={ForgotPasswordScreenStyles.linkText}>Back to Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPasswordScreen;
