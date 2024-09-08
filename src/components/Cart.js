import React from 'react'
import { useSelector , useDispatch} from 'react-redux'
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from '../Store/cartSlice';

const Cart = () => {
   const dispatch = useDispatch();
  const products = useSelector(state => state.cart)

  const removeCart = (id) => {
    dispatch(remove(id))
  }

  const cards = products.map((product) => {
    return (
      <div className="col-md-6">
        <Card key={product.id} style={{ width: "18rem" }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.price}</Card.Text>
            <Button variant="danger" onClick={()=>removeCart(product.id)}>
              Remove Item
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  return (
    <div className='row'>
      {cards}
    </div>
  )
}

export default Cart