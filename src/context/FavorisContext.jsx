import { createContext, useState } from "react";

export const FavorisContext = createContext();

export function FavorisProvider({ children }) {
  const [favoris, setFavoris] = useState([]);

  const ajouterFavori = (serie) => {
    setFavoris((prev) => {
      const existe = prev.find((s) => s.id === serie.id);
      if (existe) return prev;
      return [...prev, serie];
    });
  };

  const retirerFavori = (id) => {
    setFavoris((prev) => prev.filter((s) => s.id !== id));
  };

  return (
    <FavorisContext.Provider value={{ favoris, ajouterFavori, retirerFavori }}>
      {children}
    </FavorisContext.Provider>
  );
}