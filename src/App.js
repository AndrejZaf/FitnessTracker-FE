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
import FocusMode from "./components/focus-mode/FocusMode";
import ToastMessage from "./components/toast-message/ToastMessage";
import PreviewWorkout from "./pages/PreviewWorkout";
import PageNotFound from "./pages/PageNotFound";
import EmailVerification from "./pages/EmailVerification";
import VerificationRequest from "./components/verification-request/VerificationRequest";
import ForgotPasswordRequest from "./components/forgot-password/ForgotPasswordRequest";
import ResetPassword from "./components/reset-password/ResetPassword";

function App() {
  return (
    <>
      <Router>
        <Fragment>
          <Switch>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/verify" component={VerificationRequest} />
            <Route path="/workouts/:uid/focus" component={FocusMode} />
            <Route path="/forgot-password" component={ForgotPasswordRequest} />
            <Route path="/:uid/reset-password" component={ResetPassword} />
            <Fragment>
              <Header />
              <Route exact path="/" component={Home} />
              <Route path="/exercises" component={Exercises} exact />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/workouts" component={Workouts} exact />
              <Route path="/workouts/:uid/preview" component={PreviewWorkout} />
              <Route path="/programs" component={Programs} />
              <Route path="/settings" component={UserSettings} />
              <Route path="/privacy-policy" component={PrivacyPolicy} />
              <Route path="/terms-and-conditions" component={TermsConditions} />
              <Route path="/:uid/verify" component={EmailVerification} />
              <Route path={"/exercises/:uid"} component={ExerciseDetails} />
              {/* <Route path="*" component={PageNotFound} /> */}
              <Footer />
            </Fragment>
          </Switch>
        </Fragment>
      </Router>
      <ToastMessage />
    </>
  );
}

export default App;
