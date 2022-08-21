import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Helmet from '../component/common/Helmet';
import TextLoop from 'react-text-loop';
import SliderFive from '../component/slider/SliderFive';
import HeaderThree from '../component/header/HeaderThree';
import FooterTwo from '../component/footer/FooterTwo';
import TabTwo from '../elements/tab/TabTwo';
import ContactThree from '../elements/contact/ContactThree';
import PortfolioList from '../elements/portfolio/PortfolioList';
import ServiceList from '../elements/service/ServiceList';
import BlogContent from '../elements/blog/BlogContent';
import HeaderFive from '../component/header/HeaderFive';
import HeaderSix from '../component/header/HeaderSix';
import SliderFour from '../component/slider/SliderFour';
import Portfolio from '../component/HomeLayout/homeOne/Portfolio';
import Carousel from 'react-bootstrap/Carousel';
import WhoWeAre from '../component/whoweare';

const SlideList = [
  {
    textPosition: 'text-left',
    category: 'Welcome to my World',
    description: '',
    buttonText: '',
    buttonLink: '',
  },
];

const bg1 = '/assets/images/bgpage/pag1.jpg';
const bg2 = '/assets/images/bgpage/pag2.jpg';
const bg3 = '/assets/images/bgpage/pag3.jpg';
const bg4 = '/assets/images/bgpage/pag4.jpg';

