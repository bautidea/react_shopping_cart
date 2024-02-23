import { ReactNode, createContext, useContext } from 'react';

// Types.
type ShoppingCartProviderProps = {
  children: ReactNode;
};

// Constants.
const ShoppingCartContext = createContext({});

// Function for using Context.
// Context lets the parent component make some information available to any
// component in the tree below it, without passing it through props.
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// This function is used in App.tsx, this would be the parent component.
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
