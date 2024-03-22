import React from "react";
import chart from "../images/dashborard.webp";
import "../StyleSheet/Home.css";
import Trading from "./Trading";
const Home = () => {
  return (
    <>
      <div className="containter-fluid py-5">
        <div className="row mx-1">
          <div className="col-md-6 yourskills">
            <h1>Your Skills Is</h1>
            <span>Our Capital.</span>
            <p>We risk while you receive up to 90% of the Profit.</p>

            <div className="d-flex gap-3 borde buy-challenge bg-blue text-white buy-buttons">
              <button type="btn" className="text-white challenging">
                <i class="bi bi-arrow-up-right"></i> Buy Challenge
              </button>
              <button className="bg-dark text-white discord">
                {" "}
                <i class="bi bi-discord"></i> Join discord
              </button>
              <button className="bg-dark text-white discord">
                {" "}
                <i class="bi bi-trophy"></i> Join competition
              </button>
            </div>
          </div>
          <div className="col-md-6 dashboard mt-5">
            <img style={{ width: "750px" }} src={chart} alt="" srcset="" />
          </div>
        </div>
      </div>

      <Trading />
    </>
  );
};

export default Home;
