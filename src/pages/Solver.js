import { React } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import "./solver.css";

export default function Solver() {
  /* QUADRATIC FORMULA EQUATION */
  let {
    aTerm,
    bTerm,
    cTerm,
    outputText,
    outputTextEq,
    handleSubmit,
    axTerm,
    ayTerm,
    bxTerm,
    byTerm,
    eq1,
    eq2,
    eqOutputText,
    eqOutput,
    xdev,
    x,
    y,
    ax3Term,
    bx2Term,
    cxTerm,
    dTerm,
    cubicEq,
    cubicOutput,
  } = useForm();

  // submit function once 'Calculate' button has been pressed
  let onSubmit = () => {
    aTerm = document.forms["input_form"]["a"].value;
    bTerm = document.forms["input_form"]["b"].value;
    cTerm = document.forms["input_form"]["c"].value;

    // if a = 0, print error message, else calculate the equation
    if (aTerm === 0) {
      outputText = "<p>Error, cannot equal 0!</p>";
    } else {
      // root 1 equation
      let x1 =
        (-bTerm - Math.sqrt(Math.pow(bTerm, 2) - 4 * aTerm * cTerm)) /
        (2 * aTerm);
      // root 2 equation
      let x2 =
        (-bTerm + Math.sqrt(Math.pow(bTerm, 2) - 4 * aTerm * cTerm)) /
        (2 * aTerm);

      // Display the user equation in qudratic form
      outputTextEq =
        "Equation: " +
        (aTerm == 1 ? "" : aTerm) +
        "x\u00B2 + " +
        (bTerm == 1 ? "" : bTerm) +
        "x + " +
        cTerm +
        " = 0";
      // Display the roots calculated
      outputText = "Roots: " + x1 + " , " + x2;
    }
    // get the following IDs and print out the output from the calculation/text input
    document.getElementById("equation").innerHTML = outputTextEq;
    document.getElementById("roots").innerHTML = outputText;
  };
  /* END OF QUADRATIC FORMULA EQUATION */

  /* PYTHAGOREAN THEOREM */
  const onPythCalc = () => {
    let a2Term = document.forms["input_form2"]["a2"].value;
    let b2Term = document.forms["input_form2"]["b2"].value;

    if (a2Term || b2Term) {
      let c2 = Math.sqrt(Math.pow(a2Term, 2) + Math.pow(b2Term, 2));

      outputTextEq =
        "Equation: " + a2Term + "\u00B2 + " + b2Term + "\u00B2 = " + "c\u00B2";
      outputText = "Output: " + c2.toFixed(3);
    }

    document.getElementById("pythText").innerHTML = outputTextEq;
    document.getElementById("pythOutput").innerHTML = outputText;
  };

  /* TWO LINEAR EQUATIONS */
  const onCalculate = () => {
    axTerm = document.forms["input_form3"]["ax"].value;
    ayTerm = document.forms["input_form3"]["ay"].value;
    bxTerm = document.forms["input_form3"]["bx"].value;
    byTerm = document.forms["input_form3"]["by"].value;
    eq1 = document.forms["input_form3"]["eq1"].value;
    eq2 = document.forms["input_form3"]["eq2"].value;

    // calculating for both x and y terms separately
    let x = (eq2 * ayTerm - eq1 * byTerm) / (ayTerm * bxTerm - axTerm * byTerm);
    let y = (eq1 * bxTerm - eq2 * axTerm) / (ayTerm * bxTerm - axTerm * byTerm);

    // converts num -> str, then rounds to a specified decimal (3)
    x = x.toFixed(3);
    y = y.toFixed(3);

    eqOutputText =
      "Equation1: " +
      axTerm +
      "x + " +
      ayTerm +
      "y" +
      " = " +
      eq1 +
      " Equation2: " +
      bxTerm +
      "x + " +
      byTerm +
      "y" +
      " = " +
      eq2;
    eqOutput = "Output: " + x + " , " + y;

    document.getElementById("eqOutputText").innerHTML = eqOutputText;
    document.getElementById("eqOutput").innerHTML = eqOutput;
  };
  /* END OF TWO LINEAR EQUATIONS */

  /* CUBIC EQUATION */
  let onCubicCalc = () => {
    ax3Term = document.forms["input_form4"]["ax3"].value;
    bx2Term = document.forms["input_form4"]["bx2"].value;
    cxTerm = document.forms["input_form4"]["cx"].value;
    dTerm = document.forms["input_form4"]["d"].value;

    let err = 0.0001,
      iter = 0.00001,
      xlast = -100;

    // looping through the statements, we then move to an if statement once calculation has completed
    for (x = -100; x <= 100; x += iter) {
      y = ax3Term * x * x * x + bx2Term * x * x + cxTerm * x + dTerm;
      xdev = x - xlast;

      cubicEq =
        "Equation: " +
        ax3Term +
        "x\u00B3 + " +
        bx2Term +
        "x\u00B2 + " +
        cxTerm +
        "x + " +
        dTerm +
        " = 0";

      // output the answer
      if (Math.abs(y) < err && xdev > 0.1) {
        cubicOutput = "Output: x<sub>1</sub> = " + x.toFixed(3);
        xlast = x;
      }
    }
    document.getElementById("cubicEq").innerHTML = cubicEq;
    document.getElementById("cubicOutput").innerHTML = cubicOutput;
  };
  /* END OF CUBIC EQUATION */

  return (
    <>
      <Helmet>
        <title>Solver</title>
      </Helmet>

      {/* QUADRATIC FORM */}
      <div className="solver">
        <form name="input_form" onSubmit={handleSubmit(onSubmit)}>
          <h5>Quadratic Equation</h5>
          <div className="quadratic">
            <div className="inputDiv">
              a:
              <input type="number" name="a" ref={aTerm} required />
              <br />
            </div>
            <div className="inputDiv">
              b:
              <input type="number" name="b" ref={bTerm} required />
              <br />
            </div>
            <div className="inputDiv">
              c:
              <input type="number" name="c" ref={cTerm} required />
              <br />
            </div>
            <p id="equation">
              Equation: x<sup>2</sup> + x + c = 0
            </p>
            <p id="roots">Roots: x1 , x2</p>
            <input
              type="submit"
              value="Calculate"
              className="btn btn-primary"
            />
          </div>
        </form>
        {/* END OF QUADRATIC FORM */}

        <hr />
        <br />

        {/* PYTHAGOREAN THEOREM */}
        <form name="input_form2" onSubmit={handleSubmit(onPythCalc)}>
          <h5>Pythagorean Theorem</h5>
          <div className="theorem">
            <div className="inputDivTheorem">
              <input type="text" name="a2" required />a<sup>2</sup> +
              <input type="text" name="b2" required />b<sup>2</sup>
            </div>
            <br />
            <p id="pythText">
              Equation: a<sup>2</sup> + b<sup>2</sup> = c<sup>2</sup>
            </p>
            <p id="pythOutput">Output: ...</p>
            <input
              type="submit"
              value="Calculate"
              className="btn btn-primary"
            />
          </div>
        </form>
        {/* END OF PYTHAGOREAN THEOREM */}
        
        <hr />
        <br />

        {/* TWO LINEAR EQUATIONS */}
        <form name="input_form3" onSubmit={handleSubmit(onCalculate)}>
          <div>
            <h5>Two Linear Equations</h5>
            <div className="linear">
              <div className="inputDivLinear">
                <input type="text" name="ax" ref={axTerm} required />x +
                <input type="text" name="ay" ref={ayTerm} required />y ={" "}
                <input type="text" name="eq1" ref={eq1} required />
              </div>
              <br />
              <div className="inputDivLinear">
                <input type="text" name="bx" ref={bxTerm} required />x +
                <input type="text" name="by" ref={byTerm} required />y ={" "}
                <input type="text" name="eq2" ref={eq2} required />
              </div>
            </div>
            <br />
            <p id="eqOutputText">Equation1: x + y = 0 Equation2: x + y = 0</p>
            <p id="eqOutput">Output: X , Y</p>
            <input
              type="submit"
              value="Calculate"
              className="btn btn-primary"
            />
          </div>
        </form>

        <br />
        <hr />

        {/* CUBIC EQUATION */}
        <form name="input_form4" onSubmit={handleSubmit(onCubicCalc)}>
          <div className="cubic">
            <h5>Cubic Equation - (In Progress)</h5>
            <input type="text" name="ax3" ref={ax3Term} required />x<sup>3</sup>{" "}
            +
            <input type="text" name="bx2" ref={bx2Term} required />x<sup>2</sup>{" "}
            +
            <input type="text" name="cx" ref={cxTerm} required />x +
            <input type="text" name="d" ref={dTerm} required /> = 0
          </div>
          <br />
          <p id="cubicEq">
            Equation: ax<sup>3</sup> + bx<sup>2</sup> + cx + d = 0
          </p>
          <p id="cubicOutput">
            Output: x<sub>1</sub> = ...
          </p>
          <input type="submit" value="Calculate" className="btn btn-primary" />
          <br />
          <strong>
            <em>NOTE: Allow a few seconds to run calculation.</em>
          </strong>
        </form>
        {/* END OF CUBIC EQUATION */}

        <br />
        <hr />

        <h3>More equations to come!</h3>
      </div>
    </>
  );
}
