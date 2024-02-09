import { ImageSlider, PagingImageSlider } from "./components/Sliders";
import { CartContext } from "./context/CartContext";
import { CountContext } from "./context/CountContext";
import { useContext } from "react";

export default function App() {
  // const [count, setCount] = useState(0);
  const { addProduct } = useContext(CartContext);
  const { count, increment, decrement } = useContext(CountContext);

  return (
    <div className="lg:py-24 flex flex-col lg:flex-row gap-8 lg:items-center">
      <div className="flex-1">
        <div className="lg:w-[450px] mx-auto">
          {/* Desktop view Image Slider */}
          <div className="hidden lg:block">
            <PagingImageSlider />
          </div>
          {/* Mobile view Image Slider */}
          <div className="lg:hidden">
            <ImageSlider />
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
          <p className="max-w-md text-darkGrayishBlue mb-6 text-sm leading-8">
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
              <button
                disabled={count === 0}
                onClick={() => decrement()}
                className={`flex-1 px-4 py-2 cursor-${
                  count === 0 ? "not-allowed" : "pointer"
                }`}
              >
                <img
                  className="mx-auto"
                  src="/images/icon-minus.svg"
                  alt="minus"
                />
              </button>
              <div className="flex-1 px-4 py-4 text-veryDarkBlue font-bold text-center">
                {count}
              </div>
              <button onClick={() => increment() } className="flex-1 px-4 py-4">
                <img
                  className="mx-auto"
                  src="/images/icon-plus.svg"
                  alt="plus"
                />
              </button>
            </div>
            <div className="">
              <button
                onClick={() =>
                  addProduct({
                    id: 1,
                    image: "/images/image-product-1-thumbnail.jpg",
                    price: 125,
                    title: "Fall Limited Edition Sneakers",
                  })
                }
                className="flex-1 w-full text-white bg-orange px-8 py-4 rounded-md font-medium shadow-xl shadow-paleOrange flex items-center gap-2 justify-center"
              >
                <img
                  src="/images/icon-cart-white.svg"
                  className=""
                  alt="cart"
                />{" "}
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
