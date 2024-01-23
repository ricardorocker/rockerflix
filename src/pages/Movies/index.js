import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import api from "../../services/api";

import "./filme-info.css";

function Movies() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [movie, setMovie] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadMovie() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "6666729db4256cc76fad9e033bcf89ab",
            language: "pt-BR",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          console.log("Filme não encontrado");
          navigate("/", { replace: true });
          return;
        });
    }

    loadMovie();

    return () => {
      console.log("Componente foi desmontado");
    };
  }, [navigate, id]);

  function saveMovie() {
    const myList = localStorage.getItem("@rockerflix");

    let savedMovies = JSON.parse(myList) || [];

    const hasMovie = savedMovies.some(
      (savedMovie) => savedMovie.id === movie.id
    );

    if (hasMovie) {
      alert("Esse filme já esta na lista");
      return;
    }

    savedMovies.push(movie);
    localStorage.setItem("@rockerflix", JSON.stringify(savedMovies));
    alert("Filme salvo com sucesso!");
  }

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando detalhes...</h1>
      </div>
    );
  }

  return (
    <div className="filme-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Sinopse</h3>
      <span>{movie.overview}</span>
      <strong>Avaliação: {movie.vote_average} /10</strong>

      <div className="area-buttons">
        <button onClick={saveMovie}>Salvar</button>
        <button>
          <a
            href={`https://youtube.com/results?search_query=${movie.title} Trailer`}
            target="_blank"
            rel="noreferrer"
          >
            Trailer
          </a>
        </button>
      </div>
    </div>
  );
}
export default Movies;
