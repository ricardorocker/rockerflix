import { Link } from "react-router-dom";
import "./index.css";

function Movie({ id, title, img }) {
  return (
    <section>
      <div className="title">
        <span>{title}</span>
      </div>

      <div className="card">
        <img src={img} alt="" />
        <Link to={`/movie/${id}`} className="view-movie">
          Acessar
        </Link>
      </div>
    </section>
  );
}

export default Movie;
