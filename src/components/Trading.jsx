import React from "react";
import bhoomi from "../images/bloomberg.webp";
import "../StyleSheet/Trading.css";
import trading from "../images/darboard2.webp";
import money from "../images/notradingrestrictions.webp";
import funding from "../images/freeretry.webp";
import calingPlan from "../images/scalingplan.webp";
import payment from "../images/payoutsystem.webp";
import Evaluation from "./Evaluation";
import insider from "../images/insider.webp";
import yaho from "../images/yahoo_finance.webp";

const Trading = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="d-flex justify-content-around mt-1 mainBloober">
          <h2 className="mt-4">Bloomber</h2>
          <img className="mt-4" src={insider} alt="" srcset="" />
          <img className="mt-4" src={yaho} alt="" srcset="" />
        </div>

        <div className="row mt-5">
          <div className="col-md-6 mt-3 tradingImages">
            <img src={trading} alt="" srcset="" />
          </div>
          <div className="col-md-6 mt-3">
            <h1 className="mt-5">Built By Traders For Traders.</h1>
            <h1>Your Trading Ideas, Our Risk.</h1>
            <p className="mt-2">
              Funding Pips believes that traders go through three main levels in
              their careers, Student - Practitioner - Master, with FP's in
              house-built two phases evaluation (Student - Practitioner) and
              funded (Master), which's built to find trading talents while
              helping them get through their funding problems, by offering them
              the possibility to trade up $300.000.
            </p>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 mt-2">
            <div class="card w-100 h-100 card-styling">
              <div class="card-body text-center moneyImages">
                <img src={money} alt="" srcset="" />
                <h3 class="card-title mt-3">Trade the way you want</h3>
                <p className="mt-3 opacity-75">
                  Use an "EA", hold during news, hold trades over the weekend
                  and trade lot sizes as big as the leverage allows for.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-2 h-100">
            <div class="card w-100 h-100 card-styling">
              <div class="card-body text-center moneyImages">
                <img src={funding} alt="" srcset="" />
                <h3 class="card-title mt-3">Unlimited Trading Days</h3>
                <p className="mt-3 opacity-75">
                  We understand that putting a time limit creates a stressful
                  environment, therefore we have no minimum or maximum limit on
                  trading days. Take all the time you need.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-2 mb-2">
          <div className="col-md-6 mt-2">
            <div class="card w-100 h-100 card-styling">
              <div class="card-body text-center moneyImages">
                <img src={calingPlan} alt="" srcset="" />
                <h3 class="card-title mt-3">Trade the way you want</h3>
                <p className="mt-3 opacity-75">
                  Use an "EA", hold during news, hold trades over the weekend
                  and trade lot sizes as big as the leverage allows for.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-2 h-100">
            <div class="card w-100 h-100 card-styling">
              <div class="card-body text-center moneyImages">
                <img src={payment} alt="" srcset="" />
                <h3 class="card-title mt-3">Unlimited Trading Days</h3>
                <p className="mt-3 opacity-75">
                  We understand that putting a time limit creates a stressful
                  environment, therefore we have no minimum or maximum limit on
                  trading days. Take all the time you need.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-5">
          <div class="card tradePartCard">
            <div class="card-body">
              <div className="d-flex justify-content-around gap-4 matchtrade">
                <p className="rounded">Matchtrader</p>
                <p className="rounded bg-primary text-white">cTrade</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-2">
          <div class="card amounts">
            <div class="card-body">
              <div className="d-flex justify-content-around mt-1 values">
                <p className="rounded p-2">$5K</p>
                <p className="rounded p-2">$10K</p>
                <p className="rounded p-2">$25K</p>
                <p className="rounded p-2">$50K</p>
                <p className="rounded p-2 bg-primary text-white">$100K</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Evaluation />
    </>
  );
};

export default Trading;
