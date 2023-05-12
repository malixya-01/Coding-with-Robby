import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Prev } from "react-bootstrap/esm/PageItem";
import Col from "react-bootstrap/Col";

import jsPDF from "jspdf";
import "jspdf-autotable";

function Product() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});

  const [query, setQuery] = useState("");

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/getitems")
      .then((res) => {
        console.log(res);
        setProduct(res.data.items);
      })
      .catch((err) => console.log(err));
  }, []);

  const deletePost = (id) => {
    axios
      .delete(`http://localhost:3000/deleteitem/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    window.location.reload();
  };

  const updatePost = (item) => {
    setUpdatedPost(item);
    handleShow();
  };

  const handleChnage = (event) => {
    const { name, value } = event.target;
    setUpdatedPost((Prev) => {
      return {
        ...Prev,
        [name]: value,
      };
    });
  };

  const saveupdatePost = () => {
    axios
      .put(`http://localhost:3000/updateitem/${updatedPost._id}`, updatedPost)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

    handleClose();
    window.location.reload();
  };

  const generateReport = () => {
    const doc = new jsPDF();
    const columns = ["Title", "Price", "Discription"];
    const rows = product.map(({ title, price, dis }) => [title, price, dis]);
    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save("Applicants.pdf");
  };

  return (
    <div style={{ width: "100%", textAlign: "center", margin: "auto auto" }}>
      <h1 style={{ color: "white" }}>Product</h1>
      <div className="d-flex d-flex justify-content-between">
        <Button
          className="btn btn-secondary "
          style={{ marginBottom: "1rem" }}
          variant="outline-dark"
          onClick={() => navigate("/create")}
        >
          Add product
        </Button>
        <br></br>
        <div className="">
          <Button
            className="btn btn-secondary"
            style={{ marginBottom: "1rem" }}
            variant="outline-dark"
            onClick={generateReport}
          >
            Repoart
          </Button>
        </div>
      </div>
      <input
        style={{ marginBottom: "1rem", width: "50%", margin: "auto auto" }}
        class="form-control mr-sm-2 mb-5"
        type="search"
        placeholder="Search"
        aria-label="Search"
        onChange={(e) => setQuery(e.target.value)}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:"black"}}>Update PRODUCT</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="title"
                name="title"
                value={updatedPost.title ? updatedPost.title : ""}
                onChange={handleChnage}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                name="dis"
                value={updatedPost.dis ? updatedPost.dis : ""}
                placeholder="discription"
                onChange={handleChnage}
              />
              <Form.Control
                style={{ marginBottom: "1rem" }}
                placeholder="price"
                name="price"
                value={updatedPost.price ? updatedPost.price : ""}
                onChange={handleChnage}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="btn btn-success" onClick={saveupdatePost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="d-flex flex-row containe gap-5">
      {product
        .filter((product) =>
          product.title
            ?.toLowerCase()

            .includes(query.toLowerCase())
        )
        .map((item) => {
          return (
            <div
              key={item._id}
              style={{
                color: "black",
                // backgroundColor: "",
                // border: "solid lightgray 1px ",
                borderRadius: "2px",
                // marginBottom: "1rem",
                // padding: "1rem",
              }}
            >
              
                <Card style={{ width: "18rem", backgroundColor: "#a5a7b2d6"}}>
                  <Card.Img style={{ width: "100%", height:"18rem"  }} variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.dis}</Card.Text>
                    <Card.Text style={{fontWeight:"700"}}>Rs-{item.price}</Card.Text>
                    <div className="d-flex d-flex justify-content-between">
                      <Button
                        variant="outline-info"
                        className=""
                        onClick={() => updatePost(item)}
                      >
                        UPDATE
                      </Button>
                      <Button
                        variant="outline-danger"
                        className=""
                        onClick={() => deletePost(item._id)}
                      >
                        DELETE
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              
              {/* <div className="row">
              <div className="col-xl-6 text-start">
                
                <img className="w-50 mh-50" src={item.image} alt=""  />
            
                <h2 className="">{item.title}</h2>
                <p>{item.dis}</p>
                <p>Rs{item.price}</p>
              </div>
              <div className="col-xl-6 d-flex flex-column align-items-end">
                <Button
                  variant="outline-info"
                  className="mb-2"
                  onClick={() => updatePost(item)}
                >
                  UPDATE
                </Button>
                <Button
                  onClick={() => deletePost(item._id)}
                  variant="outline-danger"
                >
                  DELETE
                </Button>
              </div>
            </div> */}
            </div>
          );
        })}
    </div>
    </div>
  );
}
export default Product;
