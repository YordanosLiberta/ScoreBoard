import React from "react";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <div style={{ marginBottom: 30 }}>
      <NavLink
        exact
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/"
        style={{ margin: 20 }}
      >
        Home
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/Scoreboard"
        style={{ margin: 20 }}
      >
        Scoreboard
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/about"
        style={{ margin: 20 }}
      >
        About us
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/DiscoverMoviesPage"
        style={{ margin: 20 }}
      >
        Discover MoviesPage
      </NavLink>
      <NavLink
        activeStyle={{ fontWeight: "bold", color: "red" }}
        to="/Title"
        style={{ margin: 20 }}
      >
        Title
      </NavLink>
    </div>
  );
}
