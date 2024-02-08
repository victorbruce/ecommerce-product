import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartDropDown = () => {
  const { products, numberOfProducts, removeProduct } = useContext(CartContext);

  return (
    <div className="bg-white w-full max-w-[350px] lg:w-[350px] rounded-lg absolute top-[100%] right-[50%] translate-x-[50%] lg:translate-x-0 lg:right-0  mt-6 lg:mt-0 lg:shadow-xl lg:shadow-grayishBlue z-[5]">
      <header className="py-4 border-b">
        <p className="font-bold text-md px-4 ">Cart</p>
      </header>
      <main className="flex flex-col justify-center text-center min-h-[160px] py-6 px-4">
        {numberOfProducts === 0 && (
          <p className="font-bold text-darkGrayishBlue">Your cart is empty.</p>
        )}
        {products.map((product) => (
          <div key={product.id} className="flex flex-col gap-4">
            <div className="flex gap-4 items-center">
              <img
                className="w-12 h-12"
                src={product.image}
                alt={product.title}
              />
              <div className="text-sm text-darkGrayishBlue text-left">
                <p className="mb-2">{product.title}</p>
                <p>${product.price}</p>
              </div>
              <button onClick={() => removeProduct(product.id)}>
                <img src="/images/icon-delete.svg" alt="delete" />
              </button>
            </div>
            <button className="bg-orange text-white px-4 py-4 w-full font-medium rounded-lg">
              Checkout
            </button>
          </div>
        ))}
      </main>
    </div>
  );
};

export default CartDropDown;
