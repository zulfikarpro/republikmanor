import React, { useState, useEffect } from 'react';
import ScrollToTop from 'react-scroll-up';
import { FiChevronUp } from 'react-icons/fi';
import Helmet from '../component/common/Helmet';
// import TextLoop from 'react-text-loop';
import SliderFive from '../component/slider/SliderFive';
import HeaderThree from '../component/header/HeaderThree';
// import FooterTwo from '../component/footer/FooterTwo';
// import TabTwo from '../elements/tab/TabTwo';
// import ContactThree from '../elements/contact/ContactThree';
// import PortfolioList from '../elements/portfolio/PortfolioList';
// import ServiceList from '../elements/service/ServiceList';
import BlogContent from '../elements/blog/BlogContent';
// import HeaderFive from '../component/header/HeaderFive';
// import HeaderSix from '../component/header/HeaderSix';
// import SliderFour from '../component/slider/SliderFour';
// import Portfolio from '../component/HomeLayout/homeOne/Portfolio';
// import Carousel from 'react-bootstrap/Carousel';
import WhoWeAre from '../component/whoweare';
import Whatwedo from '../component/whatwedo';
import Products from '../component/products';
import { Container } from 'react-bootstrap';
// import ProductAi from '../component/productsai';
// import MobileSOC from '../component/mobileSoc';
// import AntiDrone from '../component/antidrone';
// import { Ai1 } from '../component/ai1';
// import { Ai2 } from '../component/ai2';
// import { Ai3 } from '../component/ai3';
// import { Ai4 } from '../component/ai4';

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

  return (
    <>
      <div
        className="position-absolute"
        style={{
          height: '100vh',
          width: '100vw',
          zIndex: -1,
          overflow: 'hidden',
        }}
      >
        <div className="position-fixed d-inline-block h-100 w-100">
          <div className="row justify-content-center bg-success">
            <video
              className="position-fixed d-inline-block videos"
              playsinline="playsinline"
              autoplay="autoplay"
              muted="muted"
              loop="loop"
              src="/assets/video/manor2.mp4"
              style={{ zIndex: -2 }}
            />
          </div>
        </div>
      </div>
      <div className="active-dark bg-transparent" style={{ zIndex: 100 }}>
        <Helmet pageTitle="Republik Manor" />

        <HeaderThree
          className="mx-auto"
          homeLink="/"
          logo="symbol-dark"
          color="color-black"
        />

        <div id="home">
          <SliderFive />
        </div>
        <WhoWeAre />
        <Whatwedo />
        <Products />
        <div
          className="groupComp"
          style={{
            background: `url(/assets/images/bgpage/bgmemberof.jpg)`,
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPositionX: 'center',
            height: '100vh',
          }}
        >
          {/* <Container className="h-100 container col align-items-center justify-content-between bg-primary"> */}
          <div
            className="container h-100"
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <h2 className="row text-dark text-center align-self-center">
              Member of
            </h2>
            <div className="row align-items-center">
              <img
                className="thumbnail bg-transparent mx-auto"
                src="/assets/images/logo/republikorp2.png"
                alt="republikorp"
                style={{ width: '80%' }}
              />
            </div>
          </div>
          {/* <h2 className="row text-dark text-center ">Member of</h2>
            <div className="row align-items-center">
              <img
                className="thumbnail bg-transparent mx-auto"
                src="/assets/images/logo/republikorp2.png"
                alt="republikorp"
                style={{ maxWidth: '60%' }}
              />
            </div> */}
          {/* </Container> */}
        </div>

        <div
          className="fix row align-items-end pb--50"
          style={{
            background: `url(assets/images/bgpage/bgcontact.jpg)`,
            backgroundSize: 'cover',
            height: '100vh',
          }}
        >
          <div id="contactus" className="container">
            <div className="col justify-content-center">
              <div className="row align-items-center">
                <img
                  src="/assets/images/logo/logo2.png"
                  alt="logo"
                  style={{ width: '80%' }}
                  className="mb-4 mx-auto"
                />
              </div>

              <p className="text-center" style={{ color: 'black' }}>
                RPX Building 9<sup>th</sup> Floor
                <br />
                Ciputat Raya No. 99
                <br />
                DKI Jakarta, Indonesia, 12310
                <br />
                +62 21 75 918 007 - info@republimanor.com
              </p>

              <div
                className="col-lg-12 col-md-12 col-sm-12 col-12 text-center footerText"
                style={{ color: 'black' }}
              >
                © 2022 Republik Manor. Trademarks and brands are the property of
                their respective owners.
              </div>
            </div>
          </div>
        </div>

        <div className="backto-top">
          <ScrollToTop showUnder={160}>
            <FiChevronUp />
          </ScrollToTop>
        </div>
        {/* End Back To Top */}
        <div
          className="flex"
          style={{ height: '80px', background: `rgba(0,40,40,08)` }}
        />
      </div>
    </>
  );
};

export default MainPage;
