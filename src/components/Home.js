import React from "react";
import Search from "./tracks/Search";
import Tracks from "./tracks/Tracks";

const Home = () => {
  return (
    <React.Fragment>
      <Search />
      <Tracks />
    </React.Fragment>
  );
};

export default Home;
