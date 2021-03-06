import { useContext } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Workouts from "./components/Workouts";
import { GlobalStyles, Wrapper } from "./styles/GlobalStyles";
import { WorkoutsContext } from "./WorkoutsContext";

function App() {
  //destructure preloader "state"
  const { loader } = useContext(WorkoutsContext);
  const [preloader, setPreloader] = loader;

  return (
    <Router>
      <GlobalStyles />
      <Wrapper>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/workouts">
            <Workouts />
          </Route>
        </Switch>
      </Wrapper>
    </Router>
  );
}

export default App;
