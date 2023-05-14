import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { Row } from "react-bootstrap";

function Store() {
  const [store, setStore] = useState([]);
  const navigate = useNavigate();
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

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
    <>
      <div style={{ color: "Black" }} className="text-center">
        <hnavbar />
        <h1 style={{color:"white"}}>Store</h1>
        <Row className="d-flex justify-content-center p-5">
          {store.map((item) => {
            return (
              <Card
                style={{
                  width: "18rem",
                  marginRight: "1rem",
                  marginBottom: "1rem",
                }}
                onClick={() => navigate("")}
              >
                <div style={{ width: "%", height: "100%", marginTop: "1rem" }}>
                  <Card.Img variant="top" src={item.image} />
                </div>
                <Card.Body>
                  <div className="star-rating">
                    {[...Array(5)].map((star, index) => {
                      index += 1;
                      return (
                        <button
                          style={{
                            backgroundcolor: " transparent",
                            backgrounc: "transparent",
                            border: " none",
                            outline: " none",
                            cursor: "pointer",
                            color: index <= (hover || rating) ? "#000" : "#ccc",
                          }}
                          type="button"
                          key={index}
                          className={index <= (hover || rating) ? "on" : "off"}
                          onClick={() => setRating(index)}
                          onMouseEnter={() => setHover(index)}
                          onMouseLeave={() => setHover(rating)}
                        >
                          <span className="star">&#9733;</span>
                        </button>
                      );
                    })}
                  </div>

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
