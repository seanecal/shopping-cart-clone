import { createContext, useContext, ReactNode, useState } from "react";

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id:number) => void
}

type CartItems = {
  id: number
  quantity: number
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)

export function useShoopingCart(){
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({children}:ShoppingCartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItems[]>([])

  function getItemQuantity(id:number) {
    return cartItems.find(i => i.id === id)?.quantity || 0
  }

  function increaseCartQuantity(id:number) {
    setCartItems(selectedItems => {
      if (selectedItems.find(theItem => theItem.id === id) == null) {
        return [...selectedItems, {id, quantity: 1}]
      } else {
        return selectedItems.map(theItem => {
          if (theItem.id === id) {
            return {...theItem, quantity: theItem.quantity + 1 }
          }else {
            return theItem
          }
        })
      }
    })
  }

  function decreaseCartQuantity(id:number) {
    setCartItems(selectedItems => {
      if (selectedItems.find(theItem => theItem.id === id)?.quantity === 1) {
        return selectedItems.filter(theItem => theItem.id !== id)
      } else {
        return selectedItems.map(theItem => {
          if(theItem.id === id) {
            return {...theItem, quantity: theItem.quantity - 1}
          } else {
            return theItem
          }
        })
      }
    })
  }

  function removeFromCart(id:number) {
    setCartItems(selectedItems => {
      return selectedItems.filter(theItem => theItem.id !== id)
    })
  }

  return (
  <ShoppingCartContext.Provider value={{getItemQuantity,increaseCartQuantity, decreaseCartQuantity, removeFromCart}}>
    {children}
  </ShoppingCartContext.Provider>
)}
