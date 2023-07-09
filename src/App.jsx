import { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  pageSize = 8

  render() {
    return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element={<News key={"general"} pageTitle="Top Headlines" pageSize={this.pageSize} country="in" category="general" />} />
          <Route path="/business" element={<News key={"business"} pageTitle="Top Headlines" pageSize={this.pageSize} country="in" category="business" />} />
          <Route path="/entertainment" element={<News key={"entertainment"} pageTitle="Top Headlines" pageSize={this.pageSize} country="in" category="entertainment" />} />
          <Route path="/health" element={<News key={"health"} pageTitle="Top Headlines" pageSize={this.pageSize} country="in" category="health" />} />
          <Route path="/science" element={<News key={"science"} pageTitle="Top Headlines" pageSize={this.pageSize} country="in" category="science" />} />
          <Route path="/sports" element={<News key={"sports"} pageTitle="Top Headlines" pageSize={this.pageSize} country="in" category="sports" />} />
          <Route path="/technology" element={<News key={"technology"} pageTitle="Top Headlines" pageSize={this.pageSize} country="in" category="technology" />} />
        </Routes>
      </>
    );
  }
}
