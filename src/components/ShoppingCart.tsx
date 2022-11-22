import { Offcanvas, OffcanvasBody, OffcanvasHeader, OffcanvasTitle, Stack } from "react-bootstrap";
import { useShoopingCart } from "../context/ShoppingCartContext";
import { CartItem } from "./CartItem";

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
      </Stack>
    </OffcanvasBody>
  </Offcanvas>
}
