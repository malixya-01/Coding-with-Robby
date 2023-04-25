import { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

function AddProduct() {
  const [createForm, setCreateForm] = useState({
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const fillCreateForm = (e) => {
    //retrieve values from the form input field
    const { name, value } = e.target;

    //updating the state
    setCreateForm({
      ...createForm,
      [name]: value,
    });
  };

  const createProduct = async (event) => {
    event.preventDefault();

    //Create the note
    const res = await axios.post("http://localhost:3000/additem", createForm);

    //Clear createForm state
    setCreateForm({ name: "", description: "", price: "", image: "" });
  };

  return (
    <div className="d-flex justify-content-center align-items-center flex-column  mt-5 mb-5  p-5 shadow-lg bg-white rounded  border border-dark  border-1"
    style={{width: "30%", margin: "auto auto", textAlign: "center"}}>
      <div className="">
        <h2 className="text-center">Create Product</h2>
        <Form onSubmit={createProduct}>
          <Form.Group>
            <Form.Control
              style={{ width: "100%", marginBottom: "1rem" }}
              name="name"
              placeholder="Enter name"
              value={createForm.name}
              onChange={fillCreateForm}
            />
            <Form.Control
              style={{ width: "100%", marginBottom: "1rem" }}
              name="description"
              placeholder="Enter description"
              value={createForm.description}
              onChange={fillCreateForm}
            />
            <Form.Control
              style={{ width: "100%", marginBottom: "1rem" }}
              name="price"
              placeholder="Enter price"
              value={createForm.price}
              onChange={fillCreateForm}
            />
            <Form.Control
              style={{ width: "100%", marginBottom: "1rem" }}
              type="file"
                name="image"   
                value={createForm.image}
              onChange={fillCreateForm}
            />
            <Button 
            style={{ width: "50%", marginBottom: "1rem"}}
            type="submit" className="btn btn-success">

              Create Product
            </Button>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
}
export default AddProduct;
