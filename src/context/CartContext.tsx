import { createContext, useState, useCallback, useMemo } from "react";

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

  const addProduct = useCallback((product: Product) => {
    setProducts([...products, product]);
  }, []);

  const removeProduct = useCallback((id: number) => {
    setProducts(products.filter((product) => product.id !== id));
  }, []);

  const context = useMemo(() => {
    return {
      products: products,
      numberOfProducts: products.length,
      addProduct: addProduct,
      removeProduct: removeProduct,
    };
  }, [products, addProduct, removeProduct]);

  return (
    <CartContext.Provider value={context}>{children}</CartContext.Provider>
  );
};
