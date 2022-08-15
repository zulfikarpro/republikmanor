import React, { Component } from "react";

const SlideList = [
    {
        // textPosition: 'text-center',
        // category: '',
        // title: 'Marketing',
        // description: 'There are many variations of passages of Lorem Ipsum available but the majority have suffered alteration.',
        // buttonText: 'Contact Us',
        // buttonLink: '/contact-us',
        imageUrl1: 'assets/images/workshop/wh03.jpg',
        alt1:'workshop1',
        imageUrl2: 'assets/images/workshop/workhsop_0001_1-04.jpg',
        alt2:'workshop2',
        imageUrl3: 'assets/images/workshop/workhsop_0002_1-04.jpg',
        alt3:'workshop3',
    },
    {
        imageUrl1: 'assets/images/workshop/workhsop_0003_1-03.jpg',
        imageUrl2: 'assets/images/workshop/workhsop_0004_1-03.jpg',
        imageUrl3: 'assets/images/workshop/workhsop_0005_1-02.jpg'
    },
    {
        imageUrl1: 'assets/images/workshop/workhsop_0006_1-02.jpg',
        imageUrl2: 'assets/images/workshop/workhsop_0007_1-01.jpg'
    }
]

class SliderFour extends Component {
  render() {
    return (
        <div className="slider-activation">
            {/* Start Single Slide */}
                {SlideList.map((value , index) => (
                    <div className="slide slide-style-1 slider-paralax d-flex align-items-start justify-content-start mt-5" key={index} data-black-overlay="6">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className={`inner ${value.textPosition} d-flex d-flex justify-content-sm-between align-content-start mx-auto`}>
                                        {/* {value.category ? <span>{value.category}</span> : ''}
                                        {value.title ? <h1 className="title theme-gradient">{value.title}</h1> : ''}
                                        {value.description ? <p className="description">{value.description}</p> : ''}
                                        {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''} */}
                                        <div style={{maxWidth:'27%'}}>
                                        <img src={value.imageUrl1} style={{borderRadius: 15}} alt={value.alt1}></img>
                                        </div>
                                        <div style={{maxWidth:'27%'}}>
                                        <img src={value.imageUrl2} style={{borderRadius: 15}} alt={value.alt2}></img>
                                        </div>
                                        <div style={{maxWidth:'27%'}}>
                                        <img src={value.imageUrl3} style={{borderRadius: 15}} alt={value.alt3}></img>
                                        </div>
                                        {/* <img src={value.imageUrl3||''} alt='test'></img> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            {/* End Single Slide */}
        </div>
    );
  }
}
export default SliderFour;