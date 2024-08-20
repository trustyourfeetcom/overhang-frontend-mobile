import { StyleSheet } from "react-native";

const RegisterScreenStyles = StyleSheet.create({
  button: {
    backgroundColor: "#8f734c",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  container: {
    flex: 1,
    backgroundColor: "#4b6454",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    width: "100%",
  },
  errorMessage: {
    color: "#ff6b6b",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    paddingLeft: 10,
  },
  errorMessageContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: "rgba(255, 107, 107, 0.1)", // Soft red background
    padding: 8,
    borderRadius: 8,
    marginTop: 5,
    marginBottom: 10,
    alignSelf: "flex-start",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "#c2d4c2",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 15,
    marginBottom: 5,
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 15,
  },
  invalidInput: {
    borderColor: "#ff6b6b",
  },
  linkText: {
    color: "#c2d4c2",
    fontSize: 16,
    marginTop: 15,
    textAlign: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
    marginBottom: 20,
  },
});

export default RegisterScreenStyles;
