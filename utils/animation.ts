import { Animated } from "react-native";

export const triggerErrorAnimation = (
  animValue: Animated.Value,
  isValid: boolean
) => {
  Animated.timing(animValue, {
    toValue: isValid ? 0 : 1,
    duration: 300,
    useNativeDriver: true,
  }).start();
};
