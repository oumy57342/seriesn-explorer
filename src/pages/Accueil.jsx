import { useState } from "react";
import series from "../data/series.json";
import SerieCard from "../components/SerieCard";
import FilterBar from "../components/FilterBar";

export default function Accueil() {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("Tous");
  const [chaine, setChaine] = useState("Toutes");

  const filteredSeries = series.filter((serie) => {
    const matchSearch = serie.titre
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchGenre =
      genre === "Tous" || serie.genre.includes(genre);

    const matchChaine =
      chaine === "Toutes" || serie.chaine === chaine;

    return matchSearch && matchGenre && matchChaine;
  });

  return (
    <div>
      <h1>MES SÉRIES</h1>

      {/* 🎛️ FILTER BAR */}
      <FilterBar
        search={search}
        setSearch={setSearch}
        genre={genre}
        setGenre={setGenre}
        chaine={chaine}
        setChaine={setChaine}
      />

      {/* 📊 RESULTATS */}
      <p>{filteredSeries.length} séries trouvées</p>

      {/* 📺 LISTE EN GRILLE (6 PAR LIGNE) */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gap: "15px",
        }}
      >
        {filteredSeries.map((serie) => (
          <SerieCard key={serie.id} serie={serie} />
        ))}
      </div>
    </div>
  );
}