import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

const Whatwedo = () => {
  const description1 = `
  Republik Kapital is a subsidiary company of Republikorp
  which engages in the field of finance, investment, and
  monetizing asset management for a specific industry
  in Indonesia.`;
  return (
    <div
      id="whatwedo"
      className="fix about-area bg-transparent"
      style={{ width: '100vw', height: '100vh' }}
    >
      {/* <div
        className="col h-100 justify-content-center align-items-center"
        style={{ background: `rgba(255,255,92,0.2)` }}
      >
        <div className="row justify-content-center align-self-center bg-dark my-auto">
          <h1>test</h1>
        </div>
      </div> */}

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '100vh',
          justifyContent: 'center',
          background: `rgba(0,40,40,0.6)`,
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            background: 'rgba(0,40,40,0.8)',
          }}
        >
          <Container className="ptb--100">
            <h1 className="text-center">What We Do</h1>
            <p className="text-light text-center">{`Republik Manor is a subsidiary company of Republikorp which engages in the field of real estate, property development, 
and asset management. Currently focuses on three landbank development in Labuhan, Banten, Subang, and Batujajar West 
Java, Indonesia.  Our landbank consist of over 100 Ha in the island of Java. `}</p>
            <div className="mb--20"></div>
            <div className="row justify-content-around">
              <div className="col-lg-5">
                <h2 className="text-right">Vision</h2>
                <p
                  className="text-justify text-light"
                  style={{ direction: 'rtl' }}
                >
                  {`To establish a respected property development company in
Indonesia that caters the needs of the defence industrial
complex with integrated industrial solution, premium
infrastructure access, and sustainable waste management.`}
                </p>
              </div>
              <div className="col-lg-5">
                <h2 className="">Vision</h2>
                <p className="text-justify text-light">{`To develop and manage the biggest most integrated defence
industrial complex in South East Asia by year 2030, servicing premium
wspartners with worldwide class utilities and infrastructure access.`}</p>
              </div>
            </div>
          </Container>
        </div>
      </div>

      {/* <div className="about-area justify-content-center align-items-center">
        <div style={{ background: `rgba(255,255,92,0.2)` }}>
          <div
            className="about-wrapper"
            style={{ background: `rgba(255,255,255,0.9)` }}
          >
            <div className="container bg-dark">
              <div className="row">
                <h2 className="font-weight-bold">WHAT WE DO</h2>
              </div>
            </div>
          </div>
        </div>
      </div>/*}

      {/* <div id="whatwedo" className="about-area">
        <div className="about-wrapper">
          <div className="container h-100 bg-dark">
            <div className="flex row h-100 w-100 align-items-center">
              <div className="col-lg-5 my-auto">
                <div className="about-inner inner">
                  <div className="section-title ">
                    <h2 className="font-weight-bold">WHAT WE DO</h2>
                    <p className="text-light text-justify font-weight-regular">
                      {description1}
                    </p>
                    <div className="mt--50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};
export default Whatwedo;
