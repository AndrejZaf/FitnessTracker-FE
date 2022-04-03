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
    default:
      return state;
  }
}
