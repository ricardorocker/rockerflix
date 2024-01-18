import "./index.css";

function Movie({ id, title, img }) {
  return (
    <section>
      <div className="title">
        <span>{title}</span>
      </div>

      <div className="card">
        <img src={img} alt="" />
        <button className="view-movie">Acessar</button>
      </div>
    </section>
  );
}

export default Movie;
