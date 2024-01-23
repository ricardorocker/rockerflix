import { useEffect, useState } from "react";
import "./favorites.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

function Favoritos() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@rockerflix");
    setMovies(JSON.parse(myList) || []);
  }, []);

  function removeMovie(id) {
    let filteredMovies = movies.filter((item) => {
      return item.id !== id;
    });

    setMovies(filteredMovies);
    localStorage.setItem("@rockerflix", JSON.stringify(filteredMovies));
    toast.success("Filme removido com sucesso!")
  }
  return (
    <div className="meus-filmes">
      <h1>Tela de Favoritos</h1>

      {movies.length === 0 && (
        <span>Voce não possui nenhum filme salvo :(</span>
      )}

      <ul>
        {movies.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>

              <div>
                <Link to={`/movie/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => removeMovie(item.id)}>Excluir</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Favoritos;
