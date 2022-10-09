import React from "react";
import Helmet from "react-helmet";
import "./home.css";

export default function Home() {
  return (
    <>
      <Helmet>
      <title>Home</title>
      </Helmet>
      <div className="card-container">
        <div className="img-container">
          <img src="https://media.istockphoto.com/photos/complex-math-formulas-on-whiteboard-mathematics-and-science-with-picture-id696935130?k=20&m=696935130&s=612x612&w=0&h=NXIIY-8tp_T21bNkyQq2nxnJnvZ6dv7lFy4tdbbkXmM= " alt="Error" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Solver</h3>
          </div>
          <div className="body">Find a variety of different equation solvers in one form.</div>
          <hr />
          <div className="btn">
            <a className="view" href="solver">
              View More 
            </a>
          </div>
        </div>
      </div>

      <div className="card-container-2">
        <div className="img-container">
          <img src="https://static.vecteezy.com/system/resources/previews/004/557/352/non_2x/calculator-cartoon-object-vector.jpg" alt="Error" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>Calculator</h3>
          </div>
          <div className="body">A simple calculator to calculate simple functions.</div>
          <hr />
          <div className="btn">
            <a className="view" href="calculator">
              View More
            </a>
          </div>
        </div>
      </div>

      <div className="card-container-3">
        <div className="img-container">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIHNKtI6OIk5nIjva6IZlYzSFWrQyc7YWvhOsfkiLO6BienGBqO8ksCvtw88AVbWRABCw&usqp=CAU" alt="Error" />
        </div>
        <div className="card-content">
          <div className="card-title">
            <h3>About Page</h3>
          </div>
          <div className="body">Need to know more about the site? Click below.</div>
          <hr />
          <div className="btn">
            <a className="view" href="about">
              View More
            </a>
          </div>
        </div>
      </div>
      <footer>Copyright 2022 © MathHelp</footer>
    </>
  );
}
