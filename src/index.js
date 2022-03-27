import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import store from "./store/Store";
import { Provider } from "react-redux";
import { retrieveUser } from "./services/UserService";
import { setCurrentUser, toggleLoading } from "./store/StoreFacade";

if (localStorage.getItem("accessToken")) {
  toggleLoading();
  retrieveUser().then((response) => {
    setCurrentUser(response.data);
    console.log(response);
    toggleLoading();
  });
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
