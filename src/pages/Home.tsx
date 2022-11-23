import storeItems from "../data/items.json"
import {Row, Col, Button} from "react-bootstrap"
import { Link } from "react-router-dom"

export function Home() {
  return(
    <>
      <h1>Fur friends to bring you luck</h1>
      <h6>Bring the home today by checking out the store</h6>
      <Row lg={2} md={2} xs={1} className="g-3">
        {storeItems.map( item => (
          <Col key={item.id}>
            <div className="mt-2 ms-4 mb-4">
              <img src={item.imgUrl} style={{objectFit: "cover", height: "200px", width: "250px"}}/>
            </div>
          </Col>
        ))}
      </Row>
      <div className="d-flex text-align-center justify-content-center">
        <Link to="/store">
          <Button>Order now!</Button>
        </Link>
      </div>
    </>
  )
}
