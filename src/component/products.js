import React from 'react';
const productLTR = (images, title, text) => {
  return (
    <div className="container row mt--60 justify-content-between">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
        <img
          className="rounded mx-auto d-block"
          style={{ maxWidth: '450px' }}
          src={images}
          alt="test"
        ></img>
      </div>
      <div className="col-lg-6 col-md- col-sm-12 col-12 my-auto">
        <h3>{title}</h3>
        <p className="text-light text-justify">{text}</p>
      </div>
    </div>
  );
};
const productRTL = (images, title, text) => {
  return (
    <div className="container row mt--60">
      <div className="col-lg-6 col-md- col-sm-12 col-12 my-auto">
        <h3>{title}</h3>
        <p className="text-light text-justify">{text}</p>
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
        <img
          className="rounded mx-auto d-block"
          style={{ maxWidth: '450px' }}
          src={images}
          alt="test"
        ></img>
      </div>
    </div>
  );
};
const Products = () => {
  return (
    <div id="products">
      <div
        className=" rn-blog-area ptb--120 mb-dec--30 row"
        style={{
          background: `url(/assets/images/bgpage/bgproducts.png)`,
          backgroundSize: '90%',
          backgroundPositionX: 'center',
        }}
      >
        <div className="container">
          <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
            <h2 className="title">PRODUCTS</h2>
            <h2 className="text-center">ICCS</h2>
          </div>
          <h4 className="text-center">
            CCS is indeed a step ahead in terms of shipboard communications
            management,
            <br /> supporting high-level concepts such as COMPLAND and on-board
            training facilities
          </h4>
          {productLTR(
            'assets/images/products/tablet.png',
            'Commander Tablet',
            'All-in-one wearable computing unit that enables the tablet to provide the dismounted soldier with complete situational awareness through net-centric integrated information systems. application provides real-time situational awareness with automatic dissemination of geography and location based on hierarchy. BMS enables enhancement C2 capabilities for all members of the platoon, including Blue Force Tracking, enemy (red) tracking, mission planning, navigation, terrain analysis and 3D visualization. The system can be integrated with multiple communications networks, including the battle management system. ',
          )}
          {productRTL(
            'assets/images/products/wristview.png',
            'Smart WristView',
            'Compact. low-powered, rugged wrist-strapped C2 display, providing warrios with a quick and convenient view of operational data in combat situations without altering weapons hold.',
          )}
          {productLTR(
            'assets/images/products/smartsight.png',
            'SmartSight',
            'Add-on to most existing day and night weapon sights, projecting see-through AR symbology, laser rangefinder data and a compass onto the soldiers weapon sight, greatly improving taget acquisition capabilities and combat effectiveness.',
          )}

          {productRTL(
            'assets/images/products/radio.png',
            'Radio Intercom',
            'The personal network radio features advanced technology that enables PERSONNEL ICCS to provide the dismounted soldier with combat-proven simultaneous digital voice and data communications on the battlefield.',
          )}
          {productLTR(
            'assets/images/products/smarteye.png',
            'Smarteye - headmounted C2 display',
            'Ballistic goggles that provide descending commanders with a C2 display that installed in the head geo-geographically oriented. Projecting Augmented symbology Reality (AR) translucent on the visor and allows real-time image detection, SmartEye provides users with instant situational awareness, an integrated lens with AGD to show Red Force coordinates and possible threats.',
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
