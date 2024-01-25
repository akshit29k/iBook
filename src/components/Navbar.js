import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"g#282c34"}}>
  <div className="container-fluid">
    <a className="navbar-brand text-white h1" href="/">iBook</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link text-white h2" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white h2" to="/about">About</Link>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link className="btn btn-outline-light  border-white" to="/login-signup" >Login/Signup</Link>
      </form>
    </div>
  </div>
</nav>
  )
}

