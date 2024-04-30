import { Link } from "react-router-dom";

export function ButtonAddcard() {
  return (
    <div className="button-container">
      <Link to="/">
        <button className="button button--add-card">ADD CARD</button>
      </Link>
    </div>
  );
}
