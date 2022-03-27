import store from "./Store";
import * as actions from "./ActionTypes";

export function getStoreState() {
  return store.getState();
}

export function getCurrentUser() {
  return getStoreState().currentUser;
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
    },
  });
}

export function clearCurrentUser() {
  store.dispatch({
    type: actions.CLEAR_CURRENT_USER,
  });
}

// const unsubscribe = store.subscribe(() => {
//   console.log("Store changed!", store.getState());
// });

// unsubscribe(); // Potential memory leaks if this is forgotten
