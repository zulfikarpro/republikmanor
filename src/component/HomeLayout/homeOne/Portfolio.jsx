import React, { Component } from "react";
import Slider from "react-slick";
import { portfolioSlick2 } from "../../../page-demo/script";
import {Link} from "react-router-dom";


const PortfolioList = [
    // {
    //     // buttonLink: '/contact-us',
    //     imageUrl: 'assets/images/workshop/wh03.jpg',
    //     alt1:'workshop1',
    // },
    // {imageUrl: 'assets/images/workshop/workhsop_0001_1-04.jpg',
    // alt2:'workshop2',},
    //     {imageUrl: 'assets/images/workshop/workhsop_0002_1-04.jpg',
    //     alt3:'workshop3',},
    // {imageUrl: 'assets/images/workshop/workhsop_0003_1-03.jpg',},
    // {imageUrl: 'assets/images/workshop/workhsop_0004_1-03.jpg',},
    // {imageUrl: 'assets/images/workshop/workhsop_0005_1-02.jpg',},
    // {imageUrl: 'assets/images/workshop/workhsop_0006_1-02.jpg',},
    // {imageUrl: 'assets/images/workshop/workhsop_0007_1-01.jpg'},
    {
        image: 'image-1',
        category: 'Lel',
        title: ' Woyoooo'
    },
    {
        image: 'image-2',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-3',
        category: 'Development',
        title: ' Getting tickets to the big show'
    },
    {
        image: 'image-4',
        category: 'Development',
        title: ' Getting tickets to the big show'
    }
]

class Portfolio extends Component{
    render(){
        let title = 'Our Works',
        description = 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.';
        return(
            <React.Fragment>
                <div>
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="section-title">
                                    <h2>{title}</h2>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="portfolio-slick-activation mt_sm--40">
                        <Slider {...portfolioSlick2}>
                            {PortfolioList.map((value , index) => (
                                <div className="portfolio" key={index}>
                                    
                                    {/* <img src={value.imageUrl} alt={value.imageUrl} style={{borderRadius:15}}></img> */}
                                    <div className="thumbnail-inner">
                                        <div className={`thumbnail ${value.image}`}></div>
                                        
                                        <div className={`bg-blr-image ${value.image}`}>
                                        </div>
                                    </div>
                                    {/* <div className="content">
                                        <div className="inner">
                                            <p>{value.category}</p>
                                            <h4 className="title"><a href="/portfolio-details">{value.title}</a></h4>
                                            <div className="portfolio-button">
                                                <a className="rn-btn" href="/portfolio-details">Case Study</a>
                                            </div>
                                        </div>
                                    </div> */}
                                    {/* <Link className="link-overlay" to="/portfolio-details"></Link> */}
                                </div>
                            ))}
                        </Slider>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Portfolio;