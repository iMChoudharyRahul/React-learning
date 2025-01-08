import React from "react";
import "../LayoutStyle.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header-box">
      {/* <h1>React Revision Website</h1> */}
      <Link to="/" className="nav-item">
        Home
      </Link>
      <Link to="/ref" className="nav-item">
        UseRef Expl
      </Link>
      <Link to="/reducer" className="nav-item">
        useReducer
      </Link>
      <Link to="/blog" className="nav-item">
        ReducerBlog
      </Link>
      <Link to="/crud" className="nav-item">
        Todo-useState
      </Link>
      <Link to="/todo" className="nav-item">
        Todo-useReducer
      </Link>
      <Link to="/game" className="nav-item">
        TicTacGame
      </Link>
      {/* <Link to="/timer" className="nav-item">
        StopWatch
      </Link> */}
      <Link to="/blogs" className="nav-item">
        BlogApp
      </Link>
      <Link to="/resetPass" className="nav-item">
        ResetPass
      </Link>
      <Link to="/network" className="nav-item">
        CheckNetwork
      </Link>
      {/* <Link to="/vs-folder" className="nav-item">
        VsCodeFolderStructure
      </Link> */}
      <Link to="/pagination" className="nav-item">
        Pagination
      </Link>
    </div>
  );
};

export default Header;
