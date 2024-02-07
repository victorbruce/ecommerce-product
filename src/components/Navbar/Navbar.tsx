import Logo from "/images/logo.svg";
import Avatar from "/images/image-avatar.png";
import IconCart from "/images/icon-cart.svg";
import styles from "./Navbar.module.css";

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
  return (
    <nav>
      <div className="container px-4 flex items-center justify-between py-6 border-b border-b-grayishBlue">
        <div className="flex gap-8">
          {/* Hamburger Menu */}
          <button className="lg:hidden">
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
          <img
            className="w-6 h-6 hover:cursor-pointer"
            src={IconCart}
            alt="cart"
          />
          <img
            className="w-12 border-2 border-transparent hover:cursor-pointer hover:border-2 hover:border-orange rounded-full hover:transition-colors duration-200"
            src={Avatar}
            alt="avatar"
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
