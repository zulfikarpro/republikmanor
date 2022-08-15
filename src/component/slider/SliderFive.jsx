import React, { Component } from "react";
import { IconContext } from "react-icons";
import { FiArrowRightCircle } from "react-icons/fi";

const SlideList = [
    {
        textPosition: 'text-center',
        category: '',
        title: 'Marketing',
        description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        buttonText: 'Contact Us',
        buttonLink: '/contact-us'
    }
]

class SliderFive extends Component {
  render() {
    return (
        <div className="slider-activation" style={{background:`url(/assets/images/bgpage/page1.jpg)`}}>
            {/* Start Single Slide */}
            <div className="slide slide-style-1 slider-fixed--height d-flex align-items-center bg_image bg_image--1" data-black-overlay="6">
                <div className="container position-relative">
                    <div className="row align-items-center">
                        <div className="col-lg-12 align-items-center">
                            <div className="inner">
                                <h4>Armament / Gun / Ammo / Factory</h4>
                                <div className="front-title theme-gradient">Complement <br /> And Protect</div>
                            </div>
                        </div>
                    </div>
                    {/* Start Service Area */}
                    <div className="service-wrapper service-white row ml--10">
                        {/* <ServiceOne /> */}
                        <IconContext.Provider
                        value={{ color: 'white', size: '30px' }}
                        >
                        <div className="mr--10">
                            <FiArrowRightCircle/>
                        </div>
                        </IconContext.Provider>
                        <div>
                        <h4>more</h4>
                        </div>
                    </div>
                    {/* End Service Area */}
                </div>
            </div> 
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderFive;