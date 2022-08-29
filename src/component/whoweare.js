import React, { Component } from 'react';

const WhoWeAre = () => {
  const title = 'Who We Are',
    description1 =
      'PT. Republik Technology is part of RepubliKorp group that focuses on current technological advancements such as the conception, development and application or installation of IP based equipment and communication device, among others our current development is in the field of Computer Science and Artificial Intelligence.',
    description2 =
      'With the auspices of the Ministry of Defense, Republik Technology is developing Indonesia’s defensive capabilities to face the growing threats of instability in the Asia Pacific Region through developments of military technology advancements. All our procurement strategies are strictly aligned with operational directions from the Indonesian National Armed Forces';

  return (
    <div id="" className="fix pt--100">
      <div
        className=""
        style={{ width: '100vw', height: '', background: 'black' }}
      >
        <div id="whoweare" className="about-area">
          <div className="about-wrapper ptb--120">
            <div className="container">
              <div className="row h-100">
                <div className="col-lg-7 my-auto">
                  <div
                    className="about-inner inner"
                    // style={{ marginTop: '30%' }}
                  >
                    <div className="section-title">
                      <h2 className="title">
                        <span className="theme-gradient">Who</span>
                        <span className="text-light"> We </span>
                        <span className="theme-gradient">Are</span>
                      </h2>
                      <div className="mt--100" />
                      <h3 className="">Established 2020</h3>
                      <p className="text-light text-justify">{description1}</p>
                      <p className="text-light text-justify">{description2}</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5 align-content-end">
                  <div className="thumbnail">
                    {/* <img
                      className="responsive bg-primary"
                      src="/assets/images/whoweare/2 army.jpg"
                      alt="Who We Are Images"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
