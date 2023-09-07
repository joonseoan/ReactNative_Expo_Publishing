import { createContext, FC, ReactNode, useState } from "react";

type FavoriteMealIds = string[];

interface FavoritesContextInitialValues {
  ids: FavoriteMealIds;
  addFavorite(id: string): void;
  removeFavorite(id: string): void;
}

export const FavoritesContext = createContext<FavoritesContextInitialValues>({
  // [IMPORTANT!!!]
  // initial value setup
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
});

function FavoritesContextProvider({ children }: { children: ReactNode }) {
  const [favoriteMealIds, setFavoriteMealIds] = useState<FavoriteMealIds>([]);
  
  function addFavorite(id: string) {
    setFavoriteMealIds((currentMealIds) => ([...currentMealIds, id]));
  }

  function removeFavorite(id: string) {
    setFavoriteMealIds((currentMealIds) => (currentMealIds.filter((_id) => _id !== id)));
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  };

  return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider