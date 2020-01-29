import React, { useReducer } from "react";
import axios from "axios";

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
  const [reducer, dispatch] = useReducer(ApiReducer, initialState);

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
      {reducer.loading && <span>LOADING...</span>}
      {reducer.success && !!reducer.data && (
        <ul>
          {reducer.data.map(movie => (
            <li>{movie.title}</li>
          ))}
        </ul>
      )}
      {!!reducer.error && <span>{reducer.error}</span>}
    </div>
  );
};

export default GhibliMovies;
