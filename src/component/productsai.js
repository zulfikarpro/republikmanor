import Slider from 'react-slick';
import React from 'react';
import { slideSlick } from '../page-demo/script';
import { Carousel } from 'react-responsive-carousel';

function ProductAi() {
  const aiList = [
    { bgImage: ` url(/assets/images/bgpage/BGAI.jpg)`, title: 'test1' },
    { bgImage: ` url(/assets/images/bgpage/BGAI2.jpg)`, title: 'test2' },
    { bgImage: ` url(/assets/images/bgpage/BGAI3.jpg)`, title: 'test3' },
    { bgImage: ` url(/assets/images/bgpage/BGAI4.jpg)`, title: 'test4' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrow: true,
  };
  const SlideList = [
    {
      textPosition: 'text-right',
      bgImage: 'bg_image--34',
      category: '',
      title: 'Advance Intelligence Analytics Systems \n /Cyber Intelligence',
      description: '',
      array: [
        'Intelligent cyber-attack prediction that will do 24-hour anomaly detection to  the occurrence of events in cyber space.',
        'Cognitive countermeasure system that will protect the  hardware-side of the \n networks or computer systems from  power analysis attacks.',
        'Intelligent intrusion detection system that will do 24-hour  check to any attempt of illegal access the networks or  computer systems.',
      ],
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
    {
      textPosition: 'text-left',
      bgImage: 'bg_image--35',
      category: '',
      title: 'Multi Intelligence System',
      array: [
        'Decision making support system that assists the commander \n to make a decision from some resulted recommendations.',
        'Predictive maintenance system that assists the technicians\nor engineers to plan the weapon systems or non-weapon\nsystems maintenance so they can ensure the operational\nreadiness of such systems.',
        'Intelligence analysis system that assists the intelligence\nofficers in carry out big data analysis and can shorten the\nintelligence cycle.',
        'Intelligence logistics system that assist the commander to\n ensure the sufficiency of logistics support for the units\nwhether in military operations or non-military operations.',
      ],
      description: '',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
    {
      textPosition: 'text-right',
      bgImage: 'bg_image--36',
      category: '',
      title: 'Advance AI Surveillance Defense System',
      description:
        'A system that contains a complex of intelligence\nSystems that perform the detection, classification,\nRecognition, and identification of any air object that\nflies within or enters the sovereign air space.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
    {
      textPosition: 'text-right',
      bgImage: 'bg_image--37',
      category: '',
      title: 'Tactical Simulation',
      description:
        'TacSims Comes with a rich set of capabilities that enables you to create,\nexecute, and distribute simulation scenarios. Using its intuitive interfaces,\nTacSims quickly adjust its speed and show productivity immediately. Build\nscenarios that scales from just a few individuals in close quarters to large\nmulti-echelon simulations covering the planet.',
      buttonText: 'Contact Us',
      buttonLink: '/contact',
    },
  ];

  const green = () => {
    return (
      <div style={{ height: '100vh', width: '100vw' }}>
        <Carousel showArrows={true}>
          <div>
            <img src="assets/images/bgpage/BGAI.jpg" />
          </div>
        </Carousel>
      </div>
    );
  };
  // return (
  //   <div className="fix vh-100 aiProducts">
  //     {green()}
  //     <div
  //       className="position-absolute"
  //       style={{ height: '100vh', width: '100vw', zIndex: 2 }}
  //     >
  //       <div className="container">
  //         <div className="row justify-content-center pt--100">
  //           <div className="col-lg-12 row justify-content-center title">
  //             <span className="mx-auto">ARTIFICIAL INTELLIGENCE</span>
  //           </div>
  //           <div className="col-lg-12 row justify-content-center subtitle">
  //             SURVEILLANCE, CYBER, AND MULTI-INTELLIGENCE{' '}
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
  return (
    <div className="slider-wrapper">
      <div
        className="position-absolute aiProducts"
        style={{ width: '100vw', zIndex: 3 }}
      >
        <div className="container">
          <div className="row justify-content-center pt--100">
            <div className="col-lg-12 row justify-content-center title">
              <span className="mx-auto">ARTIFICIAL INTELLIGENCE</span>
            </div>
            <div className="col-lg-12 row justify-content-center subtitle">
              SURVEILLANCE, CYBER, AND MULTI-INTELLIGENCE{' '}
            </div>
          </div>
        </div>
      </div>
      <div className="slider-activation">
        <Slider className="rn-slick-dot dot-light" {...slideSlick}>
          {SlideList.map((value, index) => (
            <div
              className={`slide slide-style-2 d-flex align-items-center justify-content-center bg_image ${value.bgImage} vh-100`}
              key={index}
              data-black-overlay="8"
            >
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className={`inner ${value.textPosition}`}>
                      {value.category ? <span>{value.category}</span> : ''}
                      {value.title ? (
                        <h3 className="title">{value.title}</h3>
                      ) : (
                        ''
                      )}
                      {value.description ? (
                        <div
                          className={`d-flex ${
                            value.textPosition === 'text-left'
                              ? `flex-row`
                              : 'flex-row-reverse'
                          }`}
                        >
                          <div className="desc description">
                            {value.description}
                          </div>
                        </div>
                      ) : (
                        ''
                      )}
                      {value.array ? (
                        <div className="mw--50">
                          {/* {value.array.map((item) => (
                            <div className="desc array">
                              <span className="span">+ </span>
                              {item}
                            </div>
                          ))} */}
                          <ul className="directions">
                            {value.array.map((item) => (
                              <p className="text-light description">
                                <li>{item}</li>
                              </p>
                            ))}
                          </ul>
                        </div>
                      ) : (
                        ''
                      )}
                      {/* {value.buttonText ? (
                        <div className="slide-btn">
                          <a
                            className="rn-button-style--2 btn-solid"
                            href={`${value.buttonLink}`}
                          >
                            {value.buttonText}
                          </a>
                        </div>
                      ) : (
                        ''
                      )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ProductAi;
