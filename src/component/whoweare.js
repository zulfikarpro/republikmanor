import React, { Component } from 'react';

const WhoWeAre = () => {
  const title = 'Who We Are',
    description1 =
      'PT. Republik Technology is part of RepubliKorp group that focuses on current technological advancements such as the conception, development and application or installation of IP based equipment and communication device, among others our current development is in the field of Computer Science and Artificial Intelligence.',
    description2 =
      'With the auspices of the Ministry of Defense, Republik Technology is developing Indonesia’s defensive capabilities to face the growing threats of instability in the Asia Pacific Region through developments of military technology advancements. All our procurement strategies are strictly aligned with operational directions from the Indonesian National Armed Forces';

  return (
    <div id="whoweare" className="fix" style={{}}>
      <div
        className="position-absolute"
        style={{ width: '100vw', height: '100vh' }}
      >
        <div className="about-area ptb--120">
          {/* <div className="about-wrapper"> */}
          <div className="container">
            <div className="row">
              <div className="col-lg-7">
                {/* <div className="about-inner inner">
                    <div className="section-title">
                      <h2 className="title theme-gradient">{title}</h2>
                      <div className="mt--100" />
                      <h3 className="">Established 2020</h3>
                      <p className="text-light text-justify">{description1}</p>
                      <p className="text-light text-justify">{description2}</p>
                    </div>
                  </div> */}
              </div>
              <div className="col-lg-5 align-content-end">
                <div className="thumbnail">
                  <img
                    className="responsive bg-primary"
                    src="/assets/images/whoweare/2 army.jpg"
                    alt="Who We Are Images"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <div className="about-area ptb--120">
        <div className="about-wrapper">
          <div className="container">
            <div className="row row--65 align-items-center">
              <div className="col-lg-7 align-content-start">
                <div className="about-inner inner">
                  <div className="section-title">
                    <h2 className="title theme-gradient">{title}</h2>
                    <div className="mt--100" />
                    <h3 className="">Established 2020</h3>
                    <p className="text-light text-justify">{description1}</p>
                    <p className="text-light text-justify">{description2}</p>
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
