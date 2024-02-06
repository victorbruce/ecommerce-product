import ProductImage1 from "/images/image-product-1.jpg";
import ProductThumbnail1 from "/images/image-product-1-thumbnail.jpg";
import ProductThumbnail2 from "/images/image-product-2-thumbnail.jpg";
import ProductThumbnail3 from "/images/image-product-3-thumbnail.jpg";
import ProductThumbnail4 from "/images/image-product-4-thumbnail.jpg";

export default function App() {
  return (
    <div className="py-24 flex gap-8 items-center">
      <div className="flex-1">
        <div className="w-[450px] mx-auto">
          <img
            className="object-contain text-center rounded-lg"
            src={ProductImage1}
            alt=""
          />
          <div className="flex justify-between mt-8">
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
      <div className="flex-1">
        <p className="uppercase text-xs tracking-[2px] font-bold text-orange mb-4">
          Sneaker Company
        </p>
        <h1 className="text-5xl font-bold mb-6">
          Fall Limited Edition Sneakers
        </h1>
        <p className="max-w-md text-darkGrayishBlue mb-6 text-sm">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
        </p>
        <div className="mb-8">
          <span className="flex gap-4 items-center mb-2">
            <p className="text-3xl font-bold">$125.00</p>
            <span className="text-orange bg-paleOrange font-bold p-1 text-sm">
              50%
            </span>
          </span>
          <p className="text-sm text-grayishBlue">$250.00</p>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <button className="px-4 py-2 bg-lightGrayishBlue text-orange font-bold">
              -
            </button>
            <button className="px-4 py-2 bg-lightGrayishBlue text-veryDarkBlue font-bold">
              0
            </button>
            <button className="px-4 py-2 bg-lightGrayishBlue text-orange font-bold">
              +
            </button>
          </div>
          <button className="text-white bg-orange px-8 py-2 rounded-md font-medium shadow-lg shadow-paleOrange">
            Add to cart
          </button>
        </div>
      </div>
    </div>
    // <h1 className="text-paleOrange text-lg">
    //   Collections Men Women About Contact Sneaker Company Fall Limited Edition
    //   Sneakers These low-profile sneakers are your perfect casual wear
    //   companion. Featuring a durable rubber outer sole, they’ll withstand
    //   everything the weather can offer. $125.00 50% $250.00 0 Add to cart
    // </h1>
  );
}
