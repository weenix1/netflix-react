import "./App.css";
import MyNavBar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallarie from "./components/Gallarie";
import React from "react";
import Search from "./components/Search";

class App extends React.Component {
  state = {
    movies: [],
  };

  render() {
    return (
      <div className="App">
        <MyNavBar />

        <Gallarie />
      </div>
    );
  }
}

export default App;
