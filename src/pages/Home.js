import React from "react";
import homepageGirl from "../static/homepage-girl.png";
import { Link } from "react-router-dom";
import "./Home.css";
import Newsletter from "../components/newsletter/Newsletter";

export default function Home() {
  return (
    <>
      <div className="custom-bg">
        <div className="container">
          <div className="align-items-center g-0 row">
            <div className="col-xl-5 col-lg-6 col-md-12">
              <div className="py-5 py-lg-0">
                <h1 className="text-white display-4 fw-bold">
                  Welcome to Fitnessfy
                </h1>
                <p className="text-white-50 mb-4 lead">
                  Check out our set of exercises, create your own workouts and
                  start executing them right away.
                </p>
                <Link to="/exercises" className="btn btn-success purple-button">
                  Browse Exercises
                </Link>{" "}
                {/* <a className="btn btn-white" href="/authentication/sign-in/">
                Programs
              </a> */}
              </div>
            </div>
            <div className="text-lg-end text-center col-xl-7 col-lg-6 col-md-12">
              <img
                src={homepageGirl}
                alt=""
                className="homepage-girl img-fluid"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="hanging-icons">
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              {/* <svg className="bi" width="1em" height="1em">
                <use xlink:href="#toggles2"></use>
              </svg> */}
            </div>
            <div>
              <h2>Exercises</h2>
              <p>
                Find the exercises that target your preferred muscle group.
                Additionally learn how to do the exercise properly in order to
                avoid injuries.
              </p>
              <Link to="/exercises" className="btn btn-primary purple-button">
                Exercises
              </Link>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              {/* <svg className="bi" width="1em" height="1em">
                <use xlink:href="#cpu-fill"></use>
              </svg> */}
            </div>
            <div>
              <h2>Workouts</h2>
              <p>
                Combine multiple exercises into a single workout. For each
                exercise you can set rest period, weight for doing the exercise,
                sets and repetitions.
              </p>
              <Link to="/workouts" className="btn btn-primary purple-button">
                Workouts
              </Link>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square bg-light text-dark flex-shrink-0 me-3">
              {/* <svg className="bi" width="1em" height="1em">
                <use xlink:href="#tools"></use>
              </svg> */}
            </div>
            <div>
              <h2>Programs</h2>
              <p>
                Combine multiple workouts in order to create a program. Maximize
                your potential and reach your goals as soon as possible.
              </p>
              <Link to="/programs" className="btn btn-primary purple-button">
                Programs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container px-4 py-5" id="custom-cards">
        <h2 className="pb-2 border-bottom">Trending Programs</h2>

        <div className="row row-cols-1 row-cols-lg-3 align-items-stretch g-4 py-5">
          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              // style="background-image: url('unsplash-photo-1.jpg');"
              style={{ background: `url('unsplash-photo-1.jpg'` }}
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Short title, long jacket
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <small>3d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              // style="background-image: url('unsplash-photo-2.jpg');"
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Much longer title that wraps to multiple lines
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>

                  <li className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>
                    <small>4d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col">
            <div
              className="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg"
              // style="background-image: url('unsplash-photo-3.jpg');"
            >
              <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                <h2 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                  Another longer title belongs here
                </h2>
                <ul className="d-flex list-unstyled mt-auto">
                  <li className="me-auto">
                    <img
                      src="https://github.com/twbs.png"
                      alt="Bootstrap"
                      width="32"
                      height="32"
                      className="rounded-circle border border-white"
                    />
                  </li>
                  <li className="d-flex align-items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-calendar3"
                      viewBox="0 0 16 16"
                    >
                      <path d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                      <path d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                    </svg>{" "}
                    <small>5d</small>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Newsletter />
    </>
  );
}
