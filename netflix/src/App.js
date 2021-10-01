import "./App.css";
import MyNavBar from "./components/MyNavbar";
import "bootstrap/dist/css/bootstrap.min.css";
import MyMovies from "./components/MyMovies";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <MyMovies />
    </div>
  );
}

export default App;
