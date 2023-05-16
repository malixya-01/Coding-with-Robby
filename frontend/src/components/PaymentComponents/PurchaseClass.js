import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

// toastify
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function PurchaseClass() {
  const [payment, setPayment] = useState({
    classId: useParams().id,
    slip: "",
  });

  const [errorMessage, setErrorMessage] = useState(null);

  // states to stre form data
  /* const [title, setTitle] = useState("");
  const [description, setDescription] = useState(""); */
  const [mobile, setMobile] = useState("");
  const [p_image, setP_image] = useState("");
  const [uploadProgress, setUploadProgress] = useState(0);

  const navigate = useNavigate();

  //handling image upload
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "rhknunql");
    // formData.append("public_id", "your_public_id");
    formData.append("api_key", process.env.REACT_APP_CLOUDINARY_API_KEY);

    const options = {
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        setUploadProgress(percentCompleted);
      },
    };

    axios
      .post(
        `https://api.cloudinary.com/v1_1/dmwplhbqw/image/upload`,
        formData,
        options
      )
      .then((response) => {
        setP_image(response.data.secure_url);
        setUploadProgress(0);
      })
      .catch((error) => {
        console.error(error);
        setUploadProgress(0);
      });
  };

  // dislpay error message with  toastify
  useEffect(() => {
    if (errorMessage) {
      toast.error(errorMessage, {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [errorMessage]);

  // notify function with toastify
  const notify = () =>
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_CENTER,
    });

  // check if all fields are filled, and send data to the database
  const handleClick = (event) => {
    event.preventDefault();

    // send data to the database
    // check if all fields are filled
    if (mobile === "") {
      // Set error message
      setErrorMessage("Please fill your mobile number.");
    } else if (mobile.length !== 10) {
      setErrorMessage("Please enter a valid mobile number.");
    } else if (p_image === "") {
      setErrorMessage("Please upload your slip.");
    } else {
      const res = axios
        .post("http://localhost:3000/uploadSlip", {
          /* title: title,
            dis: description, */
          mobile: mobile,
          classId: payment.classId,
          slip: p_image,
        })
        .then((res) => {
          notify("Success");
          console.log(res);
          navigate("/mypayments");
          //   navigate("/create/product");
        })
        .catch((err) => setErrorMessage(err.response.data.message));
    }

    // axios
    //   .post("/create", post)
    //   .then((res) => {
    //     notify();
    //     console.log(res);
    //     navigate("/create/product");
    //   })
    //   .catch((err) => console.log(err));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center flex-column mt-5 mb-5  p-5 shadow-lg bg-white rounded  border border-dark  border-3 "
      style={{
        color: "black",
        width: "30%",
        margin: "auto auto",
        textAlign: "center",
        backgroundImage: "linear-gradient()",
      }}
    >
      {/* mt-5 mb-5  p-5 shadow-lg bg-white rounded  border border-dark  border-3  border-3 border-dark */}
      <h3>Upload your slip</h3>
      <Form onSubmit={onclick}>
        <Form.Group>
          {/* <Form.Control
            name="title"
            placeholder="Product Title"
            required
            style={{ marginBottom: "1rem" }}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />

          <Form.Control
            name="dis"
            placeholder="Product Discription"
            required
            style={{ marginBottom: "1rem" }}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          */}

          <Form.Control
            name="mobile"
            type="number"
            placeholder="Enter mobile number"
            required
            style={{ marginBottom: "1rem" }}
            onChange={(e) => {
              setMobile(e.target.value);
            }}
          />

          <input
            type="file"
            className="form-control mb-3"
            onChange={handleImageChange}
          />
          {uploadProgress > 0 && <div>Uploading... {uploadProgress}%</div>}
        </Form.Group>
        <Button
          style={{ width: "100%", marginBottom: "1rem" }}
          variant="outline-success"
          onClick={handleClick}
          type="submit"
        >
          Upload
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
}

export default PurchaseClass;
