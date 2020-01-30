import React, { useReducer } from "react";
import axios from "axios";

/**
 * Another way to declare state is through the use of reducers.
 *
 * To have access to state reducers, we make use of the hook useReducers.
 * Since several setStates trigger a rerender, we could compile all state changes into one using reducers.
 *
 * Three concepts to take into heart,
 * STORE - contains your data
 * ACTIONS - calls a reducer
 * REDUCERS - updates the store
 */

const initialState = {
  loading: false,
  error: null,
  success: false,
  data: null
};

const ApiReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_LOADING":
      return { loading: true, error: null, success: false };
    case "FETCH_SUCCESS":
      return {
        loading: false,
        error: null,
        success: true,
        data: action.payload
      };
    case "FETCH_ERROR":
      return {
        loading: false,
        error: action.payload,
        success: false,
        data: null
      };
    default:
      return state;
  }
};

const GhibliMovies = () => {
  const [store, dispatch] = useReducer(ApiReducer, initialState);

  const fetchMovies = async () => {
    dispatch({ type: "FETCH_LOADING" });
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");

    if (!!response.data) {
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
    } else {
      dispatch({
        type: "FETCH_ERROR",
        payload: "Something went wrong. Check internet connection!"
      });
    }
  };

  return (
    <div>
      <button onClick={fetchMovies}>Fetch Movies</button>
      {store.loading && <span>LOADING...</span>}
      {store.success && !!store.data && (
        <ul>
          {store.data.map(movie => (
            <li key={movie.id}>{movie.title}</li>
          ))}
        </ul>
      )}
      {!!store.error && <span>{store.error}</span>}
    </div>
  );
};

export default GhibliMovies;
