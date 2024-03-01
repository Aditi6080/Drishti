// import { Button } from "bootstrap";
import React from "react";
import { Link } from "react-router-dom";

import "../css/Home.css";

function Home() {
    const redirectToExternalURL = () => {
    window.location.href = "http://localhost:9999/index.html";
  };

  return (
    <>
      <section id="header" className="main">
        <div className="content">
          <h1>Let's see the world together</h1>
          <h4>
            DrishtiConnect helps people needing sighted support with volunteers
            through live video call.
          </h4>
          <Link to="/">
            <button type="button" class="btn btn-primary" onClick={redirectToExternalURL}>
              Call us
            </button>
          </Link>
          <Link to="/volunterLogin">
            <button type="button" class="btn btn-primary">
              I'd like to volunteer
            </button>
          </Link>
        </div>
      </section>
    </>
  );
}

export default Home;
