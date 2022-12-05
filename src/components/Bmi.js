import { Col } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";
import { useState } from "react";
import gendut from "../assets/gendut.png";
import kurus from "../assets/kurus.png";
import ideal from "../assets/ideal.png";
import obesitas from "../assets/obesitas.png";
import han from "../assets/han.png";
import { motion, AnimatePresence } from "framer-motion";

export const Bmi = () => {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmiResult, setBmiResult] = useState("");

  let calculateBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Tolong masukan nilai yang benar.. ");
    } else {
      let bmiResult = weight / (height / 100) ** 2;
      setBmiResult(bmiResult.toFixed(2));
    }
  };

  var varImages =
    bmiResult == 0 || bmiResult == null || bmiResult == ""
      ? han // if
      : bmiResult < 18.5
      ? kurus // else if
      : bmiResult >= 18.5 && bmiResult <= 24.9
      ? ideal // else if
      : bmiResult >= 25 && bmiResult <= 29.9
      ? gendut
      : obesitas; // else

  var varPesan =
    bmiResult == 0 || bmiResult == null || bmiResult == ""
      ? "Let's Count Your Body" // if
      : bmiResult < 18.5
      ? "You are Underweight " // else if
      : bmiResult >= 18.5 && bmiResult <= 24.9
      ? "Wow.. Healty Body" // else if
      : bmiResult >= 25 && bmiResult <= 29.9
      ? "Look that Overweight"
      : "Oww sad, You are Obesity"; // else

  return (
    <section className="bmisection" id="bmi">
      <div className="container ">
        <div className=" bmisection-bx wow zoomIn ">
          <div className="row align-items-center">
            <div className="col-sm-4 offset-md-1">
              <motion.div
                animate={{ opacity: 1 }}
                initial={{ opacity: 0 }}
                layout
              >
                <form onSubmit={calculateBmi} className="form-box">
                  <div className="result-bm">
                    <h3 className="fw-normal mb-3 pb-3">
                      {" "}
                      <i class="bi bi-airplane-engines-fill "></i>BMI Calculator
                    </h3>
                    <div className="form-outline mb-4 ">
                      <label className="form-label">Weight (Kg)</label>
                      <input
                        className="form-control form-control-lg"
                        value={weight}
                        onChange={(e) => {
                          setWeight(e.target.value);
                        }}
                      />
                    </div>
                    <div className="form-outline mb-4">
                      <label>Height(Cm)</label>
                      <input
                        className="form-control form-control-lg"
                        value={height}
                        onChange={(e) => {
                          setHeight(e.target.value);
                        }}
                      />
                    </div>

                    <div className="pt-1 mb-1">
                      <div>
                        <button
                          className="btn btn-lg btn-dark btn-block btn-calculate vvd"
                          type="submit"
                        >
                          submit
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
              </motion.div>
            </div>
            <div className="col-sm-4 offset-md-1 result-bmi">
              <div class="card card-animated">
                <AnimatePresence>
                  <div class="content">
                    {/* {varMessage} */}
                    <motion.img
                      initial={{ x: 300, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: -300, opacity: 0 }}
                      key={varImages}
                      src={varImages}
                    />
                    <h3>{bmiResult}</h3>
                    <p>{varPesan}</p>
                  </div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
