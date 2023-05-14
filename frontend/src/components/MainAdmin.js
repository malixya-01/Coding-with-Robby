import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

function Adminmain() {
  const navigate = useNavigate();
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Route your page </h1>
      <div className="d-flex justify-content-around mt-5">
        <Button type="button" className="btn btn-secondary btn-lg btn-block"
         style={{width:"25%"}}
         onClick={()=> navigate("allAdm")}>
          Admin Management
        </Button>
        <Button type="button" className="btn btn-secondary btn-lg btn-block"
         style={{width:"25%"}}
         onClick={()=>navigate("admin")}>
          Store Management
        </Button>
      </div>
      <div className="d-flex justify-content-around mt-5">
        <Button type="button" className="btn btn-secondary btn-lg btn-block" 
        style={{width:"25%"}}>
          Class Management
        </Button>
        <Button type="button" className="btn btn-secondary btn-lg btn-block"
         style={{width:"25%"}}
         onClick={()=>navigate("show")}>
          Video lesson Management
        </Button>
      </div>
      <div className="d-flex justify-content-around mt-5">
        <Button type="button" className="btn btn-secondary btn-lg btn-block" 
        style={{width:"25%"}}
        onClick={()=> navigate("allNotice")}>
            Notification Management
        </Button>
        <Button type="button" className="btn btn-secondary btn-lg btn-block"
         style={{width:"25%"}}>
          Student Management
        </Button>
       
      </div>
    </div>
  );
}
export default Adminmain;
