import { Link } from "react-router-dom";
import "./index.css";

function Movie({ id, title, img, movie }) {
  return (
    <section>
      <div className="title">
        <span>{title}</span>
      </div>

      <div className="card">
        <img src={img} alt="" />
        <Link
          to={{
            pathname: `/movie/${id}`,
            query: { movie: JSON.stringify(movie) },
          }}
          className="view-movie"
        >
          Acessar
        </Link>
      </div>
    </section>
  );
}

export default Movie;
