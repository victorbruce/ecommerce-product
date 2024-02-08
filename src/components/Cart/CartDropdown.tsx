const CartDropDown = () => {
  return (
    <div className="bg-white w-full max-w-[350px] lg:w-[350px] rounded-lg absolute top-[100%] right-[50%] translate-x-[50%] lg:translate-x-0 lg:right-0  mt-6 lg:mt-0 lg:shadow-xl lg:shadow-grayishBlue z-[5]">
      <header className="py-4 border-b">
        <p className="font-bold text-md px-4 ">Cart</p>
      </header>
      <main className="flex flex-col justify-center text-center min-h-[160px] py-6">
        <p className="font-bold text-darkGrayishBlue">Your cart is empty.</p>
      </main>
    </div>
  );
};

export default CartDropDown;