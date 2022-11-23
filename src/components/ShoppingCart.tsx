import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoopingCart } from "../context/ShoppingCartContext";
import { formatCurrency } from "../utilities/formatCurrency";
import { CartItem } from "./CartItem";
import  storeItems from "../data/items.json";


type ShoppingCartProps = {
  isOpen: boolean
}
export function ShoppingCart({isOpen}:ShoppingCartProps) {
  const {cartItems, closeCart} = useShoopingCart()

  return <Offcanvas show={isOpen} onHide={closeCart} placement="end">
    <OffcanvasHeader closeButton>
      <OffcanvasTitle>Cart</OffcanvasTitle>
    </OffcanvasHeader>
    <OffcanvasBody>
      <Stack gap={3}>
        {cartItems.map(item => (<CartItem key={item.id} {...item} />))}
        <div className="ms-auto fw-bold fs-5">
          Total:
          {formatCurrency(cartItems.reduce((total, cartItem) => {
            const item = storeItems.find(i => i.id === cartItem.id)
            return item?.price || 0 * cartItem.quantity + total
          }, 0)
          )}
        </div>
      </Stack>
    </OffcanvasBody>
  </Offcanvas>
}
