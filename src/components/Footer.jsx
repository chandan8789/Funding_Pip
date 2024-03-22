import React from "react";
import fund from "../images/fundinglogo.png";
import "../StyleSheet/Footer.css";
import newfunding from "../images/fundingNew.png";

const Footer = () => {
  return (
    <>
      <div className="container-fluid mb-1">
        <div className="row mt-5">
          <hr />
          <div className="col-md-6">
            <a class="navbar-brand" href="#">
              <img
                style={{ height: "40px" }}
                className="mx-3 mt-2"
                src={fund}
                alt=""
                srcset=""
              />
              <span className="">FUNDING PIPS</span>
            </a>
            <p className="mt-3 opacity-50 mx-3">
              All content published and distributed by Funding Pips, and its
              affiliates(collectively, the Company) is to be treated as general
              information only. None of the information provided by the Company
              or contained herein is intended as investment advice, an offer or
              solicitation of an offer to buy or sell, or a recommendation,
              endorsement, or sponsorship of any security, company, or fund,
              Funding pips does not act as or conduct services as a broker.
              Funding pips does not act as or conduct services as a custodian.
              People who register for our programs do so at their own volition,
              Purchases of programs should not be considered deposits. All
              program fees are used for operation costs including, but not
              limited to, staff, technology and other business related expenses.
              Nothing contained herein is a solicitation or an offer to buy or
              sell futures, options, or forex. Past performance is not
              necessarily indicative of future results. Applicable law to be
              under the laws of The United Arab Emirates.
            </p>
            <p className="mt-3 opacity-50 fw-bold mx-3">
              Please note that all accounts we provide to our clients are demo
              accounts in a simulated trading environment.
            </p>

            <p className="mt-3 opacity-50 fw-bold mx-3">
              Restricted countries: United Arab Emirates and Vietnam
            </p>
          </div>

          <div className="col-md-6">
            <div
              style={{ background: "#f3f4f6", border: "none" }}
              class="card mt-3"
            >
              <div class="card-body">
                <div className="d-flex justify-content-between mx-3">
                  <h4>Newsletter signup</h4>
                  <span className="arrowdash">
                    <input
                      className="rounded p-2"
                      type="text"
                      placeholder="Enter your emial"
                    />
                    <i class="bi bi-arrow-up-right"></i>
                  </span>
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col">
                <p className="text-primary">LEGAL</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
              </div>
              <div className="col">
                <p className="text-primary">USEFUL LINKS</p>
                <p>Home</p>
                <p>FAQs</p>
                <p>Trading Rules</p>
                <p>Affiliate Program</p>
                <p>Contact Us</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex gap-2 mx-3 mb-2">
          <i class="bi bi-discord newwork"></i>
          <i class="bi bi-facebook"></i>
          <i class="bi bi-instagram"></i>
          <i class="bi bi-youtube"></i>
          <i class="bi bi-twitter"></i>
        </div>

        <div class="footer">
          <span>
            <i class="bi bi-gear"></i>
          </span>
          <p>© 2024 Funding Pips. All Rights Reserved.</p>
          <img src={newfunding} alt="" srcset="" />
        </div>
      </div>
    </>
  );
};

export default Footer;
