import React from "react";
import "../StyleSheet/Objective.css";
import objective from "../images/objective.webp";
import Footer from "./Footer";

const Objective = () => {
  return (
    <>
      <div className="container-fluid mt-4">
        <div class="card mb-5 mx-2 depth-trading">
          <div class="card-body">
            <div className="row">
              <div className="col trading-rules">
                <h3 className="mt-5 fw-bold">
                  Stay updated with our in depth trading rules.
                </h3>
                <p className="mt-5">
                  Trading Objectives are a key element to evaluate a trader's
                  skills, meeting the trading objectives proves that the trader
                  is disciplined and consistent.
                </p>
                <button type="button" className="mt-3">
                  <i class="bi bi-arrow-up-right"></i> Trading Rules
                </button>
              </div>
              <div className="col tradingimage">
                <img src={objective} alt="" srcset="" />
              </div>
            </div>
          </div>
        </div>

        <div class="card joinateam">
          <div class="card-body">
            <h3 className="fw-bold mt-2">Join A Team Of skillful Traders</h3>
            <p>
              When it comes to trading we believe in consistency and risk
              management, which are the discipline indicator, the rest of the
              skills can be developed. Please keep that in mind! We are seeking
              real traders not bounty hunters.
            </p>
            <div className="buttonsTeam d-flex gap-2">
              <button className="bg-primary">
                <i class="bi bi-arrow-up-right"></i> Buy Challenge
              </button>
              <button className="bg-dark">
                <i class="bi bi-discord"></i> Join discord
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Objective;
