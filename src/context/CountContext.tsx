import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ContextProps {
  count: number;
  increment: () => void;
  decrement: () => void;
}

export const CountContext = createContext<ContextProps>({
  count: 1,
  increment: () => {},
  decrement: () => {},
});

export const CountContextProvider = ({ children }: Props) => {
  const [count, setCount] = useState(1);

  function increment() {
    setCount((count) => count + 1);
  }

  function decrement() {
    setCount((count) => count - 1);
  }

  const context = {
    count: count,
    increment,
    decrement,
  };

  return (
    <CountContext.Provider value={context}>{children}</CountContext.Provider>
  );
};
