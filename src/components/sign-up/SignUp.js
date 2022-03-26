import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
  return (
    <div className="custom-background d-flex align-items-center">
      <div className="container custom-container-login">
        <h1 className="text-center text-white">
          Create your free account and level up your fitness game!
        </h1>
        <form className="custom-form mb-3">
          <div className="form-floating mb-3">
            <input
              type="email"
              className="form-control custom-form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label for="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control custom-form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label for="floatingPassword">Password</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              className="form-control custom-form-control"
              id="confirmFloatingPassword"
              placeholder="Confirm your password"
            />
            <label for="confirmFloatingPassword">Confirm your password</label>
          </div>
          <div className="mb-3 text-center">
            <p>Measurement System</p>
            <div
              className="btn-group"
              role="group"
              aria-label="Basic radio toggle button group"
            >
              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio1"
                autoComplete="off"
              />
              <label className="btn btn-light" for="btnradio1">
                Metric
              </label>

              <input
                type="radio"
                className="btn-check"
                name="btnradio"
                id="btnradio2"
                autoComplete="off"
              />
              <label className="btn btn-light" for="btnradio2">
                Imperial
              </label>
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary purple-button button-custom-size"
          >
            Sign Up
          </button>
        </form>
        <div className="text-end">
          <Link to="/forgot-password" className="text-white">
            Forgot Password?
          </Link>
        </div>
        <hr className="text-white" />
        <div className="sign-up-part text-center">
          <span className="text-white">
            Already have an account?{" "}
            <Link to="login" className="text-white">
              Log In
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
