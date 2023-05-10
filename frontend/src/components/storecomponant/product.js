import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { Card } from "react-bootstrap";
import { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function DisplayProduct() {
  const [store, setStore] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:3000/getStoreItem")
      .then((res) => {
        console.log(res);
        setStore(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {store.map((item) => {
                return (  
                      <>
                      <div className="col mb-5">
              <img className="card-img-top mb-5 mb-md-0" src={item.image}/>
            </div>
            <div className="col mb-5">
              <h1 className="dislpay-5 fw-bolder">{item.title}</h1>
              <div className="fs-5 mb-5">
                <span className="text-decoration-line-through">Rs45.00</span>
                <span> Rs-{item.price}</span>
              </div>
              <p className="lead">
              {item.dis}
              </p>
              <div className="d-flex">
                <Button
                  className="btn btn-outline-dark flex-shrink-0"
                  type="button"
                >
                  <i className="bi-cart-fill me-1"></i>
                  Add to cart
                </Button>
              </div>
            </div>
                      </>
                );
            })} 
          </div>
        </div>
      </section>

      <div>
        <Card className="">
          <Card.Header style={{ backgroundColor: "#aeb0af" }}>
            Feedback
          </Card.Header>
          <Card.Body>
            <Form.Label className="mt-2">Comment</Form.Label>
            <Form.Control
              type="txt"
              id="Feedback"
              placeholder="Type your Comment..."
            />
            <div className="d-flex justify-content-end">
              <Button variant="primary" type="submit" className="mt-4">
                Submit
              </Button>
            </div>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
export default DisplayProduct;
