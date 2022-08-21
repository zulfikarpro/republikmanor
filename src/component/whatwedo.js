import React, { Component } from 'react';

const Whatwedo = () => {
  return (
    <div id="whatwedo" className="fix">
      <div
        className="portfolio-area ptb--160 h-100 w-100 d-inline-block"
        style={{
          backgroundImage: `url(/assets/images/bgpage/WWD.png)`,
        }}
      >
        <div className="portfolio-sacousel-inner">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                  <h2 className="title">What We Do</h2>
                </div>
              </div>
            </div>
            <div className="row w-100 mb--10 justify-content-between">
              <div
                className="col-lg-5 col-md-12 col-sm-100 col-xs-20 p-3 align-items-stretch"
                style={{}}
              >
                <div className="row justify-content-center mb--20">
                  <img
                    src="assets/images/icons/1_tank.png"
                    alt="tank"
                    style={{ maxHeight: '80px' }}
                  />
                </div>
                <h3 className="text-center mb--20">Land System</h3>
                <p className="text-light text-justify">
                  Manufacturing ICCS system for the Indonesian Armed Forces. Its
                  Digital component system provides continuous and automated
                  video surveillance, providing a holistic view of a particular
                  facility, and is able to identify friend or foe, anomalies and
                  objects of interest using an advanced system of deep learning
                  and command and control system.
                </p>
              </div>
              <div
                className="col-lg-5 col-md-12 col-sm-100 col-xs-20 p-3 align-items-center mx-10"
                style={{}}
              >
                <div className="row justify-content-center mb--20">
                  <img
                    src="assets/images/icons/1_drone.png"
                    alt="drone"
                    style={{ maxHeight: '80px' }}
                  />
                </div>
                <h3 className="text-center mb--20">Aero System</h3>
                <p className="text-light text-justify">
                  Manufacturing Technology designs for War simulation system,
                  manufactures data communications solutions for military,
                  government and industrial applications and Anti - Drones that
                  uses radio frequency disruption technology to deactivate enemy
                  drones. We are developing A.I based solutions for Logistic,
                  Operation Simulation, and War.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Whatwedo;
