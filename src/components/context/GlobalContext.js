import React, { useEffect, useState } from "react";
import axios from "axios";

export const Context = React.createContext();

const apiURL = "https://api.lyrics.ovh";

const reducer = (state, action) => {
  switch (action.type) {
    case "SEARCH_TRACKS":
      return {
        ...state,
        track_list: action.payload,
        heading: "Search Results",
      };
    default:
      return state;
  }
};

export const GlobalContext = (props) => {
  const [state, setState] = useState({
    track_list: [],
    heading: "Top 15 Tracks",
    dispatch: (action) => setState((state) => reducer(state, action)),
  });

  useEffect(() => {
    const getData = async () => {
      const response = await axios.get(`${apiURL}/suggest/ed sheraan`);
      const data = await response.data.data;
      setState((state) => {
        return {
          ...state,
          track_list: data,
        };
      });
    };
    getData();
  }, []);

  return <Context.Provider value={state}>{props.children}</Context.Provider>;
};
