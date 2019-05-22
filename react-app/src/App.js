import React, { Component } from "react";
import Subject from "./components/Subject"
import TOC from "./components/TOC"
import Content from "./components/Content"
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="WEB" sub="World Wide Web!!!!" />
        <TOC />
        <Content title="HTML" desc="HTML is HyperText Markup Lang." />
      </div>
    );
  }
}

export default App;
