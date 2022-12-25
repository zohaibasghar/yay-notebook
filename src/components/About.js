import React from "react";

const About = () => {
  return (
    <div className="container">
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-8 my-3">
            <h2>About Yay Notebook</h2>
            <h4>Make your notebook</h4>
            <p>If you are here it means you love to keep notes.</p>
            <button className="btn btn-outline-dark btn-lg" onClick={()=>{alert('Coming soon! Stay tuned.')}}>Get in Touch</button>
          </div>
          <div className="col-sm-1 icons">
          <i className="fa-solid fa-arrow-up-right-dots about-icons"></i>
          </div>
        </div>
      </div>

      <div className="container-fluid my-5 ">
        <div className="row">
          <div className="col-sm-3 icons">
          <i className="fa-solid fa-earth-americas about-icons"></i>
          </div>
          <div className="col-sm-8">
            <h2>Our Values</h2>
            <h4>
              <strong>MISSION:</strong> Bringing notebooks to another level
            </h4>
            <p>
              <strong>VISION:</strong> converging latest technology to the old note keeping system
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
