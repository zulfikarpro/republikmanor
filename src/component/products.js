import React from 'react';
const productLTR = (images, title, text) => {
  return (
    <div className="container row mt--60 justify-content-between productItem">
      <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
        <img className="rounded mx-auto d-block" src={images} alt={title}></img>
      </div>
      <div className="col-lg-6 col-md- col-sm-12 col-12 my-auto">
        <h3>{title}</h3>
        <p className="text-light text-justify">{text}</p>
      </div>
    </div>
  );
};
const productRTL = (images, title, text, array) => {
  return (
    // <></>
    <div className="productItem rtl mt--60">
      <div className="col-lg-6 col-md- col-sm-12 col-12 my-auto">
        <h3>{title}</h3>
        <p className="text-light text-justify">{text}</p>
        {array ? (
          <div className="orderNumber">
            <ul className="directions">
              {array.map((item, index) => (
                <p className="description text-light">
                  <li>{item}</li>
                </p>
              ))}
            </ul>
          </div>
        ) : (
          ''
        )}
      </div>

      <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
        <img className="rounded mx-auto d-block" src={images} alt={title}></img>
      </div>
    </div>
  );
};

const ProductPage = ({ images, label }) => {
  return (
    <>
      <div className="col-lg-4 align-items-end">
        <img
          className="responsive"
          src={`/assets/images/products/${images}`}
          alt={images}
        />
        <h3 className="text-dark text-center font-weight-bold mt--10">
          {label}
        </h3>
      </div>
    </>
  );
};
const Products = () => {
  return (
    <div id="products">
      <div
        className="row justify-content-center"
        style={{
          background: `url(/assets/images/bgpage/bgproducts.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'center',
          height: '100vh',
        }}
      >
        <div className="col-lg-10 align-self-center">
          <h2 className="text-dark text-center">PRODUCTS & SERVICES</h2>
          <div className="container">
            <div className="row mt--100 w--100">
              <ProductPage
                images={'product-01.png'}
                label={'Assets Management'}
              />
              <ProductPage
                images={'product-02.png'}
                label={'Investment Banking'}
              />
              <ProductPage images={'product-03.png'} label={'Corporate M&A'} />
            </div>
          </div>
          {/* <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
            <h2 className="title theme-gradient">PRODUCTS</h2>
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
            [
              'Channel equalization.',
              'Error correction.',
              'Routing and networking.',
              'Ad-hoc networking and automatic voice/data relays.',
              'Full-duplex conference capability up to six speakers.',
              'Long-range (3 Km) communications. ',
              'Robust build for complex terrain.',
              'Low power consumption.',
            ],
          )}
          {productLTR(
            'assets/images/products/smarteye.png',
            'Smarteye - headmounted C2 display',
            'Ballistic goggles that provide descending commanders with a C2 display\nthat installed in the head geo-geographically oriented. Projecting Augmented\nsymbology Reality (AR) translucent on the visor and allows real-time\nimage detection, SmartEye provides users with instant situational\nawareness, an integrated lens with AGD to show Red Force coordinates\nand possible threats. SmartEye interacts with a variety of visual sources\nincluding scenery weapons, Unmanned Aircraft Systems (UAS) and input from\nreconnaissance units.',
          )} */}
        </div>
      </div>
    </div>
  );
};

export default Products;
