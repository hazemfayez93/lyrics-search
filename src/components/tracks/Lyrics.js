import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Spinner from "../../layout/Spinner";
import { Context } from "../context/GlobalContext";

const apiURL = "https://api.lyrics.ovh";

const Lyrics = () => {
  const [lyrics, setLyrics] = useState({});
  const location = useParams();
  const { artist, title, id } = location;

  const value = useContext(Context);
  const findValue = value.track_list.find((item) => item.id == id);

  useEffect(() => {
    const getLyrics = async () => {
      const response = await axios.get(`${apiURL}/v1/${artist}/${title}`);
      const data = response.data;
      const dataReplace = data.lyrics.replace(/(\r\n|\r|\n)/g, "<br>");
      const lyricsData = dataReplace.split("<br>").map((item) => <p>{item}</p>);

      setLyrics(lyricsData);
    };
    getLyrics();
  }, [artist, title]);

  if (
    findValue === undefined ||
    lyrics === undefined ||
    Object.keys(lyrics).length === 0
  ) {
    return <Spinner />;
  } else {
    return (
      <React.Fragment>
        <Link to="/" className="btn btn-dark btn-sm mb-4 ml-3">
          <i className="fas fa-chevron-left"></i>Go Back
        </Link>
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 mb-4">
              <div className="card">
                <div className="position-relative">
                  <img
                    src={findValue.album.cover_big}
                    alt={findValue.album.title}
                    className="img-album"
                  />
                  <img
                    className="card-img-top"
                    src={findValue.artist.picture_big}
                    alt={findValue.artist.name}
                  />
                </div>
                <div className="card-body">
                  <p className="card-text">
                    <h6>
                      <strong>
                        <i className="fas fa-compact-disc"></i> Album:{" "}
                      </strong>{" "}
                      {findValue.album.title}
                    </h6>
                    <h6>
                      <strong>
                        <i className="fas fa-play"> </i> Artist:{" "}
                      </strong>{" "}
                      {findValue.artist.name}
                    </h6>
                    <h6>
                      <strong>
                        <i className="fas fa-id-badge"></i> Id:
                      </strong>{" "}
                      {findValue.id}
                    </h6>
                  </p>
                </div>
                <div className="card-footer">
                  <audio controls loop>
                    <source src={findValue.preview} type="audio/ogg" />
                    <source src={findValue.preview} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card">
                <h5 className="card-header">
                  {title} by <span className="text-secondary">{artist}</span>
                </h5>
                <div className="card-body">
                  <p className="card-text">{lyrics}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
};

export default Lyrics;
