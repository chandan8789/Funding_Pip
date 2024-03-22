import React from "react";
import "../StyleSheet/Evaluation.css";
import Objective from "./Objective";

const Evaluation = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-7">
            <div class="d-flex justify-content-center align-items-center gap-4">
              <hr class="border-[1px] w-100 border-gray-400" />
              <h1 class="text-3xl fw-bold  mt-3 text-center opacity-50">
                Evaluation stage
              </h1>
              <hr class="border-[1px] w-100 border-gray-400" />
            </div>
            <div className="d-flex gap-5 fw-bold mt-3 justify-content-end mx-5">
              <h2 className="text-warning fw-bold opacity-50">Student</h2>
              <h2 className="text-success fw-bold opacity-50">Practitioner</h2>
            </div>

            <div className="card">
              <div class="overflow-x-auto">
                <table class="w-100 fw-bold">
                  <tbody>
                    <tr>
                      <td class="px-4 py-2">
                        <i class="bi bi-chevron-compact-right"></i> Trading
                        Period
                      </td>
                      <td class="px-4 py-2">∞</td>
                      <td class="px-4 py-2">∞</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">
                        <i class="bi bi-chevron-compact-right"></i> Minimum
                        Trading Days
                      </td>
                      <td class="px-4 py-2">0 days</td>
                      <td class="px-4 py-2">0 days</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">
                        <i class="bi bi-chevron-compact-right"></i> Maximum
                        Daily Loss
                      </td>
                      <td class="px-4 py-2">5%</td>
                      <td class="px-4 py-2">5%</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">
                        <i class="bi bi-chevron-compact-right"></i> Maximum Loss
                      </td>
                      <td class="px-4 py-2">10%</td>
                      <td class="px-4 py-2">10%</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">
                        <i class="bi bi-chevron-compact-right"></i> Profit
                        Target
                      </td>
                      <td class="px-4 py-2">$8,000 (8%)</td>
                      <td class="px-4 py-2">$5,000 (5%)</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">
                        <i class="bi bi-chevron-compact-right"></i> Leverage
                      </td>
                      <td class="px-4 py-2">1:100</td>
                      <td class="px-4 py-2">1:100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div class="d-flex justify-content-center align-items-center gap-4">
              <hr class="border-[1px] w-100 border-gray-400" />
              <h1 class="text-3xl fw-bold  mt-3 text-center opacity-50">
                Funded stage
              </h1>
              <hr class="border-[1px] w-100 border-gray-400" />
            </div>
            <div className="d-flex gap-5 fw-bold mt-3 justify-content-end">
              <h2
                className="fw-bold opacity-50 mx-5"
                style={{ color: "#8560E4" }}
              >
                Master
              </h2>
            </div>

            <div className="card">
              <div class="overflow-x-auto">
                <table class="w-100 fw-bold">
                  <tbody>
                    <tr>
                      <td class="px-4 py-2">
                        <i class="bi bi-chevron-compact-right"></i> Trading
                        Period
                      </td>
                      <td class="px-4 py-2">∞</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">
                        {" "}
                        <i class="bi bi-chevron-compact-right"></i> Maximum
                        Daily Loss
                      </td>
                      <td class="px-4 py-2">5%</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">
                        {" "}
                        <i class="bi bi-chevron-compact-right"></i> Maximum Loss
                      </td>
                      <td class="px-4 py-2">10%</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">
                        {" "}
                        <i class="bi bi-chevron-compact-right"></i> Profit
                        Target
                      </td>
                      <td class="px-4 py-2">-</td>
                    </tr>
                    <tr>
                      <td class="px-4 py-2">
                        {" "}
                        <i class="bi bi-chevron-compact-right"></i> Leverage
                      </td>
                      <td class="px-4 py-2">1:100</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div>
              <button className="border rounded w-100 p-3 mt-3 text-primary fw-500">
                Refund + Profit Splits
              </button>
            </div>
          </div>
        </div>

        <div className="d-flex justify-content-center mt-4">
          <div className="rates">
            <h1 className="text-primary fw-bold">
              <sup>$</sup>399
            </h1>
            <p>For 100K account</p>
          </div>
          <div className="challenge">
            <button className="text-white bg-primary p-2">
              <i class="bi bi-arrow-up-right"></i> Buy challenge
            </button>
          </div>
        </div>
      </div>

      <Objective />
    </>
  );
};

export default Evaluation;
