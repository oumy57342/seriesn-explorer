import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "10px",
      borderBottom: "1px solid gray"
    }}>
      <h2>🎬 SerieSN Explorer</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <Link to="/">Accueil</Link>
        <Link to="/favoris">Favoris</Link>
      </div>
    </nav>
  );
}