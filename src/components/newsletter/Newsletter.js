import React from "react";
import { Link } from "react-router-dom";
import "./Newsletter.css";

export default function Newsletter() {
  return (
    <div className="container custom-container">
      <div className="newsletter-bg d-flex justify-content-center">
        <div className="align-self-center">
          <div className="text-center text-white">
            <h3>Sign in to our Newsletter</h3>
            <h6>Stay in the loop with everything you need to know.</h6>
          </div>
          <div className="col-md">
            <form className="custom-form row g-3">
              <div className="col-auto">
                <label for="inputEmail" className="visually-hidden">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  placeholder="Enter your email"
                />
                <div id="emailHelp" className="form-text text-white">
                  We care about your data in our{" "}
                  <Link to="/privacy-policy" className="text-white">
                    privacy policy
                  </Link>
                  .
                </div>
              </div>
              <div className="col-auto">
                <button type="submit" className="btn btn-primary purple-button">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
