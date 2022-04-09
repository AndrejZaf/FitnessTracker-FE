import React, { useState, useMemo, useEffect, useLayoutEffect } from "react";
import "./Exercises.css";
import { getExercises } from "../services/ExerciseService";
import { toggleLoading } from "../store/StoreFacade";
import InfiniteScroll from "react-infinite-scroll-component";
import { API_LIMIT } from "../services/ExerciseService";
import ExerciseCard from "../components/exercise-card/Exercise";
import Model from "react-body-highlighter";
import { mapToDatabaseExerciseTarget } from "../util/ExerciseUtil";
import { debounce } from "lodash";
import { useSynchronousState } from "@toolz/use-synchronous-state";
import { Link } from "react-router-dom";

export default function Exercises() {
  const [selectedMuscle, setSelectedMuscle] = useSynchronousState("");
  const [data, setData] = useSynchronousState([]);
  const [page, setPage] = useSynchronousState(0);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [rowIndex, setRowIndex] = useState(1);
  const [musclesData, setMusclesData] = useState([{ muscles: [] }]);
  const [searchBar, setSearchBar] = useSynchronousState("");

  useLayoutEffect(() => {
    toggleLoading();
    getExercises(page())
      .then((response) => {
        setData(response.data);
        setPage(page() + 1);
      })
      .catch((error) => console.log(error))
      .finally(() => toggleLoading());
  }, []);

  function fetchData(page, muscle, exerciseName) {
    getExercises(page, muscle, exerciseName).then((response) => {
      if (response.data.length === 0 || response.data.length < API_LIMIT) {
        setHasMoreData(false);
      }
      setData([...data(), ...response.data]);
      setPage(page + 1);
      setRowIndex(rowIndex + 1);
    });
  }

  function handleMuscleClick({ muscle }) {
    if (
      muscle === "head" ||
      muscle === "knees" ||
      muscle === "right-soleus" ||
      muscle === "left-soleus"
    ) {
      return;
    }
    setMusclesData([{ muscles: [muscle] }]);
    const convertMuscle = mapToDatabaseExerciseTarget(muscle);
    setData([]);
    setPage(0);
    setRowIndex(1);
    fetchData(0, convertMuscle);
    setSearchBar("");
    setSelectedMuscle(convertMuscle);
  }

  const debouncedHandleMuscleClick = useMemo(
    () => debounce(handleMuscleClick, 300),
    []
  );

  function clearFilters() {
    if (!selectedMuscle()) {
      return;
    }
    setSearchBar("");
    setMusclesData([{ muscles: [] }]);
    setRowIndex(1);
    setData([]);
    setSelectedMuscle("");
    setPage(0);
    fetchData(page());
  }

  function handleSearchInput(event) {
    setSelectedMuscle("");
    setMusclesData([{ muscles: [] }]);
    setPage(0);
    setData([]);
    setSearchBar(event.target.value);
    getExercises(0, selectedMuscle(), event.target.value).then((response) => {
      setData(response.data);
      setPage(page() + 1);
    });
  }

  const debounceSearchInput = useMemo(
    () => debounce(handleSearchInput, 300),
    []
  );

  return (
    <>
      <div className="page-header-exercises text-white d-flex justify-content-center">
        <div className="align-self-center ">
          <h1>Exercises</h1>
        </div>
      </div>
      <div className="bottom-container">
        <div className="container mt-4">
          <div className="row">
            <div className="col-md-2 text-center">
              <button
                className="btn btn-light purple-button text-white mb-3"
                onClick={clearFilters}
              >
                Clear filters
              </button>
              <div className="row models">
                <div className="col-lg-12 col-md-12 col-sm-6 col-6">
                  <div className="model">
                    <Model
                      data={musclesData}
                      highlightedColors={["#8587DC"]}
                      onClick={debouncedHandleMuscleClick}
                    />
                  </div>
                </div>
                <br />
                <div className="col-lg-12 col-md-12 col-sm-6 col-6">
                  <div className="model">
                    <Model
                      type="posterior"
                      data={musclesData}
                      highlightedColors={["#8587DC"]}
                      onClick={debouncedHandleMuscleClick}
                      className="model2"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-10">
              <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
                <input
                  type="search"
                  className="form-control mb-3"
                  placeholder="Search..."
                  aria-label="Search"
                  value={searchBar()}
                  onChange={(event) => {
                    setSearchBar(event.target.value);
                    debounceSearchInput(event);
                  }}
                />
              </form>
              <InfiniteScroll
                dataLength={data().length} //This is important field to render the next data
                next={() => fetchData(page(), selectedMuscle(), searchBar())}
                hasMore={hasMoreData}
                style={{ overflowX: "hidden" }}
                loader={<h4>Loading...</h4>}
                endMessage={
                  <p style={{ textAlign: "center" }}>
                    <b>Yay! You have seen it all</b>
                  </p>
                }
              >
                <div className="row">
                  {data().map((item, index) => (
                    <div
                      key={index}
                      className="col-lg-4 col-md-6 col-sm-6 mb-4"
                    >
                      <Link
                        to={`/exercises/${item.uid}`}
                        className="custom-link"
                      >
                        <ExerciseCard
                          name={item.name}
                          target={item.target}
                          equipment={item.equipment}
                        ></ExerciseCard>
                      </Link>
                    </div>
                  ))}
                </div>
              </InfiniteScroll>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
