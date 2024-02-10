import Slider from "react-slick";
import "./slider.css";
import { useState } from "react";
import { createPortal } from "react-dom";

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

const PagingImageSlider = () => {
  const [showLightBox, setLightBox] = useState(false);

  const settings = {
    customPaging: function (i: number) {
      return (
        <a>
          <img
            className="rounded-lg object-cover overflow-hidden"
            src={`/images/image-product-${i + 1}-thumbnail.jpg`}
          />
        </a>
      );
    },
    arrows: false,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* {showLightBox && <LightBoxModal />} */}
      <div className="slider-container">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div className="rounded-lg" key={index}>
              <img
                onClick={() => {
                  setLightBox(true);
                }}
                className="rounded-lg"
                src={image}
                alt=""
              />
            </div>
          ))}
        </Slider>
        {showLightBox &&
          createPortal(
            <div className="fixed inset-0 bg-gray-900/70">
              <div className="max-w-lg absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
                <div className="w-full text-right">
                  <button onClick={() => setLightBox(false)}>
                    <svg
                      width="14"
                      height="15"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                        fill="#ff7d1a"
                        fill-rule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
                <Slider {...{ ...settings, ...{ arrows: true } }}>
                  {images.map((image, index) => (
                    <div className="rounded-lg" key={index}>
                      <img
                        onClick={() => {
                          setLightBox(true);
                        }}
                        className="rounded-lg"
                        src={image}
                        alt=""
                      />
                    </div>
                  ))}
                </Slider>
              </div>
            </div>,
            document.body
          )}
      </div>
    </>
  );
};

export default PagingImageSlider;

