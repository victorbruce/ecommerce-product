import ProductImage1 from "/images/image-product-1.jpg";
import ProductThumbnail1 from "/images/image-product-1-thumbnail.jpg";
import ProductThumbnail2 from "/images/image-product-2-thumbnail.jpg";
import ProductThumbnail3 from "/images/image-product-3-thumbnail.jpg";
import ProductThumbnail4 from "/images/image-product-4-thumbnail.jpg";

export default function App() {
  return (
    <div className="lg:py-24 flex flex-col lg:flex-row gap-8 items-center">
      <div className="flex-1">
        <div className="w-full lg:w-[450px] mx-auto">
          <img
            className="object-contain text-center lg:rounded-lg"
            src={ProductImage1}
            alt=""
          />
          <div className="hidden lg:flex justify-between mt-8">
            <img
              className="w-24 rounded-lg object-contain"
              src={ProductThumbnail1}
              alt=""
            />
            <img
              className="w-24 rounded-lg object-contain"
              src={ProductThumbnail2}
              alt=""
            />
            <img
              className="w-24 rounded-lg object-contain"
              src={ProductThumbnail3}
              alt=""
            />
            <img
              className="w-24 rounded-lg object-contain"
              src={ProductThumbnail4}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex-1 mb-6 px-4">
        <div className="max-w-md">
          <p className="uppercase text-xs tracking-[2px] font-bold text-orange mb-4">
            Sneaker Company
          </p>
          <h1 className="text-3xl lg:text-5xl font-bold mb-6">
            Fall Limited Edition Sneakers
          </h1>
          <p className="max-w-md text-darkGrayishBlue mb-6 text-sm">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they&apos;ll withstand
            everything the weather can offer.
          </p>
          <div className="mb-8 flex lg:flex-col items-center lg:justify-start justify-between lg:items-start">
            <span className="flex gap-4 items-center mb-2">
              <p className="text-3xl font-bold">$125.00</p>
              <span className="text-orange bg-paleOrange font-bold p-1 text-sm">
                50%
              </span>
            </span>
            <p className="text-sm text-grayishBlue line-through">$250.00</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-4">
            <div className="flex-1 flex justify-between bg-lightGrayishBlue rounded-lg">
              <button className="flex-1 px-4 py-2  text-orange font-bold">
                -
              </button>
              <button className="flex-1 px-4 py-4 text-veryDarkBlue font-bold">
                0
              </button>
              <button className="flex-1 px-4 py-4 text-orange font-bold">
                +
              </button>
            </div>
            <div className="">
              <button className="flex-1 w-full text-white bg-orange px-8 py-4 rounded-md font-medium shadow-xl shadow-paleOrange flex items-center gap-2 justify-center">
                <img src="/images/icon-cart.svg" className="" alt="cart" /> Add
                to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
