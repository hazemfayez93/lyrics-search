import React from "react";
import { Link } from "react-router-dom";

const Track = ({ track }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4 shadow-sm">
        <img className="card-img-top" src={track.album.cover_big} />
        <div className="card-body">
          <h5 className="card-title">{track.title}</h5>
          <p className="card-text">
            <strong>
              <i className="fas fa-play"></i> Artist
            </strong>{" "}
            : {track.artist.name}
            <br />
            <strong>
              <i className="fas fa-compact-disc"></i> Album
            </strong>{" "}
            : {track.album.title}
          </p>
          <Link
            to={`lyrics/track/${track.artist.name}/${track.title}/${track.id}`}
            className="btn btn-dark btn-block"
          >
            <i className="fas fa-music"></i> View Lyrics
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Track;
