import React from 'react';
import Slider from 'react-slick';
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
    title: ' Woyoooo',
  },
  {
    image: 'image-2',
    category: 'Development',
    title: ' Getting tickets to the big show',
  },
  {
    image: 'image-3',
    category: 'Development',
    title: ' Getting tickets to the big show',
  },
  {
    image: 'image-4',
    category: 'Development',
    title: ' Getting tickets to the big show',
  },
  {
    image: 'image-3',
    category: 'Development',
    title: ' Getting tickets to the big show',
  },
  {
    image: 'image-4',
    category: 'Development',
    title: ' Getting tickets to the big show',
  },
];

const Products = () => {
  const slider = React.useRef(null);
  return (
    <div id="assets">
      <div
        className="row justify-content-center"
        style={{
          background: `url(/assets/images/bgpage/bgassets.jpg)`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPositionX: 'center',
          height: '100vh',
        }}
      >
        <div className="col-lg-12 align-self-center mx-auto">
          <h2 className="text-dark text-center">Our Assets</h2>
          <div className="container">
            <div className="row mtb--100 justify-content-between">
              <h1
                onClick={() => slider.current.slickPrev()}
                className=" arrow col-lg-2 flex text-center align-self-center"
              >{`<`}</h1>
              <div className="col-lg-8">
                <div className="portfolio-slick-activation mt_sm--40">
                  <Slider ref={slider} {...portfolioSlick2}>
                    {PortfolioList.map((value, index) => (
                      <div className="portfolio" key={index}>
                        <div className="thumbnail-inner">
                          <div className={`thumbnail ${value.image}`}></div>

                          <div className={`bg-blr-image ${value.image}`}></div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              <h1
                style={{ userSelect: 'none' }}
                onClick={() => slider.current.slickNext()}
                className=" arrow col-lg-2 text-center align-self-center"
              >{`>`}</h1>
              {/* <ProductPage
                images={'product-01.png'}
                label={'Assets Management'}
              />
              <ProductPage
                images={'product-02.png'}
                label={'Investment Banking'}
              />
              <ProductPage images={'product-03.png'} label={'Corporate M&A'} /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const portfolioSlick2 = {
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 993,
      settings: {
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 481,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
};

export default Products;
