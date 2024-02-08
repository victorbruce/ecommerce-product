import Slider from "react-slick";
import "./slider.css";

const images = [
  "/images/image-product-1.jpg",
  "/images/image-product-2.jpg",
  "/images/image-product-3.jpg",
  "/images/image-product-4.jpg",
];

const PagingImageSlider = () => {
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
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image) => (
          <div>
            <img src={image} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PagingImageSlider;
