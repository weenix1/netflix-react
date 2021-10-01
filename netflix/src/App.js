import "./App.css";
import MyNavBar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Gallarie from "./components/Gallarie";
import React from "react";

class App extends React.Component {
  state = {
    query: "",
    movies: [],1
  };

  render() {
    return (
      <div className="App">
        <MyNavBar
          value={this.state.query}
          onChange={(e) => this.setState({ query: e.target.value })}
        />
        <Gallarie />
      </div>
    );
  }
}

export default App;
