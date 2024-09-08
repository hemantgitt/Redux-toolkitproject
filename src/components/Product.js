import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { add } from "../Store/cartSlice";
import { getProducts } from "../Store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products , status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if(status === "Loading"){
    return <p>Loading....</p>
  }

  const addCart = (product) => {
    dispatch(add(product));
  };

  const cards = products.map((product) => {
    return (
      <div className="col-md-3">
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
            <Button variant="primary" onClick={() => addCart(product)}>
              Add to cart
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  });
  console.log(products);

  return (
    <div>
      <h1>Product Dashboard</h1>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
