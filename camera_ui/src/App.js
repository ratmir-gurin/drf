import React, { Component, Fragment } from "react";
import Header from "./components/Header";
import ItemsMap from "./components/ItemsMap";

class App extends Component {
  render() {
    return (
      <Fragment>
      
        <Header />
        {/* <Home /> */}
        <ItemsMap />
      </Fragment>
    );
  }
}



export default App;
