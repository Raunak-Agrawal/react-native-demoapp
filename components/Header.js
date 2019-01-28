import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.title}</Text>
    </View>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    background: "#F8F8F8",
    height: 60
  }
};
export default Header;
