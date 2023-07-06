import { Component } from "react";
import Navbar from "./components/navbar";
import News from "./components/News";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <News pageTitle="Top Headlines" />
      </>
    );
  }
}