const MainPage = () => {
  const title = 'Who We Are',
    description1 =
      'PT. Republik Technology is part of RepubliKorp group that focuses on current technological advancements such as the conception, development and application or installation of IP based equipment and communication device, among others our current development is in the field of Computer Science and Artificial Intelligence.',
    description2 =
      'With the auspices of the Ministry of Defense, Republik Technology is developing Indonesia’s defensive capabilities to face the growing threats of instability in the Asia Pacific Region through developments of military technology advancements. All our procurement strategies are strictly aligned with operational directions from the Indonesian National Armed Forces';
  const PostList = BlogContent.slice(0, 3);
  // const [hashPosition, sethashPosition] = React.useState('');
  // const [yPosition, setYPosition] = React.useState('')
  // React.useEffect(() => {
  //     productImages()
  //     scrollListener()
  // }, [yPosition])
  // const scrollListener = () =>{
  //     window.addEventListener('scroll', (e) => {
  //         setYPosition(window.scrollY)log

  //         console.log(yPosition)
  //       });
  // }
  // scrollListener();

  const [scrollTop, setScrollTop] = useState();
  const [scrolling, setScrolling] = useState();
  const [selectedProduct, setSelectedProduct] = useState(0);
  const products = ['AKM.556 / AKMS.556 MOD 1', 'LUGER 9x19 mm', 'PLATFORMING'];
  const [indexProduct, setIndexProduct] = useState(0);
  const handleProduct = (selectedIndex, e) => {
    setIndexProduct(selectedIndex);
  };

  useEffect(() => {
    const onScroll = (e) => {
      // setScrollTop(e.target.documentElement.scrollTop);
      setScrolling(e.target.documentElement.scrollTop > 3000);
      // console.log(e.target.documentElement.scrollTop)
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // useEffect(() => {
  // setRerender(!rerender);
  // }, [scrolling]);

  // useEffect(() => {
  //     setRerender(!rerender);
  // }, [selectedProduct]);

  const tabsComponent = (wording, index) => {
    return (
      <div
        className="col mb-2"
        onClick={() => {
          setSelectedProduct(index);
        }}
      >
        <button style={{ border: '0px' }}>
          <p className="text-dark font-weight-bold mb-0 font-color">
            {wording}
          </p>
        </button>
        {selectedProduct === index ? (
          <hr class="my-0" style={{ width: '45%', height: '1px' }} />
        ) : (
          ''
        )}
      </div>
    );
  };

  // const productImages = () => {
  //   if (selectedProduct === 0) {
  //     return (
  //       <div className=" row mt-2" key="0">
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/ak1-2.jpg"
  //             alt="ak"
  //           />
  //         </div>
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/ak3.jpg"
  //             alt="ak3"
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
  //   if (selectedProduct === 1) {
  //     return (
  //       <div className=" row mt-2" key="1">
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/luger1-2.jpg"
  //             alt="ak"
  //           />
  //         </div>
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/luger3.jpg"
  //             alt="ak3"
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
  //   if (selectedProduct === 2) {
  //     return (
  //       <div className=" row mt-2" key="2">
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/platforming1-2.jpg"
  //             alt="ak"
  //           />
  //         </div>
  //         <div className="mx-auto col-lg-6">
  //           <img
  //             className="w-20 rounded test"
  //             src="/assets/images/products/platforming3.jpg"
  //             alt="ak3"
  //           />
  //         </div>
  //       </div>
  //     );
  //   }
  // };

  // const productWording = () => {
  //   return (
  //     <div className="col-lg-6 col-md-12 col-sm-12 col-12 my-auto">
  //       <h6 className="text-justify text-dark">
  //         AK. The 556 is a modernized version of the classic AK design suitable
  //         for the more modern and commonly used 5.56 x 45 mm NATO ammunition. It
  //         works on the principle of the Long piston, so that all residues
  //         resulting from the combustion of gunpowder remain in the piston.
  //       </h6>
  //       <h6 className="text-justify text-dark">
  //         The Mod 1 version is equipped with an aluminum handguard with a Rail
  //         Interface System that allows the installation of various accessories
  //         such as front grips, tactical lights, laser devices and other power
  //         multipliers. Mod 1 can be equipped with various muzzle devices such as
  //         break-compensators or flash hider devices or even silencers.
  //       </h6>
  //     </div>
  //   );
  // };

  const productLTR = (images, title, text) => {
    return (
      <div className="container w-100 row">
        <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
          <img src={images} alt="test"></img>
        </div>
        <div className="col-lg-6 col-md- col-sm-12 col-12 my-auto">
          <h3>{title}</h3>
          <p className="text-light">{text}</p>
        </div>
      </div>
    );
  };
  const productRTL = (images, title, text) => {
    return (
      <div className="container w-100 row">
        <div className="col-lg-6 col-md- col-sm-12 col-12 my-auto">
          <h3>{title}</h3>
          <p className="text-light">{text}</p>
        </div>

        <div className="col-lg-6 col-md-6 col-sm-12 col-12 my-auto">
          <img src={images} alt="test"></img>
        </div>
      </div>
    );
  };

  return (
    <div className="active-dark">
      <Helmet pageTitle="Republik Technology" />

      <HeaderThree
        className="mx-auto"
        homeLink="/"
        logo="symbol-dark"
        color="color-black"
      />

      <div
        className="position-absolute bg-success"
        style={{ height: '100vh', width: '100vw' }}
      ></div>
      <div id="home" className="fix">
        <div className="slider-wrapper">
          <SliderFive />
        </div>
      </div>
      {/* Start Slider Area   */}
      {/* <div id="home" className="fix">
                <div className="slider-wrapper"> */}
      {/* Start Single Slide */}
      {/* {SlideList.map((value , index) => (
                        <div className="slide personal-portfolio-slider slider-paralax slider-style-3 d-flex align-items-center justify-content-center bg_image bg_image--25" key={index}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className={`inner ${value.textPosition}`}>
                                            {value.category ? <span>{value.category}</span> : ''}
                                            <h1 className="title">Hi, I’m Jone Doe <br/>
                                            <TextLoop>
                                                <span> JS Developer.</span>
                                                <span> UI/UX Designer.</span>
                                                <span> Content Writter.</span>
                                            </TextLoop>{" "}
                                            </h1>
                                            <h2>based in USA.</h2>
                                            {value.description ? <p className="description">{value.description}</p> : ''}
                                            {value.buttonText ? <div className="slide-btn"><a className="rn-button-style--2 btn-primary-color" href={`${value.buttonLink}`}>{value.buttonText}</a></div> : ''}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))} */}
      {/* End Single Slide */}
      {/* </div>
            </div> */}
      {/* End Slider Area   */}

      {/* Start About Area */}
      {WhoWeAre()}
      {/* <div
        id="whoweare"
        className="fix"
        style={{
          background: `url(/assets/images/bgpage/WWDBG.png)`,
            backgroundSize: '100%',
        }}
      >
        <div className="about-area ptb--120" style={{ height: '90vh' }}>
          <div className="about-wrapper">
            <div className="container">
              <div className="row row--65 align-items-center">
                <div className="col-lg-5">
                  <div className="thumbnail">
                    <img
                      className="responsive bg-primary"
                      src="/assets/images/whoweare/2 army.jpg"
                      alt="Who We Are Images"
                    />
                  </div>
                </div>
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
      </div> */}

      {/* End About Area */}

      {/* Start Service Area  */}
      {/* <div id="service" className="fix">
                <div className="service-area creative-service-wrapper ptb--120 bg_color--5" >
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                                    <h2 className="title">My Awesome Service</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row creative-service">
                            <div className="col-lg-12">
                                <ServiceList item="6" column="col-lg-4 col-md-6 col-sm-6 col-12 text-left" />
                            </div>
                        </div>
                    </div>
                </div>  
            </div> */}
      {/* End Service Area  */}

      {/* Start Portfolio Area */}
      <div id="whatwedo" className="fix">
        <div
          className="portfolio-area ptb--120 bg_color--1"
          style={{ background: `url(/assets/images/bgpage/page3.jpg)` }}
        >
          <div className="portfolio-sacousel-inner">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
                    <h2 className="title">What We Do</h2>
                    {/* <hr class="mt-2 mb-3 mx-auto col-lg-4" /> */}
                    {/* <p class=" text-light">
                      Some of our business line in the field of weapons
                      technology
                    </p> */}
                  </div>
                </div>
              </div>
              <div className="row w-100 mx-auto mb--10 justify-content-center">
                <div
                  className="col-lg-4 col-md-12 col-sm-100 col-xs-20 p-3"
                  style={{
                    margin: '20px',
                    // borderRadius: 15,
                    // backgroundColor: 'rgba(55,55,55,0.65)',
                    // boxShadow: '5px 5px 5px #000000',
                  }}
                >
                  <h2 className="text-center">Land System</h2>
                  <p className="text-light">
                    Manufacturing ICCS system for the Indonesian Armed
                    Forces.Its Digital component system provides continuous and{' '}
                  </p>
                  {/* <ul className="text-light p-4">
                    <li>
                      <p>
                        Binoculars and Optical Instrument <br />
                        industry
                      </p>
                    </li>
                    <li>
                      <p>
                        Industrial Measuring Instruments <br />
                        and Electronic Testing Equipment
                      </p>
                    </li>
                  </ul> */}
                </div>
                <div
                  className="col-lg-4 col-md-12 col-sm-100 col-xs-20 p-3"
                  style={{
                    margin: '20px',
                    // borderRadius: 15,
                    // backgroundColor: 'rgba(55,55,55,0.65)',
                    // boxShadow: '5px 5px 5px #000000',
                  }}
                >
                  <h2 className="text-center">Aero System</h2>
                  <p className="text-light">
                    Manufacturing Technology designs for War simulation system,
                    manufactures data communications solutions for military,
                    government and industrial applications and Anti - Drones
                    that uses radio frequency disruption technology to
                    deactivate enemy drones. We are developing A.I based
                    solutions for Logistic, Operation Simulation, and War.
                  </p>
                  {/* <ul className="text-light p-4">
                    <li>
                      <p>Electronics Installation</p>
                    </li>
                    <li>
                      <p>Weapon and Amunition Industries</p>
                    </li>
                    <li>
                      <p>
                        Repair of Weapons and Ammunition <br />
                        Products
                      </p>
                    </li>
                  </ul> */}
                </div>
              </div>
              {/* <div className="row pt-10 pb-20">
                <div className="col-lg-12 col-md-4">
                  <div className="section-title text-center service-style--3 mt--30 mb_sm--0">
                    <h3 className="">Product Development</h3>
                    <h4 className="">IFAR 22 X 5.56"</h4>
                  </div>
                  <div className="d-block d-md-none">
                    <Carousel>
                      <Carousel.Item interval={1000}>
                        <div className="mx-auto col-xs-3" style={{}}>
                          <img
                            className="w-20"
                            style={{ borderRadius: 15 }}
                            src="/assets/images/whatwedo/ifar3.jpg"
                            alt="ifar3"
                          />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item interval={1000}>
                        <div className="mx-auto col-xs-3" style={{}}>
                          <img
                            className="w-20"
                            style={{ borderRadius: 15 }}
                            src="/assets/images/whatwedo/ifar2.jpg"
                            alt="ifar2"
                          />
                        </div>
                      </Carousel.Item>
                      <Carousel.Item interval={1000}>
                        <div className="mx-auto col-xs-3" style={{}}>
                          <img
                            className="w-20"
                            style={{ borderRadius: 15 }}
                            src="/assets/images/whatwedo/ifar1.jpg"
                            alt="ifar1"
                          />
                        </div>
                      </Carousel.Item>
                    </Carousel>
                  </div>
                  <div className="row justify-content-sm-between mx-auto">
                    <div
                      className="mx-auto col-lg-3 hidden-xs hidden-sm d-none d-lg-block"
                      style={{}}
                    >
                      <img
                        className="w-20"
                        style={{ borderRadius: 15 }}
                        src="/assets/images/whatwedo/ifar3.jpg"
                        alt="ifar3"
                      />
                    </div>
                    <div
                      className="mx-auto col-lg-3 hidden-xs hidden-sm d-none d-lg-block"
                      style={{}}
                    >
                      <img
                        className="w-20"
                        style={{ borderRadius: 15 }}
                        src="/assets/images/whatwedo/ifar2.jpg"
                        alt="ifar2"
                      />
                    </div>
                    <div
                      className="mx-auto col-lg-3 hidden-xs hidden-sm d-none d-lg-block"
                      style={{}}
                    >
                      <img
                        className="w-20"
                        style={{ borderRadius: 15 }}
                        src="/assets/images/whatwedo/ifar1.jpg"
                        alt="ifar1"
                      />
                    </div>
                  </div>
                </div>
              </div> */}
              {/* <div className="row mx-auto mt--50 justify-content-center">
                <div className="col-lg-3">
                  <div className="align-content-sm-between col-lg-12">
                    <div className="col-sm-3 col-lg-12 d-flex justify-content-center">
                      <img
                        className="img-responsive"
                        src="assets/images/whatwedo/icon-13.png"
                        alt="icon-tank"
                      ></img>
                    </div>
                    <div className=" text-light col-lg-12 mt--30">
                      Manufacture, Assembly and Heavy Weapon Repair:
                    </div>
                    <ul className="mx-auto text-light col-lg-10">
                      <li>Canon</li>
                      <li>Rocket Launcher</li>
                      <li>Heavy Machine Gun</li>
                      <li>RCWS 7.62 &amp; 12.7 </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="align-content-sm-between col-lg-12">
                    <div className="col-sm-3 col-lg-12 d-flex justify-content-center">
                      <img
                        className="img-responsive"
                        src="assets/images/whatwedo/iconproduk-10.png"
                        alt="icon-pistol"
                      ></img>
                    </div>
                    <div className=" text-light col-lg-12 mt--30">
                      Manufacture, Assembly and Small Arms Repair:
                    </div>
                    <ul className="mx-auto text-light col-lg-10">
                      <li>Pistol</li>
                      <li>Assault Rifle</li>
                      <li>Sniper Rifle</li>
                      <li>DMR</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="align-content-sm-between col-lg-12 px-auto">
                    <div className="col-sm-3 col-lg-12 d-flex justify-content-center">
                      <img
                        className=""
                        src="assets/images/whatwedo/icon-12.png"
                        alt="icon-grenade"
                      ></img>
                    </div>
                    <div className=" text-light col-lg-12 mt--30">
                      Explosive Manufacture:
                    </div>
                    <br />
                    <ul className="mx-auto text-light col-lg-10">
                      <li>Granade Launcher</li>
                      <li>Manpads</li>
                      <li>RCWS Cal. 20mm</li>
                      <li>Rocket Launcher</li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-3">
                  <div className="align-content-sm-between col-lg-12">
                    <div className="col-sm-3 col-lg-12 d-flex justify-content-center">
                      <img
                        className=""
                        src="assets/images/whatwedo/icon-11.png"
                        alt="icon-rifle"
                      ></img>
                    </div>
                    <div className=" text-light col-lg-12 mt--30">
                      <h0>Weapon and Amunition Manufacture for:</h0>
                    </div>
                    <ul className="mx-auto text-light col-lg-10">
                      <li>Hunting</li>
                      <li>Sport</li>
                      <li>Self Defence</li>
                      <li>
                        Law Enforcement
                        <br />
                        Defence
                      </li>
                    </ul>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
      {/* End Portfolio Area */}

      <div id="products" className="fix">
        <div className=" rn-blog-area ptb--120 bg-dark mb-dec--30">
          <div className="container">
            <div className="section-title text-center service-style--3 mb--30 mb_sm--0">
              <h2 className="title">PRODUCTS</h2>
              <h2 className="text-center">ICCS</h2>
            </div>
            <h4 className="text-center">
              CCS is indeed a step ahead in terms of shipboard communications
              management,
              <br /> supporting high-level concepts such as COMPLAND and
              on-board training facilities
            </h4>
            {productLTR(
              'assets/images/products/luger3.jpg',
              'Commander Tablet',
              'All-in-one wearable computing unit that enables the tablet to provide the dismounted soldier with complete situational awareness through net-centric integrated information systems. application provides real-time situational awareness with automatic dissemination of geography and location based on hierarchy. BMS enables enhancement C2 capabilities for all members of the platoon, including Blue Force Tracking, enemy (red) tracking, mission planning, navigation, terrain analysis and 3D visualization. The system can be integrated with multiple communications networks, including the battle management system. ',
            )}
            {productRTL(
              'assets/images/products/luger3.jpg',
              'Smart WristView',
              'Compact. low-powered, rugged wrist-strapped C2 display, providing warrios with a quick and convenient view of operational data in combat situations without altering weapons hold.',
            )}
            {productLTR(
              'assets/images/products/luger3.jpg',
              'SmartSight',
              'Add-on to most existing day and night weapon sights, projecting see-through AR symbology, laser rangefinder data and a compass onto the soldiers weapon sight, greatly improving taget acquisition capabilities and combat effectiveness.',
            )}
            {/* <div className="row align-items-start">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <h1 className="text-dark">PRODUCTS</h1>
                <hr class="mt-2 mb-3 col-lg-7" />
                <h3 className="text-dark">
                  Some examples of developments carried out by our R&amp;D Team.
                </h3>
                <div className="text-dark pt-10">
                  {products.map((words, index) => {
                    return tabsComponent(words, index);
                  })}
                </div>
              </div>

              {selectedProduct === 0 ? productWording() : ''}
            </div>
            {scrolling ? productImages() : ''} */}
          </div>
        </div>
      </div>

      <div
        className="fix"
        style={{ background: `url(/assets/images/workshop/bg_workshop3.jpg)` }}
      >
        {/* <div id="workshop" className="rn-blog-area pt--120 mb-dec--5">
          <div className="container mb--0">
            <div className="row align-items-start">
              <div className="col-sm">
                <h1 className="text-light">WORKSHOP</h1>
                <hr class="col-lg-4" />
              </div>
            </div>
          </div>

          <div className="portfolio-area pb--10 mh-12">
            <div className="portfolio-sacousel-inner mb--55">
              <Portfolio />
            </div>
          </div>
        </div> */}
        <div id="partner" className="rn-blog-area ptb--100">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12 mx-auto">
                <h1 className="text-light text-center">Partners</h1>
                <hr class="mb-3 mx-auto col-lg-4" />
              </div>
            </div>
            <div className="row pb--120 mb--100">
              <div className="mx-auto col-lg-5 col-sm-12 mt--140">
                <img
                  className="w-20 rounded"
                  src="/assets/images/partners/ex-army-02.png"
                  alt="ak"
                />
              </div>
              <div className="mx-auto col-lg-5 col-sm-12 mt--140">
                <img
                  className="w-20 rounded"
                  src="/assets/images/partners/excaliburw.png"
                  alt="ak3"
                />
              </div>
            </div>
            <div id="contactus" className="row align-items-start ptb--180">
              <div className="col-lg-6 col-md-12 col-sm-12 col-12">
                <img
                  src="/assets/images/logo/armamen2.png"
                  alt="logo"
                  style={{ maxWidth: '200px' }}
                  className="mb-4"
                ></img>
                <p className="text-light">
                  RPX Building 9Th Floor, Ciputat Raya No. 99,
                  <br />
                  South Jakarta, Indonesia, 12310
                  <br />
                  +62 21 75 918 007
                  <br />
                  info@republikarmamen.com
                </p>
              </div>
            </div>
          </div>
          <div className="container text-light">
            © 2021 Republik Armamen. Trademarks and brands are the property of
            their respective owners.
          </div>
        </div>
      </div>

      {/* Start Blog Area */}
      {/* <div id="blog" className="fix">
                <div className="rn-blog-area ptb--120 bg_color--5 mb-dec--30">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
                                <div className="section-title text-center">
                                    <h2>Latest News</h2>
                                    <p>There are many variations of passages of Lorem Ipsum available, <br />but the majority have suffered alteration.</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt--60 mt_sm--40">
                            {PostList.map((value , i ) => (
                                <div className="col-lg-4 col-md-6 col-12" key={i}>
                                    <div className="blog blog-style--1">
                                        <div className="thumbnail">
                                            <a href="/blog-details">
                                                <img className="w-100" src={`/assets/images/blog/blog-${value.images}.jpg`} alt="Blog Images"/>
                                            </a>
                                        </div>
                                        <div className="content">
                                            <p className="blogtype">{value.category}</p>
                                            <h4 className="title"><a href="/blog-details">{value.title}</a></h4>
                                            <div className="blog-btn">
                                                <a className="rn-btn text-white" href="/blog-details">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>    
                    </div>    
                </div>
            </div> */}
      {/* End Blog Area */}

      {/* Start COntact Area */}
      {/* <div id="contact" className="fix">
                <div className="rn-contact-area ptb--120 bg_color--1">
                    <ContactThree contactImages="/assets/images/about/about-9.jpg" contactTitle="Hire Me." />
                </div>
            </div> */}
      {/* End COntact Area */}

      {/* <FooterTwo /> */}
      {/* Start Back To Top */}
      <div className="backto-top">
        <ScrollToTop showUnder={160}>
          <FiChevronUp />
        </ScrollToTop>
      </div>
      {/* End Back To Top */}
    </div>
  );
};

export default MainPage;
