import "./App.css";

import { Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import SearchBar from "./components/SearchPage";
import FoundJobs from "./components/FoundJobs";
import FavouriteJobs from "./components/FavouriteJobs";

const App = () => {
  return (
    <div className="container margin-top">
      <div className="row">
        <NavBar />
        <Route path="/" exact component={SearchBar} />
      </div>
      <hr />
      <div className="container">
        <Route path="/jobs" exact component={FoundJobs} />
        <Route path="/favorite-jobs" exact component={FavouriteJobs} />
      </div>
    </div>
  );
};

export default App;
