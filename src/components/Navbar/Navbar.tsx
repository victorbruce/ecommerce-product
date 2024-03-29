import Logo from "/images/logo.svg";
import Avatar from "/images/image-avatar.png";
import IconCart from "/images/icon-cart.svg";
import styles from "./Navbar.module.css";
import { useState } from "react";
import CartDropDown from "../Cart";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

interface Menu {
  id: number;
  linkName: string;
}

const menu: Menu[] = [
  { id: 1, linkName: "Collections" },
  { id: 2, linkName: "Men" },
  { id: 3, linkName: "Women" },
  { id: 4, linkName: "About" },
  { id: 5, linkName: "Contact" },
];

const Navbar = () => {
  const [isMobile, setMobile] = useState(false);
  const [isCart, setCart] = useState(false);
  const { numberOfProducts } = useContext(CartContext);

  return (
    <nav>
      <div className="container px-4 flex items-center justify-between py-6 border-b border-b-grayishBlue relative">
        <div className="flex gap-8">
          {/* Hamburger Menu */}
          <button onClick={() => setMobile(true)} className="lg:hidden">
            <img src="/images/icon-menu.svg" alt="" />
          </button>
          <div>
            <img className="hover:cursor-pointer" src={Logo} alt="app logo" />
          </div>
          <ul className="hidden lg:flex gap-6 text-darkGrayishBlue">
            {menu.map((menuItem) => (
              <li className={styles.menuItem} key={menuItem.id}>
                {menuItem.linkName}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex gap-8 items-center">
          <button className="relative" onClick={() => setCart(!isCart)}>
            <img
              className="w-6 h-6 hover:cursor-pointer"
              src={IconCart}
              alt="cart"
            />
            <span className="absolute -top-3 -right-2 bg-orange text-white py-[1px] px-2 rounded-full text-xs">
              {numberOfProducts}
            </span>
          </button>
          <img
            className="w-12 border-2 border-transparent hover:cursor-pointer hover:border-2 hover:border-orange rounded-full hover:transition-colors duration-200"
            src={Avatar}
            alt="avatar"
          />
        </div>
        {/* Cart Dropdown */}
        {isCart && <CartDropDown />}
        {/* Mobile Menu */}
        {isMobile && (
          <div className="">
            <div
              onClick={() => setMobile(false)}
              className="fixed top-0 right-0 left-0 bottom-0 bg-gray-900/50 z-[2]"
            />
            <div className="fixed top-0 left-0 bottom-0 w-[250px] bg-white z-[3]">
              <div className="py-8 px-4">
                <button onClick={() => setMobile(false)}>
                  <img src="/images/icon-close.svg" alt="close" />
                </button>
              </div>
              <ul className="px-4 flex flex-col gap-4 h-full font-bold">
                {menu.map((menuItem) => (
                  <li key={menuItem.id}>{menuItem.linkName}</li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
