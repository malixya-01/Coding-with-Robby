import axios from "axios";
import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Modal from "react-bootstrap/Modal";
import { Prev } from "react-bootstrap/esm/PageItem";
import Col from 'react-bootstrap/Col';

import jsPDF from "jspdf";
import "jspdf-autotable";


function Product() {
  const navigate = useNavigate();
  const [product, setProduct] = useState([]);
  const [updatedPost, setUpdatedPost] = useState({});

  const[query,setQuery]=useState("");


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
    const columns = [
      "Title",
      "Price",
      "Discription",
    ];
    const rows = product.map(
      ({
        title,
        price,
        dis,
        
      }) => [
        title,
        price,
        dis,
        
      ]
    );
    doc.autoTable({
      head: [columns],
      body: rows,
    });

    doc.save("Applicants.pdf");
  
}

  return (
    <div style={{ width: "50%", textAlign: "center", margin: "auto auto" }}>
      <h1 style={{color:"white"}}>Product</h1>
      <div className="d-flex">
      <Button
        className="btn btn-secondary "
        style={{marginBottom: "1rem" }}
        variant="outline-dark"
        onClick={() => navigate(-1)}
      >
        
        BACK
      </Button>
      <br></br>
      <div className="">
      <Button 
      className="btn btn-secondary"
        style={{marginBottom: "1rem" }}
        variant="outline-dark"
        onClick={generateReport}
      >
        Repoart
      </Button>
      </div>
      </div>
      <input style={{marginBottom: "1rem"}}
      class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"
      onChange={(e)=>setQuery(e.target.value)}
      />

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update a PRODUCT</Modal.Title>
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
          <Button variant="primary" onClick={saveupdatePost}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      

      {product .filter(
                      (product) =>
                      product.title?.toLowerCase()
                         
                    .includes(query.toLowerCase()) 
                    )
      .map((item) => {
        return (
          <div
            key={item._id}
            style={{
              color: "white",
              backgroundColor:"#383838",
              border: "solid lightgray 1px ",
              borderRadius: "2px",
              marginBottom: "1rem",
              padding: "1rem",
            }}
          >
            <div className="row">
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
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Product;
