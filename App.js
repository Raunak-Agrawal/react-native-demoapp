import React, { Component } from "react";
import { View, Text } from "react-native";
import * as firebase from "firebase";
import Header from "./components/Header";
import AlbumList from "./components/AlbumList";
import LoginForm from "./components/LoginForm";
import Button from "./components/Button";
import CardSection from "./components/CardSection";
import Spinner from "./components/Spinner";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducers from "./components/reducers";

class App extends Component {
  state = {
    loggedIn: null
  };
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyDMJKvu6q_mVOrB-TryXujR893EOB8sh8s",
      authDomain: "auth-aa1a7.firebaseapp.com",
      databaseURL: "https://auth-aa1a7.firebaseio.com",
      projectId: "auth-aa1a7",
      storageBucket: "auth-aa1a7.appspot.com",
      messagingSenderId: "990072645352"
    };
    if (!firebase.apps.length) {
      firebase.initializeApp(config);
    }
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }
  setLoggedBehaviour = () => {
    if (this.state.loggedIn === true) {
      return (
        <View>
          <Header title="albums" />
          <CardSection>
            <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
          </CardSection>
          <AlbumList />
        </View>
      );
    } else if (this.state.loggedIn === false) {
      return <LoginForm />;
    }
    return <Spinner size="large" />;
  };
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>{this.setLoggedBehaviour()}</View>
      </Provider>
    );
  }
}

export default App;
