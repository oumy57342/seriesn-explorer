export default function FilterBar({
  search,
  setSearch,
  genre,
  setGenre,
  chaine,
  setChaine,
}) {
  return (
    <div style={{ marginBottom: "20px" }}>
      
      {/* 🔍 SEARCH */}
      <input
        type="text"
        placeholder="Rechercher une série..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: "8px", marginRight: "10px" }}
      />

      {/* 🎛️ GENRE */}
      <select value={genre} onChange={(e) => setGenre(e.target.value)}>
        <option value="Tous">Tous</option>
        <option value="Drame">Drame</option>
        <option value="Romance">Romance</option>
        <option value="Comedie">Comedie</option>
        <option value="Famille">Famille</option>
      </select>

      {/* 🎛️ CHAÎNE */}
      <select
        value={chaine}
        onChange={(e) => setChaine(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="Toutes">Toutes les chaînes</option>
        <option value="RTS1">RTS1</option>
        <option value="TFM">TFM</option>
        <option value="2STV">2STV</option>
        <option value="RDV">RDV</option>
        <option value="Canal+">Canal+</option>
      </select>

    </div>
  );
}