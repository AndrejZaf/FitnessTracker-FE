import { act } from "react-dom/test-utils";
import * as actions from "./ActionTypes";

const initialState = {
  isLoading: true,
  currentUser: {
    email: null,
    uid: null,
    weight: null,
    height: null,
    measurementSystem: null,
    imageUrl: null,
    workouts: [],
  },
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.RETRIEVE_USER:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          email: action.payload.email,
          uid: action.payload.uid,
          weight: action.payload.weight,
          height: action.payload.height,
          measurementSystem: action.payload.measurementSystem,
          imageUrl: action.payload.imageUrl,
          workouts: action.payload.workouts,
        },
      };
    case actions.CLEAR_CURRENT_USER:
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          email: null,
          uid: null,
          weight: null,
          height: null,
          measurementSystem: null,
          imageUrl: null,
          workouts: [],
        },
      };
    case actions.TOGGLE_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
        currentUser: {
          ...state.currentUser,
        },
      };
    }
    case actions.ADD_NEW_WORKOUT: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          workouts: [...state.currentUser.workouts, action.payload.workout],
        },
      };
    }
    case actions.FETCH_WORKOUTS: {
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          workouts: action.payload.workouts,
        },
      };
    }
    case actions.DELETE_WORKOUT_BY_UID: {
      const index = state.currentUser.workouts.findIndex(
        (workout) => workout.uid === action.payload.uid
      );
      let newWorkoutsState = [...state.currentUser.workouts];
      newWorkoutsState.splice(index, 1);
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          workouts: newWorkoutsState,
        },
      };
    }
    case actions.UPDATE_WORKOUT: {
      const index = state.currentUser.workouts.findIndex(
        (workout) => workout.uid === action.payload.uid
      );
      let editedWorkout = { ...state.currentUser.workouts[index] };
      editedWorkout = { ...action.payload.workout, uid: action.payload.uid };
      let newWorkoutsState = [...state.currentUser.workouts];
      newWorkoutsState[index] = editedWorkout;
      return {
        ...state,
        currentUser: {
          ...state.currentUser,
          workouts: newWorkoutsState,
        },
      };
    }
    default:
      return state;
  }
}
