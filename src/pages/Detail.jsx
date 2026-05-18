import { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import seriesData from "../data/series.json";
import { FavorisContext } from "../context/FavorisContext";
import StarRating from "../components/StarRating";

export default function Detail() {
  const { id } = useParams();
  const [serie, setSerie] = useState(null);
  const [loading, setLoading] = useState(true);

  const { ajouterFavori, retirerFavori, favoris } =
    useContext(FavorisContext);

  useEffect(() => {
    setLoading(true);

    const found = seriesData.find((s) => s.id === Number(id));

    setTimeout(() => {
      setSerie(found);
      setLoading(false);
    }, 500);
  }, [id]);

  if (loading) return <h2>Chargement...</h2>;

  if (!serie) return <h2>Série introuvable ❌</h2>;

  const estFavori = favoris.find((f) => f.id === serie.id);

  return (
    <div>
      <Link to="/">⬅ Retour</Link>

      <h1>{serie.titre}</h1>

      <img src={serie.image} width="200" />

      <StarRating note={serie.note} />

      <p>{serie.synopsis}</p>
      <p>Chaine : {serie.chaine}</p>
      <p>Année : {serie.annee}</p>
      <p>Saisons : {serie.saisons}</p>
      <p>Acteurs : {serie.acteurs.join(", ")}</p>

      {estFavori ? (
        <button onClick={() => retirerFavori(serie.id)}>
          Retirer ❤️
        </button>
      ) : (
        <button onClick={() => ajouterFavori(serie)}>
          Ajouter ❤️
        </button>
      )}
    </div>
  );
}