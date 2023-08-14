import "./NotFound.css";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate()
  return (
     <div>
      <h1 style={{ textAlign: "center"}}>click on 404</h1>
      <section onClick={() => navigate(-1)} className="error-container">
      <span>4</span>
      <span>
        <span className="screen-reader-text">0</span>
      </span>
      <span>4</span>
    </section> 
     </div>   

  );
}

export default NotFound;
