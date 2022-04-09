import { useSynchronousState } from "@toolz/use-synchronous-state";
import React, { useLayoutEffect, useState, useMemo } from "react";
import { getExercises } from "../../../services/ExerciseService";
import InfiniteScroll from "react-infinite-scroll-component";
import { API_LIMIT } from "../../../services/ExerciseService";
import { debounce } from "lodash";
import { OverlayTrigger } from "react-bootstrap";
import { Popover } from "react-bootstrap";

export default function AddExercise({ changeSection, selectExercise }) {
  const [page, setPage] = useSynchronousState(0);
  const [data, setData] = useSynchronousState([]);
  const [hasMoreData, setHasMoreData] = useState(true);
  const [rowIndex, setRowIndex] = useState(1);
  const [searchBar, setSearchBar] = useSynchronousState("");

  useLayoutEffect(() => {
    getExercises(page())
      .then((response) => {
        setData(response.data);
        setPage(page() + 1);
      })
      .catch((error) => console.log(error));
  }, []);

  function fetchData(page) {
    getExercises(page).then((response) => {
      if (response.data.length === 0 || response.data.length < API_LIMIT) {
        setHasMoreData(false);
      }
      setData([...data(), ...response.data]);
      setPage(page + 1);
      setRowIndex(rowIndex + 1);
    });
  }

  function handleSearchInput(event) {
    setPage(0);
    setData([]);
    setSearchBar(event.target.value);
    getExercises(0, "", event.target.value).then((response) => {
      setData(response.data);
      setPage(page() + 1);
    });
  }

  const debounceSearchInput = useMemo(
    () => debounce(handleSearchInput, 300),
    []
  );

  const popover = (image) => {
    return (
      <Popover id="popover-basic">
        <Popover.Body>
          <img className="img-fluid" src={image} />
        </Popover.Body>
      </Popover>
    );
  };

  function handleExerciseClick(exercise) {
    changeSection("Exercise");
    selectExercise(exercise);
  }

  return (
    <>
      <form className="add-workout-form mb-3">
        <div className="form-floating mb-3">
          <input
            type="text"
            className="form-control"
            id="exercise-name"
            name="exercise-name"
            placeholder="Exercise Name"
            onChange={(e) => {
              debounceSearchInput(e);
            }}
            autoFocus={true}
          />
          <label htmlFor="exercise-name">Exercise Name</label>
        </div>
      </form>
      <div className="exercises-list" id="scrollableDiv">
        <InfiniteScroll
          dataLength={data().length} //This is important field to render the next data
          next={() => fetchData(page())}
          hasMore={hasMoreData}
          style={{ overflowX: "hidden" }}
          loader={<h4>Loading...</h4>}
          scrollableTarget="scrollableDiv"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
          {data().map((item, index) => (
            <div className="row" key={index}>
              <OverlayTrigger
                placement="top"
                delay={{ show: 450, hide: 0 }}
                overlay={popover(item.image)}
              >
                <div
                  className="col-lg-12 col-md-12 col-sm-12 mb-4 exercise d-flex justify-content-between border-bottom"
                  onClick={() => handleExerciseClick(item)}
                >
                  <div>{item.name}</div>
                  <div className="me-2">{item.target}</div>
                </div>
              </OverlayTrigger>
            </div>
          ))}
        </InfiniteScroll>
      </div>
    </>
  );
}
