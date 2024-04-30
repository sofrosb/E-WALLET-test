import "./style.css";
import { Link } from "react-router-dom";
export function ButtonHome() {
  return (
    <div className="button-container">
      <Link to="AddCard">
        <button className="button button--home">ADD A NEW CARD</button>
      </Link>
    </div>
  );
}
