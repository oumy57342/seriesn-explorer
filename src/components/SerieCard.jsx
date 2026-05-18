import { Link } from "react-router-dom";
import StarRating from "./StarRating";

export default function SerieCard({ serie }) {
  return (
    <div style={{ border: "1px solid gray", padding: "10px" }}>
      
      <Link to={`/serie/${serie.id}`}>
        <img src={serie.image} width="150" />
      </Link>

      <h2>{serie.titre}</h2>
      <p>{serie.chaine}</p>
      <p>{serie.genre.join(", ")}</p>
      <p>⭐ {serie.note}</p>
      <StarRating note={serie.note} />

      {serie.enCours && <p>🔴 En cours</p>}
    </div>
  );
}