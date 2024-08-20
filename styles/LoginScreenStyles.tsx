import { StyleSheet } from "react-native";

const LoginScreenStyles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: "#4b6454", // Earthy green
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    flex: 1,
    width: "100%",
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  logoContainer: {
    alignItems: "center",
    marginBottom: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#fff",
  },
  inputContainer: {
    width: "100%",
  },
  input: {
    height: 50,
    borderColor: "#c2d4c2",
    borderWidth: 1,
    borderRadius: 10,
    fontSize: 16,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  button: {
    backgroundColor: "#8f734c",
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
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

export default LoginScreenStyles;
