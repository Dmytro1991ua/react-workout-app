import { useContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Preloader from "./components/Preloader";
import Workouts from "./components/Workouts";
import { GlobalStyles, Wrapper } from "./styles/GlobalStyles";
import { WorkoutsContext } from "./WorkoutsContext";

function App() {
  //destructure preloader "state"
  const { loader } = useContext(WorkoutsContext);
  const [preloader] = loader;

  return (
    <Router>
      <GlobalStyles />
      {preloader ? (
        <Preloader />
      ) : (
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
      )}
    </Router>
  );
}

export default App;
