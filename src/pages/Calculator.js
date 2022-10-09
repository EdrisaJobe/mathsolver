import React, { useState } from "react";
import Helmet from "react-helmet";

export default function Calculator() {
  const [val, setVal] = useState(""); // input and display values
  const backspace = () => {
    // C/CE, clear variable
    try {
      setVal(val.slice(0, -1)); // remove characters, going back
    } catch (error) {
      setVal("");
    }
  };

  const equal = () => {
    try {
      setVal(eval(val)); // calculate the values of variable val
    } catch (error) {
      setVal("Error"); // if calculation is not possible
    }
  };

  return (
    <>
    <Helmet>
      <title>Calculator</title>
    </Helmet>
      {/* CALCULATOR FRAME and ALIGNMENT */}
      <div className="row justify-content-center p-3">
        <div className="col-md-4">
          <div className="card mb-3 pt-3 shadow">
            <div className="card-body text-primary">
              <input
                type="text"
                className="form-control form-control-lg mb-4 text-end bg-light shadow"
                value={val}
                onChange={(e) => setVal(e.target.value)}
              />{" "}
              {/* allows the user to input their equatins via keyboard*/}
              <div className="row">
                <div className="col-3">
                  {/* KEYPAD OF SYMBOLS */}
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="1"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    1
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="2"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    2
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="3"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    3
                  </button>
                </div>
                <div className="col-3">
                  <button
                    className="btn btn-light shadow p-4 fs-4 px-2 py-4"
                    value="C"
                    onClick={() => backspace()}
                  >
                    C/CE
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="4"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    4
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="5"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    5
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="6"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    6
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="+"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    +
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="7"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    7
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="8"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    8
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="9"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    9
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="*"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    X
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="."
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    .
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="0"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    0
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="="
                    onClick={() => equal()}
                  >
                    =
                  </button>
                </div>
                <div className="col-3 mt-2">
                  <button
                    className="btn btn-light shadow p-4 fs-4"
                    value="/"
                    onClick={(e) => setVal(val + e.target.value)}
                  >
                    /
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
