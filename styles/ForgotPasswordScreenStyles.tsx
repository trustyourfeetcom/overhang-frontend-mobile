import { StyleSheet } from "react-native";

const ForgotPasswordScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4b6454", // Earthy green background
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#c2d4c2", // Lighter border color for better contrast
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  button: {
    backgroundColor: "#8f734c", // Earthy brown
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  linkText: {
    color: "#c2d4c2",
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
  },
});

export default ForgotPasswordScreenStyles;
