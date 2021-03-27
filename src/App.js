import { lazy, Suspense, useContext } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ForgotPassword from "./components/ForgotPassword";
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import Preloader from "./components/Preloader";
import PrivateRoute from "./components/PrivateRoutes";
import SectionLoader from "./components/SectionLoader";
import SignUp from "./components/SignUp";
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
              <Route exact path="/login">
                <LoginForm />
              </Route>
              <Route exact path="/forgot-password">
                <ForgotPassword />
              </Route>
              <Route exact path="/signup">
                <SignUp />
              </Route>
              <PrivateRoute exact path="/workouts" component={Workouts} />
            </Suspense>
          </Switch>
        </Wrapper>
      )}
    </Router>
  );
}

export default App;
