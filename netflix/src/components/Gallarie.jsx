import React from "react";
import MyMovies from "./MyMovies";

class Gallarie extends React.Component {
  state = {
    query: "",
  };
  render() {
    return (
      <>
        <h4 class="mt-5 font-bold">Romantic Movies</h4>

        <div
          id="carouselExample2"
          class="carousel slide d-none d-sm-block"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div id="romance" class="row mx-n1">
                <MyMovies query={"batman"} />
              </div>
            </div>
          </div>
        </div>

        <h4 class="mt-5 font-bold">Romantic Movies</h4>
        <div
          id="carouselExample2"
          class="carousel slide d-none d-sm-block"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div id="romance" class="row mx-n1">
                <MyMovies query={"batman"} />
              </div>
            </div>
          </div>
        </div>

        <h4 class="mt-5 font-bold">Romantic Movies</h4>
        <div
          id="carouselExample2"
          class="carousel slide d-none d-sm-block"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div id="romance" class="row mx-n1">
                <MyMovies query={"batman"} />
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Gallarie;
