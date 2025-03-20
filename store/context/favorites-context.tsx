import React, { createContext, useContext, useState } from "react";

interface FavoritesType {
  ids: string[];
  addFavorites: (id: string) => void;
  removeFavorites: (id: string) => void;
}

interface ContextApiType{
    favorites:FavoritesType,
}

export const FavoritesContext = createContext<ContextApiType | null>(null);

export const FavoriteProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [favoritesIds, setFavoritesIds] = useState<string[]>([]);

  const addFavorites = (id: string) => {
    setFavoritesIds((favoritesId) => [...favoritesId, id]);
  };

  const removeFavorites = (id: string) => {
    setFavoritesIds((favoritesId) =>
      favoritesId.filter((mealsId) => mealsId !== id)
    );
  };

  const value: ContextApiType = {
    favorites: {
      ids: favoritesIds,
      addFavorites,
      removeFavorites,
    },
  };
  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};


export const useFavorite = ()=>{
  const favorite = useContext(FavoritesContext);
  if(!favorite){
    throw new Error('Favorites Context is not used')
  }
  return favorite
}