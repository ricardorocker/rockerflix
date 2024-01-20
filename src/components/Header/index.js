import { Link } from "react-router-dom";
import "./index.css";

function Header() {
  return (
    <header>
      <div>
        <Link className="logo" to="/">
          Rocker Flix
        </Link>
      </div>
      <div>
        <Link className="favorites" to="/favorites">
          Meus filmes
        </Link>
      </div>
    </header>
  );
}

export default Header;
