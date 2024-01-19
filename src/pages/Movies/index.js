import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Movies() {
  const { query } = useParams();

  useEffect(() => {
    console.log("01", query);
    // console.log("02", JSON.parse(movie));
  }, []);
  return (
    <div>
      <h1>Movie: {query && JSON.parse(query)}</h1>
    </div>
  );
}
export default Movies;
