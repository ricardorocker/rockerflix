import { useEffect, useState } from "react";
import Movie from "../../components/Movie";
import "./index.css";

function Home() {
  const [movies, setMovies] = useState();
  const apiImg = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    function loadMovie() {
      let url =
        "https://api.themoviedb.org/3/movie/now_playing?api_key=28fc232cc001c31e8a031f419d0a14ca&language=pt-BR";

      fetch(url)
        .then((res) => res.json())
        .then((json) => {
          console.log(movies);
          setMovies(json.results);
        });
    }

    loadMovie();
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
