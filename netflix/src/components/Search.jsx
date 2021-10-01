import { Component } from "react";

class Search extends Component {
  state = {
    movies: [],
  };
  search = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=11b186c9&s=" +
          this.props.query
      );
      if (response.ok) {
        let data = await response.json();
        console.log("HERE IS MY DATA", data);
        this.setState({
          movies: data.Search,
        });
        // the comment has been sent succesfully!!
      } else {
        console.log("error");
        alert("something went wrong");
      }
    } catch (error) {
      console.log("error");
    }
  };
  render() {
    return <></>;
  }
}
