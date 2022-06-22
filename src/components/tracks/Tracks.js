import React, { useContext } from "react";
import { Context } from "../context/GlobalContext";
import Spinner from "../../layout/Spinner";
import Track from "./Track";

const Tracks = () => {
  const value = useContext(Context);
  const { track_list, heading } = value;
  let result;
  if (track_list === undefined || track_list.length === 0) {
    result = <Spinner />;
  } else {
    result = (
      <React.Fragment>
        <h3 className="text-center mb-4">{heading}</h3>
        <div className="row">
          {track_list.map((item) => {
            return <Track key={item.id} track={item} />;
          })}
        </div>
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <div className="wrapper m-5">{result}</div>
    </React.Fragment>
  );
};

export default Tracks;
