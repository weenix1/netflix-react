import { Component } from "react";

class MyMovies extends Component {
  state = {
    movies: [],
  };

  fetchMovies = async () => {
    try {
      let response = await fetch(
        "http://www.omdbapi.com/?i=tt3896198&apikey=11b186c9&s=batman"
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

  componentDidMount = () => {
    console.log("this is componentDidMount!");

    this.fetchMovies();
  };

  render() {
    console.log(this.state.movies);
    return (
      <>
        {this.state.movies.map((movie) => {
          <div>
            <img src={movie.Poster} alt="" />
          </div>;
        })}
      </>
    );
  }
}

export default MyMovies;
