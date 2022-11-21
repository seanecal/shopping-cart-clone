import { createContext, useContext, ReactNode } from "react";

const ShoppingCartContext = createContext({})

export function useShoopingCart(){
  return useContext(ShoppingCartContext)
}

type ShoppingCartProviderProps = {
  children: ReactNode
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps) {
  return (
  <ShoppingCartContext.Provider value={{}}>
    {children}
  </ShoppingCartContext.Provider>
)}
