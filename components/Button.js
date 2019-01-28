import React from "react";
import { Text, TouchableOpacity } from "react-native";
const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity style={styles.buttonStyle} onPress={onPress}>
      <Text style={styles.textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};
const styles = {
  buttonStyle: {
    flex: 1,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderColor: "#007aff",
    borderWidth: 1,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: "600",
    color: "#007aff"
  }
};
export default Button;
