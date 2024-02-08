import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface Product {
  id: number;
  image: string;
  title: string;
  quantity?: number;
  price: number;
}

interface ContextProps {
  products: Product[];
  numberOfProducts: number;
  addProduct?: (product: Product) => void;
  removeProduct?(id: number): void;
}

export const CartContext = createContext<ContextProps>({
  products: [],
  numberOfProducts: 0,
});

export const CartContextProvider = ({ children }: Props) => {
  const [products, setProducts] = useState<Product[]>([]);

  function addProduct(product: Product) {
    setProducts([...products, product]);
  }

  function removeProduct(id: number) {
    setProducts(products.filter((product) => product.id !== id));
  }

  const context = {
    products: products,
    numberOfProducts: products.length,
    addProduct: addProduct,
    removeProduct: removeProduct,
  };
  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
