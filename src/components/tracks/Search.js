import axios from "axios";
import React, { useContext, useState } from "react";
import { Context } from "../context/GlobalContext";

const apiURL = "https://api.lyrics.ovh";

const Search = () => {
  const value = useContext(Context);
  const { dispatch } = value;

  const [trackTitle, setTrackTitle] = useState("");

  const handleChange = (e) => {
    setTrackTitle(e.target.value);
  };

  const handleClick = async (dispatch) => {
    if (trackTitle) {
      const response = await axios.get(`${apiURL}/suggest/${trackTitle}`);
      await dispatch({
        type: "SEARCH_TRACKS",
        payload: response.data.data,
      });
    } else {
      alert("Please Insert a Song");
    }
  };

  return (
    <React.Fragment>
      <div className="card card-body mb-4 p-4">
        <h1 className="display-4 text-center">
          <i className="fas fa-music"></i> Search For Song{" "}
          <i className="fas fa-music"></i>
        </h1>
        <p className="lead text-center">Get the Lyrics For Any Song</p>
        <div className="form-group">
          <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Songs..."
            value={trackTitle}
            onChange={handleChange}
          />
        </div>
        <button
          onClick={() => handleClick(dispatch)}
          className="btn btn-info btn-lg btn-block"
        >
          Get Track Lyrics
        </button>
      </div>
    </React.Fragment>
  );
};

export default Search;
