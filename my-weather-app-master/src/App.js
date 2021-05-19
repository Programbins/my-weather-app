import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import About from "./pages/About";
import Cities from "./pages/Cities";
import Home from "./pages/Home";
import Lcities from "./pages/Lcities";

function App() {
  const city = "녹서스";

  return (
    <Router>
      <div className="App">
        <Header region="KR" cityName={city} />
        <ul className="navigation">
          <li>
            <Link to="/">소개</Link>
          </li>
          <li>
            <Link to="/about">모습</Link>
          </li>
          <li>
            <Link to="/lcities">다른도시</Link>
          </li>
          <li>
            <Link to="/cities">현실도시</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/lcities">
            <Lcities />
          </Route>
          <Route path="/cities">
            <Cities />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
