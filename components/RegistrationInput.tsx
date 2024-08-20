import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TextInput,
  Animated,
  StyleProp,
  TextStyle,
  ViewStyle,
} from "react-native";
import PasswordRequirements from "./PasswordRequirements";
import { triggerErrorAnimation } from "../utils/animation";

interface RegistrationInputProps {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  validate: (text: string) => {
    isValid: boolean;
    message: string;
    requirements?: {
      minLength: boolean;
      hasUpperCase: boolean;
      hasLowerCase: boolean;
      hasSpecialCharOrNumber: boolean;
    };
  };
  secureTextEntry?: boolean;
  keyboardType?: "default" | "email-address" | "numeric" | "phone-pad";
  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
  errorContainerStyle?: StyleProp<ViewStyle>;
  errorTextStyle?: StyleProp<TextStyle>;
}

const RegistrationInput: React.FC<RegistrationInputProps> = ({
  placeholder,
  value,
  onChangeText,
  validate,
  secureTextEntry = false,
  keyboardType = "default",
  containerStyle,
  inputStyle,
  errorContainerStyle,
  errorTextStyle,
}) => {
  const [isValid, setIsValid] = useState(true);
  const [message, setMessage] = useState("");
  const [requirements, setRequirements] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasSpecialCharOrNumber: false,
  });
  const errorAnim = useRef(new Animated.Value(0)).current;
  const requirementsAnim = useRef(new Animated.Value(0)).current;

  const handleFocus = () => {
    if (secureTextEntry) {
      Animated.timing(requirementsAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: false, // We need to animate height, so useNativeDriver must be false
      }).start();
    }
  };

  const handleBlur = () => {
    const { isValid, message, requirements } = validate(value);
    setIsValid(isValid);
    setMessage(message);

    if (secureTextEntry) {
      setRequirements(
        requirements || {
          minLength: false,
          hasUpperCase: false,
          hasLowerCase: false,
          hasSpecialCharOrNumber: false,
        }
      );
      Animated.timing(requirementsAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: false,
      }).start();
    }

    triggerErrorAnimation(errorAnim, isValid);
  };

  const handleChangeText = (text: string) => {
    onChangeText(text);
    if (!isValid) {
      const { isValid, message, requirements } = validate(value);
      setIsValid(isValid);
      setMessage(message);
    }
    if (secureTextEntry) {
      const { isValid, message, requirements } = validate(text);
      setRequirements(
        requirements || {
          minLength: false,
          hasUpperCase: false,
          hasLowerCase: false,
          hasSpecialCharOrNumber: false,
        }
      );
    }
  };

  return (
    <View style={containerStyle}>
      <TextInput
        style={[inputStyle, !isValid && { borderColor: "#ff6b6b" }]}
        placeholder={placeholder}
        placeholderTextColor="#c2d4c2"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        value={value}
        onChangeText={handleChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />
      {placeholder === "Password" && (
        <Animated.View
          style={{
            height: requirementsAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100], // Adjust the height to match your content
            }),
            opacity: requirementsAnim,
            overflow: "hidden",
          }}
        >
          <PasswordRequirements requirements={requirements} />
        </Animated.View>
      )}
      {!isValid && (
        <Animated.View
          style={[
            errorContainerStyle,
            {
              opacity: errorAnim,
              transform: [
                {
                  translateY: errorAnim.interpolate({
                    inputRange: [0, 1],
                    outputRange: [-10, 0],
                  }),
                },
              ],
            },
          ]}
        >
          <Text style={errorTextStyle}>{message}</Text>
        </Animated.View>
      )}
    </View>
  );
};

export default RegistrationInput;
