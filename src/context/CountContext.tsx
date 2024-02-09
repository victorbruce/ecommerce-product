import { createContext, useCallback, useMemo, useState } from "react";

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

  const increment = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  const decrement = useCallback(() => {
    setCount((count) => count - 1);
  }, []);

  const context = useMemo(
    () => ({
      count: count,
      increment,
      decrement,
    }),
    [count, increment, decrement]
  );

  return (
    <CountContext.Provider value={context}>{children}</CountContext.Provider>
  );
};
