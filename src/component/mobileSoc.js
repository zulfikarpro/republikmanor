import React from 'react';

function MobileSOC() {
  return (
    <div id="" className="fix">
      <div
        className=""
        style={{ width: '100vw', height: '', background: 'black' }}
      >
        <div id="whoweare" className="about-area">
          <div className="products-wrapper pt--200 pb--120">
            <div className="container pt--120">
              <div className="row h-100">
                <div className="col-lg-5 align-content-start">
                  <div className="thumbnail">
                    <img
                      className="responsive bg-transparent"
                      src="/assets/images/bgpage/bg3.png"
                      alt="Who We Are Images"
                    />
                  </div>
                </div>
                <div className="col-lg-7 align-content-end">
                  <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="">{'ADOC/SOC MOBILE'}</h2>
                      <p className="text-light text-justify">
                        {
                          'Represented by the software module, which could be integrated in to the standard AD or MATC system. This GCI software supports the operation of the different type of the aircraft starting by the 2nd up to 5th fighter aircraft generation. Provides the several types of the Ground Controlled Interception, including :'
                        }
                      </p>
                      <ol className="directions text-light">
                        <p className="text-light">
                          <li>Fighter guidance optimization </li>
                        </p>
                        <p className="text-light">
                          <li>Selected maneuver optimization analysis</li>
                        </p>
                        <p className="text-light">
                          <li>
                            Analysis shooting parameters of selected weapons or
                            gun
                          </li>
                        </p>
                        <p className="text-light">
                          <li>
                            Analysis the optimal shooting conditions for the
                            selected missile
                          </li>
                        </p>
                        <p className="text-light">
                          <li>
                            Analysis he optimal shooting conditions for the gun
                          </li>
                        </p>
                      </ol>
                    </div>
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

export default MobileSOC;
