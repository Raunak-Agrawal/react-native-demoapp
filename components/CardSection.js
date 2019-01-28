import React from "react";
import { View } from "react-native";

const CardSection = props => {
  return <View style={styles.containerStyles}>{props.children}</View>;
};
const styles = {
  containerStyles: {
    borderBottomWidth: 1,
    padding: 7,
    justifyContent: "flex-start",
    flexDirection: "row",
    backgroundColor: "#fff",
    borderColor: "#ddd"
  }
};
export default CardSection;
