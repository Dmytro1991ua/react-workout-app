import { lazy, Suspense, useContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
//import Home from "./components/Home";
import Preloader from "./components/Preloader";
import SectionLoader from "./components/SectionLoader";
//import Workouts from "./components/Workouts";
import { GlobalStyles, Wrapper } from "./styles/GlobalStyles";
import { WorkoutsContext } from "./WorkoutsContext";

// component's lazy loading while using React Routing
const Home = lazy(() => import("./components/Home"));
const Workouts = lazy(() => import("./components/Workouts"));

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
            <Suspense fallback={<SectionLoader />}>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/workouts">
                <Workouts />
              </Route>
              <Route path="/login">
                <LoginForm />
              </Route>
            </Suspense>
          </Switch>
        </Wrapper>
      )}
    </Router>
  );
}

export default App;
