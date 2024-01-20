import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./index.css";
import api from "../../services/api";

function Home() {
  const [movies, setMovies] = useState();
  const apiImg = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("/movie/now_playing", {
        params: {
          api_key: "6666729db4256cc76fad9e033bcf89ab",
          language: "pt-BR",
          page: 1,
        },
      });

      setMovies(response.data.results);
    }

    loadMovies();
  }, [movies]);
  return (
    <section>
      {movies &&
        movies.map((movie) => {
          return (
            <Movie
              id={movie.id}
              title={movie.title}
              img={apiImg + movie.backdrop_path}
              movie={movie}
            />
          );
        })}
    </section>
  );
}

export default Home;
