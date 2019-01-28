import React, { Component } from "react";
import { Text } from "react-native";
import * as firebase from "firebase";
import Button from "./Button";
import Card from "./Card";
import CardSection from "./CardSection";
import Input from "./Input";
import Spinner from "./Spinner";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", errors: "", loading: false };
  }
  onButtonPress = () => {
    const { email, password } = this.state;
    this.setState({ errors: "", loading: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ email: "", password: "", loading: false, errors: "" });
      })
      .catch(() => {
        firebase
          .auth()

          .createUserWithEmailAndPassword(email, password)
          .then(() => {
            this.setState({
              email: "",
              password: "",
              loading: false,
              errors: ""
            });
          })
          .catch(() => {
            this.setState({ errors: "Authentication failed", loading: false });
          });
      });
  };
  renderButton = () => {
    if (this.state.loading) {
      return <Spinner size="small" />;
    }
    return <Button onPress={this.onButtonPress}>Log In</Button>;
  };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            placeholder="Enter email"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            label="Email : "
          />
        </CardSection>
        <CardSection>
          <Input
            secureTextEntry
            placeholder="********"
            value={this.state.password}
            onChangeText={password => this.setState({ password })}
            label="Password :"
          />
        </CardSection>
        <Text style={styles.errorTextStyles}>{this.state.errors}</Text>
        <CardSection>{this.renderButton()}</CardSection>
      </Card>
    );
  }
}

const styles = {
  errorTextStyles: {
    fontSize: 20,
    color: "red",
    alignSelf: "center"
  }
};
export default LoginForm;
