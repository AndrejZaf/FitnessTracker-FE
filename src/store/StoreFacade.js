import store from "./Store";
import * as actions from "./ActionTypes";

export function getStoreState() {
  return store.getState();
}

export function getCurrentUser() {
  return getStoreState().currentUser;
}

export function getUserWorkouts() {
  return getStoreState().currentUser.workouts;
}

export function isLoading() {
  return getStoreState().isLoading;
}

export function toggleLoading() {
  store.dispatch({
    type: actions.TOGGLE_LOADING,
  });
}

export function setCurrentUser(userData) {
  store.dispatch({
    type: actions.RETRIEVE_USER,
    payload: {
      email: userData.email,
      uid: userData.uid,
      measurementSystem: userData.measurementSystem,
      height: userData.height,
      weight: userData.weight,
      imageUrl: userData.imageUrl,
      workouts: userData.workouts,
    },
  });
}

export function clearCurrentUser() {
  store.dispatch({
    type: actions.CLEAR_CURRENT_USER,
  });
}

export function updateUserWorkouts(newWorkout) {
  store.dispatch({
    type: actions.ADD_NEW_WORKOUT,
    payload: {
      workout: newWorkout,
    },
  });
}

export function fetchWorkouts(newWorkouts) {
  store.dispatch({
    type: actions.FETCH_WORKOUTS,
    payload: {
      workouts: newWorkouts,
    },
  });
}

export function deleteWorkoutByUid(uid) {
  store.dispatch({
    type: actions.DELETE_WORKOUT_BY_UID,
    payload: {
      uid: uid,
    },
  });
}

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// unsubscribe(); // Potential memory leaks if this is forgotten
