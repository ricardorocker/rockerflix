import { useEffect, useState } from "react";
import "./favorites.css";
import { Link } from "react-router-dom";

function Favoritos() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@rockerflix");
    setMovies(JSON.parse(myList) || []);
  }, []);
  return (
    <div className="meus-filmes">
      <h1>Tela de Favoritos</h1>

      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link to={`/movie/${item.id}`}>Ver detalhes</Link>
                <button>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
