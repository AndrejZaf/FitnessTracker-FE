import "./App.css";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Exercises from "./pages/Exercises";
import Workouts from "./pages/Workouts";
import Programs from "./pages/Programs";
import Login from "./components/login/Login";
import { Fragment } from "react";
import SignUp from "./components/sign-up/SignUp";
import UserSettings from "./pages/Settings";
import Dashboard from "./pages/Dashboard";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import ExerciseDetails from "./components/exercise-details/ExerciseDetails";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Fragment>
              <Header />
              <Route exact path="/" component={Home} />
              <Route path="/exercises" component={Exercises} exact={true} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/workouts" component={Workouts} />
              <Route path="/programs" component={Programs} />
              <Route path="/settings" component={UserSettings} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/terms-and-conditions" component={TermsConditions} />
              <Route path={"/exercises/:uid"} component={ExerciseDetails} />
              <Footer />
            </Fragment>
          </Switch>
        </Fragment>
      </Router>
    </>
  );
}

export default App;
