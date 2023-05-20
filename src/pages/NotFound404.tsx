import { useNavigate } from "react-router-dom";
import Img404 from "../assets/images/404.png";
import "../assets/styles/notFound.css";

export default function NotFound404() {
  const navigate = useNavigate();

  function goBack() {
    if (localStorage.getItem("username")) {
      navigate("/home");
    } else {
      navigate("/");
    }
  }
  return (
    <>
        <div className="content-container">
          <img src={Img404} height="25%" alt="404" width="20%" />
          <p className="fs-3">
            {" "}
            <span className="text-danger">Opps!</span> Page not found.
          </p>
          <p className="message">The page you’re looking for doesn’t exist.</p>

          <a
            onClick={() => {
              goBack();
            }}
            className="goBack"
          >
            Go Home
          </a>
        </div>
    </>
  );
}
