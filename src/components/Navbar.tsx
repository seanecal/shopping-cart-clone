import { Button, Container, Nav, Navbar as NavbarBs } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useShoopingCart } from "../context/ShoppingCartContext"

export function Navbar() {
  const {openCart, closeCart, totalCount} = useShoopingCart()
  return(
  <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
    <Container>
      <Nav className="me-auto">
        <Nav.Link to="/" as={NavLink}>
          Home
        </Nav.Link>
        <Nav.Link to="/Store" as={NavLink}>
          Store
        </Nav.Link>
        <Nav.Link to="/About" as={NavLink}>
          About
        </Nav.Link>
      </Nav>
      <Button onClick={openCart} style={{
        width: "3rem",
        height: "3rem",
        position: "relative"}}
        variant="outline-primary"
        >
        <span style={{fontSize: "1.5rem"}}>🛒</span>
        <div className="rounded-circle bg-danger d-flex justify-content-center aligh-itmes-center"
        style={{ color:"white", width:"1.5rem", height:"1.5rem", position:"absolute", bottom:"-8px", right:"-8px"}}>
          {totalCount}
        </div>
      </Button>
    </Container>
  </NavbarBs>
  )
}
