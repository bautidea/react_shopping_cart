import { ReactNode, createContext, useContext, useState } from 'react';

// Types.
type ShoppingCartProviderProps = {
  children: ReactNode;
};

type CartItem = {
  id: number;
  quantity: number;
};

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeQuantity: (id: number) => void;
};

// Constants.
const ShoppingCartContext = createContext({} as ShoppingCartContext);

// Function for using Context.
// Context lets the parent component make some information available to any
// component in the tree below it, without passing it through props.
export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}

// This function is used in App.tsx, this would be the parent component.
export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function getItemQuantity(id: number) {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  }

  function increaseQuantity(id: number) {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  }

  return (
    <ShoppingCartContext.Provider value={{ getItemQuantity, increaseQuantity }}>
      {children}
    </ShoppingCartContext.Provider>
  );
}
