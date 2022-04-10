import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import store from "../../store/Store";
import { clearCurrentUser, getCurrentUser } from "../../store/StoreFacade";
import "./Header.css";

export default function Header(props) {
  const [isLoggedin, setIsLoggedin] = useState(false);

  const unsubscribe = store.subscribe(() => {
    setIsLoggedin(store.getState().currentUser.email !== null);
  });

  useEffect(() => {
    setIsLoggedin(getCurrentUser().email !== null);
    return () => unsubscribe();
  }, []);

  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      {children}
    </a>
  ));

  function logout() {
    localStorage.clear();
    clearCurrentUser();
    setIsLoggedin(getCurrentUser().email !== null);
  }

  return (
    <div className="container">
      <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom">
        <a
          href="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-bootstrap-fill"
            viewBox="0 0 16 16"
          >
            <path d="M6.375 7.125V4.658h1.78c.973 0 1.542.457 1.542 1.237 0 .802-.604 1.23-1.764 1.23H6.375zm0 3.762h1.898c1.184 0 1.81-.48 1.81-1.377 0-.885-.65-1.348-1.886-1.348H6.375v2.725z" />
            <path d="M4.002 0a4 4 0 0 0-4 4v8a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4h-8zm1.06 12V3.545h3.399c1.587 0 2.543.809 2.543 2.11 0 .884-.65 1.675-1.483 1.816v.1c1.143.117 1.904.931 1.904 2.033 0 1.488-1.084 2.396-2.888 2.396H5.062z" />
          </svg>
        </a>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink to="/" className={`nav-link px-2 link-secondary`}>
              Home
            </NavLink>
          </li>
          {/* {isLoggedin ? (
            <li>
              <NavLink to="/dashboard" className={`nav-link px-2 link-dark`}>
                Dashboard
              </NavLink>
            </li>
          ) : (
            ""
          )} */}
          <li>
            <NavLink to="/exercises" className={`nav-link px-2 link-dark`}>
              Exercises
            </NavLink>
          </li>
          <li>
            <NavLink to="/workouts" className={`nav-link px-2 link-dark`}>
              Workouts
            </NavLink>
          </li>
          {/* <li>
            <NavLink to="/programs" className={`nav-link px-2 link-dark`}>
              Programs
            </NavLink>
          </li> */}
        </ul>
        {isLoggedin ? (
          <>
            <div className="col-md-3 text-end">
              <Dropdown>
                <Dropdown.Toggle as={CustomToggle} id="dropdown-autoclose-true">
                  <div className="avatar avatar-md avatar-indicators avatar-online">
                    <img
                      alt="avatar"
                      src="https://cdn.landesa.org/wp-content/uploads/default-user-image.png"
                      className="rounded-circle"
                    />
                  </div>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item as={Link} to="/settings">
                    Settings
                  </Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item onClick={() => logout()}>
                    Log Out
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </>
        ) : (
          <>
            <div className="col-md-3 text-end">
              <Link
                to="/login"
                className="btn btn-outline-primary custom-button borderless-button me-2"
              >
                Login
              </Link>

              <Link
                to="/signup"
                className="btn btn-primary custom-button purple-button"
              >
                Sign Up
              </Link>
            </div>
          </>
        )}
      </header>
    </div>
  );
}
