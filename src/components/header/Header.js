import React, { useEffect, useState } from "react";
import { Dropdown } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import store from "../../store/Store";
import { clearCurrentUser, getCurrentUser } from "../../store/StoreFacade";
import "./Header.css";
import logo from "../../static/logo.svg";

export default function Header(props) {
  const [isLoggedin, setIsLoggedin] = useState(false);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setIsLoggedin(store.getState().currentUser.email !== null);
    });
    setIsLoggedin(getCurrentUser().email !== null);
    return unsubscribe;
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
        <Link
          to="/"
          className="d-flex align-items-center col-md-3 mb-2 mb-md-0 text-dark text-decoration-none"
        >
          <img src={logo} className="logo" alt={logo} />
        </Link>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <NavLink exact to="/" className={`nav-link px-2 link-secondary`}>
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
                  {/* <Dropdown.Item as={Link} to="/settings">
                    Settings
                  </Dropdown.Item> */}
                  {/* <Dropdown.Divider /> */}
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
