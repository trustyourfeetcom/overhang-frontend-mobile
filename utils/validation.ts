export const validateUsername = (username: string): { isValid: boolean, message: string } => {
  if (username.length < 3 || username.length > 15) {
    return { isValid: false, message: "Username must be between 3 and 15 characters" };
  }

  if (!/^[a-zA-Z]/.test(username)) {
    return { isValid: false, message: "Username must start with a letter" };
  }

  if (!/^[a-zA-Z0-9._]+$/.test(username)) {
    return { isValid: false, message: "Username can only contain letters, numbers, underscores, and dots" };
  }

  if (/^[._]|[._]$/.test(username)) {
    return { isValid: false, message: "Username cannot start or end with a dot or underscore" };
  }

  if (/([._]{2,})/.test(username)) {
    return { isValid: false, message: "Username cannot contain consecutive dots or underscores" };
  }

  return { isValid: true, message: "" };
};

export const validateEmail = (email: string): { isValid: boolean, message: string } => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email)) {
    return { isValid: true, message: "" };
  }
  return { isValid: false, message: "Please enter a valid email" };
};
  
export const validatePassword = (password: string): {
  isValid: boolean;
  message: string;
  requirements: {
    minLength: boolean;
    hasUpperCase: boolean;
    hasLowerCase: boolean;
    hasSpecialCharOrNumber: boolean;
  };
} => {
  const requirements = {
    minLength: password.length >= 8,
    hasUpperCase: /[A-Z]/.test(password),
    hasLowerCase: /[a-z]/.test(password),
    hasSpecialCharOrNumber: /[0-9!@#$%^&*]/.test(password),
  };

  const isValid = Object.values(requirements).every(Boolean);

  return {
    isValid,
    message: isValid ? "" : "Password does not meet the requirements",
    requirements,
  };
};

  
export const validateConfirmPassword = (password: string, confirmPassword: string): { isValid: boolean, message: string } => {
  if (password !== confirmPassword) {
    return { isValid: false, message: "Passwords do not match" };
  }
  return { isValid: true, message: "" };
};
  