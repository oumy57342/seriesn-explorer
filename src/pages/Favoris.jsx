import { useContext } from "react";
import { FavorisContext } from "../context/FavorisContext";
import SerieCard from "../components/SerieCard";

export default function Favoris() {
  const { favoris } = useContext(FavorisContext);

  if (favoris.length === 0) {
    return <h1>Aucun favori ❤️</h1>;
  }

  return (
    <div>
      <h1>Mes Favoris</h1>

      {favoris.map((serie) => (
        <SerieCard key={serie.id} serie={serie} />
      ))}
    </div>
  );
}