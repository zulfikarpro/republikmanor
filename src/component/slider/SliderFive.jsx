import React, { Component } from 'react';
import { IconContext } from 'react-icons';
import { FiArrowRightCircle } from 'react-icons/fi';

const SlideList = [
  {
    textPosition: 'text-center',
    category: '',
    title: 'Marketing',
    description:
      'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
    buttonText: 'Contact Us',
    buttonLink: '/contact-us',
  },
];

class SliderFive extends Component {
  render() {
    return (
      <div
        className="slider-activation"
        style={{ background: `transparent`, height: '100vh' }}
      >
        {/* Start Single Slide */}
        <div
          className="h-100 slide slide-style-1 slider-fixed--height d-flex align-items-center"
          data-black-overlay="6"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-12 align-items-center">
                <div className="inner">
                  {/* <h2 className="h2">We Are Advance in</h2> */}
                  <div className="front-title customTitle">REPUBLIK MANOR</div>
                  <h3 className="h3">
                    Real estate, property development, and asset management.
                  </h3>
                </div>
              </div>
            </div>
            {/* Start Service Area */}
            {/* <div className="service-wrapper service-white row ml--10">
              <IconContext.Provider value={{ color: 'white', size: '30px' }}>
                <div className="mr--10">
                  <FiArrowRightCircle />
                </div>
              </IconContext.Provider>
              <div>
                <h4>more</h4>
              </div>
            </div> */}
            {/* End Service Area */}
          </div>
        </div>
        {/* End Single Slide */}
      </div>
    );
  }
}
export default SliderFive;
