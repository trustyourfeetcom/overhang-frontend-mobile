import React from "react";
import { View, Text } from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import PasswordRequirementsComponentStyles from "../styles/PasswordRequirementsStyles";

interface PasswordRequirementsProps {
  requirements: {
    minLength: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasSpecialCharOrNumber: boolean;
  };
}

const PasswordRequirements: React.FC<PasswordRequirementsProps> = ({
  requirements,
}) => {
  return (
    <View style={PasswordRequirementsComponentStyles.container}>
      <RequirementItem
        fulfilled={requirements.minLength}
        text="At least 8 characters"
      />
      <RequirementItem
        fulfilled={requirements.hasUpperCase}
        text="At least one uppercase letter"
      />
      <RequirementItem
        fulfilled={requirements.hasLowerCase}
        text="At least one lowercase letter"
      />
      <RequirementItem
        fulfilled={requirements.hasSpecialCharOrNumber}
        text="At least one special character or number"
      />
    </View>
  );
};

const RequirementItem: React.FC<{ fulfilled: boolean; text: string }> = ({
  fulfilled,
  text,
}) => {
  return (
    <View style={PasswordRequirementsComponentStyles.itemContainer}>
      <Icon
        name={fulfilled ? "checkmark-circle" : "ellipse-outline"}
        size={18}
        color={fulfilled ? "#8f734c" : "#c2d4c2"} // Green when fulfilled, grey otherwise
        style={PasswordRequirementsComponentStyles.icon}
      />
      <Text
        style={[
          PasswordRequirementsComponentStyles.text,
          fulfilled && PasswordRequirementsComponentStyles.fulfilledText,
        ]}
      >
        {text}
      </Text>
    </View>
  );
};

export default PasswordRequirements;
