import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import axios from "axios";

import { Row } from "react-bootstrap";

function Store() {
  const [store, setStore] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getitems")
      .then((res) => {
        console.log(res);
        setStore(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
     
      <div style={{ color: "Black" }} className="text-center">
        <hnavbar />
        <h1>Store</h1>
        <Row className="d-flex justify-content-center p-5">
          {store.map((item) => {
            return (
              <Card style={{ width: "18rem", marginRight:"1rem",marginBottom:"1rem"}}>
                <div style={{width:"%", height:"100%",marginTop:"1rem"}}>
                <Card.Img  variant="top" src={item.image} />
                </div>
                <Card.Body>
                  <div style={{ color: "black" }}>
                    <Card.Title className="">{item.title}</Card.Title>
                    <Card.Text>{item.dis}</Card.Text>
                    <Card.Text className="bg-warning border rounded p-2">
                      Rs-{item.price}
                    </Card.Text>
                    <Button variant="primary">Add to Cart</Button>
                  </div>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </div>
    </>
  );
}
export default Store;
