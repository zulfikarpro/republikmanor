import React from 'react';

function AntiDrone() {
  return (
    <div id="" className="fix">
      <div
        className=""
        style={{ width: '100vw', height: '', background: 'black' }}
      >
        <div id="whoweare" className="about-area">
          <div className="drone-wrapper pt--200 pb--120">
            <div className="container pt--120">
              <div className="row h-100">
                <div className="col-lg-7 align-content-end">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="">{'ANTI-DRONE'}</h2>
                      <div className="row">
                        <ol className="col-lg-5 directions text-light">
                          <p className="text-light">
                            <li>Detect and classify all commercial drones. </li>
                          </p>
                          <p className="text-light">
                            <li>
                              360° coverage - find drone and operator directions
                              &amp; locations.
                            </li>
                          </p>
                          <p className="text-light">
                            <li>Beats drone and GNSS communications.</li>
                          </p>
                          <p className="text-light">
                            <li>Handle multiple drones at the same time.</li>
                          </p>
                          <p className="text-light">
                            <li>24/7 operation with or without operator.</li>
                          </p>

                          <p className="text-light">
                            <li>
                              Automatic or manual jamming (man-in-the-loop).
                            </li>
                          </p>
                        </ol>
                        <ol className="col-lg-5 directions text-light">
                          <p className="text-light">
                            <li>Smart jammer with waveform control.</li>
                          </p>
                          <p className="text-light">
                            <li>
                              Drone takeover and safe landing at specific
                              locations.
                            </li>
                          </p>
                          <p className="text-light">
                            <li>New types of drones can be added by users.</li>
                          </p>
                          <p className="text-light">
                            <li>
                              Advanced C2 (Commandand Control) fully controls
                              all connected sensors
                            </li>
                          </p>
                          <p className="text-light">
                            <li>Military standard</li>
                          </p>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 align-content-start">
                  <div className="thumbnail">
                    <img
                      className="responsive bg-transparent"
                      src="/assets/images/bgpage/pngdrone.png"
                      alt="Who We Are Images"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AntiDrone;
